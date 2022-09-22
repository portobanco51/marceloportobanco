import { Box, Typography } from '@mui/material'


const SkillCard = ({ name, logo }) => {
    return (
        <Box className='skill-card' bgcolor='rgb(255,255,255,0.35)' >
            <img className='card-img' src={logo} alt={name} />
            <Typography fontFamily='B612 Mono' fontWeight='500' textAlign='center' >{name}</Typography>
        </Box>
    )
}
export default SkillCard