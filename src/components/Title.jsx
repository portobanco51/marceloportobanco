import { Box, Typography, Link } from '@mui/material'
import { Link as Smooth } from 'react-scroll'

const Title = () => {
    return (
        <Box mx='2rem' my='1.5rem' sx={{ textAlign: { xs: 'center', sm: 'left' } }} >
            <Link color='#fff' underline='none' href='/' >
                <Smooth to="/" spy={true} smooth={true} offset={0} duration={300} hashSpy={true} >
                    <Typography className='title' letterSpacing='2px' fontSize='1.5rem' fontFamily='syne' fontWeight='700' >Marcelo <span className='span-header'>Portobanco</span></Typography>
                </Smooth>
            </Link>

        </Box>
    )
}
export default Title