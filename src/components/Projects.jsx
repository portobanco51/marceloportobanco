import { Box, Typography } from '@mui/material';
import ProjectCard from './ProjectCard';


const Projects = ({ projectsData }) => {
    return (
        <Box>
            <Box display='flex' flexDirection='column' gap='2rem' justifyContent='space-evenly' maxWidth='100vw' minHeight='75vh'>
                <Typography fontSize='30px' className='projects-shadow' textAlign='center' fontFamily='Syne' fontWeight='700' letterSpacing='6px' my='6rem' mx='auto' color='#D8FD38'>PROJECTS</Typography>
                {projectsData.length === 0 ? <Typography>Loading...</Typography> :
                    <Box display='flex' mb='3rem' flexWrap='wrap' justifyContent='center' sx={{ gap: { xs: '1.5rem', sm: '3rem', md: '4rem' } }} >
                        {
                            projectsData.map((e, i) => (
                                <ProjectCard key={i} data={e} />
                            ))
                        }
                    </Box>
                }

            </Box>
        </Box >
    )
}
export default Projects