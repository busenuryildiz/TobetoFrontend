import React from 'react'
import Footer2 from '../../components/footer/Footer2'
import Navi2 from '../../components/navbar/Navi2'
import { Link } from 'react-router-dom'

const WebMobile = () => {
  return (
    <div>
      <Navi2/>
      <main className="bg-front-dark">
<div><div className="raw-html-embed">
    <section className="position-relative overflow-hidden py-24">
      <div className="d-none d-lg-block position-absolute top-0 start-0 h-100 col-4 bg-white">
        <img className="w-100 h-100 img-fluid" src="https://images.unsplash.com/photo-1637778352878-f0b46d574a04?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMzIzMzB8MHwxfHNlYXJjaHwyNXx8c29mdHdhcmV8ZW58MHwxfHx8MTY1NzIwMzQ1NQ&ixlib=rb-1.2.1&q=80&w=1920" style={{objectFit: 'cover'}} />
      </div>
      <div className="container position-relative">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 mt-32 order-last order-lg-first">
            <div className="mw-md mx-auto pt-20 pb-24 px-8 px-md-12 px-xl-14 rounded bg-light" style={{boxShadow: '8px 80px 138px rgba(0, 0, 0, 0.11)'}}>
              <h3 className="mt-6 mb-8">
                Web &amp; Mobile Developer
              </h3>
              <a className="btn btn-primary " href="/bilgi-al"> Eğitim tarihlerinden haberdar olmak için</a>
            </div>
          </div>
          <div className="col-12 col-lg-6 pt-8">
            <div className="mw-lg text-center mx-auto">
              <h2 className="h3 mb-12 text-white">
                Tobeto ile yeni bir meslek &nbsp;
                <div contentEditable="false">
                  &nbsp;edin, uzmanlaş ve yüksel.
                </div>
              </h2>
              <p className="text-white">
                Bütçene ve zamanına en uygun abonelik paketini belirle, eğitim yolculuğunu başlat. Eğitim yolcuğunu tamamladığında iş olanaklarıyla eşleş.
              </p>
              <Link className="btn btn-primary w-100" to="/register">Ücretsiz Üye Ol</Link>                                                                                                                                                
            </div>
          </div>
        </div>
        <img className="d-block w-100 mw-md d-lg-none mt-20 mx-auto img-fluid" src="https://images.unsplash.com/photo-1607782599721-4a423a010b84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80" style={{objectFit: 'cover'}} />
      </div>
    </section>
    <section className="bg-dark">
      <div className="md-10 pt-8 pb-8 bg-dark-light">
        <div className="container">
          <div className="row ">
            <div className="col-12 ">
              <h4 className="text-white">
                Eğitim Hakkında
              </h4>
              <p className="text-white mb-8">
                Dünyada ve ülkemizde yeni teknolojiler üretebilecek nitelikte iş gücünün önemi her geçen gün artmakta. Yazılımcı ihtiyacı ise tüm sektörler için inanılmaz bir boyuta gelmiş durumda. Uygulama ağırlıklı, son teknolojileri barındıran yazılım eğitimlerimizi genç nesille tanıştırmak, Türkiye'de ve dünyada geçerli yazılımcılar olabilmelerinin önünü açmayı hedefliyoruz.
              </p>
              <p>
              </p>
              <h4 className="text-white">
                Eğitim Başlangıç Tarihleri
              </h4>
              <p className="f-size-18 c-white">
                Ocak 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="py-0 border-top border-dark">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4 className="mb-6 text-white">
              Eğitim İçeriği
            </h4>
          </div>
          <div className="col-12 col-lg-6 pe-lg-4 mb-8">
            <div className="b-r-15 p-8 bg-info">
              <h6 className="mt-6 mb-4 fw-normal text-white">
                Temel Web Programlama
              </h6>
              <ul className="text-white m-0 p-0">
                <li className="list-unstyled">
                  •	HTML
                </li>
                <li className="list-unstyled">
                  •	CSS
                </li>
                <li className="list-unstyled">
                  •	JavaScript Temel
                </li>
                <li className="list-unstyled">
                  <br />
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-lg-6 ps-lg-4 mb-8">
            <div className="b-r-15 p-8 bg-info">
              <h6 className="mt-6 mb-4 fw-normal text-white">
                İleri Web Programlama
              </h6>
              <ul className="text-white m-0 p-0">
                <li className="list-unstyled">
                  •	JavaScript İleri
                </li>
                <li className="list-unstyled">
                  •	Bootstrap
                </li>
                <li className="list-unstyled">
                  •	Farklı Veri Formatları ve Türleri ile Çalışma (XML/JSON)
                </li>
                <li className="list-unstyled">
                  •	Chrome Web Developer Tools
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-lg-6 pe-lg-4 mb-8">
            <div className="b-r-15 p-8 bg-info">
              <h6 className="mt-6 mb-4 fw-normal text-white">
                Araçların Kullanımı
              </h6>
              <ul className="text-white m-0 p-0">
                <li className="list-unstyled">
                  •	Visual Studio Code Temel Özellikleri
                </li>
                <li className="list-unstyled">
                  •	Git ile Versiyon Kontrolü ve Kod Deposu Yönetimi
                </li>
                <li className="list-unstyled">
                  •	API Kavramı ve Mock Servis Yazımı
                </li>
                <li className="list-unstyled">
                  •	Postman
                </li>
                <li className="list-unstyled">
                  <br />
                </li>
                <li className="list-unstyled">
                  <br />
                </li>
                <li className="list-unstyled">
                  <br />
                </li>
                <li className="list-unstyled">
                  <br />
                </li>
                <li className="list-unstyled">
                  <br />
                </li>
                <li className="list-unstyled">
                  <br />
                </li>
                <li className="list-unstyled">
                  <br />
                </li>
                <li className="list-unstyled">
                  <br />
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-lg-6 ps-lg-4 mb-8">
            <div className="b-r-15 p-8 bg-info">
              <h6 className="mt-6 mb-4 fw-normal text-white">
                React Front End Programlama
              </h6>
              <ul className="text-white m-0 p-0">
                <li className="list-unstyled">
                  •	React JS Giriş
                </li>
                <li className="list-unstyled">
                  •	React JS Kurulum
                </li>
                <li className="list-unstyled">
                  •	JSX
                </li>
                <li className="list-unstyled">
                  •	Render Kavramı
                </li>
                <li className="list-unstyled">
                  •	Adım Adım İlk React Projesi
                </li>
                <li className="list-unstyled">
                  •	Bileşenler (Components)
                </li>
                <li className="list-unstyled">
                  •	Props
                </li>
                <li className="list-unstyled">
                  •	Durum Yönetimi (State Management)
                </li>
                <li className="list-unstyled">
                  •	Formlar ve Data Binding
                </li>
                <li className="list-unstyled">
                  •	Koşullar, Döngüler ve Diziler (Arrays)
                </li>
                <li className="list-unstyled">
                  •	Axios
                </li>
                <li className="list-unstyled">
                  •	Yaygınlaştırma (Deployment)
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-lg-6 pe-lg-4 mb-8">
            <div className="b-r-15 p-8 bg-info">
              <h6 className="mt-6 mb-4 fw-normal text-white">
                Veritabanı Temel Eğitimi
              </h6>
              <ul className="text-white m-0 p-0">
                <li className="list-unstyled">
                  •	Veritabanı Temel Eğitimi
                </li>
                <li className="list-unstyled">
                  •	Veri Türleri
                </li>
                <li className="list-unstyled">
                  •	Tablolar
                </li>
                <li className="list-unstyled">
                  •	İlişkiler
                </li>
                <li className="list-unstyled">
                  •	Temel Veritabanı Tasarım İlkeleri
                </li>
                <li className="list-unstyled">
                  •	İlişkisel Veritabanı Mimarisi
                </li>
                <li className="list-unstyled">
                  •	Veri Sorgulama Dili (T-SQL) - DML (SELECT, INSERT, UPDATE, DELETE)
                </li>
                <li className="list-unstyled">
                  <br />
                </li>
                <li className="list-unstyled">
                  <br />
                </li>
                <li className="list-unstyled">
                  <br />
                </li>
                <li className="list-unstyled">
                  <br />
                </li>
                <li className="list-unstyled">
                  <br />
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-lg-6 pe-lg-4 mb-8">
            <div className="b-r-15 p-8 bg-info">
              <h6 className="mt-6 mb-4 fw-normal text-white">
                React Native ile Mobile Programlama 
              </h6>
              <ul className="text-white m-0 p-0">
                <li className="list-unstyled">
                  •	Kurulum / Çalışma Ortamının Hazırlanması
                </li>
                <li className="list-unstyled">
                  •	React Native’e Giriş
                </li>
                <li className="list-unstyled">
                  •	Taslak Oluşturma
                </li>
                <li className="list-unstyled">
                  •	Layout / Navigation
                </li>
                <li className="list-unstyled">
                  •	Proje Oluşturma
                </li>
                <li className="list-unstyled">
                  •	NPM Paket Yönetimi
                </li>
                <li className="list-unstyled">
                  •	Cihaz Yönetimi
                </li>
                <li className="list-unstyled">
                  •	Local Storage
                </li>
                <li className="list-unstyled">
                  •	Firebase
                </li>
                <li className="list-unstyled">
                  •	Axios / API 
                </li>
                <li className="list-unstyled">
                  •	Push Notification
                </li>
                <li className="list-unstyled">
                  •	Redux
                </li>
                <li className="list-unstyled">
                  •	Uygulama Marketleri
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="py-10">
      <div className="container">
        <div>
          <h4 className="mb-6 text-white">
            Bu Eğitim Kimler İçindir?
          </h4>
          <p className="text-white">
            Üniversite öğrencileri, profesyoneller, işini veya mesleğini değiştirmek ya da işinde gelişmek isteyen herkes katılabilir. ​
          </p>
          <p className="text-white">
            Dünya çapında popülerliği ve iş olanakları artan yazılım geliştirme alanında kendini geliştirmek isteyen kişiler içindir.
          </p>
        </div>
      </div>
    </section>
  </div></div>

      </main>
    <Footer2/>
    </div>
  )
}

export default WebMobile