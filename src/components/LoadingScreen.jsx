import { Player } from '@lottiefiles/react-lottie-player';
import { Box } from '@mui/material'

const LoadingScreen = () => {
    return (
        <Box minWidth='100vw' display='grid' alignItems='center' minHeight='100vh' maxHeight='100vh' justifyContent='center' >
            <Box maxWidth='300px' >
                <Player renderer='svg' className='loading' autoplay loop src="https://lottie.host/09bf873e-d574-4f98-aa2b-6cc97dd0bb35/cI0dW5FOxm.json" />
            </Box>
        </Box>
    )
}
export default LoadingScreen