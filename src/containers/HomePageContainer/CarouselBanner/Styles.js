import image from './../../../images/interior.jpg'

export const Styles = () => ({
    bg:{
    backgroundImage:`url(${image})`
    },
    gridStyles:{
        display:"flex",
        justifyContent:"space-evenly",
        alignItems:"center"
    },
    imageStyle:{
        width:"30%"
        },
    inner:{
        textAlign:"center",
        color:"white",
        fontWeight:"400",
        fontSize:"14"
    }
});