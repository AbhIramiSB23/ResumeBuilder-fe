
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { MdAttachEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Stack } from "@mui/material";

const Footer = () => {
  return (
    <>
    <Stack
      direction= "row"
      sx={{
        justifyContent: "space-between",
        alignItems: "flex-start",
        backgroundColor: "black",
        padding: "50px 60px",
        gap: "50px",
      }}
    >
      <Box sx={{ maxWidth: "550px" }}>
        <Typography
          variant="h6"
          component="h6"
          sx={{
            color: "white",
            marginBottom: "15px",
            fontWeight: "bold",
          }}
        >
          Resume Builder
        </Typography>

        <Typography
          component="p"
          sx={{
            color: "white",
            fontSize: "15px",
            lineHeight: 1.7,
          }}
        >
          An AI Resume Builder suggests job-specific keywords, professional
          summaries, and skill recommendations to make the resume more
          effective and ATS (Applicant Tracking System) friendly. The main
          goal of the AI Powered Resume Builder is to simplify the resume
          creation process and help job seekers build professional,
          well-structured resumes in a few minutes.
        </Typography>
      </Box>

      <Box sx={{ minWidth: "250px" }}>
        <Typography
          variant="h5"
          component="h2"
          sx={{
            color: "white",
            marginBottom: "20px",
            fontWeight: "bold",
          }}
        >
          Contact Us
        </Typography>

        <Typography
          sx={{
            color: "white",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "12px",
          }}
        >
          <MdAttachEmail />
          resumebuilder@gmail.com
        </Typography>

        <Typography
          sx={{
            color: "white",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "20px",
          }}
        >
          <IoCall />
          7923456780
        </Typography>

        <Typography
          variant="h6"
          component="h3"
          sx={{
            color: "white",
            marginBottom: "15px",
            fontWeight: "bold",
          }}
        >
          Connect with Us
        </Typography>

        <Typography
          sx={{
            color: "white",
            display: "flex",
            gap: "18px",
            fontSize: "22px",
          }}
        >
          <FaInstagram />
          <FaFacebookF />
          <FaWhatsapp />
        </Typography>
      </Box>
      
    </Stack>
    <Box sx={{textAlign:"center",marginTop:"-30px",color:"white"}}>
      <Typography >Designed & built with ❤️ using React</Typography>
    </Box>
    </>
  );
};

export default Footer;

