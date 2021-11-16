import { React, useState, useEffect, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useAuth0 } from "@auth0/auth0-react";
import { Grid, Typography,Container } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import Credenciales from "../../config/AuthCredentials";
import homeStyles from './HomeStyles';

// Material UI components

const Home = () => {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } =
    useAuth0();
  const classes = homeStyles();
  const [userMetadata, setUserMetadata] = useState(null);

  const [userData, setUserData] = useContext(UserContext);

  //llamando a la API para obtener la metadata
  useEffect(() => {
    const getUserMetadata = async () => {
      try {
        const accessToken = await getAccessTokenSilently({
          audience: Credenciales.audiencia,
          scope: "read:current_user",
        });


        console.log("Token:", accessToken);

        const userDetailsByIdUrl = `${Credenciales.audiencia}users/${user.sub}`;

        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const { user_metadata } = await metadataResponse.json();
        console.log("MetaData:", user_metadata);
        setUserMetadata(user_metadata);
        setUserData({
          usuario_data: user,
          user_token: accessToken,
          usuario_metadata: user_metadata,
        });
        localStorage.setItem(
          "session",
          JSON.stringify({
            usuario_data: user,
            user_token: accessToken,
            usuario_metadata: user_metadata,
          })
        );
      } catch (e) {
        console.log(e.message);
      }
    };

    getUserMetadata();
  }, [user, getAccessTokenSilently]);

  return (
    <Container maxWidth="fluid"
      className={classes.container}
    >
      {isLoading && (
        <Grid
          container
          direction="column"
          alignItems="center"
          style={{ paddingTop: "10rem" }}
        >
          <CircularProgress size={90} style={{ color: "#ffffff" }} />
          <Typography
            variant="h5"
            style={{ color: "#ffffff", marginTop: "2rem" }}
          >
            Ingresando...
          </Typography>
        </Grid>
      )}
    </Container>
  );
};
export default Home;
