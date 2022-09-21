import { Box, Typography } from '@mui/material';

const ExperienceCard = ({ title, time, position }) => {
    return (
        <Box display='flex' flexDirection='column' >
            <Typography mx='0.8rem' fontSize='1rem' fontFamily='B612 Mono' >{title}</Typography>
            <Typography mx='0.8rem' fontSize='12px' fontFamily='B612 Mono'>{time}</Typography>
            <Typography fontFamily='B612 Mono' mx='0.8rem' maxWidth='200px' fontSize='11px'  >{position}</Typography>
        </Box>
    )
}
export default ExperienceCard