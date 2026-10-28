import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import Form from "../Components/Form";
import Preview from "../Components/Preview";

const ResumeDetails = () => {
  const [resumeData, setResumeData] = useState({
    fullName: "",
    location: "",
    jobTitle: "",
    email: "",
    contactNumber: 0,
    linkedin: "",
    github: "",
    degree: "",
    university: "",
    yog: "",
    summary: "",
    skills: [],
  });

  return (
    <Box sx={{ marginTop: "50px", marginLeft: "50px", marginBottom: "50px" }}>
      <Grid container>
        <Grid size={{ md: 6 }}>
          <Form setResumeData={setResumeData} resumeData={resumeData} />
        </Grid>

        <Grid size={{ md: 6 }}>
          <Preview resumeData={resumeData} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ResumeDetails;
