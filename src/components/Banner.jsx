import { Box, Typography } from '@mui/material';
import { Link as Smooth } from 'react-scroll';
import { Player } from '@lottiefiles/react-lottie-player'
import Navbar from './Navbar';
const Banner = () => {
    return (
        <Box id='top' display='flex' minHeight='80vh' sx={{ justifyContent: { xs: 'center', sm: 'center' } }} >
            <Box alignItems='center' display='flex' sx={{ flexDirection: { xs: 'column', sm: 'row' }, textAlign: { xs: 'center', sm: 'left' }, justifyContent: { xs: 'space-evenly', sm: 'space-evenly' }, minWidth: { sm: '60vw' } }} >
                <Box mx='2rem' sx={{ mt: { xs: '2rem', sm: '0' } }} >
                    <Typography letterSpacing='5px' my='0.5rem' mx='0' fontFamily='Syne' fontWeight='700' fontSize='34px' variant='h1' >I<span className='span-green' >'</span>m Marcelo<span className='span-green' >!</span></Typography>

                    <Typography letterSpacing='2px' my='0.5rem' mx='0' fontFamily='Syne' fontWeight='700' fontSize='24px' variant='h2' >Front<span className='span-green' >-</span>end Developer<span className='span-green' >.</span> </Typography>

                    <Typography sx={{ textAlign: { xs: 'center', sm: 'justify' }, mx: { xs: 'auto', sm: '0' } }} my='0.5rem' lineHeight='1.1rem' maxWidth='350px' fontSize='12px' fontWeight='400' fontFamily='B612 Mono' >I'm a JavaScript developer passionate about taking projects to the next level with the latest technologies and scalable code to improve your web browsing experience!</Typography>

                    <Smooth className='pxbtn' to="projects" spy={true} smooth={true} offset={0} duration={300}>
                        <Typography fontFamily='Syne' fontWeight='400' fontSize='14px'>
                            Projects
                            <span>  -&gt;</span>
                        </Typography>
                    </Smooth>

                </Box>
                <Box>
                    <Player renderer='svg' className='banner-img' autoplay loop src="https://assets6.lottiefiles.com/packages/lf20_kw2yp643.json" />
                </Box>
            </Box >
            <Box>
                <Navbar />
            </Box>
        </Box >
    )
}
export default Banner