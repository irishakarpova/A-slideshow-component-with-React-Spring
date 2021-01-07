import React, { useRef, useState } from 'react'
import clamp from 'lodash-es/clamp'
import { useGesture } from 'react-use-gesture'
import { useSprings, animated } from 'react-spring'
import Fab from '@material-ui/core/Fab';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import {useStyles} from './style_2'
import CloseIcon from '@material-ui/icons/Close';
import Paper from '@material-ui/core/Paper';
import useWindowDimensions from './utils/getScreen'

const serverData = [
    {
		id: "10",
        label: 'Keel-billed toucan',
        path: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Keel-billed_Toucan_%2816201157519%29.jpg'
    },
    {
		id: "20",
        label: 'Rainbow_Lorikeet.',
        path: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Rainbow_Lorikeet_%28Trichoglossus_moluccanus%29_at_Adelaide_Airport_1.jpg'
    },
    {
		id: "30",
        label: 'Australian ringneck',
        path: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Mallee_ringneck_42_-_Patchewollock.jpg/1920px-Mallee_ringneck_42_-_Patchewollock.jpg'
    },
    {
		id: "40",
        label: 'Rainbow Lorikeet',
        path: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Atlantic_Puffin_Fratercula_arctica.jpg'
    },
    {
		id: "50",
        label: 'Rainbow_Lorikeet.',
        path: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/BlueAndYellowMacaw_AraArarauna.jpg'
    },
    {
		id: "60",
        label: 'Rainbow_Lorikeet.',
        path: 'https://upload.wikimedia.org/wikipedia/commons/1/13/Trichoglossus_moluccanus_with_open_wings%2C_Brisbane.jpg'
    },
   
]

const SlideShow = () =>  {

    const index = useRef(0);
    
    const { width }  = useWindowDimensions();

    const classes = useStyles(width)();
        
    const getImages = () => {
        const data = Object.values(serverData);
        return data;
    }

    const getViewerSize = () => {
        let viewerSize = width > 600 ?  width : width - 30
        return viewerSize;
    }
    
    const [prevWidth, setPrevWidth] = useState(0);

    const [image, setImage] = useSprings(
        getImages().length, i => ({ x: i * getViewerSize(), y: 0, sc: 1, display: 'block' }))
    
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
    
    const bind = useGesture({
        config: {
            event: {
                passive: false,
            },
        },    
        onAction: ({ event, down, delta: [xDelta], direction: [xDir], distance, cancel}) => {
            event.preventDefault();
            if (down && distance > getViewerSize() / 3
            && ((new Date()).getTime() - scrollFiredOn) > 500) {
                setScrollFiredOn((new Date()).getTime());
                const ii = clamp(index.current + (xDir > 0 ? -1 : 1), 0, getImages().length - 1);
      
                cancel((index.current = ii))
            }
            applyImage(down, distance, xDelta);
            setInd(index.current)
        }
     })

    React.useEffect(bind, [bind]) 

    const [currentImg, setCurrentImg] = useState(null)
    const [isOpenCurrentImg, setIsOpenCurrentImg] = useState(false)  

      
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
        <React.Fragment>
            {isOpenCurrentImg ? (
            <Paper>
                <Fab 
                    onClick = {handleClose}
                    className={classes.fabClose}>
                    <CloseIcon/>
                </Fab>
                <div className={classes.rootOversize}>        
                    <img 
                        className={classes.oversizeImg}
                        src={currentImg.path} 
                        alt={currentImg.label}
                    />
                </div>
            </Paper>
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
                            <React.Fragment>
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
                            </React.Fragment> 
                        </animated.picture>
                    ): null
                ))}
            </div>
        </React.Fragment>
    )
}
export default SlideShow;

