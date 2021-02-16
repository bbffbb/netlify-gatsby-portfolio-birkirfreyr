import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from '@material-ui/core/Box';


const styles = {
  grid: {
    marginRight: "-15px",
    marginLeft: "-15px",
    width: "auto"
  },
  noOverflow: {
    overflowx: "hidden"
  }
};

const useStyles = makeStyles(styles);

export default function GridContainer(props) {
  const classes = useStyles();
  const { children, className, ...rest } = props;
  return (
    <Grid container  {...rest} className={className} noOverflow >
      {children}
    </Grid>
  );
}

GridContainer.defaultProps = {
  className: ""
};

GridContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
