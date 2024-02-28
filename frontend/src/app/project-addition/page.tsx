import Auth from "@/components/Auth/Auth";
import ProjectAddition from "@/components/ProjectAddition/ProjectAddition";

export default function ProjectAdditipnPage() {
  return (
    <>
      <Auth redirectUrl="/control">
        <ProjectAddition />
      </Auth>
    </>
  );
}