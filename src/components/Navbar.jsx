import { Box, Link, Typography } from '@mui/material';
import { Link as Smooth } from 'react-scroll';

const Navbar = () => {
    return (
        <Box className='navbar' >

            <Link href='#skills' underline='none' color='#D8FD38' >
                <Smooth to="skills" spy={true} smooth={true} offset={0} duration={300} hashSpy={true} >
                    <Typography className='navbar-item' letterSpacing='2px' fontFamily='Syne' fontWeight='700' fontSize='1rem' >Skills</Typography>
                </Smooth>
            </Link>
            <Link href='#exp' underline='none' color='#D8FD38' >
                <Smooth to="exp" spy={true} smooth={true} offset={0} duration={300} hashSpy={true} >
                    <Typography className='navbar-item' letterSpacing='2px' fontFamily='Syne' fontWeight='700' fontSize='1rem' >Experience</Typography>
                </Smooth>
            </Link>
            <Link href='#contact' underline='none' color='#D8FD38' >
                <Smooth to="contact" spy={true} smooth={true} offset={0} duration={300} hashSpy={true} >
                    <Typography className='navbar-item' letterSpacing='2px' fontFamily='Syne' fontWeight='700' fontSize='1rem' >Contact Me</Typography>
                </Smooth>
            </Link>
            {/* <Smooth to="exp" spy={true} smooth={true} offset={0} duration={300} hashSpy={true} >
                <Link href='#exp' underline='none' color='#D8FD38' ><Typography className='navbar-item' letterSpacing='2px' fontFamily='Syne' fontWeight='700' fontSize='1rem' >Experience</Typography></Link>

            </Smooth>
            <Smooth to="contact" spy={true} smooth={true} offset={0} duration={300} hashSpy={true} >
                <Link href='#contact' underline='none' color='#D8FD38' ><Typography className='navbar-item' letterSpacing='2px' fontFamily='Syne' fontWeight='700' fontSize='1rem' >Contact Me</Typography></Link>

            </Smooth> */}
        </Box>
    )
}
export default Navbar