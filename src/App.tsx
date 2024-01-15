import { Container } from 'react-bootstrap';
import Navi from './API/components/navbar/Navi';
import MainPage from './API/pages/mainPage/MainPage';

function App() {
  return (
    <div className="App">
      <Container>
        <Navi />
        <MainPage />
      </Container>
    </div>
  );
}

export default App;
