import { Box, Typography } from '@mui/material'
import { Link as Smooth } from 'react-scroll'

const Title = () => {
    return (
        <Box zIndex='1000' mx='2rem' my='1.5rem' sx={{ textAlign: { xs: 'center', sm: 'left' } }} >
            <Smooth to="/" spy={true} smooth={true} offset={0} duration={300} >
                <Typography letterSpacing='2px' fontSize='1.5rem' fontFamily='syne' fontWeight='700' >Marcelo <span className='span-header'>Portobanco</span></Typography>
            </Smooth>

        </Box>
    )
}
export default Title