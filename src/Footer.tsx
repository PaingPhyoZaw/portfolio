import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        marginTop: "auto",
      }}
    >
      <Typography
        variant="body2"
        sx={{
          color: "#ebdddd",
          marginTop: "0.3rem",
          marginBottom: "1rem"
        }}
      >
        © 2024 Paing Phyo Zaw. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
