<?php

namespace App\Controller\Api;

use App\Service\ApiService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

class ApiController extends AbstractController
{
    /**
     * @param Request $request
     * @param ApiService $apiService
     * @return JsonResponse
     */
    #[Route("/api/v1/set_project", name: "set_project_app", methods: ["GET", "POST"])]
    #[IsGranted('ROLE_USER')]
    public function setProject(Request $request, ApiService $apiService): JsonResponse
    {
        $data = $request->request->all();

        $apiService->checkProjectData($data);
        $apiService->checkProjectFiles($_FILES);

        $projectName = filter_var($data['name'], FILTER_SANITIZE_URL).uniqid();

        $project = $apiService->createProject($data, $projectName);

        $apiService->uploadProjectFiles($_FILES, $projectName, $project);

        return new JsonResponse([
            'success' => true,
            'message' => $project->getId(),
        ]);
    }
    /**
     * @param ApiService $apiService
     * @return JsonResponse
     */
    #[Route("/api/v1/get_projects", name: "get_projects_app", methods: ["GET"])]
    #[IsGranted('ROLE_USER')]
    public function getProjects(ApiService $apiService): JsonResponse
    {
        $data = $apiService->getAllProjectLikeJson();
        return new JsonResponse($data);
    }
}
