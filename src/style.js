import { makeStyles } from '@material-ui/core/styles';

    export const useStyles = (width) => {
        return makeStyles((theme) => ({
        root: {
          height: '100%',
          width: '100vw',
        },
        app: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            position: 'absolute',
            overscrollBehaviorY: "contain",
            width: '100%',
            maxWidth: 600,
            height: '100%',
            maxHeight: 400,
            [theme.breakpoints.down('xs')]: {
                maxHeight: `calc(${width}px / 1.5 )`,
            },
            userSelect: 'none',
            overflow: 'hidden',
            boxShadow: "0 5px 5px -5px rgba(10, 50, 73, 0.2), 0 37.5px 75px -37.5px rgba(0, 0, 0, 0.6)"
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
            boxShadow: "0 5px 5px -5px rgba(10, 50, 73, 0.2), 0 37.5px 75px -37.5px rgba(0, 0, 0, 0.6)"
        },
        appProgress: {
            borderRadius: 6,
            width: 200,
        },
        imgContainer:{
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
        },
    
        extendedFab: {
            position: 'absolute',
            zIndex: 100,
           
            marginBottom: theme.spacing(1),
        },
        extendedIcon: {
            marginLeft: theme.spacing(2),
        },
        fabClose: {
            position: 'fixed',
            zIndex: 400,
            margin: theme.spacing(2),
        },
        oversizeImg: {
            display: "block",
            marginLeft: 'auto',
            marginRight: 'auto'
        },
        rootOversize:{
            position: 'absolute',
            backgroundColor: '#e3e3e3',
            width: '100vw',
            height: 'auto',
            zIndex: 200,
            overflow: 'visible',
        }
    }))};

