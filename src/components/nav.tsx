import { useStyles } from '../styles/navStyles';
import logo from '../logo.svg';

export default function Nav(props: any) {
    const styleProps = {};
    const classes = useStyles(styleProps);

    return (
        <div className={classes.nav}>
            <img className={classes.logo} src={logo} alt="logo"></img>
            <div className={classes.menuBar}>
                <div className={classes.link}>
                    <span className={classes.linkName}>Products</span>
                </div>
                <div className={classes.link}>
                    <span className={classes.linkName}>Enterprise</span>
                </div>
                <div className={classes.link}>
                    <span className={classes.linkName}>Pricing</span>
                </div>
                <div className={classes.link}>
                    <span className={classes.linkName}>Community</span>
                </div>
                <div className={classes.link}>
                    <span className={classes.linkName}>Company</span>
                </div>
                <div className={classes.link}>
                    <span className={classes.linkName}>Log in</span>
                </div>
                <div className={classes.signUpLinkWrapper}>
                    <div className={classes.signUpLink}>
                        <span className={classes.signUpLinkName}>Sign up</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
