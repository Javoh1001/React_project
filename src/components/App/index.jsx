import {GlobalStyle} from '../../GlobalStyle';
import {BrowserRouter as Router} from 'react-router-dom';
import {Container} from './AppStyle';
import { Navbar } from '../Navbar';
import { Home } from '../Home';

function App() {
  return (
    <>
    <Router>
      <GlobalStyle />
        <Container>
            <Navbar/>
            <Home/>
        </Container>
    </Router>
    </>
  );
}

export default App;
