import { Box, Typography } from '@mui/material'
import { Player } from '@lottiefiles/react-lottie-player'
import ExperienceCard from './ExperienceCard'
import ExperienceCardRight from './ExperienceCardRight'

const Experience = () => {
    return (
        <Box id='exp' className='experience'>
            <Box>
                <Typography fontSize='30px' className='exp-shadow' textAlign='center' fontFamily='Syne' fontWeight='700' letterSpacing='6px' mx='auto' color='#D8FD38'>EXPERIENCE</Typography>
            </Box>

            <Box className='chart'>
                <Box position='absolute' sx={{ mt: { xs: '0.5rem', sm: '0px' } }} >
                    <Player renderer='svg' className='rocket' autoplay loop src="https://lottie.host/f37cc593-b9e7-4a1c-95de-627eae306f6c/zuJxm3L84U.json" />
                </Box>

                <Box display='flex' flexDirection='row' sx={{ justifyContent: { xs: 'space-around', sm: 'space-around', md: 'space-around' }, gap: { xs: '20vw', sm: '28vw', md: '26vw', lg: '24vw', xl: '20vw' } }}>
                    <ExperienceCardRight title={'AMAZON, INC'} time={2020} position={'Transportation Analyst'} />
                    <ExperienceCard title={'EXPERIAN'} time={2021} position={'Technical Support Rep'} />
                </Box>

                <Box display='flex' flexDirection='row' justifyContent='center' sx={{ gap: { xs: '0px', sm: '8vw', md: '24vw' } }} >
                    <ExperienceCard title={'AMAZON, INC'} time={2019} position={'Technical Support'} />
                    <ExperienceCardRight title={'IBM'} time={2022} position={'Executive Assistant'} />
                </Box>

            </Box>
        </Box >
    )
}
export default Experience