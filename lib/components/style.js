'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.useStyles = undefined;

var _styles = require('@material-ui/core/styles');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = exports.useStyles = function useStyles(width) {
    return (0, _styles.makeStyles)(function (theme) {
        var _app;

        return {
            root: {
                height: '100%',
                width: '100vw'
            },
            app: (_app = {
                background: '#fff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-end',
                position: 'absolute',
                overscrollBehaviorY: "contain",
                width: '100%',
                maxWidth: 600,
                height: '100%',
                maxHeight: 400
            }, _defineProperty(_app, theme.breakpoints.down('xs'), {
                maxHeight: 'calc(' + width + 'px / 1.5 )'
            }), _defineProperty(_app, 'userSelect', 'none'), _defineProperty(_app, 'overflow', 'hidden'), _defineProperty(_app, 'boxShadow', "0 5px 5px -5px rgba(10, 50, 73, 0.2), 0 37.5px 75px -37.5px rgba(0, 0, 0, 0.6)"), _app),
            appExt: {
                position: "absolute",
                willChange: "transform",
                width: '100%',
                height: '100%',
                padding: '20px',
                overflow: 'hidden'
            },
            appInt: {
                position: 'absolute',
                width: '100%',
                height: '100%',
                zIndex: 50
            },
            rootProgress: {
                width: '100%'
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
                width: 200
            },
            imgContainer: {
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                height: '100%',
                overflow: 'hidden',
                borderRadius: 4
            },

            appIntImg: {
                width: "100%",
                height: 'auto',
                borderRadius: 4
            },

            extendedFab: {
                zIndex: 100,
                marginBottom: theme.spacing(1)
            },
            extendedIcon: {
                marginLeft: theme.spacing(2)
            },
            fabClose: {
                position: 'fixed',
                zIndex: 2002,
                margin: theme.spacing(2)
            },
            oversizeImg: {
                display: "block",
                width: '100%',
                marginLeft: 'auto',
                marginRight: 'auto'
            },
            rootOversize: {
                backgroundColor: '#e3e3e3',
                width: '100vw',
                height: 'auto',
                position: 'absolute',
                left: 0,
                top: 0,
                zIndex: 2000,
                overflow: 'visible'
            }
        };
    });
};