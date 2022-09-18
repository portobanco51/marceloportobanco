import { Box, Typography } from '@mui/material';
import SkillsList from './SkillsList';

const Skills = () => {
    return (
        <Box id='skills' display='flex' flexDirection='column' gap='1rem' bgcolor='#21252c' >
            <Box>
                <Typography fontSize='30px' className='skill-shadow' textAlign='center' fontFamily='Syne' fontWeight='700' letterSpacing='6px' my='3rem' mx='auto' color='#D8FD38'>SKILLS</Typography>
            </Box>
            <SkillsList />
        </Box>
    )
}
export default Skills