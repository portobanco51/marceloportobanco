import { Box, Typography } from '@mui/material';
import { Player } from '@lottiefiles/react-lottie-player'
import Navbar from './Navbar';
const Banner = () => {
    return (
        <Box display='flex' minHeight='80vh' sx={{ justifyContent: { xs: 'center', sm: 'center' } }} >
            <Box alignItems='center' display='flex' sx={{ flexDirection: { xs: 'column', sm: 'row' }, textAlign: { xs: 'center', sm: 'left' }, justifyContent: { xs: 'space-evenly', sm: 'space-evenly' }, minWidth: { sm: '60vw' } }} >
                <Box mx='2rem' >
                    <Typography my='0.5rem' mx='1rem' fontFamily='Syne' fontWeight='700' fontSize='30px' variant='h1' >I<span className='span-green' >'</span>m Marcelo<span className='span-green' >!</span></Typography>

                    <Typography my='0.5rem' mx='1rem' fontFamily='Syne' fontWeight='700' fontSize='24px' variant='h2' >A Front<span className='span-green' >-</span>end Developer<span className='span-green' >.</span> </Typography>

                    <Typography textAlign='justify' mx='1rem' my='0.5rem' maxWidth='300px' fontSize='14px' fontWeight='400' fontFamily='B612 Mono' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ad voluptates odio aperiam officiis perspiciatis alias consectetur eius perferendis sapiente debitis, quia quaerat, magnam voluptas architecto! Ea qui optio ut.</Typography>
                </Box>
                <Box>
                    <Player renderer='svg' className='banner-img' autoplay loop src="https://assets6.lottiefiles.com/packages/lf20_kw2yp643.json" />
                </Box>
            </Box>
            <Box>
                <Navbar />
            </Box>
        </Box>
    )
}
export default Banner