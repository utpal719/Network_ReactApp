import image from './interior.jpg'

export const Styles = () => ({
    bg:{
    backgroundImage:`url(${image})`,
    height:"300%"
    },
    gridStyles:{
        display:"flex",
        justifyContent:"space-evenly",
        alignItems:"center"
    }
});