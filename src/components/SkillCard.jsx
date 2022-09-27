import { Box, Typography } from '@mui/material'


const SkillCard = ({ name, logo }) => {
    return (
        <Box className='skill-card' display='flex' justifyContent='space-evenly' flexDirection='column' borderRadius='1.8rem' mx='2.2rem' my='3rem' minHeight='13rem' minWidth='13rem' boxShadow='0px 10px 20px 0px #00000080' bgcolor='rgb(255,255,255,0.35)' >
            <img className='card-img' src={logo} alt={name} />
            <Typography fontFamily='B612 Mono' fontWeight='500' textAlign='center' >{name}</Typography>
        </Box>
    )
}
export default SkillCard