import { Box, Typography, Link } from '@mui/material'


const Title = () => {
    return (
        <Box mx='2rem' my='1.5rem' sx={{ textAlign: { xs: 'center', sm: 'left' } }} >
            <Link color='#fff' underline='none' href='#top' >
                <Typography letterSpacing='2px' fontSize='1.5rem' fontFamily='syne' fontWeight='700' >Marcelo <span className='span-header'>Portobanco</span></Typography>
            </Link>
        </Box>
    )
}
export default Title