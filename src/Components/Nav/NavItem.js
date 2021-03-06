import React from "react"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles((theme) => ({
    root: {
      textDecoration: "none",
      fontSize: "18px",
      color: theme.palette.secondary.light,
      borderRadius: "3px",
      padding: "8px 16px",
      margin: "0 4px",
      transition: "all 300ms ease-in",
      "&:hover": {
        backgroundColor: `${theme.palette.secondary.light}40`,
        borderColor: theme.palette.secondary.light,
        transition: "backgroundColor 600ms ease-out",
        borderBottom: `solid 2px ${theme.palette.secondary.light}`
      }
    },
    selectedMaterial: {
      paddingTop: "19px",
      paddingBottom: "19px",
      borderBottom: `solid 2px ${theme.palette.secondary.main}`,
      borderRadius: "0",
      backgroundColor: "rgba(0,0,0,0)!important",
      transition: "all 600ms ease-out"
    },
    selected: {
      backgroundColor: `${theme.palette.secondary.light}40`,
      borderColor: theme.palette.secondary.light,
      transition: "backgroundColor 600ms ease-out",
      borderBottom: `solid 2px ${theme.palette.secondary.light}`
    }
  })
)

const NavItem = React.forwardRef(({ label, to, pageSelected, onClick=()=>{} }, ref) => {
  const classes = useStyles()
  const selected = pageSelected === to

  return (
    <React.Fragment>
      <CssBaseline />
      <li ref={ref} key={label}>
      <Link to={to} 
            className={`${classes.root} ${selected ? classes.selected : null}`}
            onClick={onClick} 
            onKeyPress={onClick}>
              {label}
      <span className="MuiTouchRipple-root"> </span>
      </Link>
    </li>
    </React.Fragment>
  )
})

export { useStyles as NavLinkStyles }
export default NavItem