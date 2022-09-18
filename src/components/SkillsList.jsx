import { Box } from '@mui/material';
import { skills } from '../utils/skills'
import SkillCard from './SkillCard'


const SkillsList = () => {
    return (
        <Box className='skills-bar' >
            {skills.map((el, i) => (
                <SkillCard key={i} name={el.name} />
            ))}
        </Box>
    )
}
export default SkillsList