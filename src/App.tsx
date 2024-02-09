import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/mainPage/MainPage';
import PersonalInformation from './pages/profile/editProfile/personalInformation/PersonalInformation';
import CalendarPage from './pages/calendarPage/CalendarPage';
import Catalog from './pages/catalog/Catalog';
import IstanbulCoding from './pages/istanbulCoding/IstanbulCoding';
import { OverlayLoader } from './components/overlayLoader/overlayLoader';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { useDispatch, useSelector } from 'react-redux';
import {useEffect } from 'react';
import { getCurrentUser } from './store/slices/authSlice';
import { AppDispatch } from './store/configureStore';
import PlatformPage from './pages/platformPage/PlatformPage';

function App() {

  const dispatch: AppDispatch = useDispatch();
  const auth = useSelector((state:any) => state.auth);


  useEffect(() => {
    if (auth.currentUser && auth.currentUser.id) {
      dispatch(getCurrentUser(auth.currentUser.id));
    }
  }, [dispatch]);
  
  console.log(auth);

  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={auth.currentUser ? <PlatformPage /> : <MainPage />} />

        <Route path="/" element={<MainPage />} />
        <Route path="profilim/profilimi-duzenle/kisisel-bilgilerim" element={<PersonalInformation />} />
        <Route path="/takvim" element={<CalendarPage />} />
        <Route path="platform-katalog" element={<Catalog />} />
        <Route path="istanbul-kodluyor" element={<IstanbulCoding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/platform" element={<PlatformPage />} />
        <Route path="loading" element={<OverlayLoader />} />

      </Routes>
    </Router>
    </div>
  );
}



export default App;