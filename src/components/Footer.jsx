import { Box } from '@mui/material'
import Title from './Title';
import Links from './Links';

const Footer = () => {
    return (
        <Box display='flex' justifyContent='space-between' sx={{ flexDirection: { xs: 'column', sm: 'row' } }}>
            <Links />
            <Title />
        </Box>
    )
}
export default Footer