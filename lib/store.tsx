import { createContext } from  'react'
import { images } from './images'

interface AppStateValue {
    serverData: Array<
        {
            id: string
            label: string
            path: string
        } 
    >
    containerRatio: number
    containerMaxWidth: number
    containerShadow: boolean
    imageShadow: boolean
    showNextPrev: boolean
}

const defaultStateValue: AppStateValue = {
    serverData: images,
    containerRatio: 1.5,
    containerMaxWidth: 800,
    containerShadow: true,
    imageShadow: true,
    showNextPrev: true,
};

export const AppStateContext = createContext(defaultStateValue);