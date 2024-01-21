import classes from "./index.module.scss";
import { type ReactElement } from "react";

const HelloWorld = (): ReactElement => {
  return <div className={classes.div}>hello world!</div>;
};

export default HelloWorld;
