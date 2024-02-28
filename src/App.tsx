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
import Review from "./pages/reviews/Review";
import MySkill from "./pages/profile/editProfile/mySkills/mySkill";
import MyCertificates from "./pages/profile/editProfile/myCertificates/myCertificates";
import MySettings from "./pages/profile/editProfile/mySettings/mySettings";
import ForeignLanguages from "./pages/profile/editProfile/foreignLanguages/foreignLanguages";
import MediaAccounts from "./pages/profile/editProfile/mediaAccounts/mediaAccounts";
import EducationLife from "./pages/profile/editProfile/educationLife/educationLife";
import MyExperiences from "./pages/profile/editProfile/myExperiences/myExperiences";
import Codecademy from "./pages/codecademy/Codecademy";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import AboutUs from "./pages/aboutUs/AboutUs";
import ForIndividuals from "./pages/forIndividuals/ForIndividuals";
import ForBusinesses from "./pages/forBusinesses/ForBusinesses";
import BusinessIdentity from "./pages/businessIdentity/BusinessIdentity";
import SSS from "./pages/SSS/SSS";
import Contact from "./pages/contact/Contact";
import Frontend from "./pages/frontend/Frontend";
import Fullstack from "./pages/fullstack/Fullstack";
import WebMobile from "./pages/webMobile/WebMobile";
import DataScience from "./pages/dataScience/DataScience";
import UIUX from "./pages/uiux/UIUX";
import CyberSecurity from "./pages/cyberSecurity/CyberSecurity";
import ManagementPanel from "./pages/managementPanel/managementPanel";
import TobetoSuccessModel from "./pages/TobetoSuccessModel/TobetoSuccessModel";
import SuccessModel1 from "./pages/TobetoSuccessModel/SuccessModel1";
import CourseDetail from "./pages/course-detail/course-detail";
import MyProfile from "./pages/profile/myProfile/MyProfile";
import NotFoundPage from "./components/notFound/notFound";
import PlatformCatalog from "./pages/catalog/PlatformCatalog";
import Catalog from "./pages/catalog/Catalog";
import BlogPage from "./pages/blog/BlogPage";
import Blog from "./pages/blog/Blog";
import MediaPostPage from "./pages/mediaPost/MediaPostPage";
import MediaPost from "./pages/mediaPost/MediaPost";
import ExamPage from "./pages/exam/examPage";
import Announcement from "./components/announcement/Announcement";
import CoursePage from "./pages/coursePage/CoursePage";
import Egitimlerim from "./pages/egitimlerim/egitimlerim";
import BilgiAl from "./pages/bilgiAl/BilgiAl";




function App() {
  // const dispatch: AppDispatch = useDispatch();
  const auth = useSelector((state: any) => state.auth.user);


  return (
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/profilim" element={<ProtectedRoute element={<MyProfile />} />} />
          <Route path="/profilim/profilimi-duzenle/kisisel-bilgilerim" element={<ProtectedRoute element={<PersonalInformation />} />} />
          <Route path="/profilim/profilimi-duzenle/deneyimlerim" element={<MyExperiences />} />
          <Route path="/profilim/profilimi-duzenle/egitim-hayatim" element={<EducationLife />} />
          <Route path="/profilim/profilimi-duzenle/yetkinliklerim" element={<MySkill />} />
          <Route path="/profilim/profilimi-duzenle/sertifikalarim" element={<MyCertificates />} />
          <Route path="/profilim/profilimi-duzenle/medya-hesaplarim" element={<MediaAccounts/>} />
          <Route path="/profilim/profilimi-duzenle/yabanci-dil" element={<ForeignLanguages />} />
          <Route path="/profilim/profilimi-duzenle/ayarlar" element={<MySettings />} />
          <Route path="/takvim" element={<CalendarPage />} />
          <Route path="/platform-katalog" element={<PlatformCatalog />} />
          <Route path="/katalog" element={<Catalog />} />
          <Route path="/istanbul-kodluyor" element={<IstanbulCoding />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/platform" element={<ProtectedRoute element={<PlatformPage />} />} />
          <Route path="/hakkimizda" element={<AboutUs />} />
          <Route path="/bireyler-icin" element={<ForIndividuals />} />
          <Route path="/kurumlar-icin" element={<ForBusinesses />} />
          <Route path="/kurumsal-kimlik" element={<BusinessIdentity />} />
          <Route path="/sss" element={<SSS />} />
          <Route path="/iletisim" element={<Contact />} />
          <Route path="/frontend" element={<Frontend />} />
          <Route path="/fullstack" element={<Fullstack />} />
          <Route path="/web-mobile" element={<WebMobile />} />
          <Route path="/veri-bilimi" element={<DataScience />} />
          <Route path="/siber-güvenlik" element={<CyberSecurity />} />
          <Route path="/ui-ux" element={<UIUX />} />
          <Route path="/management" element={<ManagementPanel />}></Route>
          <Route path="loading" element={<OverlayLoader />} />
          <Route path="/codecademy" element={<Codecademy />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/mediapost" element={<MediaPostPage/>}/>
          <Route path ="/mediapost/:id" element={<MediaPost/>}/>
          <Route path="degerlendirmeler" element={<Review />} />
          <Route path="profilim/degerlendirmeler/tobeto-iste-basari-modeli" element={<TobetoSuccessModel />} />
          <Route path="/egitimlerim" element={<Egitimlerim />}></Route>
          <Route path="/egitimlerim/:studentCourseId" element={<CoursePage />}></Route>

          <Route path="/course/:id" element={<CourseDetail />} />{" "}
          <Route path="profilim/degerlendirmeler/tobeto-iste-basari-modeli/1" element={<SuccessModel1 />} />
          <Route path="/exam" element={<ExamPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/duyurular" element={<Announcement />} />
          <Route path="/coursepage" element={<CoursePage/>}/>
          <Route path="/bilgi-al" element={<BilgiAl/>}/>

        </Routes>
      </Router>
  );
}

export default App;
