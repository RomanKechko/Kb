<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserFixtures extends Fixture
{
    /**
     * @var UserPasswordHasherInterface
     */
    private UserPasswordHasherInterface $passwordEncoder;

    /**
     * @param UserPasswordHasherInterface $passwordEncoder
     */
    public function __construct(
        UserPasswordHasherInterface $passwordEncoder
    ) {
        $this->passwordEncoder = $passwordEncoder;
    }

    /**
     * @param ObjectManager $manager
     * @return void
     */
    public function load(ObjectManager $manager): void
    {
        $user = new User();

        $user
            ->setPassword($this->passwordEncoder->hashPassword($user, 'root'))
            ->setEmail('root@root')
            ->setRoles(['ROLE_ROOT']);

        $manager->persist($user);

        $user = new User();

        $user
            ->setPassword($this->passwordEncoder->hashPassword($user, 'eG3Wa3DS731bg7</'))
            ->setEmail('example@gmail.com');

        $manager->persist($user);

        $manager->flush();
    }
}
