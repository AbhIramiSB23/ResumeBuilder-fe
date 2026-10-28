
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import TravelExploreRoundedIcon from '@mui/icons-material/TravelExploreRounded';

function PNF() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #100724, #241044, #3b1764)',
        px: 2,

        '@keyframes float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' }
        },

        '@keyframes rotate': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' }
        },

        '@keyframes pulse': {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(167,139,250,0.2)',
            opacity: 0.6
          },
          '50%': {
            boxShadow: '0 0 55px rgba(192,132,252,0.5)',
            opacity: 1
          }
        },

        '@keyframes fadeIn': {
          from: { opacity: 0, transform: 'translateY(30px)' },
          to: { opacity: 1, transform: 'translateY(0)' }
        },

        '@keyframes twinkle': {
          '0%, 100%': { opacity: 0.2, transform: 'scale(0.7)' },
          '50%': { opacity: 1, transform: 'scale(1.3)' }
        }
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          width: 280,
          height: 280,
          border: '1px solid rgba(196,181,253,0.35)',
          borderRadius: '50%',
          animation: 'rotate 18s linear infinite',
          '&::before': {
            content: '""',
            position: 'absolute',
            width: 15,
            height: 15,
            borderRadius: '50%',
            background: '#e9d5ff',
            top: 35,
            left: 35,
            boxShadow: '0 0 20px #c084fc'
          }
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          width: 350,
          height: 350,
          border: '1px dashed rgba(196,181,253,0.2)',
          borderRadius: '50%',
          animation: 'rotate 30s linear infinite reverse'
        }}
      />

      {[...Array(18)].map((_, i) => (
        <Box
          key={i}
          sx={{
            position: 'absolute',
            width: i % 3 === 0 ? 5 : 3,
            height: i % 3 === 0 ? 5 : 3,
            borderRadius: '50%',
            backgroundColor: '#e9d5ff',
            top: `${(i * 37 + 8) % 95}%`,
            left: `${(i * 53 + 5) % 95}%`,
            animation: `twinkle ${1.5 + (i % 4)}s ease-in-out infinite`,
            animationDelay: `${i * 0.15}s`
          }}
        />
      ))}

      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          maxWidth: 620,
          p: { xs: 3, sm: 5 },
          textAlign: 'center',
          borderRadius: 5,
          border: '1px solid rgba(255,255,255,0.15)',
          background: 'rgba(255,255,255,0.06)',
          backdropFilter: 'blur(15px)',
          animation: 'fadeIn 1s ease-out'
        }}
      >
        <Box
          sx={{
            width: 75,
            height: 75,
            mx: 'auto',
            mb: 2,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#e9d5ff',
            background: 'rgba(167,139,250,0.15)',
            animation: 'float 3s ease-in-out infinite, pulse 3s ease-in-out infinite'
          }}
        >
          <TravelExploreRoundedIcon sx={{ fontSize: 42 }} />
        </Box>

        <Typography
          sx={{
            fontSize: { xs: 100, sm: 145 },
            fontWeight: 900,
            lineHeight: 1,
            letterSpacing: -5,
            background: 'linear-gradient(135deg, #c4b5fd, #e879f9, #f0abfc)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'float 4s ease-in-out infinite'
          }}
        >
          404
        </Typography>

        <Typography
          sx={{
            color: '#fff',
            fontSize: { xs: 25, sm: 34 },
            fontWeight: 700,
            mt: 2
          }}
        >
          Page Not Found
        </Typography>

        <Typography
          sx={{
            color: '#c4b5fd',
            maxWidth: 400,
            mx: 'auto',
            mt: 2,
            mb: 4,
            lineHeight: 1.8
          }}
        >
          Oops! This page seems to have wandered into
          another dimension. Let's get you back.
        </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 2,
            flexWrap: 'wrap'
          }}
        >
          <Button
            variant="contained"
            startIcon={<HomeRoundedIcon />}
            onClick={() => navigate('/')}
            sx={{
              px: 3,
              py: 1.3,
              borderRadius: 3,
              textTransform: 'none',
              fontWeight: 600,
              color: '#241044',
              background: 'linear-gradient(90deg, #c4b5fd, #e9d5ff)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-4px) scale(1.03)',
                boxShadow: '0 0 30px rgba(196,181,253,0.5)',
                background: '#ede9fe'
              }
            }}
          >
            Back to Home
          </Button>

          <Button
            variant="outlined"
            startIcon={<ArrowBackRoundedIcon />}
            onClick={() => navigate(-1)}
            sx={{
              px: 3,
              py: 1.3,
              borderRadius: 3,
              textTransform: 'none',
              color: '#e9d5ff',
              borderColor: 'rgba(196,181,253,0.6)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-4px)',
                borderColor: '#e9d5ff',
                background: 'rgba(196,181,253,0.12)'
              }
            }}
          >
            Go Back
          </Button>
        </Box>

        <Typography
          sx={{
            color: '#a78bfa',
            fontSize: 11,
            letterSpacing: 2,
            mt: 5
          }}
        >
          ERROR 404 · PAGE NOT FOUND
        </Typography>
      </Box>
    </Box>
  );
}

export default PNF;
