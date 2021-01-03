
import React, { useRef, useState } from 'react'
import clamp from 'lodash-es/clamp'
import { useGesture } from 'react-use-gesture'
import { useSprings, animated } from 'react-spring'
import { useQuery } from '@apollo/client';
import Fab from '@material-ui/core/Fab';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import LinearProgress from './progressBar';
import {useStyles} from './style'
import OversizeImage from './oversizeImg'
import useWindowDimensions from './getScreen'
import {GET_LIST} from './query'

export default function Viewpager() {
    const index = useRef(0);
    const classes = useStyles();
    const { loading, error, data: serverData } = useQuery(GET_LIST);

    const getImages = () => {
        const data = serverData ? Object.values(serverData)[0] : [];
        return data;
    }

    const width  = useWindowDimensions();

    const getViewerSize = () => {
        let viewerSize = width > 850 ?  540 : width
        return viewerSize;
    }
    
    const [image, setImage] = useSprings(
        getImages().length, i => ({ x: i * getViewerSize(), sc: 1, display: 'block' }))
        
    const [ind, setInd] = React.useState(0)

    const [scrollFiredOn, setScrollFiredOn] = React.useState(0);
    const bind = useGesture(({ down, delta: [xDelta], direction: [xDir], distance, cancel }) => {
        if (down && distance > getViewerSize() / 2 && ((new Date()).getTime() - scrollFiredOn) > 500) {
            console.log(scrollFiredOn, (new Date()).getTime());
            setScrollFiredOn((new Date()).getTime());
            const ii = clamp(index.current + (xDir > 0 ? -1 : 1), 0, getImages().length - 1);
            console.log(ii, distance)
            down = false;
            cancel((index.current = ii))
        }
        setImage(i => {
            if (i < index.current - 1 || i > index.current + 1) return { display: 'none' }
            const x = (i - index.current) * getViewerSize()   + (down ? xDelta : 0)
            const sc = down ? 1 - distance / getViewerSize() / 2  : 1
            return { x, sc, display: 'block' }
        })
        setInd(index.current)
    })

    const [currentImg, setCurrentImg] = useState(null)
    const [isOpenCurrentImg, setIsOpenCurrentImg] = useState(false)  

    
    if (error) return `Error! ${error.message}`;
    if(loading) return <p>Loading...</p>;
   
    
    const handleClick = (currentI) => {
        setCurrentImg(currentI)    
        setIsOpenCurrentImg(true)
    }
    const handleClose = () => {
        setIsOpenCurrentImg()
    }

    const data = getImages();

    const ProgressBar = animated(LinearProgress)
  
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
                    variant="extended"  
                    aria-label="info" 
                    onClick={ () => { handleClick(data[ind])} }>
                        {`${ind + 1}  / ${data.length}`}
                    <AspectRatioIcon className={classes.extendedIcon} />
                </Fab>
                {image.map(({ x, display, sc }, i) => (
                    <animated.picture key={i} {...bind()} className={classes.appExt} style={{ display, transform: x.interpolate(x => `translate3d(${x}px,0,0)`) }}>
                            {i < ind + 2 ? <>
                                <animated.source className={classes.appInt} srcSet= {data[i].path} alt={data[i].label} />
                                <animated.img className={classes.appIntImg} 
                                    src={data[i].path} alt={data[i].label} style={{ display,  transform: sc.interpolate(s => `scale(${s})`)}} />
                                </> 
                                
                            : <ProgressBar
                                    className={classes.appProgress} 
                                    variant="determinate" />
                        }
                    </animated.picture>
                ))}
            </div>
        </>
    )
}
