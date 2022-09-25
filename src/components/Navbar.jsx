import { Box, Typography } from '@mui/material';
import { Trans } from 'react-i18next';
import { Link as Smooth } from 'react-scroll';

const Navbar = () => {
    return (
        <Box className='navbar' >
            <Smooth to="skills" spy={true} smooth={true} offset={0} duration={300}  >
                <Typography className='navbar-item' letterSpacing='2px' fontFamily='Syne' fontWeight='700' fontSize='1rem' >
                    Skills
                </Typography>
            </Smooth>
            <Smooth to="exp" spy={true} smooth={true} offset={0} duration={300}  >
                <Typography className='navbar-item' letterSpacing='2px' fontFamily='Syne' fontWeight='700' fontSize='1rem' >
                    <Trans i18nKey='exp'>
                        Experience
                    </Trans>
                </Typography>
            </Smooth>
            <Smooth to="contact" spy={true} smooth={true} offset={0} duration={300}  >
                <Typography className='navbar-item' letterSpacing='2px' fontFamily='Syne' fontWeight='700' fontSize='1rem' >
                    <Trans i18nKey='contact'>
                        Contact Me
                    </Trans>
                </Typography>
            </Smooth>
        </Box>
    )
}
export default Navbar