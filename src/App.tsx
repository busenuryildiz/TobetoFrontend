import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navi from './components/navbar/Navi';
import MainPage from './pages/mainPage/MainPage';
import PersonalInformation from './pages/profile/editProfile/personalInformation/PersonalInformation';
import CalendarPage from './pages/calendarPage/CalendarPage';
import Catalog from './pages/catalog/Catalog';

function App() {
  return (
    <Router>
      <Routes>
        <Route path= "/" element={<Navi />}/>
        <Route path="/" element={<MainPage />}/>
        <Route path="profilim/profilimi-duzenle/kisisel-bilgilerim" element={<PersonalInformation />}/>
       <Route path="/takvim" element={<CalendarPage/>}/>
        <Route path="platform-katalog" element={<Catalog />} />
      </Routes>
    </Router>
  );
}



export default App;