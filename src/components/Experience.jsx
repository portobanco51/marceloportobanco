import { Box, Typography } from '@mui/material'

const Experience = () => {
    return (
        <Box id='exp' className='experience' mt='4rem'>
            <Box>
                <Typography fontSize='30px' className='exp-shadow' textAlign='center' fontFamily='Syne' fontWeight='700' letterSpacing='6px' my='3rem' mx='auto' color='#D8FD38'>EXPERIENCE</Typography>
            </Box>

            <Box className='chart' my='5rem'>

                <Box display='flex' flexDirection='row' width='10vw' gap='24vw' sx={{ justifyContent: { xs: 'space-around', sm: 'space-around', md: 'space-around' } }} justifyContent='space-around'>

                    <Box display='flex' flexDirection='column' className='right-exp'>
                        <Typography mx='0.8rem' >Title</Typography>
                        <Typography mx='0.8rem' >Time</Typography>
                        <Typography mx='0.8rem' >Descrp</Typography>
                    </Box>

                    <Box display='flex' flexDirection='column'>
                        <Typography mx='0.8rem'>Title</Typography>
                        <Typography mx='0.8rem'>Time</Typography>
                        <Typography mx='0.8rem'>Descrp</Typography>
                    </Box>
                </Box>

                <Box display='flex' flexDirection='row' width='10vw' justifyContent='center' sx={{ gap: { xs: '15vw', sm: '25vw', md: '32vw' } }} >

                    <Box display='flex' flexDirection='column' >
                        <Typography mx='0.8rem' >Title</Typography>
                        <Typography mx='0.8rem' >Time</Typography>
                        <Typography mx='0.8rem' >Descrp</Typography>
                    </Box>
                    <Box display='flex' flexDirection='column' className='right-exp'>
                        <Typography mx='0.8rem' >Title</Typography>
                        <Typography mx='0.8rem' >Time</Typography>
                        <Typography mx='0.8rem' >Descrp</Typography>
                    </Box>
                </Box>

            </Box>
        </Box >
    )
}
export default Experience