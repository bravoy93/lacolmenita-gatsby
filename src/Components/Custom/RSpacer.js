import React from "react";
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});
export default function RSpacer() {
  return <div className={useStyles().root}></div>
}