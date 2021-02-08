import React, { useEffect, useRef } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Typography, Button, Hidden, CssBaseline } from "@material-ui/core"
import ShapeDivider from "../Custom/ShapeDivider/ShapeDivider"
import Img from "gatsby-image"
import { gsap } from "gsap"

const useStyles = makeStyles(({ palette, breakpoints, spacing }) => ({
  heroGrid: {
    display: "grid",
    gridTemplateAreas: "'hero'",
    height: "100vh",
    width: "100%",
    minHeight: 600,
  },
  heroSection: {
    gridArea: "hero",
    position: "relative",
    overflow: "hidden",
    height: "100%",
    minHeight: 600,
    width: "100%",
    paddingTop: 100,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "end",
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5))`,
    backgroundPosition: "top center",
    backgroundSize: "cover",
    textAlign: "center",
    [breakpoints.only("xs")]: {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6))`,
    },
    "& h1": {
      fontFamily: '"La Colmenita"',
      color: palette.secondary.light,
      [breakpoints.only("xs")]: {
        fontSize: 70,
        padding: "10px 20px",
      },
      [breakpoints.up("xl")]: {
        fontSize: 110,
        padding: "50px 20px 10px 20px",
      },
    },
    "& .hero-description": {
      padding: "28px 65px",
      color: "#FFF",
      fontFamily: '"Segoe Script"',
      fontSize: 20,
      maxWidth: 1263,
      [breakpoints.only("xs")]: {
        fontSize: 16,
        padding: "32px 16px",
      },
    },
    "& button": {
      color: palette.secondary.light,
      padding: "8px 30px",
      border: `${palette.secondary.light} 2px solid`,
      fontWeight: 600,
      fontSize: 16,
      transition: "all 200ms ease-in",
      "& .hero-btn": {
        display: "",
        marginLeft: spacing(2),
      },
    },
    "& button:hover": {
      color: "#FFF",
      "& .hero-btn": {
        display: "none",
      },
    },
  },
  heroImg: {
    gridArea: "hero",
    objectFit: 'cover',
    objectPosition: '50% 50%',
    height: '100%',
    width: '100%',
    position: 'initial',
  }
}))

const scrollToSection = (section, additional) => {
  const anchor = document.getElementById(`${section}`).offsetTop + additional
  window.scroll({
    top: anchor,
    left: 0,
    behavior: "smooth",
  })
}

let heroTL = gsap.timeline({delay: 1})

export default function Hero({ ImageFile }) {
  const classes = useStyles();
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);

  const showHeroText = () => {
    heroTL.from([titleRef.current, descriptionRef.current, buttonRef.current], {
      duration: 1,
      y: 20,
      opacity: 0,
      stagger: .1,
      transformOrigin: "center center",
    })
  }

  useEffect(() => {
    showHeroText();
    return showHeroText
  }, [])

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.heroGrid}>
        <Img className={classes.heroImg} fluid={ImageFile.childImageSharp.fluid} loading="eager" />
        <div className={classes.heroSection}>
          <Typography variant="h1" ref={titleRef}>La Colmenita de Cuba</Typography>
          <Typography className="hero-description" ref={descriptionRef}>
            La Colmenita es un proyecto pedagógico y artístico donde niñas y
            niños jugando al teatro, la música y la danza, priorizan la
            formación de valores humanos.
          </Typography>
          <div ref={buttonRef}>
            <Button onClick={() => scrollToSection("nuestras-obras-section", 0)}>
              Nuestras Obras
            </Button>          
          </div>
          <ShapeDivider color="#FFF" />
        </div>
      </div>
    </React.Fragment>
  )
}
