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
    #[Route("/api/v1/set_project", name: "set_project_app", methods: ["POST"])]
    #[IsGranted('ROLE_USER')]
    public function setProject(Request $request, ApiService $apiService): JsonResponse
    {
        $data = $request->request->all();

        $apiService->checkProjectData($data);
        $apiService->checkProjectFiles($_FILES);

        $project = $apiService->createProject($data);

        $apiService->uploadProjectFiles($_FILES, $project);

        return new JsonResponse([
            'success' => true,
            'message' => $project->getId(),
            'project' => $apiService->projectToJson($project, $request->getSchemeAndHttpHost()),
        ]);
    }

    /**
     * @param ApiService $apiService
     * @param Request $request
     * @return JsonResponse
     */
    #[Route("/api/v1/get_projects", name: "get_projects_app", methods: ["GET"])]
    public function getProjects(ApiService $apiService, Request $request): JsonResponse
    {
        $data = $apiService->getAllProjectLikeJson($request->getSchemeAndHttpHost());
        return new JsonResponse($data);
    }

    /**
     * @param Request $request
     * @param ApiService $apiService
     * @return JsonResponse
     */
    #[Route("/api/v1/del_project", name: "del_project_app", methods: ["POST"])]
    #[IsGranted('ROLE_USER')]
    public function delProject(Request $request, ApiService $apiService): JsonResponse
    {
        $id = $request->toArray()['id'];

        $apiService->delProject($id);

        return new JsonResponse([
            'success' => true,
            'message' => 'project deleted',
        ]);
    }
}
