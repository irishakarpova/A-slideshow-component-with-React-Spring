
import React, { useRef, useState } from 'react'
import clamp from 'lodash-es/clamp'
import { useGesture } from 'react-use-gesture'
import { useSprings, animated } from 'react-spring'
import { useQuery } from '@apollo/client';
import Fab from '@material-ui/core/Fab';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import {useStyles} from './style'
import OversizeImage from './oversizeImg'
import useWindowDimensions from './getScreen'
import {GET_LIST} from './query'
import ProgressBar from './progressBar'

const Viewpager = () =>  {
    const index = useRef(0);
    
    const { width }  = useWindowDimensions();

    const classes = useStyles(width)();

    const { loading, error, data: serverData } = useQuery(GET_LIST);

    if(loading) { <ProgressBar /> }
        
    const getImages = () => {
        const data = serverData ? Object.values(serverData)[0] : [];
        return data;
    }

    const getViewerSize = () => {
        let viewerSize = width > 600 ?  570 : width - 30
        return viewerSize;
    }
    
    const [prevWidth, setPrevWidth] = useState(0);

    const [image, setImage] = useSprings(
        getImages().length, i => ({ x: i * getViewerSize(), sc: 1, display: 'block' }))
    
    const [ind, setInd] = React.useState(0)

    const [scrollFiredOn, setScrollFiredOn] = useState(0);
    
    const applyImage = (down, distance, xDelta) => {
        setImage(i => {
            if (i < index.current - 1 || i > index.current + 1) return { display: 'none' }
            const x = (i - index.current) * getViewerSize()   + (down ? xDelta : 0)
            const sc = down ? 1 - distance / getViewerSize() / 2  : 1
            return { x, sc, display: 'block' }
        })
    }

    const bind = useGesture(({ down, delta: [xDelta], direction: [xDir], distance, cancel }) => {
        if (down && distance > getViewerSize() / 3 && ((new Date()).getTime() - scrollFiredOn) > 500) {
            setScrollFiredOn((new Date()).getTime());
            const ii = clamp(index.current + (xDir > 0 ? -1 : 1), 0, getImages().length - 1);
            down = false;
            cancel((index.current = ii))
        }
        applyImage(down, distance, xDelta);
        setInd(index.current)
    })


    const [currentImg, setCurrentImg] = useState(null)
    const [isOpenCurrentImg, setIsOpenCurrentImg] = useState(false)  

    if (error) return `Error! ${error.message}`; 
      
    const handleClick = (currentI) => {
        setCurrentImg(currentI)    
        setIsOpenCurrentImg(true)
    }
    const handleClose = () => {
        setIsOpenCurrentImg()
    }

    const data = getImages();

    if (prevWidth !== width) {
        applyImage(true, 1, 1);
        setPrevWidth(width);
    }
    

    return(
        <>
            {isOpenCurrentImg ? (
                <OversizeImage 
                    currentImg={currentImg} 
                    handleClose={handleClose} />
            ): null}

            <div className={classes.app}>
                <Fab 
                    className={classes.extendedFab} 
                    aria-label="info" 
                    variant="extended"  
                    size= {width > 600 ? 'large': 'small'}
                    onClick={ () => { handleClick(data[ind])} }>
                        {`${ind + 1}  / ${data.length}`}
                    <AspectRatioIcon className={classes.extendedIcon} />
                </Fab>
                {image.map(({ x, display, sc }, i) => (
                    i < ind + 2 ? (
                        <animated.picture key={i} {...bind()} 
                            className={classes.appExt} 
                            style={{display, transform: x !== undefined && x.interpolate(x => `translate3d(${x}px,0,0)`)}}>
                            <>
                                <animated.source 
                                    className={classes.appInt} 
                                    srcSet= {data[i].path} 
                                    alt={data[i].label} />
                                <animated.div className={classes.imgContainer}>
                                    <animated.img 
                                        className={classes.appIntImg} 
                                        src={data[i].path} 
                                        alt={data[i].label} 
                                        style={{ display, transform: sc !== undefined && sc.interpolate(s => `scale(${s})`)}} />
                                </animated.div>
                            </> 
                        </animated.picture>
                    ): null
                ))}
            </div>
        </>
    )
}
export default Viewpager;

