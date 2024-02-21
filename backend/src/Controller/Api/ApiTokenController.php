<?php

namespace App\Controller\Api;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

class ApiTokenController extends AbstractController
{
    /**
     * @return JsonResponse
     */
    #[Route("/api/v1/check_token", name: "check_token_app", methods: "GET")]
    #[IsGranted('ROLE_USER')]
    public function checkToken(): JsonResponse
    {
        return new JsonResponse([
            'message' => 'token valid',
            'success' => true,
        ]);
    }
}