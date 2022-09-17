import { Box, Link } from '@mui/material'

const Links = () => {
    return (
        <Box display='flex' gap='2rem' m='1rem' sx={{ justifyContent: { xs: 'center', sm: 'left' } }} >
            <Link fontSize='1rem' fontFamily='Syne' fontWeight='400' underline='none' color='#fff' href='https://www.linkedin.com/in/jonathan-portobanco/' target='_blank' rel='noopener noreferrer' >LinkedIn</Link>
            <Link fontSize='1rem' fontFamily='Syne' fontWeight='400' underline='none' color='#fff' href='https://github.com/portobanco51' target='_blank' rel='noopener noreferrer' >GitHub</Link>
            <Link fontSize='1rem' fontFamily='Syne' fontWeight='400' underline='none' color='#fff' href='%PUBLIC_URL%/Resume.pdf' download >Resume</Link>
        </Box>
    )
}
export default Links