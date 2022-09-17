import { Box, Typography, Link } from '@mui/material'


const Title = () => {
    return (
        <Box m='2rem'>
            <Link color='#fff' underline='none' href='#top' >
                <Typography letterSpacing='1px' fontSize='1.5rem' fontFamily='syne' fontWeight='700' >Marcelo <span className='span-header'>Portobanco</span></Typography>

            </Link>
        </Box>
    )
}
export default Title