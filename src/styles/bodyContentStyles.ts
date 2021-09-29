import { makeStyles } from '@material-ui/core/styles';
import globalStyles from './globalStyles';

const useStyles = makeStyles({
    bodyContent: {
        display: 'flex',
        flexDirection: 'column',
        minWidth: '100%'
    },
    section: {
        display: 'flex',
        minWidth: '100%'
    },
    textSection: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        maxHeight: '100vh',
        width: '40%',
        padding: '70px',
        paddingTop: '0px'
    },
    textSectionContainer: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '380px',
        textAlign: 'left'
    },
    title: {
        fontSize: '36px',
        fontWeight: 'bold',
        marginBottom: '20px'
    },
    subTitle: {
        fontSize: '24px',
        marginBottom: '20px'
    },
    link: {
        fontSize: '24px',
        fontWeight: 'bold',
        color: 'purple'
    },
    commentSectionContainer: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '330px',
        textAlign: 'left',
        borderRadius: '10px',
        border: '1px solid rgb(204, 204, 204)',
        padding: '20px',
        filter: 'drop-shadow(rgba(0, 0, 0, 0.067) 0px 1px 6px)'
    },
    comment: {
        fontSize: '18px',
        marginBottom: '20px',
        lineHeight: '28px'
    },
    commenterContainer: {
        display: 'flex',
        alignItems: 'flex-start'
    },
    commentImage: {
        height: '44px',
        width: '44px',
        marginRight: '16px',
        border: '3px solid #a259ff',
        borderRadius: '25px'
    },
    commenterText: {
        display: 'flex',
        flexDirection: 'column'
    },
    commentName: {
        fontWeight: 'bold',
        fontSize: globalStyles.bodyTextMd
    },
    commentJob: {
        fontSize: globalStyles.bodyTextMd
    }
});

export { useStyles };
