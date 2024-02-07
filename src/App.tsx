import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navi from './components/navbar/Navi';
import MainPage from './pages/mainPage/MainPage';
import PersonalInformation from './pages/profile/editProfile/personalInformation/PersonalInformation';
import MyExperiences from './pages/profile/editProfile/myExperiences/myExperiences';
import EducationLife from './pages/profile/editProfile/educationLife/educationLife';
import MySkill from './pages/profile/editProfile/mySkills/mySkill';          
import MyCertificates from './pages/profile/editProfile/myCertificates/myCertificates';
import MediaAccounts from './pages/profile/editProfile/mediaAccounts/mediaAccounts';
import ForeignLanguages from './pages/profile/editProfile/foreignLanguages/foreignLanguages';
import MySettings from './pages/profile/editProfile/mySettings/mySettings';
import Footer from './components/footer/footer';

const certificatesData :any = [
  // your certificate data here
];

function App() {

  const handleMediaAccountSave = (socialMedia: string, socialMediaUrl: string) => {
    // Kaydetme mantığını burada gerçekleştirin
    console.log(`Sosyal Medya: ${socialMedia}, URL: ${socialMediaUrl}`);
  };
  return (
    <Router>
      <Routes>
        <Route path= "/" element={<Navi />}/>
        <Route path="/" element={<MainPage />}/>
        <Route path='/' element={<Footer/>}/>
        <Route path="profilim/profilimi-duzenle/kisisel-bilgilerim" element={<PersonalInformation />} />
        <Route path="profilim/profilimi-duzenle/deneyimlerim" element={<MyExperiences />} />
        <Route path="profilim/profilimi-duzenle/egitim-hayatim" element={<EducationLife />} />
        <Route path="profilim/profilimi-duzenle/yetkinliklerim" element={<MySkill />} />
        <Route path="profilim/profilimi-duzenle/sertifikalarim" element={<MyCertificates certificates={certificatesData} />} />
        <Route path="profilim/profilimi-duzenle/medya-hesaplarim" element={<MediaAccounts onSave={handleMediaAccountSave} />} />
        <Route path="profilim/profilimi-duzenle/yabanci-dil" element={<ForeignLanguages onSave={(languageName, proficiency) => {}} />} />
        <Route path="profilim/profilimi-duzenle/ayarlar" element={<MySettings />} />
      </Routes>
    </Router>
    
  );
}



export default App;