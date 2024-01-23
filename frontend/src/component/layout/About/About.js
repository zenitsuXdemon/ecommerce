import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.instagram.com/shubhamkumar200101/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dpwcju1fq/image/upload/v1656969624/samples/IMAGE_SHUBHAM_hlz3ue.jpg"
              alt="Founder"
            />
            <Typography>Shubham Kumar</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This website is created by Shubham Kr and Abhinay Paul .
              Website has all type of functionalities which ecoomerce website has to be.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Connect Me</Typography>
            

            <a href="https://www.instagram.com/shubhamkumar200101/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
