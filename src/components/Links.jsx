import { Box, Link } from '@mui/material'
import Resume from '../assets/Resume.pdf';

const Links = () => {
    return (
        <Box display='flex' gap='2rem' mb='4rem' sx={{ justifyContent: { xs: 'center', sm: 'left' }, ml: { sm: '2rem' } }} >
            <Link fontSize='1rem' fontFamily='Syne' fontWeight='400' underline='none' color='rgb(255,255,255, 0.6)' href='https://www.linkedin.com/in/jonathan-portobanco/' target='_blank' rel='noopener noreferrer' >LinkedIn</Link>
            <Link fontSize='1rem' fontFamily='Syne' fontWeight='400' underline='none' color='rgb(255,255,255, 0.6)' href='https://github.com/portobanco51' target='_blank' rel='noopener noreferrer' >GitHub</Link>
            <Link fontSize='1rem' fontFamily='Syne' fontWeight='400' underline='none' color='rgb(255,255,255, 0.6)' href={Resume} download={`Marcelo's_Resume.pdf`}>Resume</Link>
        </Box>
    )
}
export default Links