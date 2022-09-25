import { Box, Link } from '@mui/material'
import Resume from '../assets/Resume.pdf';
import { Trans } from 'react-i18next'

const Links = () => {
    return (
        <Box display='flex' alignItems='center' gap='2rem' sx={{ justifyContent: { xs: 'center', sm: 'left' }, ml: { sm: '2rem' } }} >
            <Link className='link-item' fontSize='1rem' fontFamily='Syne' fontWeight='400' underline='none' color='rgb(255,255,255)' href='https://www.linkedin.com/in/jonathan-portobanco/' target='_blank' rel='noopener noreferrer' >LinkedIn</Link>
            <Link className='link-item' fontSize='1rem' fontFamily='Syne' fontWeight='400' underline='none' color='rgb(255,255,255)' href='https://github.com/portobanco51' target='_blank' rel='noopener noreferrer' >GitHub</Link>
            <Link className='link-item' fontSize='1rem' fontFamily='Syne' fontWeight='400' underline='none' color='rgb(255,255,255)' href={Resume} download={`Marcelo's_Resume.pdf`}>
                <Trans i18nKey='resume'>
                    Resume
                </Trans>
            </Link>
        </Box>
    )
}
export default Links