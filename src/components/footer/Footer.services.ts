
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: any) => ({
  rootBox: {
    justifyContent: "center",
    textAlign: "center",
  },
  footerNav: {
    color: "#fff",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginRight: "auto",
    marginLeft: theme.spacing(3),
    marginBottom: theme.spacing(0),

    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginLeft: "auto",
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(2),
    },
  },
  footerLink: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(2),
    },
  },
}));