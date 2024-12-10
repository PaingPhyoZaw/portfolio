import { Container } from "@mui/material";
import AnimatedWelcome from "./AnimatedWelcome";
import NavigationBar from "./NavigationBar";
import "./App.css";
import Footer from "./Footer";
function App() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: "2%",
        height: "110vh",
        marginBottom: "2%",
      }}
      className="App"
    >
      <NavigationBar />
      <AnimatedWelcome />
      <Footer/>
    </Container>
  );
}

export default App;
