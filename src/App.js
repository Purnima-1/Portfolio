import { Container } from "react-bootstrap";
import Header from "./components/header/Header";
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom' 
import Footer from "./components/Footer";
import Main from "./components/Main";
import Workex from "./components/Workex";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  return (
    <>
    <Router>
        <Header/>
    <main>
   <Container>
   <Routes>
        <Route path='/' element={<Main/>} exact/>
        <Route path= '/workex' element={<Workex/>} />
        <Route path= '/education' element={<Education/>} />
        <Route path= '/contact' element={<Contact/>} />
        <Route path= '/projects' element={<Projects/>} />

      </Routes>
         </Container>
    </main>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
