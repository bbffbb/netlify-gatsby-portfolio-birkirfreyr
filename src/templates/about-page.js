import React from 'react'
import PropTypes from 'prop-types'

import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Parallax from "../components/Parallax/Parallax.js";
import GridContainer from "../components/Grid/GridContainer.js";
import GridItem from "../components/Grid/GridItem.js";
import NavPills from "../components/NavPills/NavPills.js";
import Button from "../components/CustomButtons/Button.js";

import { makeStyles } from "@material-ui/core/styles";

import classNames from "classnames";

import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import Close from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import Chat from "@material-ui/icons/Chat";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import ComputerIcon from "@material-ui/icons/Computer";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
import InfoArea from "../components/InfoArea/InfoArea.js";

import profile from "../assets/img/album/profile.jpg";

import me1 from "../assets/img/album/me4.jpg";
import me2 from "../assets/img/album/me2.jpg";
import me3 from "../assets/img/album/me3.jpg";
import me4 from "../assets/img/album/me1.jpg";
import me5 from "../assets/img/album/me5.jpg";
import me6 from "../assets/img/album/me6.jpg";
import me7 from "../assets/img/album/me7.jpg";


import work1 from "../assets/img/retric.png";
import work2 from "../assets/img/explorecrm.png";
import work3 from "../assets/img/examples/cynthia-del-rio.jpg";
import work4 from "../assets/img/examples/mariya-georgieva.jpg";
import work5 from "../assets/img/examples/clem-onojegaw.jpg";

import styles from "../assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content
  const classes = useStyles();


  
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const [classicModal, setClassicModal] = React.useState(false);

  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} onClick={() => setClassicModal(true)}/>
                    <Dialog
                      classes={{
                        root: classes.center,
                        paper: classes.modal
                      }}
                      open={classicModal}
                      TransitionComponent={Transition}
                      keepMounted
                      onClose={() => setClassicModal(false)}
                      aria-labelledby="classic-modal-slide-title"
                      aria-describedby="classic-modal-slide-description"
                    >
                      <DialogTitle
                        id="classic-modal-slide-title"
                        disableTypography
                        className={classes.modalHeader}
                      >
                        <IconButton
                          className={classes.modalCloseButton}
                          key="close"
                          aria-label="Close"
                          color="inherit"
                          onClick={() => setClassicModal(false)}
                          style={{float:"right"}}
                          label="Close"
                        > 
                          <Close className={classes.modalClose} />
                        </IconButton>
                      </DialogTitle>
                      <DialogContent
                        id="classic-modal-slide-description"
                        className={classes.modalBody}
                        style={{width:"100%"}}
                      >
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={me1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={me2}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={me3}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={me4}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={me5}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={me6}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      </DialogContent>
                    </Dialog>
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Birkir Freyr Baldursson</h3>
                    <h6>Programmer</h6>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-twitter"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-instagram"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-facebook"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <h5>
                <PageContent className="content" content={content} />
              </h5>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <InfoArea
                    title="Interests"
                    description="My main interests are ... .. "
                    icon={ComputerIcon}
                    iconColor="info"
                    vertical
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <InfoArea
                    title="Goals"
                    description="My goals are to achieve .. . .. ."
                    icon={TrendingUpIcon}
                    iconColor="success"
                    vertical
                  />
                </GridItem>
              </GridContainer>
            </div>
            
          </div>
        </div>
        {/* <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section> */}
      </div>

  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <Parallax small filter image={require("../assets/img/profile-bg.jpg")} />
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
