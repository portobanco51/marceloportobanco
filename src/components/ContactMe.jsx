import { useRef } from 'react';
import { Box, Typography } from '@mui/material'
import { Player } from '@lottiefiles/react-lottie-player'
import { Trans } from 'react-i18next';
import { sendEmail } from '../utils/email'
import Footer from './Footer';
import metaImg from '../assets/images/metaImg.png'

const ContactMe = () => {
    const formInfo = useRef();

    return (
        <Box id='contact' position='relative' gap='2rem' minHeight='100vh' bgcolor='#21252c' display='flex' flexDirection='column' justifyContent='space-between' >

            <Box position='absolute' className='contact-img' bottom='0px' >
                <Player renderer='svg' autoplay loop src='https://lottie.host/007193f6-0438-47d8-ba99-69aa6b158027/lxVl35PvVW.json' />
            </Box>

            <Box display='flex' flexDirection='column' minHeight='85vh' justifyContent='space-evenly' >
                <Typography textTransform='uppercase' fontSize='30px' className='contact-shadow' textAlign='center' fontFamily='Syne' fontWeight='700' letterSpacing='6px' mx='auto' color='#D8FD38' >
                    <Trans i18nKey='contact' >
                        CONTACT ME
                    </Trans>
                </Typography>
                <Box>

                    <Box className='contact-info' boxShadow='0 0px 25px #00000070' flexGrow='1' bgcolor='rgba(121, 122, 128, 0.25)' gap='1rem' borderRadius='30px' p='3rem' maxWidth='clamp(200px, 60vw, 690px)' mx='auto' alignItems='center' justifyContent='space-evenly' display='flex' sx={{ flexDirection: { xs: 'column', sm: 'row' } }} >
                        <Box display='flex' flexDirection='column' >
                            <Typography sx={{ textAlign: { xs: 'center', sm: 'left' } }} fontFamily='Syne' fontWeight='700' fontSize='28px' mb='0.5rem' >
                                <Trans i18nKey='ct-header'>
                                    Let<span className='span-green' >'</span>s work <br /> together<span className='span-green' >!</span>
                                </Trans>
                            </Typography>
                            <Typography sx={{ textAlign: { xs: 'center', sm: 'left' }, mx: { xs: 'auto', sm: '0' } }} fontSize='11px' maxWidth='200px' fontFamily='B612 Mono' >
                                <Trans i18nKey='ct-main'>
                                    I'll love to hear any project or idea you have and collaborate into making it real and breathtaking!
                                </Trans>
                            </Typography>
                        </Box>

                        <Box display='flex' >
                            <form ref={formInfo} onSubmit={(e) => { sendEmail(e, formInfo) }} className='form' color='#fff' >
                                <label hidden htmlFor="name"></label>
                                <input name='name' required={true} placeholder='Name' className='form-label' id="name" aria-describedby="my-helper-text" />

                                <label hidden htmlFor="email"></label>
                                <input name='email' type='email' required={true} placeholder='Email' className='form-label' id="email" aria-describedby="my-helper-text" />

                                <label hidden htmlFor="email"></label>
                                <textarea name='message' maxLength='200' rows='5' required={true} placeholder='Message' className=' form-label' id="message" aria-describedby="my-helper-text" />

                                <input className='submit' type='submit' value={`${'✔'}`}>
                                </input>
                            </form>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <img src={metaImg} alt='metaimg' className='meta-img' />
            <Footer />
        </Box >
    )
}
export default ContactMe