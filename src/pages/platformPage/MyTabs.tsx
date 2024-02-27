import React from "react";
import IstanbulCodingBanner from "./IstanbulCodingBanner";
import IstanbulCodingText from "./IstanbulCodingText";
import NavTabs from "./NavTabs";
import MyApplications from "./MyApplications";
import MyLessons from "./MyLessons";
import MyAnnouncements from "./MyAnnouncements";
import MySurveys from "./MySurveys";

interface MyTabsProps {
    activeTab: string;
    handleTabClick: (tabId: string) => void;
  }

function MyTabs({ activeTab, handleTabClick }: MyTabsProps) {
  return (
    <section className="my-2">
      <div className="container">
        <div className="row cv-box cv-padding display-flex mmt-n-4">
          <div className="col-12 ik-logo-platform">
            
              <IstanbulCodingBanner />
              <IstanbulCodingText />
            <NavTabs activeTab={activeTab} handleTabClick={handleTabClick} />
            {activeTab === "applications-tab-pane" && <MyApplications />}
            {activeTab === "lessons-tab-pane" && <MyLessons />}
            {activeTab === "notification-tab-pane" && <MyAnnouncements />}
            {activeTab === "mySurvey-tab-pane" && <MySurveys />}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyTabs;
