import { Box, Typography } from '@mui/material';
import { Player } from '@lottiefiles/react-lottie-player';
import { Trans } from 'react-i18next';
import ProjectCard from './ProjectCard';


const Projects = ({ projectsData }) => {
    return (
        <Box id='projects' >
            <Box display='flex' flexDirection='column' gap='2rem' justifyContent='space-evenly' maxWidth='100vw' minHeight='75vh'>
                <Typography textTransform='uppercase' fontSize='30px' className='projects-shadow' textAlign='center' fontFamily='Syne' fontWeight='700' letterSpacing='6px' my='6rem' mx='auto' color='#D8FD38'>
                    <Trans i18nKey='projects-btn' >
                        PROJECTS
                    </Trans>
                </Typography>
                {projectsData.length === 0 ? <Player renderer='svg' className='loader' autoplay loop src="https://lottie.host/09bf873e-d574-4f98-aa2b-6cc97dd0bb35/cI0dW5FOxm.json" /> :
                    <Box display='flex' flexWrap='wrap' justifyContent='center'  >
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