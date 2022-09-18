import { Box, Typography } from '@mui/material'
import Html from '../assets/icons/html.png'
import Css from '../assets/icons/css.png'
import Sass from '../assets/icons/sass.png'
import Js from '../assets/icons/js.png'
import Reactjs from '../assets/icons/reactjs.png'
import Nodejs from '../assets/icons/nodejs.png'
import Git from '../assets/icons/git.png'
import Scrum from '../assets/icons/scrum.png'

const SkillCard = ({ name }) => {
    return (
        <Box className='skill-card' bgcolor='rgb(255,255,255,0.35)' >
            <img className='card-img' src={name === "HTML" ? Html : null || name === "CSS" ? Css : null || name === "JavaScript" ? Js : null || name === "SASS" ? Sass : null || name === "React.js" ? Reactjs : null || name === "Node.js" ? Nodejs : null || name === "Git" ? Git : null || name === "SCRUM" ? Scrum : null} alt={name} />
            <Typography fontFamily='B612 Mono' fontWeight='500' textAlign='center' >{name}</Typography>
        </Box>
    )
}
export default SkillCard