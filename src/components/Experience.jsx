import { Box, Typography } from '@mui/material'
import { Player } from '@lottiefiles/react-lottie-player'
import { Trans } from 'react-i18next';
import ExperienceCard from './ExperienceCard'
import ExperienceCardRight from './ExperienceCardRight'

const Experience = () => {
    return (
        <Box id='exp' mx='auto' maxWidth='90vw' minHeight='80vh' display='flex' justifyContent='space-evenly' flexDirection='column' flexWrap='nowrap' >
            <Typography textTransform='uppercase' fontSize='30px' className='exp-shadow' textAlign='center' fontFamily='Syne' fontWeight='700' letterSpacing='6px' mx='auto' color='#D8FD38'>
                <Trans i18nKey='exp' >
                    EXPERIENCE
                </Trans>
            </Typography>

            <Box className='chart' minWidth='90vw' display='flex' flexDirection='column' gap='10vh' mx='auto' minHeight='16.8rem' justifyContent='space-between' alignItems='center' >
                <Box position='absolute' sx={{ mt: { xs: '0.5rem', sm: '0px' } }} >
                    <Player renderer='svg' className='rocket' autoplay loop src="https://lottie.host/f37cc593-b9e7-4a1c-95de-627eae306f6c/zuJxm3L84U.json" />
                </Box>

                <Box display='flex' flexDirection='row' sx={{ justifyContent: { xs: 'space-around', sm: 'space-around', md: 'space-around' }, gap: { xs: '20vw', sm: '28vw', md: '26vw', lg: '24vw', xl: '20vw' } }}>
                    <ExperienceCardRight title={'AMAZON, INC'} time={2021} position={'Transportation Analyst'} />
                    <ExperienceCard title={'IBM'} time={2021} position={'Executive Assistant'} />
                </Box>

                <Box display='flex' flexDirection='row' justifyContent='center' sx={{ gap: { xs: '0px', sm: '1vw', md: '18vw' } }} >
                    <ExperienceCard title={'AMAZON, INC'} time={2019} position={'Technical Support R.'} />
                    <ExperienceCardRight title={'AZTEC'} time={'Now'} position={'Web Developer'} />
                </Box>

            </Box>
        </Box >
    )
}
export default Experience