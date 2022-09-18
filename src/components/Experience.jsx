import { Box, Typography } from '@mui/material'

const Experience = () => {
    return (
        <Box id='exp' className='experience' mt='4rem'>
            <Box>
                <Typography fontSize='30px' className='exp-shadow' textAlign='center' fontFamily='Syne' fontWeight='700' letterSpacing='6px' my='3rem' mx='auto' color='#D8FD38'>EXPERIENCE</Typography>
            </Box>
            <Box className='chart' my='6rem' >
                <Box display='flex' flexDirection='column' width='10vw' gap='1rem' sx={{ justifyContent: { xs: 'space-around', sm: 'space-between' } }} justifyContent='space-around' >
                    <Box display='flex' flexDirection='column' className='right-exp'>
                        <Typography>Title</Typography>
                        <Typography>Time</Typography>
                        <Typography>Descrp</Typography>
                    </Box>
                    <Box display='flex' flexDirection='column' className='right-exp'>
                        <Typography>Title</Typography>
                        <Typography>Time</Typography>
                        <Typography>Descrp</Typography>
                    </Box>
                </Box>
                <Box display='flex' flexDirection='column' width='10vw' gap='1rem' sx={{ justifyContent: { xs: 'space-around', sm: 'space-between' } }} justifyContent='space-around' >
                    <Box display='flex' flexDirection='column' >
                        <Typography>Title</Typography>
                        <Typography>Time</Typography>
                        <Typography>Descrp</Typography>
                    </Box>
                    <Box display='flex' flexDirection='column'>
                        <Typography>Title</Typography>
                        <Typography>Time</Typography>
                        <Typography>Descrp</Typography>
                    </Box>
                </Box>
            </Box>
        </Box >
    )
}
export default Experience