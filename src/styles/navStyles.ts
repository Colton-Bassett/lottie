import { makeStyles } from '@material-ui/core/styles';
import globalStyles from '../styles/globalStyles';

const useStyles = makeStyles({
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '24px 48px'
        // width: '100%'
    },
    logo: {
        height: '57px'
    },
    menuBar: {
        display: 'flex',
        alignItems: 'center',
        minHeight: '48px'
    },
    link: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '0px',
        position: 'relative',
        cursor: 'pointer',
        '&:hover > *': {
            borderBottom: '2px solid black'
        }
    },
    linkName: {
        margin: '0px 16px',
        padding: '4px 0px',

        fontSize: globalStyles.bodyTextMd
    },
    signUpLinkWrapper: {
        paddingLeft: '12px',
        position: 'relative',
        '&:hover': {
            bottom: '2px'
        }
    },
    signUpLink: {
        minHeight: '48px',
        minWidth: '110px',
        borderRadius: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        cursor: 'pointer'
    },
    signUpLinkName: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '8px 16px',
        fontSize: globalStyles.bodyTextMd,
        color: 'white',
        fontWeight: 'bold'
    }
});

export { useStyles };
