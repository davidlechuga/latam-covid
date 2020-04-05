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

export default ({ elevateAppBar = true, children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleToggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Appbar
        onToggleDrawer={handleToggleDrawer}
        elevation={Number(elevateAppBar)}
      />
	  <Fab size="medium" color="secondary" aria-label="add" href="https://ko-fi.com/coronantine">
          <LocalCafeIcon />
	  </Fab>
      {children}
	  <Fab
          variant="extended"
          size="medium"
          color="primary"
		  aria-label="add"
		  href="https://ko-fi.com/coronantine"
        >
          <LocalCafeIcon/>
          Buy us a coffee
        </Fab>
      <Footer />
      <Drawer open={isDrawerOpen} onClose={handleToggleDrawer} />
    </ThemeProvider>
  );
};
