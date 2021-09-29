import researchAnimation from '../lotties/75917-research.json';
import uiuixAnimation from '../lotties/75657-uiux-design-icon-lottie-animation.json';

export default function OnLottieScrollChange(
    item: string,
    isVisible: any,
    setShowLottie: any,
    setLottieAnimation: any
) {
    if (isVisible && item === 'research') {
        setShowLottie(0);
        let fadeIn = setTimeout(() => {
            setLottieAnimation(researchAnimation);
            setShowLottie(1);
        }, 300);
    }
    if (isVisible && item === 'uiux') {
        setShowLottie(0);
        let fadeIn = setTimeout(() => {
            setLottieAnimation(uiuixAnimation);
            setShowLottie(1);
        }, 300);
    }
}
