import {
  Box,
  Chip,
  Container,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: "2%",
        height: "100vh",
        marginBottom: "2%",
      }}
    >
      <NavigationBar />
      <Box sx={{ mt: 10, px: 2, marginLeft: isMobile ? "0" : "-1rem" }}>
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h4"
            fontWeight={600}
            sx={{ color: "#ebdddd", mb: 2 }}
          >
            About Me
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#ebdddd", maxWidth: "75ch", mb: 2 }}
          >
            I am a 20-years-old Software Engineer passionate about
            developing web applications. I have experience with MERN stack.
            Currently improving my skills in frontend development and interested
            in backend development as well.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h4"
            fontWeight={600}
            sx={{ color: "#ebdddd", mb: 2 }}
          >
            Education
          </Typography>
          <Education
            title="GED Studies"
            date="Currently preparing for the GED to further expand my academic foundation and skills."
            label="Learning"
          />
          <Education
            title="JDC Online One Stop Java Class"
            date="Currently pursuing in JDC's online course to deepen my understanding of Java programming and software development."
            label="Learning"
          />
          <Education
            title="Turning Programming Center"
            date="Currently enrolled in the Data Structure & Algorithm course to enhance problem-solving skills and optimize programming techniques."
            label="Learning"
          />
          <Education
            title="FE Exam"
            date="Achieved Fundamental Engineering (FE) Certification in Oct 2024."
            label="Certificate"
          />
          <Education
            title="CS50 Certification"
            date="Successfully completed Harvard's CS50: Introduction to Computer Science, gaining foundational knowledge in algorithms, data structures, and software development."
            label="Certificate"
          />
        </Box>
      </Box>
      <Footer />
    </Container>
  );
};

const Education = ({
  title,
  date,
  label,
}: {
  title: string;
  date: string;
  label: string;
}) => (
  <Box sx={{ mb: 4 }}>
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="body1" sx={{ color: "#ebdddd", opacity: 0.7 }}>
        {title}
      </Typography>
      <Chip
        label={label}
        variant="filled"
        sx={{ background: "#D7FFE0", color: "#1B5E20" }}
      />
    </Box>
    <Typography
      variant="body2"
      sx={{ color: "#ebdddd", opacity: 0.7, fontSize: 14, mt: 1 }}
    >
      {date}
    </Typography>
    <Divider sx={{ mt: 2, backgroundColor: "#ebdddd", opacity: 0.4 }} />
  </Box>
);

export default About;
