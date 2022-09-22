import { Box, Typography } from '@mui/material'
import Footer from './Footer';

const ContactMe = () => {
    return (
        <Box minHeight='100vh' bgcolor='#21252c' >
            <Typography fontSize='30px' className='contact-shadow' textAlign='center' fontFamily='Syne' fontWeight='700' letterSpacing='6px' py='4.5rem' mx='auto' color='#D8FD38' >
                CONTACT ME
            </Typography>
            <Footer />
        </Box>
    )
}
export default ContactMe