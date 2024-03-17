<?php

namespace App\Service;

use App\Entity\File;
use App\Entity\Project;
use App\Repository\ProjectRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class ApiService
{
    /**
     * @var EntityManagerInterface
     */
    private EntityManagerInterface $em;
    /**
     * @var ProjectRepository
     */
    private ProjectRepository $projectRepository;

    /**
     * @param EntityManagerInterface $em
     * @param ProjectRepository $projectRepository
     */
    public function __construct(EntityManagerInterface $em, ProjectRepository $projectRepository)
    {
        $this->em = $em;
        $this->projectRepository = $projectRepository;
    }

    /**
     * @param array $data
     * @return void
     */
    public function checkProjectData(array $data): void
    {
        $requiredFields = ['name', 'price', 'deadline', 'complexity', 'description'];
        foreach ($requiredFields as $field) {
            if (!$data[$field]) {
                throw new BadRequestHttpException('missing field: '.$field);
            }
        }
    }

    /**
     * @param array $files
     * @return void
     */
    public function checkProjectFiles(array $files): void
    {
        $validFiles = [];
        $filesToCheck = ['image_1', 'image_2', 'image_3', 'video', 'pdf', 'gif', 'gif-image', 'word'];

        foreach ($filesToCheck as $file) {
            if (isset($files[$file]) && $files[$file]['size'] > 0) {
                $validFiles[] = $file;
            }
        }

        if (count($validFiles) === 0) {
            throw new BadRequestHttpException('require at lest one file');
        }

        if ((isset($files['gif']) && isset($files['gif-image'])) && !$files['gif']['size'] !== !$files['gif-image']['size']) {
            throw new BadRequestHttpException('gif require gif-image/gif-image require gif');
        }
    }

    /**
     * @param array $data
     * @param string $projectName
     * @return Project
     */
    public function createProject(array $data, string $projectName): Project
    {
        $project = new Project;

        $project
            ->setName($data['name'])
            ->setComplexity($data['complexity'])
            ->setPrice($data['price'])
            ->setDeadline($data['deadline'])
            ->setDescription($data['description'])
            ->setUrlName($projectName);

        $this->em->persist($project);
        $this->em->flush();

        return $project;
    }

    public function createFile(string $type, string $url, Project $project): File
    {
        $file = new File;

        $file
            ->setType($type)
            ->setUrl($url)
            ->setProject($project);

        $this->em->persist($file);

        return $file;
    }

    /**
     * @param array $files
     * @param string $projectName
     * @param Project $project
     * @return void
     */
    public function uploadProjectFiles(array $files, string $projectName, Project $project): void
    {
        $folder = 'api/v1/projects/';
        mkdir($folder.$projectName);

        foreach ($files as $type => $file) {
            if ($file['size'] > 0) {
                $name = pathinfo($file['name'])['filename'].uniqid().'.'.pathinfo($file['name'])['extension'];
                $url = $folder.$projectName.'/'.str_replace(' ', '_', $name);
                move_uploaded_file(
                    $file['tmp_name'],
                    $url
                );
                $this->createFile($type, $url, $project);
            }
        }
        $this->em->flush();
    }

    /**
     * @param Project $project
     * @return array
     */
    public function projectToJson(Project $project): array
    {
        $json = [];

        $json['id'] = $project->getId();
        $json['_id'] = $project->getUrlName();
        $json['name'] = $project->getName();
        $json['price'] = $project->getPrice();
        $json['deadline'] = $project->getDeadline();
        $json['complexity'] = $project->getComplexity();
        $json['description'] = $project->getDescription();

        $images = [];

        foreach ($project->getFiles() as $file) {
            $images[$file->getType()] = $_SERVER['HTTP_HOST'].'/'.$file->getUrl();
        }

        $json['images'] = $images;

        return $json;
    }

    /**
     * @return array
     */
    public function getAllProjectLikeJson(): array
    {
        $data = [];
        $projects = $this->projectRepository->findAll();

        foreach ($projects as $project) {
            $data[] = $this->projectToJson($project);
        }

        return $data;
    }
}