import React, {/*useState*/} from "react"
import Nav from "../Nav/Nav"
import { /*makeStyles,*/ ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
// import Backdrop from "../Backdrop/Backdrop"
// import Toolbar from "../Toolbar/Toolbar"
import Footer from "../Footer/Footer";
import "fontsource-asap/400.css";
import "fontsource-asap/600.css";
import theme from "../../theme";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import PropTypes from "prop-types"

function Layout({children, pageSelected, coloredNavbar}) {
  const scrolled = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50
  });

  // const [pageSelected, setPageSelected] = useState()

  // const [toolbarOpen, setToolbarOpen] = useState(false);
  // const [scrolled, setScrolled] = useState(false);  

  // const scrollListener = () => {
  //   setScrolled(window.scrollY > 80)
  // };

  // React.useEffect(() => {
  //   window.addEventListener("scroll", scrollListener)
  //   return () => window.removeEventListener("scroll", scrollListener)
  // },[]);

  // const toTop = () => {
  //   handleScrollToElement(/*"nav"*/);
  // };

  // const handleScrollToElement = (/*elRef*/) => {
  //   // const tesNode = ReactDOM.findDOMNode(this.refs[elRef]);
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // }
  
  // const toolbarToggleClickHandler = () => {
  //   setToolbarOpen(!toolbarOpen)
  //   console.log('toolbarToggleClickHandler clickeado')
  // };
  
  // const backdropClickHandler = () => {
  //   setToolbarOpen(false);
  // };

  // let backdrop;
  // if (toolbarOpen) {
  //   backdrop = <Backdrop backdropClickHandler={backdropClickHandler} />;
  // }

  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
      <Nav scrolled={scrolled || coloredNavbar} pageSelected={pageSelected}/>
      {/*<Nav */}
      {/*  toolbarToggleClickHandler={toolbarToggleClickHandler}*/}
      {/*  scrolled={scrolled}*/}
      {/*  to_top={toTop}/>*/}
      {/*<div id="nav"/>*/}
      {children}
      {/*{backdrop}*/}
      {/*<Toolbar*/}
      {/*  show={toolbarOpen}*/}
      {/*  backdropClickHandler={backdropClickHandler}*/}
      {/*  to_top={toTop}/>*/}
      <Footer/>
    </ThemeProvider>
    </React.Fragment>    
  )
}

Layout.propTypes = {
  pageSelected: PropTypes.string,
  coloredNavbar: PropTypes.bool
}

export default Layout