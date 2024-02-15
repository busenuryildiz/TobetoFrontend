import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import PersonalInformation from "./pages/profile/editProfile/personalInformation/PersonalInformation";
import CalendarPage from "./pages/calendarPage/CalendarPage";
import IstanbulCoding from "./pages/istanbulCoding/IstanbulCoding";
import { OverlayLoader } from "./components/overlayLoader/overlayLoader";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { useSelector } from "react-redux";
import PlatformPage from "./pages/platformPage/PlatformPage";
import MySkill from "./pages/profile/editProfile/mySkills/mySkill";
import MyCertificates from "./pages/profile/editProfile/myCertificates/myCertificates";
import MySettings from "./pages/profile/editProfile/mySettings/mySettings";
import ForeignLanguages from "./pages/profile/editProfile/foreignLanguages/foreignLanguages";
import MediaAccounts from "./pages/profile/editProfile/mediaAccounts/mediaAccounts";
import EducationLife from "./pages/profile/editProfile/educationLife/educationLife";
import MyExperiences from "./pages/profile/editProfile/myExperiences/myExperiences";
import Codecademy from "./pages/codecademy/Codecademy";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import ManagementPanel from "./pages/managementPanel/managementPanel";
import Catalog from "./pages/catalog/Catalog";
import Review from "./pages/reviews/Review";
import TobetoSuccessModel from "./pages/TobetoSuccessModel/TobetoSuccessModel";
import SuccessModel1 from "./pages/TobetoSuccessModel/SuccessModel1";

function App() {
  // const dispatch: AppDispatch = useDispatch();
  const auth = useSelector((state: any) => state.auth.user);

  const certificatesData: any = [
    // your certificate data here
  ];
  const handleMediaAccountSave = (
    socialMedia: string,
    socialMediaUrl: string
  ) => {
    // Kaydetme mantığını burada gerçekleştirin
    console.log(`Sosyal Medya: ${socialMedia}, URL: ${socialMediaUrl}`);
  };
  return (
    <div>
      <Router>
        <Routes>
          {/* <Route path="/" element={auth ? <PlatformPage /> : <Login />} /> */}

          <Route path="/" element={<MainPage />} />
          <Route path="/management" element={<ManagementPanel />}></Route>
          <Route
            path="/profilim/profilimi-duzenle/kisisel-bilgilerim"
            element={<ProtectedRoute element={<PersonalInformation />} />}
          />
          <Route
            path="/profilim/profilimi-duzenle/deneyimlerim"
            element={<MyExperiences />}
          />
          <Route
            path="/profilim/profilimi-duzenle/egitim-hayatim"
            element={<EducationLife />}
          />
          <Route
            path="/profilim/profilimi-duzenle/yetkinliklerim"
            element={<MySkill />}
          />
          <Route
            path="/profilim/profilimi-duzenle/sertifikalarim"
            element={<MyCertificates certificates={certificatesData} />}
          />
          <Route
            path="/profilim/profilimi-duzenle/medya-hesaplarim"
            element={<MediaAccounts onSave={handleMediaAccountSave} />}
          />
          <Route
            path="/profilim/profilimi-duzenle/yabanci-dil"
            element={
              <ForeignLanguages onSave={(languageName, proficiency) => {}} />
            }
          />
          <Route
            path="/profilim/profilimi-duzenle/ayarlar"
            element={<MySettings />}
          />
          <Route path="/takvim" element={<CalendarPage />} />
          <Route path="platform-katalog" element={<Catalog />} />
          <Route path="istanbul-kodluyor" element={<IstanbulCoding />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/platform"
            element={<ProtectedRoute element={<PlatformPage />} />}  />
          <Route path="loading" element={<OverlayLoader />} />
          <Route path="/codecademy" element={<Codecademy />} />
          <Route path="degerlendirmeler" element={<Review />} />
          <Route path="profilim/degerlendirmeler/tobeto-iste-basari-modeli" element={<TobetoSuccessModel />} />
          <Route path="profilim/degerlendirmeler/tobeto-iste-basari-modeli/1" element={<SuccessModel1 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
