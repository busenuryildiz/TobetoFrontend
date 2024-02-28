import React from "react";
import Navi from "../../components/navbar/Navi";
import Footer from "../../components/footer/Footer";
import ApplicationStatus from "../../components/mainPage/applyTabPanel/appyTab";
import NotificationTab from "../../components/mainPage/notificationTabPanel/notificationTab";
import { useState } from "react";
import MySurveyTab from "../../components/mainPage/mySurveyTabPanel/mySurveyTab";
import { useSelector } from "react-redux";
import ProfileContainers from "./ProfileContainers";
import MyExams from "./MyExams";
import PlatformHeader from "./PlatformHeader";
import WelcomeHeader from "./WelcomeHeader";
import MyTabs from "./MyTabs";

function PlatformPage() {
  const [activeTab, setActiveTab] = useState("applications-tab-pane");
  const auth = useSelector((state: any) => state.auth);

  const handleTabClick = (tabId: string) => {
    console.log("tabId ", tabId);
    setActiveTab(tabId);
  };

  return (
    <div className="plaform-page">
      <Navi />
      <PlatformHeader />
      <main>
        <div className="platform-page" style={{ minHeight: "120vh" }}>
          <WelcomeHeader />

          <MyTabs activeTab={activeTab} handleTabClick={handleTabClick} />

          <MyExams />
          <ProfileContainers />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default PlatformPage;
