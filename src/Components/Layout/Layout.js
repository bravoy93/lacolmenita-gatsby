import React, {useState} from "react"
// import Nav from "../Nav/Nav"
// import Backdrop from "../Backdrop/Backdrop"
// import Toolbar from "../Toolbar/Toolbar"
// import Footer from "../Footer/Footer"
import "typeface-roboto"

export default function Layout({children}) {
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
    <>      
      {/* <Nav 
        toolbarToggleClickHandler={toolbarToggleClickHandler}
        scrolled={scrolled}
        to_top={toTop}/>
      <div id="nav"/>
      {children}
      {backdrop}
      <Toolbar
        show={toolbarOpen}
        backdropClickHandler={backdropClickHandler}
        to_top={toTop}/>
      <Footer to_top={toTop}/> */}
    </>
  )
}