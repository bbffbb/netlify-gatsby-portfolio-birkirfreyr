/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'gatsby'

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "../../assets/jss/material-kit-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.creative-tim.com/presentation?ref=mkr-footer"
                className={classes.block}
                target="_blank"
              >
                About me
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="http://blog.creative-tim.com/?ref=mkr-footer"
                className={classes.block}
                target="_blank"
              >
                Career
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.creative-tim.com/license?ref=mkr-footer"
                className={classes.block}
                target="_blank"
              >
                Education
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.creative-tim.com/license?ref=mkr-footer"
                className={classes.block}
                target="_blank"
              >
                Blog
              </a>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()}, Made by {" "}
          <Link to="/about">
            Birkir Freyr
          </Link>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
