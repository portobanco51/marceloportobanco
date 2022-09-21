import { Box } from '@mui/material';
import { skills } from '../utils/skills'
import SkillCard from './SkillCard'


const SkillsList = () => {
    return (
        <Box className='skills-bar' >
            <Box className='skills-container'>
                <Box className='skills-slider'>
                    {skills.map((el, i) => (
                        <SkillCard key={i} name={el.name} />
                    ))}
                </Box>
                <Box className='skills-slider'>
                    {skills.map((el, i) => (
                        <SkillCard key={i} name={el.name} />
                    ))}
                </Box>
            </Box>
        </Box>
    )
}
export default SkillsList