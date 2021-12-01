import {GlobalStyle} from '../../GlobalStyle';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import {Container} from './AppStyle';
import { Navbar } from '../Navbar';
import { Home } from '../Home';
import Footer from '../Footer'
import About from '../About'
import AboutBlog1 from '../About/AboutBlog1';
import AboutBlog2 from '../About/AboutBlog2';
import Cong from '../Cong';
import Tin from '../Tin';

function App() {
  return (
    <>
    <Router>
      <GlobalStyle />
        <Container>
            <Navbar/>
           <Routes>
             <Route path="/" element={ <Home/>}/>
             <Route path="/about" element={ <About />}/>
             <Route path="/aboutblog1" element={ <AboutBlog1 />}/>
             <Route path="/aboutblog2" element={ <AboutBlog2 />}/>
             <Route path="/cong" element={ <Cong />}/>
             <Route path="/tin" element={ <Tin />}/>
           </Routes>
            <Footer/>
        </Container>
    </Router>
    </>
  );
}

export default App;
