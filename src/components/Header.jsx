import { Box } from '@mui/material'
import Banner from './Banner';
import Links from './Links';
import Title from './Title';

const Header = () => {
    return (
        <Box id='/' className='header' position='relative' display='flex' flexDirection='column' minHeight='100vh' >
            <Title />
            <Banner />
            <Links />
        </Box>
    )
}
export default Header