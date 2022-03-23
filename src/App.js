import { Container } from "react-bootstrap";
import Header from "./components/Header";
//import { BrowserRouter as Router,Route,Routes} from 'react-router-dom' 
import Footer from "./components/Footer";
import LeftScreen from "./components/LeftScreen";




function App() {
  return (
    <>
        <Header/>
    <main>
   <Container>
     <LeftScreen/>
         </Container>
    </main>
    <Footer/>
  
    </>
  );
}

export default App;
