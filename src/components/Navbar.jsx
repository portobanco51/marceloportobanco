import { Box, Link, Typography } from '@mui/material';

const Navbar = () => {
    return (
        <Box className='navbar' >
            <Link href='#skills' underline='none' color='#D8FD38' ><Typography className='navbar-item' letterSpacing='2px' fontFamily='Syne' fontWeight='700' fontSize='1rem' >Skills</Typography></Link>
            <Link href='#exp' underline='none' color='#D8FD38' ><Typography className='navbar-item' letterSpacing='2px' fontFamily='Syne' fontWeight='700' fontSize='1rem' >Experience</Typography></Link>
            <Link href='#contact' underline='none' color='#D8FD38' ><Typography className='navbar-item' letterSpacing='2px' fontFamily='Syne' fontWeight='700' fontSize='1rem' >Contact Me</Typography></Link>
        </Box>
    )
}
export default Navbar