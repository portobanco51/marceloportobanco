import { Box, Typography } from '@mui/material'

const Experience = () => {
    return (
        <Box className='experience' mt='4rem'>
            <Box id='exp'>
                <Typography fontSize='30px' className='exp-shadow' textAlign='center' fontFamily='Syne' fontWeight='700' letterSpacing='2px' mx='auto' color='#D8FD38'>EXPERIENCE</Typography>
            </Box>
            <Box className='chart' my='6rem' >
                <Box display='flex' flexDirection='column' gap='1rem' sx={{ justifyContent: { xs: 'space-around', sm: 'space-between' } }} justifyContent='space-around' >
                    <Box display='flex' flexDirection='column' >
                        <Typography>Title</Typography>
                        <Typography>Descrp</Typography>
                    </Box>
                    <Box display='flex' flexDirection='column' >
                        <Typography>Title</Typography>
                        <Typography>Descrp</Typography>
                    </Box>
                </Box>
                <Box display='flex' flexDirection='column' gap='1rem' sx={{ justifyContent: { xs: 'space-around', sm: 'space-between' } }} justifyContent='space-around' >
                    <Box display='flex' flexDirection='column' >
                        <Typography>Title</Typography>
                        <Typography>Descrp</Typography>
                    </Box>
                    <Box display='flex' flexDirection='column' >
                        <Typography>Title</Typography>
                        <Typography>Descrp</Typography>
                    </Box>
                </Box>
            </Box>
        </Box >
    )
}
export default Experience