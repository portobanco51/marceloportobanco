import { Box } from '@mui/material';
import { skills } from '../utils/skills'
import SkillCard from './SkillCard'

const SkillSlider = () => {
    return (
        <Box display='flex' maxWidth='100%' >
            {skills.map((el, i) => (
                <SkillCard key={i} name={el.name} logo={el.logo} />
            ))}
        </Box>
    )
}
export default SkillSlider