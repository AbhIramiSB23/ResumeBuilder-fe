import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import { FaFileAlt } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";

const ResumeGenerate = () => {
  return (
    <Box>
      <Typography
        variant="h3"
        component="h3"
        sx={{
          textAlign: "center",
          fontFamily: "Georgia, serif",
          marginBottom: "70px",
          marginTop: "20px",
          fontWeight: "semibold"
        }}
      >
        Create an ATS Friendly Resume in Minutes with AI
      </Typography>

      <Stack
        direction="row"
        sx={{ justifyContent: "space-evenly", marginBottom: "20px" }}
      >
        <Box
          sx={{
            border: 2,
            borderColor:"white",
            borderRadius: "10px",
            padding: "40px 40px",
            boxShadow: 3,
          }}
        >
          <Typography sx={{ marginLeft: "125px", color: "blue" }}>
            <FaFileAlt />
          </Typography>

          <Typography
            variant="h5"
            component="h5"
            sx={{
              marginLeft: "30px",
              marginBottom: "20px",
              fontWeight: "bold",
              fontFamily: "Georgia, serif"
            }}
          >
            Add Your Details
          </Typography>

          <Typography sx={{ marginBottom: "10px" }}>
            Our AI will generate Skills & Summary
          </Typography>

          <Typography sx={{ marginLeft: "100px", fontWeight: "bold" }}>
            Step 1
          </Typography>
        </Box>

        <Box
          sx={{
            border: 2,
            borderColor: "white",
            boxShadow: 3,
            borderRadius: "10px",
            padding: "40px 40px",
          }}
        >
          <Typography sx={{ marginLeft: "168px", color: "red" }}>
            <FaFileDownload />
          </Typography>

          <Typography
            variant="h5"
            component="h5"
            sx={{
              marginLeft: "30px",
              marginBottom: "20px",
              fontWeight: "bold",
              fontFamily: "Georgia, serif"
            }}
          >
            Download your Resume
          </Typography>

          <Typography sx={{ marginBottom: "10px" }}>
            Download CV as PDF and start applying
          </Typography>

          <Typography sx={{ marginLeft: "100px", fontWeight: "bold" }}>
            Step 2
          </Typography>
        </Box>
      </Stack>

      <Box sx={{ textAlign: "center", padding: "40px 30px" }}>
        <Button
          component={Link}
          to="/resume-details"
          sx={{
            marginTop: "25px",
            backgroundColor: "brown",
            color: "white",
            padding: "8px 18px",
            borderRadius: "2px",
            textTransform: "none",
            fontFamily: "Georgia, serif",
            borderRadius:"10px"
          }}
        >
          {" "}
          Let's Start
        </Button>
      </Box>
    </Box>
  );
};

export default ResumeGenerate;
