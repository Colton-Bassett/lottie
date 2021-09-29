import { makeStyles } from '@material-ui/core/styles';
// import globalStyles from './globalStyles';

const useStyles = makeStyles({
    body: {},
    header: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '0px 20px'
    },
    headerTitle: {
        maxWidth: '700px',
        fontSize: '80px',
        fontWeight: 'bold',
        letterSpacing: 2,
        marginTop: '50px',
        marginBottom: '50px'
    },
    headerSubtitle: {
        maxWidth: '500px',
        fontSize: '22px',
        letterSpacing: 1,
        marginBottom: '40px'
    },
    headerButtonWrapper: {
        bottom: '0px',
        position: 'relative',
        '&:hover': {
            bottom: '2px'
        },
        cursor: 'pointer'
    },
    headerButton: {
        minHeight: '48px',
        minWidth: '200px',
        borderRadius: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    headerButtonText: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '8px 16px',
        fontSize: '18px',
        color: 'white',
        fontWeight: 'bold'
    },
    lottie: {
        height: '1000px'
    },
    container: {
        position: 'relative'
    }
});

export { useStyles };
