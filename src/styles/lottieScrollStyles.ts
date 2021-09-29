import { makeStyles } from '@material-ui/core/styles';
// import globalStyles from './globalStyles';

const useStyles = makeStyles({
    lottieSection: {
        position: 'absolute',
        top: '0px',
        right: '0px',
        minHeight: '100%',
        width: '60%',
        maxWidth: '960px'
    },
    lottieWrapper: {
        position: 'sticky',
        top: '0px',
        right: '0px',
        height: '100vh'
    },
    lottieContainer: {
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    scrollLottie: {
        height: '550px',
        opacity: (styleProps) => (styleProps as any).showLottie,
        transition: 'all .5s ease-in-out'
        // animation: '$fadein 2s ease-in-out'
    },
    container: {
        position: 'relative'
    }
});

export { useStyles };
