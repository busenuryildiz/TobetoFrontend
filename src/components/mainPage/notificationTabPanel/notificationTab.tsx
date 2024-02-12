import React from 'react';

interface Props {
  activeTab: string;
}

const NotificationTab: React.FC<Props> = ({ activeTab }) => {
  return (
    <div
      className={`tab-pane fade ${activeTab === 'notification-tab-pane' ? 'show active' : ''}`}
      id="notification-tab-pane"
      role="tabpanel"
      aria-labelledby="notification-tab"
      tabIndex={0}
    >
      <div className="row">
        <div className="col-md-4 col-12 my-4">
          <div className="notfy-card notify">
            <div className="d-flex flex-column">
              <div className="d-flex justify-content-between mb-4">
                <span className="type">Duyuru</span>
                <span className="corp-names type">İstanbul Kodluyor</span>
              </div>
              <span className="header">Mindset Anketi</span>
            </div>
            <div className="d-flex justify-content-between">
              <span className="date">31.01.2024</span>
              <span className="read-more">Devamını Oku</span>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-12 my-4">
          <div className="notfy-card notify">
            <div className="d-flex flex-column">
              <div className="d-flex justify-content-between mb-4">
                <span className="type">Duyuru</span>
                <span className="corp-names type">İstanbul Kodluyor</span>
              </div>
              <span className="header">Ocak Ayı Tercih Formu Bilgilendirmesi</span>
            </div>
            <div className="d-flex justify-content-between">
              <span className="date">12.01.2024</span>
              <span className="read-more">Devamını Oku</span>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-12 my-4">
          <div className="notfy-card notify">
            <div className="d-flex flex-column">
              <div className="d-flex justify-content-between mb-4">
                <span className="type">Duyuru</span>
                <span className="corp-names type">İstanbul Kodluyor</span>
              </div>
              <span className="header">11 Ocak Kampüs Buluşması</span>
            </div>
            <div className="d-flex justify-content-between">
              <span className="date">06.01.2024</span>
              <span className="read-more">Devamını Oku</span>
            </div>
          </div>
        </div>
        <div className="showMoreBtn">Daha Fazla Göster</div>
      </div>
    </div>
  );
}

export default NotificationTab;