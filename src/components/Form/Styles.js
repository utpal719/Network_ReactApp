import image from './../../images/n2.jpg'

export const Styles = () => ({
    gridstyle:{
        display:"flex",
        width:"70%",
        color:"white",
        background:"transparent",
        paddingLeft:"40px",
        borderRadius:"2",
        borderStyle:"rounded",
        background:"rgba(255,255,255,0.2)",
        marginTop:"88px",
        padding:"10px",
        border:"3px",
        borderRadius:"15px",
        fontFamily:"'Open Sans', Tahoma, Arial, helvetica, sans-serif"
    },
    style:{
        color:"black"

    },
    inputbox:{
        backgroundColor:"white",
        width:"100%",
        height:"20%",
        color:"grey",
        borderRadius:"2px"
    },
    bg:{
        backgroundImage:`linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)), url(${image})`,
        padding:"140px"
    },
    button:{
        color:"white",
        backgroundColor: "#d9534f"
    },
    imgstyle:{
        width:"5%",
        height:"5%"
    }
});