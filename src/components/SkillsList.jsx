import { Box } from '@mui/material';
import SkillSlider from './SkillSlider';
const SkillsList = () => {
    return (
        <Box mx='auto' display='flex' flexDirection='row' overflow='hidden' >
            <Box display='flex' className='skills-container'>
                <SkillSlider />
                <SkillSlider />
            </Box>
        </Box>
    )
}
export default SkillsList