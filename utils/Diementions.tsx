import { Dimensions } from "react-native"

const Width = (num: number) =>{
    const fullWidth = Dimensions.get('window').width
    if (num >= 100){
        return fullWidth
    }else if (num <=0){
        return 0
    }else {
        return fullWidth * (num / 100)
    }
}

const Height = (num: number) =>{
    const fullHeight = Dimensions.get('screen').height
    if (num >= 100){
        return fullHeight
    }else if (num <=0){
        return 0
    }else {
        return fullHeight * (num / 100)
    }
}

export { Width, Height }