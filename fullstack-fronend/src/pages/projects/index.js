import PageDescription from "@/components/PageDescription";
import ProjectItem from "@/components/ProjectItem";
import { getProjects } from "../../api/projects";

export default function Projects ({projects}) {
    return (
        <section>
            <PageDescription pagetitle="Projects" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id commodo sem." />
            {projects.map(project => <ProjectItem key={project._id} project = {project}/>)}
        </section>



    );
}

export async function getServerSideProps(){


    const projects = await getProjects();
    return {
        props:{
            projects,
        },
       
    }
}

