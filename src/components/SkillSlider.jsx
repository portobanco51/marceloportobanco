import { Box } from '@mui/material';
import { skills } from '../utils/skills'
import SkillCard from './SkillCard'

const SkillSlider = () => {
    return (
        <Box display='flex' gap='5.5rem' maxWidth='100%' ml='5.5rem' >
            {skills.map((el, i) => (
                <SkillCard key={i} name={el.name} logo={el.logo} />
            ))}
        </Box>
    )
}
export default SkillSlider