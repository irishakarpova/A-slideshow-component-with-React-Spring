import { makeStyles } from '@material-ui/core/styles';

 export const useStyles = (width) => {
    return makeStyles((theme) => ({
        root: {
          height: '100%',
          width: '100vw',
        },
        app: {
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            width: '100%',
            maxWidth: 600,
            height: '100%',
            maxHeight: 500,
            [theme.breakpoints.down('xs')]: {
                maxHeight: `calc(${width}px / 1.5 )`,
            },
            userSelect: 'none',
            overflow: 'hidden',
            overscrollBehaviorY: "contain",
        },
        appExt: {
            position: "absolute",
            willChange: "transform",
            width: '100%',
            height: '100%',
            padding: '20px',
            overflow: 'hidden',
        },
        appInt: {
            position: 'absolute',
            width: '100%',
            height: '100%',
            zIndex: 50,
        },
        rootProgress: {
            width: '100%',
          },
        appIntProgress: {
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            width: '100%',
            height: '100%',
            willChange: 'transform',
        },
        appProgress: {
            borderRadius: 6,
            width: 200,
        },
        imgContainer:{
            padding: 30,
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            height: '100%',
            overflow: 'hidden',
            borderRadius: 4,
        },
    
        appIntImg: {
            width: "100%",
            height: 'auto',
            borderRadius: 4,
            boxShadow: "0 10px 20px -3px rgba(50, 50, 73, 0.4)",
        },
    
        extendedFab: {
            zIndex: 100,
            margin: theme.spacing(8),
        },
        extendedIcon: {
            marginLeft: theme.spacing(2),
        },
        fabClose: {
            position: 'fixed',
            right: 0,
            top: 0,
            zIndex: 2002,
            margin: theme.spacing(2),
        },
        oversizeImg: {
            display: "block",
            height:'100%',
            marginLeft: 'auto',
            marginRight: 'auto'
        },
        rootOversize:{
            backgroundColor: '#e3e3e3',
            width: '100vw',
            height: '100vh',
            position:'absolute',
            left: 0,
            top: 0,
            zIndex: 2000,
            overflow: 'visible',
        }
    }))};

