import PageDescription from "@/components/PageDescription";
import { Button, Chip, Grid, Stack } from "@mui/material";
import { useRouter } from 'next/router'

export default function About ({skills}) {
    const router = useRouter();
    return (
        <section>
            <PageDescription
            pagetitle = "About Me"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id commodo sem. Mauris id tortor vel nibh finibus euismod. Aenean volutpat enim at lorem aliquam consectetur. Phasellus auctor enim in tellus finibus, nec convallis odio elementum. Donec mattis quis enim sed blandit. Donec eu tellus in diam feugiat commodo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;"
                />

            <Grid container spacing={2}>
                <Grid item md={6}>
                    <h2>Get to know me</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id commodo sem. Mauris id tortor vel nibh finibus euismod.  </p>
                    <p>Aenean volutpat enim at lorem aliquam consectetur. Phasellus auctor enim in tellus finibus, nec convallis odio elementum. Donec mattis quis enim sed blandit. Donec eu tellus in diam feugiat commodo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</p>
                    <Button variant="contained" size="large" onclick={() => router.push("/projects")}> Projects</Button>
                </Grid>
                <Grid item md={6}>
                    <h2>My Skills</h2>
                    <Stack direction="row" spacing={2}>
                    {skills.map((skill) => (
                     <Chip key={skill} label={skill} />
                    ))}
                    </Stack>


                </Grid>
            </Grid>

        </section>

    ); 
}

export async function getStaticProps() {

    let skills = [];
    try{
        const response = await fetch("https://guen-skills-api-default-rtdb.firebaseio.com/skills.json");
        const data = await response.json();
        skills = data.split(",");
    }
    catch (error){
        console.error(error);
    }

    return {
        props:{
            skills,
        },
        revalidate:30,
    }
}