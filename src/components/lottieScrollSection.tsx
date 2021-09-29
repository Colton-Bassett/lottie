import { useRef } from 'react';
import { useStyles } from '../styles/lottieScrollStyles';
import Lottie, {
    InteractivityProps,
    LottieRefCurrentProps
} from 'lottie-react';

export default function LottieScrollSection(props: any) {
    const lottieAnimation = props.lottieAnimation;
    const lottieRef = useRef<LottieRefCurrentProps>(null);
    const showLottie = props.showLottie;

    const styleProps = { showLottie };
    const classes = useStyles(styleProps);

    const lottieInteractivity = {
        mode: 'scroll',
        actions: [
            {
                visibility: [0, 0.5],
                type: 'play'
            }
        ]
    };

    // stops animation from playing again while scrolling
    const handleAnimationPlayed = () => {
        // lottieRef.current?.setSpeed(0);
    };

    return (
        <div className={classes.lottieSection}>
            <div className={classes.lottieWrapper}>
                <div className={classes.lottieContainer}>
                    <Lottie
                        animationData={lottieAnimation}
                        lottieRef={lottieRef}
                        loop={false}
                        autoplay={true}
                        className={classes.scrollLottie}
                        onComplete={handleAnimationPlayed}
                        interactivity={
                            lottieInteractivity as InteractivityProps
                        }
                    ></Lottie>
                </div>
            </div>
        </div>
    );
}
