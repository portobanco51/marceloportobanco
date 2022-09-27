import { Box, Typography, Link, Icon } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub'


const ProjectCard = ({ data }) => {
    const { title, url, description, img, git } = data

    return (
        <Box maxWidth='200px' borderRadius='30px' display='flex' position='relative' bgcolor='#303030' alignItems='center' boxShadow='0px 10px 20px 0px #00000060' my='0.7rem' minWidth='8vw' maxHeight='1rem' minHeight='18rem' mx='1.5rem' className='project-card' style={{ backgroundImage: `url(${img})`, backgroundBlendMode: 'multiply', backgroundSize: 'cover', backgroundPosition: 'center', flexFlow: 'column nowrap', backgroundRepeat: 'no-repeat' }} >

            <Link borderRadius='30px' border='1px solid #d8fd3850' justifyContent='space-between' color='#fff' target='_blank' rel='noopener noreferrer' href={url} underline='none' >
                <Box display='flex' flexDirection='column' justifyContent='center' gap='1rem' minHeight='18rem' borderRadius='30px'>
                    <Typography alignItems='center' display='flex' maxWidth='80%' mx='auto' textAlign='center' fontSize='20px' fontFamily='Syne' fontWeight='400' >{title}</Typography>
                    <Typography maxWidth='80%' mx='auto' textAlign='center' fontSize='12px' fontFamily='B612 Mono' fontWeight='400' >{description}</Typography>
                </Box>
            </Link>
            <Link color='#fff' target='_blank' rel='noopener noreferrer' href={git} underline='none' >
                <Icon className='git-icon' >
                    <GitHubIcon fontSize='large' />
                </Icon>
            </Link>
        </Box >
    )
}
export default ProjectCard
