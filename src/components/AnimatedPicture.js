import React, { useRef, useState } from 'react'
import { useDrag } from 'react-use-gesture'
import { useSprings, animated } from 'react-spring'
import {useStyles} from './style'
import clamp from 'lodash-es/clamp'
import Fab from '@material-ui/core/Fab';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import CloseIcon from '@material-ui/icons/Close';
import Paper from '@material-ui/core/Paper';
import useWindowDimensions from './utils/getScreen'
import { AppStateValue } from './appStateValue'


const AnimatedPicure = (props ) =>  {

    const { serverData,
        containerMaxWidth, 
        containerRatio,
        containerShadow,
        imageShadow,
        showNextPrev 
    } = props;  

    const width = useWindowDimensions();

    const getShadowContainer = ()  => {
        let contShadow = (containerShadow === true) 
            ? "0 10px 25px -20px rgba(0, 0, 0, 0.6)" 
            : 'none'
        return contShadow  
    }
    const getShadowImage = ()   => {
        let imgShadow = (imageShadow === true) 
            ? "0 0 15px rgba(50, 50, 73, 0.4)" 
            : 'none'
        return imgShadow  
    }

    let cShadow = getShadowContainer()
    let iShadow = getShadowImage()

    const classes = useStyles(
        width, 
        containerMaxWidth,
        containerRatio,
        iShadow,
        cShadow)();

    const i = props.i;

    console.log(props)
    const display = props.display;
    const x = props.x;
    const bind = props.bind;
    return(
        <animated.picture key={i} {...bind()} 
            className={classes.appExt} 
            style={{display, x}}>
            <React.Fragment>
                <animated.source 
                    className={classes.appInt} 
                    srcSet= {props.data[i].path} 
                />
                <animated.div className={classes.imgContainer}>
                    <animated.img 
                        className={classes.appIntImg} 
                        src={props.data[i].path} 
                        alt={props.data[i].label} 
                        style={props.scale} />
                </animated.div>
            </React.Fragment> 
        </animated.picture>      
    )
}
export default AnimatedPicure;

