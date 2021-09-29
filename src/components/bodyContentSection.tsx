import { useStyles } from '../styles/bodyContentStyles';

export default function BodyContentSection(props: any) {
    const image = props.image;
    const info = props.info;

    const styleProps = {};
    const classes = useStyles(styleProps);

    return (
        <div className={classes.bodyContent}>
            <div className={classes.textSection}>
                <div className={classes.textSectionContainer}>
                    <span className={classes.title}>{info.title}</span>
                    <span className={classes.subTitle}>{info.subTitle}</span>
                    <span className={classes.link}>{info.buttonText}</span>
                </div>
            </div>
            <div className={classes.textSection}>
                <div className={classes.commentSectionContainer}>
                    <span className={classes.comment}>{info.comment}</span>
                    <div className={classes.commenterContainer}>
                        <img
                            src={image}
                            alt="commenter"
                            className={classes.commentImage}
                        ></img>
                        <div className={classes.commenterText}>
                            <span className={classes.commentName}>
                                {info.commenter}
                            </span>

                            <span className={classes.commentJob}>
                                {info.commenterTitle}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
