import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getResumes } from "../Services/allApi";
import { Box, Button, Typography,Grid } from "@mui/material";
import Preview from "../Components/Preview";
import { Link } from "react-router-dom";

const AllDownloads = () => {
  const [resumeDatas, setResumeDatas] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let apiResponse = await getResumes();
      if (apiResponse.status == 200) {
        setResumeDatas(apiResponse.data);
      } else {
        toast.error("api call failed");
      }
    } catch (error) {
      console.log(error);
      toast.error("Api failed");
    }
  };

  return (
    <Box>
      {resumeDatas?.length > 0 ? (
        <Box>
          <Typography>All Downloads</Typography>
          <Grid sx={{ p: 5 }} spacing={5} container>
            {resumeDatas.map((eachResume, index) => (
              <Grid size={6}>
                <Button component={Link} to={`/resume/${eachResume.id}`}>
                  View Details
                </Button>

                <Preview key={index} resumeData={eachResume} />
              </Grid>
            ))}
          </Grid>
        </Box>
      ) : (
        <Typography>no resumes available</Typography>
      )}
    </Box>
  );
};

export default AllDownloads;
