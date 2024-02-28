import React from 'react'
import { Link } from 'react-router-dom'

const   ProfileContainers = () => {
  return (
    <div>
        <section className="my-2">
            <div className="container">
              <div className="new-packs my-10">
                <div className="package-card">
                  <div className="details pack-bg-2">
                    <h1>
                      <br />
                      Profilini oluştur
                    </h1>
                    <Link to="/profilim/profilimi-duzenle/kisisel-bilgilerim" className="btn btn-primary w-100">Başla</Link>
                  </div>
                </div>
                <div className="package-card">
                  <div className="details pack-bg-3">
                    <h1 className="mb-6">
                      <br />
                      Kendini değerlendir
                    </h1>
                    <Link to="/degerlendirmeler" className="btn btn-primary w-100">Başla</Link>
                  </div>
                </div>
                <div className="package-card">
                  <div className="details pack-bg-1">
                    <h1 className="mb-6">
                      <br />
                      Öğrenmeye başla
                    </h1>
                    <Link to="/egitimlerim" className="btn btn-primary w-100">Başla</Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
    </div>
  )
}

export default ProfileContainers