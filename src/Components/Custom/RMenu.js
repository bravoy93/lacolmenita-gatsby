import React from "react"
import { makeStyles } from "@material-ui/core/styles"

export default function RMenu(
    {
      //all menu props
      anchor,
      value: externalValue,
      'x-nudge': xNudge = 0,
      'y-nudge': yNudge = 0,
      'open-on-hover': openOnHover = true,
    }
    ) {
  const [anchorEl] = React.useState(anchor)
  const [internalValue, setInternalValue] = React.useState(false)
  console.log('anchor is',anchorEl)

  if(typeof externalValue !== "boolean" && openOnHover && anchorEl.current) {
    anchorEl.current.onmouseenter = ()=> setInternalValue(true);
    anchorEl.current.onmouseleave = ()=> setInternalValue(false)
  }

  const activated = () => externalValue ? externalValue : internalValue

  const useStyles = makeStyles((theme) => ({
    root: {
      position: 'fixed',
      top: `${anchorEl.current ? anchorEl.current.offsetTop + yNudge : 0}px`,
      left: `${anchorEl.current ? anchorEl.current.offsetLeft + xNudge : 0}px`,
      backgroundColor: theme.palette.primary.main,
      padding: theme.spacing(1),
      display: activated() ? '' : 'none'
    }
  })
  )

  return (
    <div className={useStyles().root}>
      top:{anchorEl.current? anchorEl.current.offsetTop: 0} and left:{anchorEl.current ? anchorEl.current.offsetLeft : 0}
    </div>
  )
}