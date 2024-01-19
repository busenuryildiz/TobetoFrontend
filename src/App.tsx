//import { Container } from 'react-bootstrap';
import Navi from './API/components/navbar/Navi';
import MainPage from './API/pages/mainPage/MainPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PersonalInformation from './API/pages/profile/editProfile/personalInformation/PersonalInformation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path= "/" element={<Navi />}/>
        <Route path="/" element={<MainPage />}/>
        <Route path="profilim/profilimi-duzenle/kisisel-bilgilerim" element={<PersonalInformation />} />
      </Routes>
    </Router>
  );
}


export default App;
