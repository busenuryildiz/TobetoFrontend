import React from 'react'

const PlatformHeader = () => {
  return (
    <div>
        <section className="dropdown custom-dropdown">
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <div className="mega-menu">
            <div className="notification-content">
              <div className="user-form done">
                <div className="d-flex flex-column">
                  <div className="form-name">Form ismi</div>
                  <div className="form-date">23.01.2023</div>
                </div>
                <a className="form-button" href="/platform"></a>
              </div>
              <div className="user-form pending">
                <div className="d-flex flex-column">
                  <div className="form-name">Form ismi</div>
                  <div className="form-date">23.01.2023</div>
                </div>
                <a className="form-button" href="/platform"></a>
              </div>
              <div className="user-form notdone">
                <div className="d-flex flex-column">
                  <div className="form-name">Form ismi</div>
                  <div className="form-date">23.01.2023</div>
                </div>
                <a className="form-button" href="/platform"></a>
              </div>
            </div>
          </div>
        </div>{" "}
      </section>
    </div>
  )
}

export default PlatformHeader