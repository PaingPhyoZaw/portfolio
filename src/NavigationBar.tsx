import {
  AppBar,
  Box,
  Toolbar,
  Tooltip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { GitHub } from "@mui/icons-material";
import "./NavigationBar.css";

const NavigationBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const linkVariants = {
    hover: { scale: 1.1, color: "#f50057" },
  };

  return (
    <div>
      <AppBar
        sx={{
          boxShadow: "none",
          backgroundColor: "#111111",
          transition: "opacity 0.5s",
        }}
        position="static"
      >
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: isMobile ? "center" : "start",
              alignItems: "center",
              marginTop: isMobile ? "0.5rem" : 0,
              marginBottom: isMobile ? "0.5rem" : 0,
              marginRight: isMobile ? "0" : "auto",
            }}
          >
            <Tooltip title="GitHub">
              <GitHub
                onClick={() =>
                  window.open("https://github.com/PaingPhyoZaw", "_blank")
                }
                sx={{
                  color: "#ebdddd",
                  cursor: "pointer",
                  fontSize: isMobile ? "1.2rem" : "1.5rem",
                  width: isMobile ? "2rem" : "2.25rem",
                  height: isMobile ? "2rem" : "2.25rem",
                  marginLeft: isMobile ? "1rem" : "-1.5rem",
                  marginRight: isMobile ? "1rem" : "1.5rem",
                }}
              />
            </Tooltip>
            
          </Box>
          <Box sx={{ display: "flex", gap: isMobile ? "0.8rem" : "2rem" }}>
            <motion.a
              href="/"
              variants={linkVariants}
              whileHover="hover"
              className="nav-link"
              style={{ fontSize: isMobile ? "1.2rem" : "1.4rem" }}
            >
              Home
            </motion.a>
            <motion.a
              href="/about"
              variants={linkVariants}
              whileHover="hover"
              className="nav-link"
              style={{ fontSize: isMobile ? "1.2rem" : "1.4rem" }}
            >
              About
            </motion.a>
            <motion.a
              href="/skills"
              variants={linkVariants}
              whileHover="hover"
              className="nav-link"
              style={{ fontSize: isMobile ? "1.2rem" : "1.4rem" }}
            >
              Skills
            </motion.a>
            <motion.a
              href="/projects"
              variants={linkVariants}
              whileHover="hover"
              className="nav-link"
              style={{ fontSize: isMobile ? "1.2rem" : "1.4rem" }}
            >
              Projects
            </motion.a>
            <motion.a
              href="mailto:paingphyozaw037@gmail.com"
              variants={linkVariants}
              whileHover="hover"
              className="nav-link"
              style={{ fontSize: isMobile ? "1.2rem" : "1.4rem" }}
            >
              Contact
            </motion.a>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavigationBar;
