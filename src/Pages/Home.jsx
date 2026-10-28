import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Aboutimage from "../assets/whats.avif";

const Home = () => {
  return (
    <Box>
      <Box
        sx={{
          minHeight: "90vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          backgroundAttachment: "fixed",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(25,35,28,0.35)",
          }}
        />

        <Box
          sx={{
            position: "relative",
            textAlign: "center",
            backgroundColor: "rgba(55,65,55,0.72)",
            padding: {
              xs: "35px 20px",
              md: "45px 70px",
            },
            maxWidth: "700px",
            width: "90%",
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontSize: {
                xs: "30px",
                md: "42px",
              },
              fontWeight: 700,
              lineHeight: 1.2,
              fontFamily: "Georgia, serif",
            }}
          >
            Designed To Get Hired.
            <br />
            Your Skills, Your Story,
            <br />
            Your Next Job - All In One.
          </Typography>

          <Button
            component={Link}
            to="/resume"
            sx={{
              marginTop: "25px",
              backgroundColor: "#a47b61",
              color: "white",
              padding: "8px 18px",
              borderRadius: "2px",
              textTransform: "none",
              fontFamily: "Georgia, serif",
              "&:hover": {
                backgroundColor: "#87634e",
              },
            }}
          >
            Make your Resume with AI
          </Button>
        </Box>
      </Box>

      {/* Whats.............*/}
      <Box
        sx={{
          padding: {
            xs: "45px 20px",
            md: "55px 70px",
          },
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          sx={{
            textAlign: "center",
            fontSize: "55px",
            fontWeight: "700",
            fontFamily: "Georgia, serif",
            marginBottom: "80px",
          }}
        >
          What's AI rBuilder
        </Typography>

        <Stack
          direction="row"
          sx={{
            maxWidth: "1200px",
            margin: "auto",
            alignItems: "center",
            justifyContent: "space-between",
            gap: {
              xs: "35px",
              md: "70px",
            },
          }}
        >
          <Box
            sx={{
              flex: 1,
              width: "100%",
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "15px",
                  md: "16px",
                },
                lineHeight: 1.8,
                color: "#444",
                textAlign: "justify",
              }}
            >
              An AI rBuilder is a web application that helps users create
              professional resumes quickly and efficiently using artificial
              intelligence. Traditional resume creation can be time-consuming
              and difficult, especially for freshers who may not know the
              correct format or keywords required for modern recruitment
              systems.
              <br />
              <br />
              The system can suggest job-specific keywords, professional
              summaries, and skill recommendations to make the resume more
              effective and ATS (Applicant Tracking System) friendly.
              <br />
              <br />
              The main goal of the AI rBuilder is to simplify the resume
              creation process and help job seekers build professional,
              well-structured resumes in a few minutes. Users can edit content,
              preview their resume, and download it in formats such as PDF.
              <br />
              <br />
              This type of system is especially useful for students & fresh
              graduates, who want to create high-quality resumes that increase
              their chances of getting shortlisted for job interviews.
            </Typography>
          </Box>

          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              width: "100%",
              height: 600,
            }}
          >
            <Box
              component="img"
              src={Aboutimage}
              alt="About"
              sx={{
                width: {
                  xs: "100%",
                  sm: "450px",
                  md: "100%",
                },
                maxWidth: "450px",
                height: "auto",
                display: "block",
                borderRadius: "4px",
              }}
            />
          </Box>
        </Stack>
      </Box>

      {/* test................. */}

      <Box
        sx={{
          minHeight: "90vh",
          backgroundImage:
            "url('https://images.pexels.com/photos/7691708/pexels-photo-7691708.jpeg?auto=compress&cs=tinysrgb&h=627&fit=crop&w=1200')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          backgroundAttachment: "fixed",
          paddingTop: "500px",
        }}
      >
        <Box
          sx={{
            padding: {
              xs: "45px 20px",
              md: "55px 70px",
            },

            backgroundColor: "white",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "55px",
              fontWeight: "700",
              fontFamily: "Georgia, serif",
              marginBottom: "80px",
            }}
          >
            Testimony
          </Typography>

          <Stack
            direction="row"
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
              gap: "70px",
            }}
          >
            <Box sx={{ width: "55%" }}>
              <Typography
                sx={{
                  fontSize: "28px",
                  fontWeight: "700",
                  fontFamily: "Georgia, serif",
                  marginBottom: "20px",
                }}
              >
                Trusted by professionals worldwide.
              </Typography>

              <Typography
                sx={{
                  fontSize: "20px",
                  lineHeight: "1.6",
                  fontFamily: "Georgia, serif",
                  marginBottom: "25px",
                }}
              >
                At rBuilder, we don't just help you create résumés — we help you
                land the job. Whether you're a seasoned professional or just
                starting out, our tools are designed to get results.
              </Typography>

              <Typography
                sx={{
                  fontSize: "20px",
                  lineHeight: "1.6",
                  fontFamily: "Georgia, serif",
                  marginBottom: "25px",
                }}
              >
                In fact, users who used rBuilder reported getting hired an
                average of 48 days faster.
              </Typography>

              <Typography
                sx={{
                  fontSize: "20px",
                  lineHeight: "1.6",
                  fontFamily: "Georgia, serif",
                }}
              >
                Join thousands of job-seekers who've fast-tracked their careers
                with a résumé that truly stands out.
              </Typography>
            </Box>


{/* testimony images................. */}

            <Box
              sx={{
                width: "40%",
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "24px",
              }}
            >
              <Box
                component="img"
                src="https://randomuser.me/api/portraits/women/44.jpg"
                sx={{ width: "100%", height: "100px", objectFit: "cover" }}
              />

              <Box
                component="img"
                src="https://randomuser.me/api/portraits/women/68.jpg"
                sx={{ width: "100%", height: "100px", objectFit: "cover" }}
              />

              <Box
                component="img"
                src="https://randomuser.me/api/portraits/men/32.jpg"
                sx={{ width: "100%", height: "100px", objectFit: "cover" }}
              />

              <Box
                component="img"
                src="https://randomuser.me/api/portraits/men/64.jpg"
                sx={{ width: "100%", height: "100px", objectFit: "cover" }}
              />

              <Box
                component="img"
                src="https://randomuser.me/api/portraits/men/46.jpg"
                sx={{ width: "100%", height: "100px", objectFit: "cover" }}
              />

              <Box
                component="img"
                src="https://randomuser.me/api/portraits/women/65.jpg"
                sx={{ width: "100%", height: "100px", objectFit: "cover" }}
              />

              <Box
                component="img"
                src="https://randomuser.me/api/portraits/women/12.jpg"
                sx={{ width: "100%", height: "100px", objectFit: "cover" }}
              />

              <Box
                component="img"
                src="https://randomuser.me/api/portraits/women/45.jpg"
                sx={{ width: "100%", height: "100px", objectFit: "cover" }}
              />

              <Box
                component="img"
                src="https://randomuser.me/api/portraits/men/33.jpg"
                sx={{ width: "100%", height: "100px", objectFit: "cover" }}
              />

              <Box
                component="img"
                src="https://randomuser.me/api/portraits/men/22.jpg"
                sx={{ width: "100%", height: "100px", objectFit: "cover" }}
              />

              <Box
                component="img"
                src="https://randomuser.me/api/portraits/men/51.jpg"
                sx={{ width: "100%", height: "100px", objectFit: "cover" }}
              />

              <Box
                component="img"
                src="https://randomuser.me/api/portraits/men/40.jpg"
                sx={{ width: "100%", height: "100px", objectFit: "cover" }}
              />
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
