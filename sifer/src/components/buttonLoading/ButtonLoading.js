import { Button, CircularProgress, Grid } from "@material-ui/core";

const ButtonLoading = (props) => {
  const { isLoading, sizeLoading, onClick, color, children } = props;
  return (
    <Button
      variant="contained"
      color={color ? color : "primary"}
      onClick={!isLoading ? onClick : null}
      {...props}
    >
      {isLoading ? (
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{ width: "7vw" }}
        >
          <CircularProgress
            size={sizeLoading ? sizeLoading : "1.5rem"}
            style={{ color: "white" }}
          />
        </Grid>
      ) : (
        children
      )}
    </Button>
  );
};

export default ButtonLoading;
