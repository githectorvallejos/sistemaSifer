import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
    root: {
        justifyContent: "center",
        minHeight: "90vh",
        },
    container: {
        marginTop: "5rem",
        height: "90%",
    backgroundImage: `url("https://www.sifergas.com.ar/dataEst/images/11.jpg")`,
        backgroundSize: "cover",
        display: "grid",
    placeContent: "center",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
        },
    div: {
        display: "flex",
        flexDirection: "column",
        alignItems:"center"
    },
    buttonBlock: {
        width: "100%",
        },
    loginBackground: {
        justifyContent: "center",
        minHeight: "30vh",
        padding: "50px"
        },
    appBar : {
        position: "static",
         alignitems: "center",
         color: "white",
         backgroundColor: "primary",
         width: "310px",
         borderTopRightRadius: "8px",
         borderTopLeftRadius: "8px",
         
    }
}));
