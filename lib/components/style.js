'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.useStyles = undefined;

var _styles = require('@material-ui/core/styles');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = exports.useStyles = function useStyles(width, containerMaxWidth, imageRatio, iShadow, cShadow) {
    return (0, _styles.makeStyles)(function (theme) {
        var _app;

        return {
            root: {
                height: '100%',
                width: '100vw'
            },
            app: (_app = {
                display: 'flex',
                justifyContent: 'flex-end',
                position: 'absolute',
                width: '100%',
                maxWidth: containerMaxWidth,
                height: '100%',
                maxHeight: 'calc(' + containerMaxWidth + 'px / ' + imageRatio + ' )'
            }, _defineProperty(_app, theme.breakpoints.down('xs'), {
                maxHeight: 'calc(' + width + 'px / ' + imageRatio + ')',
                maxWidth: '100%'
            }), _defineProperty(_app, 'userSelect', 'none'), _defineProperty(_app, 'overflow', 'hidden'), _defineProperty(_app, 'overscrollBehaviorY', "contain"), _defineProperty(_app, 'boxShadow', cShadow), _app),
            appExt: {
                position: "absolute",
                willChange: "transform",
                width: '100%',
                padding: 15,
                height: '100%',
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
                willChange: 'transform'
            },
            appProgress: {
                borderRadius: 6,
                width: 200
            },
            imgContainer: {
                padding: 15,
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                maxHeight: '100%',
                overflow: 'hidden',
                borderRadius: 4
            },

            appIntImg: {
                width: "100%",
                height: 'auto',
                borderRadius: 4,
                boxShadow: iShadow
            },

            extendedFab: {
                zIndex: 100,
                opacity: .8,
                margin: theme.spacing(6)
            },
            extendedIcon: {
                marginLeft: theme.spacing(2)
            },
            fabClose: {
                position: 'fixed',
                right: 0,
                top: 0,
                zIndex: 2002,
                margin: theme.spacing(2)
            },
            oversizeImg: {
                display: "block",
                height: '100%',
                marginLeft: 'auto',
                marginRight: 'auto'
            },
            rootOversize: {
                backgroundColor: '#e3e3e3',
                width: '100vw',
                height: '100vh',
                position: 'absolute',
                left: 0,
                top: 0,
                zIndex: 2000,
                overflow: 'visible'
            }
        };
    });
};