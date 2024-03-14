<?php

namespace App\Entity;

use App\Repository\ProjectRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ProjectRepository::class)]
class Project
{
    /**
     * @var int
     */
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private int $id;

    /**
     * @var string
     */
    #[ORM\Column(length: 255)]
    private string $name;

    /**
     * @var string
     */
    #[ORM\Column(length: 255)]
    private string $price;

    /**
     * @var string
     */
    #[ORM\Column(length: 255)]
    private string $deadline;

    /**
     * @var string
     */
    #[ORM\Column(length: 255)]
    private string $complexity;

    /**
     * @var string
     */
    #[ORM\Column(type: Types::TEXT)]
    private string $description;

    /**
     * @var string
     */
    #[ORM\Column(length: 255)]
    private string $urlName;

    /**
     * @var Collection
     */
    #[ORM\OneToMany(mappedBy: 'project', targetEntity: File::class)]
    private Collection $files;

    public function __construct()
    {
        $this->files = new ArrayCollection();
    }

    /**
     * @return int
     */
    public function getId(): int
    {
        return $this->id;
    }

    /**
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * @param string $name
     * @return $this
     */
    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return string
     */
    public function getPrice(): string
    {
        return $this->price;
    }

    /**
     * @param string $price
     * @return $this
     */
    public function setPrice(string $price): static
    {
        $this->price = $price;

        return $this;
    }

    /**
     * @return string
     */
    public function getDeadline(): string
    {
        return $this->deadline;
    }

    /**
     * @param string $deadline
     * @return $this
     */
    public function setDeadline(string $deadline): static
    {
        $this->deadline = $deadline;

        return $this;
    }

    /**
     * @return string
     */
    public function getComplexity(): string
    {
        return $this->complexity;
    }

    /**
     * @param string $complexity
     * @return $this
     */
    public function setComplexity(string $complexity): static
    {
        $this->complexity = $complexity;

        return $this;
    }

    /**
     * @return string
     */
    public function getDescription(): string
    {
        return $this->description;
    }

    /**
     * @param string $description
     * @return $this
     */
    public function setDescription(string $description): static
    {
        $this->description = $description;

        return $this;
    }

    /**
     * @return string
     */
    public function getUrlName(): string
    {
        return $this->urlName;
    }

    /**
     * @param string $urlName
     * @return $this
     */
    public function setUrlName(string $urlName): static
    {
        $this->urlName = $urlName;

        return $this;
    }

    /**
     * @return Collection<int, File>
     */
    public function getFiles(): Collection
    {
        return $this->files;
    }

    /**
     * @param File $file
     * @return $this
     */
    public function addFile(File $file): static
    {
        if (!$this->files->contains($file)) {
            $this->files->add($file);
            $file->setProject($this);
        }

        return $this;
    }
}
