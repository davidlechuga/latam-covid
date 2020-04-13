import React, { useState } from "react";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../style/theme";
import Appbar from "../components/Appbar";
import Drawer from "../components/Drawer";
import Footer from "../components/Footer";
import "../style/layout.css";
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	fab: {
	  margin: theme.spacing.unit,
	  position: "fixed",
	  bottom: theme.spacing.unit * 2,
	  right: theme.spacing.unit * 3,
	  zIndex:9999
	},
  }));

export default ({ elevateAppBar = true, children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleToggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Appbar
        onToggleDrawer={handleToggleDrawer}
        elevation={Number(elevateAppBar)}
      />
	  
      {children}
	  <Fab size="medium" color="secondary" aria-label="add" href="https://ko-fi.com/coronantine" className={classes.fab}>
          <LocalCafeIcon />
	  </Fab>
      <Footer />
      <Drawer open={isDrawerOpen} onClose={handleToggleDrawer} />
    </ThemeProvider>
  );
};
