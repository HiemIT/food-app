/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import Container from "@mui/material/Container";
import LinearScaleIcon from "@mui/icons-material/LinearScale";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalk";
import SpeakerNotesOffOutlinedIcon from "@mui/icons-material/SpeakerNotesOffOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

import Grid from "@mui/material/Grid";

import "./styles.scss";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Grid container spacing={8}>
          <Grid item xs={12} sm={6} md={4}>
            <div className="footer__time">
              <div className="col">
                <span className="footer__time-day">Sunday</span>
                <span className="footer__time-day">Monday</span>
                <span className="footer__time-day">Tuesday</span>
                <span className="footer__time-day">Wednesday</span>
                <span className="footer__time-day">Friday</span>
                <span className="footer__time-day">Saturday</span>
              </div>
              <div className="col">
                <LinearScaleIcon className="footer__time-dots" />
                <LinearScaleIcon className="footer__time-dots" />
                <LinearScaleIcon className="footer__time-dots" />
                <LinearScaleIcon className="footer__time-dots" />
                <LinearScaleIcon className="footer__time-dots" />
                <LinearScaleIcon className="footer__time-dots" />
              </div>
              <div className="col">
                <span className="footer__time-hour">Closed</span>
                <span className="footer__time-hour">8.00-20.00</span>
                <span className="footer__time-hour">10.00-5.00</span>
                <span className="footer__time-hour">12.00-9.00</span>
                <span className="footer__time-hour">7.00-1.00</span>
                <span className="footer__time-hour">9.00-12.00</span>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className="footer__contacts">
              <h4 className="footer__contact-title">Address</h4>
              <div className="footer__contact">
                <PhoneInTalkOutlinedIcon className="footer__contact-icon" />
                <span className="footer__contact-txt">+449 888 666 0000</span>
              </div>
              <div className="footer__contact">
                <SpeakerNotesOffOutlinedIcon className="footer__contact-icon" />
                <span className="footer__contact-txt">yhiemk0@gmail.com</span>
              </div>
              <div className="footer__contact">
                <BusinessOutlinedIcon className="footer__contact-icon" />
                <span className="footer__contact-txt">85 Tan An, BMT</span>
              </div>
              <div className="footer__contact footer__contact--icon">
                <FacebookIcon style={{ fill: "#2D88FF" }} />
                <TwitterIcon style={{ fill: "#5DA9DD" }} />
                <InstagramIcon style={{ fill: "#F56040" }} />
                <YouTubeIcon style={{ fill: "#FF0000" }} />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className="footer__map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2402.1323074087823!2d108.07432094498941!3d12.709345493215691!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf7b6c685b13507fb!2zQ2FvIMSR4bqzbmcgRlBUIFBvbHl0ZWNobmljIFTDonkgTmd1ecOqbg!5e1!3m2!1svi!2s!4v1630823045344!5m2!1svi!2s"
                width={"100%"}
                height={"100%"}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;
