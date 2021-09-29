import { useState } from 'react';
import Lottie from 'lottie-react';
import VisibilitySensor from 'react-visibility-sensor';

import BodyContentSection from './bodyContentSection';
import LottieScrollSection from './lottieScrollSection';
import { useStyles } from '../styles/bodyStyles';

import techPeopleAnimation from '../lotties/76039-happy-tech-people.json';
import OnLottieScrollChange from '../helpers/onLottieScrollChange';

import danny from '../images/danny.png';
import kevin from '../images/kevin.png';

import { researchInfo, uiuxInfo } from '../models/bodycontentinfo/Data';

export default function Body(props: any) {
    const [lottieAnimation, setLottieAnimation] = useState({});
    const [showLottie, setShowLottie] = useState(0);
    const styleProps = {};
    const classes = useStyles(styleProps);

    return (
        <div className={classes.body}>
            <div className={classes.header}>
                <span className={classes.headerTitle}>
                    Nothing great is made alone.
                </span>
                <span className={classes.headerSubtitle}>
                    Figma connects everyone in the design process so teams can
                    deliver better products, faster.
                </span>
                <div className={classes.headerButtonWrapper}>
                    <span className={classes.headerButton}>
                        <span className={classes.headerButtonText}>
                            Try Figma for free
                        </span>
                    </span>
                </div>
            </div>
            <Lottie
                animationData={techPeopleAnimation}
                loop={false}
                autoplay={true}
                className={classes.lottie}
            ></Lottie>
            <div className={classes.container}>
                <LottieScrollSection
                    lottieAnimation={lottieAnimation}
                    showLottie={showLottie}
                ></LottieScrollSection>
                <VisibilitySensor
                    partialVisibility={true}
                    onChange={(e) =>
                        OnLottieScrollChange(
                            'research',
                            e,
                            setShowLottie,
                            setLottieAnimation
                        )
                    }
                    offset={{ top: 400 }}
                >
                    <BodyContentSection
                        image={danny}
                        info={researchInfo}
                    ></BodyContentSection>
                </VisibilitySensor>
                <VisibilitySensor
                    partialVisibility={true}
                    onChange={(e) =>
                        OnLottieScrollChange(
                            'uiux',
                            e,
                            setShowLottie,
                            setLottieAnimation
                        )
                    }
                    offset={{ bottom: 400 }}
                >
                    <BodyContentSection
                        image={kevin}
                        info={uiuxInfo}
                    ></BodyContentSection>
                </VisibilitySensor>
            </div>
        </div>
    );
}
