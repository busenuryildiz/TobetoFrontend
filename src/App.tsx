import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navi from './components/navbar/Navi';
import MainPage from './pages/mainPage/MainPage';
import PersonalInformation from './pages/profile/editProfile/personalInformation/PersonalInformation';

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