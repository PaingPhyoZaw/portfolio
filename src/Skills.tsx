import {
  Box,
  Container,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import NavigationBar from "./NavigationBar";
import { motion } from "framer-motion";
import Footer from "./Footer";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const Skills = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        marginBottom: "2%",
      }}
    >
      <NavigationBar />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography
          fontWeight={700}
          fontSize={isMobile ? 32 : 40}
          variant="h2"
          sx={{
            textAlign: isMobile ? "center" : "start",
            color: "#ebdddd",
            marginTop: isMobile ? "12%" : "5%",
            marginBottom: isMobile ? "20%" : "10%",
          }}
          style={{ textDecoration: "underline" }}
        >
          Tech Stack
        </Typography>
      </motion.div>
      <Grid
        container
        spacing={isMobile ? 2 : 4}
        justifyContent="start"
        sx={{ marginBottom: "5%" }}
      >
        {[
          {
            imageSrc: "./javascript.svg",
            alt: "JavaScript",
            text: "JavaScript",
            rating: 2,
          },
          {
            imageSrc: "./typescript.svg",
            alt: "TypeScript",
            text: "TypeScript",
            rating: 3,
          },
          { 
            imageSrc: "./react.svg", 
            alt: "React", 
            text: "React", rating: 3 
          },
          {
            imageSrc: "./git.svg",
            alt: "Git",
            text: "Git",
            rating: 3,
          },
          {
            imageSrc: "./mui.svg",
            alt: "Material-UI",
            text: "Material-UI",
            rating: 3,
          },
          { 
            imageSrc: "./redux.svg", 
            alt: "Redux", 
            text: "Redux", 
            rating: 2 
          },
          { 
            imageSrc: "./reactquery.svg", 
            alt: "React Query", 
            text: "React Query", 
            rating: 2 
          },
          {
            imageSrc: "./vitest.svg",
            alt: "Vitest",
            text: "Vitest",
            rating: 2,
          },
          {
            imageSrc: "./mongodb.svg",
            alt: "MongodDB",
            text: "MongoDB",
            rating: 3,
          },
          {
            imageSrc: "./nextjs.svg",
            alt: "Next.js",
            text: "Next.js",
            rating: 4,
          },
          {
            imageSrc: "./nodejs.svg",
            alt: "Node.js",
            text: "Node.js",
            rating: 2,
          },
          {
            imageSrc: "./expressjs.svg",
            alt: "Express",
            text: "Express.js",
            rating: 3,
          },
        ].map((skill, index) => (
          <Grid item xs={6} sm={3} md={3} key={index}>
            <SkillBox {...skill} />
          </Grid>
        ))}
      </Grid>
      <Divider sx={{ backgroundColor: "#ebdddd" }} />

      <Box sx={{ marginTop: "5%", marginBottom: "5%" }}>
        <motion.div
          style={{
            color: "#ebdddd",
            fontSize: isMobile ? 14 : 20,
            fontWeight: 400,
            textAlign: "start",
          }}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0, y: 0 }}
          transition={{ delay: 0.25, duration: 1.5 }}
        >
          <b style={{ textDecoration: "underline" }}>Disclaimer: </b>
          <br />
          Obviously I'm not an experienced developer yet, so I'm not a master in
          any of these technologies. But I'm trying to improve myself and learn
          new things about these technologies every day.
        </motion.div>
      </Box>
      <Footer />
    </Container>
  );
};

const SkillBox = ({
  imageSrc,
  alt,
  text,
  rating,
}: {
  imageSrc: string;
  alt: string;
  text: string;
  rating: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          marginBottom: "2rem",
        }}
      >
        <motion.img
          animate={{ opacity: 1, y: -40 }}
          initial={{ opacity: 0, y: 0 }}
          transition={{ delay: 0.25, duration: 1.5 }}
          src={imageSrc}
          alt={alt}
          style={{ width: 100, height: 100, margin: 5 }}
        />
        <Typography sx={{ color: "#ebdddd", fontSize: 20 }}>{text}</Typography>
        <Box
          sx={{ display: "flex", alignItems: "center", marginTop: "0.5rem" }}
        >
          {Array.from({ length: 5 }, (_, index) =>
            index < rating ? (
              <StarIcon key={index} sx={{ color: "#ebdddd" }} />
            ) : (
              <StarBorderIcon key={index} sx={{ color: "#ebdddd" }} />
            )
          )}
        </Box>
      </Box>
    </motion.div>
  );
};

export default Skills;