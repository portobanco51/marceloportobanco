import { Box, Typography, Link } from '@mui/material';


const ProjectCard = ({ data }) => {
    const { title, url, description, img, git } = data

    return (
        <Box maxWidth='200px' minWidth='8vw' maxHeight='1rem' minHeight='18rem' className='project-card' style={{ backgroundImage: `url(${img})` }} >
            <Link className='card-text' color='' target='_blank' rel='noopener noreferrer' href={url} underline='none' >
                <Box display='flex' flexDirection='column' justifyContent='center' gap='1rem' minHeight='18rem'>
                    <Typography alignItems='center' display='flex' maxWidth='80%' mx='auto' textAlign='center' fontSize='20px' fontFamily='Syne' fontWeight='400' >{title}</Typography>
                    <Typography maxWidth='80%' mx='auto' textAlign='center' fontSize='12px' fontFamily='B612 Mono' fontWeight='400' >{description}</Typography>
                </Box>
                {console.log(git)}
            </Link>
        </Box >
    )
}
export default ProjectCard