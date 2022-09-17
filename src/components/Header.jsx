import { Box } from '@mui/material'
import Banner from './Banner';
import Links from './Links';
import Title from './Title';

const Header = () => {
    return (
        <Box position='relative' >
            <Title />
            <Banner />
            <Links />
        </Box>
    )
}
export default Header