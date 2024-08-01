import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';

function App() {
  return (
     <>
     <Header />
     <Container>
      <main></main>
     </Container>
     <Footer />
     </>

    
  );
}

export default App;
