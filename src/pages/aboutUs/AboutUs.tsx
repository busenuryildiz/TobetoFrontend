
import React from "react";
import Footer2 from "../../components/footer/Footer2";
import TobetoBanner from "../../components/tobeto-banner/TobetoBanner";
import Navi2 from "../../components/navbar/Navi2";

const AboutUs = () => {

  return (
    <div className="bg-front-dark bg-front-width">
      <TobetoBanner />
      <Navi2 />
      <section className="py-24" style={{ marginTop: '70px' }} >
        <div className="position-relative">
          <div className="container">
            <div className="row">
              <div className="col-md-7 col-12 my-10 flex-row ">
                <div className="flex-col">
                  <span className="span-style">
                    <span className="inner-span-style" />
                    <img
                      alt="Resim"
                      data-nimg="responsive"
                      decoding="async"
                      sizes="100vw"
                      src="https://tobeto.com/_next/static/media/tbtLogo.3fb5d7fd.svg"
                      srcSet="https://tobeto.com/_next/static/media/tbtLogo.3fb5d7fd.svg 640w, https://tobeto.com/_next/static/media/tbtLogo.3fb5d7fd.svg 750w, https://tobeto.com/_next/static/media/tbtLogo.3fb5d7fd.svg 828w, https://tobeto.com/_next/static/media/tbtLogo.3fb5d7fd.svg 1080w, https://tobeto.com/_next/static/media/tbtLogo.3fb5d7fd.svg 1200w, https://tobeto.com/_next/static/media/tbtLogo.3fb5d7fd.svg 1920w, https://tobeto.com/_next/static/media/tbtLogo.3fb5d7fd.svg 2048w, https://tobeto.com/_next/static/media/tbtLogo.3fb5d7fd.svg 3840w"
                      className="img-style"
                    />
                    <noscript />
                  </span>
                </div>
                <div className="flex-col">
                  <p className="aboutus-text">
                    Tobeto, <br />
                    "headhunting" yaklaşımını <br />
                    <span className="highlight-text">"headfarming"</span> olarak değiştirmeyi <br />
                    hedefleyen, eğitim ve gelişim odaklı <br />
                    dijital bir platformdur
                  </p>
                  <p className="aboutus-text" />
                </div>
              </div>
              <div className="col-md-5 col-12 my-10 d-flex">
                <video className="modal-height youtube-video img-fluid" controls width="100%">
                  <source src="https://s3.cloud.ngn.com.tr/tobeto/tobeto_final_v2_5c7893fbe0.mp4" type="video/mp4" />
                  <source src="movie.ogg" type="video/ogg" />
                </video>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row mt-10">
              <div className="col-12">
                <p className="about-paragraph">
                  Geleceğin mesleklerindeki yetenek açığını, geleneksel "headhunting" yaklaşımının " <b> headfarming </b>  " olarak değişmesiyle çözülebileceğine inanarak yola çıktık. </p>
                <p className="about-paragraph">
                  Tobeto, "headfarming" yaklaşımıyla yeteneği potansiyel olarak değerlendirir, en kıymetli olacağı alanda yetiştirir, değer yaratacağı projeler ve kurumlarla eşleştirir. Bu fırsata{' '} <b>
                    Y.E.S. (Yetiş-Eşleş-Sürdür) </b>  {' '}diyen herkesi Tobeto’lu olmaya çağırıyoruz. </p>
                <p className="about-paragraph">
                  Günümüzde iş bulmak, bir projeye dahil olmak veya kariyerinde yükselmek gibi değer yaratma yolları için en önemli unsurların başında{' '}
                  <b>dijital beceri </b> {' '}sahibi olmak geliyor. Tam da bu ihtiyaçları kapsamak üzere, Tobeto'da eğitim içeriklerimizi hem dijital beceri sahibi olmak isteyen yeteneklerin teknik beceri kazanması hem de genç profesyonellerin, ihtiyaçlarına uygun olarak yenilenmeleri ve yetkinliklerini geliştirmelerini kapsayacak şekilde tek platformda birleştirdik. </p>
                <p className="about-paragraph">
                  Tobeto’da{' '} <b>   hem bireylere hem de kurumlara  </b> {' '}hizmet eden yapımızla, doğru yetenekle doğru pozisyonun sürdürülebilir bir şekilde eşleşmesine ve birlikte gelişmelerine alan açıyoruz. Kurum içi çözümlere destek veriyor, eğitim ve istihdam arasında köprü görevini üstleniyoruz. </p>
              </div>
            </div>
            <div className="row mt-10">
              <div className="bg-gradient-gray">
                <span> Tobeto farkı;  </span>
                <ul>
                  <li>
                    <b>   Codecademy   </b> {' '}ile uluslararası  geçerliliğe sahip sertifika fırsatı
                  </li>
                  <li>
                    <b> Abonelik</b> {' '}modeliyle eğitime erişim
                  </li>
                  <li>
                    Çeşitlendirilmiş{' '}
                    <b> değerlendirme  </b>{' '}araçlarıyla gelişim alanlarını tanıma
                  </li>
                  <li>
                    <b> Fark yaratan </b>{' '}bir gelişim süreci
                  </li>
                  <li>
                    Mesleki eğitimlerin yanı sıra{' '}
                    <b>  kişisel ve profesyonel gelişim </b> {' '}imkanı
                  </li>
                  <li>
                    Alanında uzman eğitmenlerle{' '}
                    <b> canlı dersler </b>
                  </li>
                  <li>
                    <b> Mentör </b> {' '}desteği{' '}
                  </li>
                  <li>
                    Online ve canlı derslerle{' '}
                    <b>  hibrit</b> {' '}yaklaşım
                  </li>
                  <li>
                    <b>  Zengin </b>{' '}eğitim kütüphanesi
                  </li>
                </ul>
              </div>
            </div>
            <div className="row mt-10">
              <span className="gradient-header">
                Tobeto ile işe hazırlan, işe yerleş, işinde geliş, yüksel!
              </span>
            </div>
            <div className="gradient-line mt-5" />
            <div className="row mt-10">
              <div className="bg-gradient-gray">
                <span className="mb-10" style={{ fontWeight: '600' }}  >
                  Ekibimiz
                </span>
                <div className="craws">
                  <div className="craw">
                    <div className="craw-image">
                      <a
                        href="https://www.linkedin.com/in/eliftugtan/"
                        target="_blank" rel="noreferrer"
                      >
                        <span
                          style={{
                            background: 'none',
                            border: '0px',
                            boxSizing: 'border-box',
                            display: 'block',
                            height: 'initial',
                            inset: '0px',
                            margin: '0px',
                            opacity: '1',
                            overflow: 'hidden',
                            padding: '0px',
                            position: 'absolute',
                            width: 'initial'
                          }}
                        >
                          <img
                            alt="Elif Kılıç Tuğtan"
                            data-nimg="fill"
                            decoding="async"
                            sizes="100vw"
                            src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Felif-kilic.ba3177e2.png&w=3840&q=75"
                            srcSet="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Felif-kilic.ba3177e2.png&w=640&q=75 640w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Felif-kilic.ba3177e2.png&w=750&q=75 750w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Felif-kilic.ba3177e2.png&w=828&q=75 828w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Felif-kilic.ba3177e2.png&w=1080&q=75 1080w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Felif-kilic.ba3177e2.png&w=1200&q=75 1200w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Felif-kilic.ba3177e2.png&w=1920&q=75 1920w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Felif-kilic.ba3177e2.png&w=2048&q=75 2048w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Felif-kilic.ba3177e2.png&w=3840&q=75 3840w"
                            style={{
                              border: 'none',
                              boxSizing: 'border-box',
                              display: 'block',
                              height: '0px',
                              inset: '0px',
                              margin: 'auto',
                              maxHeight: '100%',
                              maxWidth: '100%',
                              minHeight: '100%',
                              minWidth: '100%',
                              objectFit: 'cover',
                              padding: '0px',
                              position: 'absolute',
                              width: '0px'
                            }}
                          />
                          <noscript />
                        </span>
                      </a>
                    </div>
                    <span className="craw-name">
                      Elif Kılıç Tuğtan
                    </span>
                    <span className="craw-title">
                      Kurucu Direktör
                    </span>
                  </div>
                  <div className="craw">
                    <div className="craw-image">
                      <a
                        href="https://www.linkedin.com/in/kader-yavuz/"
                        target="_blank" rel="noreferrer"
                      >
                        <span
                          style={{
                            background: 'none',
                            border: '0px',
                            boxSizing: 'border-box',
                            display: 'block',
                            height: 'initial',
                            inset: '0px',
                            margin: '0px',
                            opacity: '1',
                            overflow: 'hidden',
                            padding: '0px',
                            position: 'absolute',
                            width: 'initial'
                          }}
                        >
                          <img
                            alt="Kader Yavuz"
                            data-nimg="fill"
                            decoding="async"
                            sizes="100vw"
                            src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fkader-yavuz.659fb664.png&w=3840&q=75"
                            srcSet="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fkader-yavuz.659fb664.png&w=640&q=75 640w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fkader-yavuz.659fb664.png&w=750&q=75 750w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fkader-yavuz.659fb664.png&w=828&q=75 828w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fkader-yavuz.659fb664.png&w=1080&q=75 1080w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fkader-yavuz.659fb664.png&w=1200&q=75 1200w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fkader-yavuz.659fb664.png&w=1920&q=75 1920w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fkader-yavuz.659fb664.png&w=2048&q=75 2048w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fkader-yavuz.659fb664.png&w=3840&q=75 3840w"
                            style={{
                              border: 'none',
                              boxSizing: 'border-box',
                              display: 'block',
                              height: '0px',
                              inset: '0px',
                              margin: 'auto',
                              maxHeight: '100%',
                              maxWidth: '100%',
                              minHeight: '100%',
                              minWidth: '100%',
                              objectFit: 'cover',
                              padding: '0px',
                              position: 'absolute',
                              width: '0px'
                            }}
                          />
                          <noscript />
                        </span>
                      </a>
                    </div>
                    <span className="craw-name">
                      Kader Yavuz
                    </span>
                    <span className="craw-title">
                      Eğitim ve Proje Koordinatörü
                    </span>
                  </div>
                  <div className="craw">
                    <div className="craw-image">
                      <a href="/hakkimizda">
                        <span
                          style={{
                            background: 'none',
                            border: '0px',
                            boxSizing: 'border-box',
                            display: 'block',
                            height: 'initial',
                            inset: '0px',
                            margin: '0px',
                            opacity: '1',
                            overflow: 'hidden',
                            padding: '0px',
                            position: 'absolute',
                            width: 'initial'
                          }}
                        >
                          <img
                            alt=""
                            data-nimg="fill"
                            decoding="async"
                            sizes="100vw"
                            src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpelin-batir.3e558dda.png&w=3840&q=75"
                            srcSet="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpelin-batir.3e558dda.png&w=640&q=75 640w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpelin-batir.3e558dda.png&w=750&q=75 750w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpelin-batir.3e558dda.png&w=828&q=75 828w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpelin-batir.3e558dda.png&w=1080&q=75 1080w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpelin-batir.3e558dda.png&w=1200&q=75 1200w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpelin-batir.3e558dda.png&w=1920&q=75 1920w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpelin-batir.3e558dda.png&w=2048&q=75 2048w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpelin-batir.3e558dda.png&w=3840&q=75 3840w"
                            style={{
                              border: 'none',
                              boxSizing: 'border-box',
                              display: 'block',
                              height: '0px',
                              inset: '0px',
                              margin: 'auto',
                              maxHeight: '100%',
                              maxWidth: '100%',
                              minHeight: '100%',
                              minWidth: '100%',
                              objectFit: 'cover',
                              padding: '0px',
                              position: 'absolute',
                              width: '0px'
                            }}
                          />
                          <noscript />
                        </span>
                      </a>
                    </div>
                    <span className="craw-name">
                      Pelin Batır
                    </span>
                    <span className="craw-title">
                      İş Geliştirme Yöneticisi
                    </span>
                  </div>
                  <div className="craw">
                    <div className="craw-image">
                      <a
                        href="https://www.linkedin.com/in/g%C3%BCrkan-ili%C5%9Fen/"
                        target="_blank" rel="noreferrer"
                      >
                        <span
                          style={{
                            background: 'none',
                            border: '0px',
                            boxSizing: 'border-box',
                            display: 'block',
                            height: 'initial',
                            inset: '0px',
                            margin: '0px',
                            opacity: '1',
                            overflow: 'hidden',
                            padding: '0px',
                            position: 'absolute',
                            width: 'initial'
                          }}
                        >
                          <img
                            alt=""
                            data-nimg="fill"
                            decoding="async"
                            sizes="100vw"
                            src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgurkanilisen.caf74ca3.png&w=3840&q=75"
                            srcSet="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgurkanilisen.caf74ca3.png&w=640&q=75 640w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgurkanilisen.caf74ca3.png&w=750&q=75 750w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgurkanilisen.caf74ca3.png&w=828&q=75 828w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgurkanilisen.caf74ca3.png&w=1080&q=75 1080w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgurkanilisen.caf74ca3.png&w=1200&q=75 1200w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgurkanilisen.caf74ca3.png&w=1920&q=75 1920w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgurkanilisen.caf74ca3.png&w=2048&q=75 2048w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgurkanilisen.caf74ca3.png&w=3840&q=75 3840w"
                            style={{
                              border: 'none',
                              boxSizing: 'border-box',
                              display: 'block',
                              height: '0px',
                              inset: '0px',
                              margin: 'auto',
                              maxHeight: '100%',
                              maxWidth: '100%',
                              minHeight: '100%',
                              minWidth: '100%',
                              objectFit: 'cover',
                              padding: '0px',
                              position: 'absolute',
                              width: '0px'
                            }}
                          />
                          <noscript />
                        </span>
                      </a>
                    </div>
                    <span className="craw-name">
                      Gürkan İlişen
                    </span>
                    <span className="craw-title">
                      Eğitim Teknolojileri ve Platform Sorumlusu
                    </span>
                  </div>
                </div>
                <div className="craws">
                  <div className="craw">
                    <div className="craw-image">
                      <a
                        href="https://www.linkedin.com/in/ismail-erden-78a49361/"
                        target="_blank" rel="noreferrer"
                      >
                        <span
                          style={{
                            background: 'none',
                            border: '0px',
                            boxSizing: 'border-box',
                            display: 'block',
                            height: 'initial',
                            inset: '0px',
                            margin: '0px',
                            opacity: '1',
                            overflow: 'hidden',
                            padding: '0px',
                            position: 'absolute',
                            width: 'initial'
                          }}
                        >
                          <img
                            alt="İsmail Erden"
                            data-nimg="fill"
                            decoding="async"
                            sizes="100vw"
                            src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fismail-erden.569a29be.png&w=3840&q=75"
                            srcSet="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fismail-erden.569a29be.png&w=640&q=75 640w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fismail-erden.569a29be.png&w=750&q=75 750w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fismail-erden.569a29be.png&w=828&q=75 828w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fismail-erden.569a29be.png&w=1080&q=75 1080w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fismail-erden.569a29be.png&w=1200&q=75 1200w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fismail-erden.569a29be.png&w=1920&q=75 1920w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fismail-erden.569a29be.png&w=2048&q=75 2048w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fismail-erden.569a29be.png&w=3840&q=75 3840w"
                            style={{
                              border: 'none',
                              boxSizing: 'border-box',
                              display: 'block',
                              height: '0px',
                              inset: '0px',
                              margin: 'auto',
                              maxHeight: '100%',
                              maxWidth: '100%',
                              minHeight: '100%',
                              minWidth: '100%',
                              objectFit: 'cover',
                              padding: '0px',
                              position: 'absolute',
                              width: '0px'
                            }}
                          />
                          <noscript />
                        </span>
                      </a>
                    </div>
                    <span className="craw-name">
                      İsmail Erden
                    </span>
                    <span className="craw-title">
                      Yazılım Geliştirme Müdürü
                    </span>
                  </div>
                  <div className="craw">
                    <div className="craw-image">
                      <a
                        href="https://www.linkedin.com/in/selimergin/"
                        target="_blank" rel="noreferrer"
                      >
                        <span
                          style={{
                            background: 'none',
                            border: '0px',
                            boxSizing: 'border-box',
                            display: 'block',
                            height: 'initial',
                            inset: '0px',
                            margin: '0px',
                            opacity: '1',
                            overflow: 'hidden',
                            padding: '0px',
                            position: 'absolute',
                            width: 'initial'
                          }}
                        >
                          <img
                            alt=""
                            data-nimg="fill"
                            decoding="async"
                            sizes="100vw"
                            src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fselimergin.f1d7d9ad.png&w=3840&q=75"
                            srcSet="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fselimergin.f1d7d9ad.png&w=640&q=75 640w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fselimergin.f1d7d9ad.png&w=750&q=75 750w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fselimergin.f1d7d9ad.png&w=828&q=75 828w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fselimergin.f1d7d9ad.png&w=1080&q=75 1080w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fselimergin.f1d7d9ad.png&w=1200&q=75 1200w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fselimergin.f1d7d9ad.png&w=1920&q=75 1920w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fselimergin.f1d7d9ad.png&w=2048&q=75 2048w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fselimergin.f1d7d9ad.png&w=3840&q=75 3840w"
                            style={{
                              border: 'none',
                              boxSizing: 'border-box',
                              display: 'block',
                              height: '0px',
                              inset: '0px',
                              margin: 'auto',
                              maxHeight: '100%',
                              maxWidth: '100%',
                              minHeight: '100%',
                              minWidth: '100%',
                              objectFit: 'cover',
                              padding: '0px',
                              position: 'absolute',
                              width: '0px'
                            }}
                          />
                          <noscript />
                        </span>
                      </a>
                    </div>
                    <span className="craw-name">
                      Ahmet Selim Ergin
                    </span>
                    <span className="craw-title">
                      Yazılım Geliştirici
                    </span>
                  </div>
                  <div className="craw">
                    <div className="craw-image">
                      <a
                        href="https://www.linkedin.com/in/do%C4%9Fukan-bekta%C5%9F-1877b920a/"
                        target="_blank" rel="noreferrer"
                      >
                        <span
                          style={{
                            background: 'none',
                            border: '0px',
                            boxSizing: 'border-box',
                            display: 'block',
                            height: 'initial',
                            inset: '0px',
                            margin: '0px',
                            opacity: '1',
                            overflow: 'hidden',
                            padding: '0px',
                            position: 'absolute',
                            width: 'initial'
                          }}
                        >
                          <img
                            alt=""
                            data-nimg="fill"
                            decoding="async"
                            sizes="100vw"
                            src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdogukan.ebef6ec9.png&w=3840&q=75"
                            srcSet="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdogukan.ebef6ec9.png&w=640&q=75 640w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdogukan.ebef6ec9.png&w=750&q=75 750w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdogukan.ebef6ec9.png&w=828&q=75 828w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdogukan.ebef6ec9.png&w=1080&q=75 1080w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdogukan.ebef6ec9.png&w=1200&q=75 1200w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdogukan.ebef6ec9.png&w=1920&q=75 1920w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdogukan.ebef6ec9.png&w=2048&q=75 2048w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdogukan.ebef6ec9.png&w=3840&q=75 3840w"
                            style={{
                              border: 'none',
                              boxSizing: 'border-box',
                              display: 'block',
                              height: '0px',
                              inset: '0px',
                              margin: 'auto',
                              maxHeight: '100%',
                              maxWidth: '100%',
                              minHeight: '100%',
                              minWidth: '100%',
                              objectFit: 'cover',
                              padding: '0px',
                              position: 'absolute',
                              width: '0px'
                            }}
                          />
                          <noscript />
                        </span>
                      </a>
                    </div>
                    <span className="craw-name">
                      Doğukan Bektaş
                    </span>
                    <span className="craw-title">
                      Yazılım Geliştirici
                    </span>
                  </div>
                </div>
                <span
                  className="my-10"
                  style={{
                    fontWeight: '600'
                  }}
                >
                  Danışma Kurulu
                </span>
                <div className="craws">
                  <div className="craw">
                    <div className="craw-image">
                      <a
                        href="https://www.linkedin.com/in/ahmethancer/"
                        target="_blank" rel="noreferrer"
                      >
                        <span
                          style={{
                            background: 'none',
                            border: '0px',
                            boxSizing: 'border-box',
                            display: 'block',
                            height: 'initial',
                            inset: '0px',
                            margin: '0px',
                            opacity: '1',
                            overflow: 'hidden',
                            padding: '0px',
                            position: 'absolute',
                            width: 'initial'
                          }}
                        >
                          <img
                            alt=""
                            data-nimg="fill"
                            decoding="async"
                            sizes="100vw"
                            src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fahmet-hancer.13d6bd2f.png&w=3840&q=75"
                            srcSet="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fahmet-hancer.13d6bd2f.png&w=640&q=75 640w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fahmet-hancer.13d6bd2f.png&w=750&q=75 750w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fahmet-hancer.13d6bd2f.png&w=828&q=75 828w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fahmet-hancer.13d6bd2f.png&w=1080&q=75 1080w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fahmet-hancer.13d6bd2f.png&w=1200&q=75 1200w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fahmet-hancer.13d6bd2f.png&w=1920&q=75 1920w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fahmet-hancer.13d6bd2f.png&w=2048&q=75 2048w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fahmet-hancer.13d6bd2f.png&w=3840&q=75 3840w"
                            style={{
                              border: 'none',
                              boxSizing: 'border-box',
                              display: 'block',
                              height: '0px',
                              inset: '0px',
                              margin: 'auto',
                              maxHeight: '100%',
                              maxWidth: '100%',
                              minHeight: '100%',
                              minWidth: '100%',
                              objectFit: 'cover',
                              padding: '0px',
                              position: 'absolute',
                              width: '0px'
                            }}
                          />
                          <noscript />
                        </span>
                      </a>
                    </div>
                    <span className="craw-name">
                      Ahmet Hançer
                    </span>
                    <span className="craw-title">
                      Enocta
                    </span>
                    <span className="craw-title">
                      CEO
                    </span>
                  </div>
                  <div className="craw">
                    <div className="craw-image">
                      <a
                        href="https://www.linkedin.com/in/ecmel-ayral-777b823/"
                        target="_blank" rel="noreferrer"
                      >
                        <span
                          style={{
                            background: 'none',
                            border: '0px',
                            boxSizing: 'border-box',
                            display: 'block',
                            height: 'initial',
                            inset: '0px',
                            margin: '0px',
                            opacity: '1',
                            overflow: 'hidden',
                            padding: '0px',
                            position: 'absolute',
                            width: 'initial'
                          }}
                        >
                          <img
                            alt=""
                            data-nimg="fill"
                            decoding="async"
                            sizes="100vw"
                            src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fecmel-ayral.9114c7af.png&w=3840&q=75"
                            srcSet="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fecmel-ayral.9114c7af.png&w=640&q=75 640w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fecmel-ayral.9114c7af.png&w=750&q=75 750w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fecmel-ayral.9114c7af.png&w=828&q=75 828w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fecmel-ayral.9114c7af.png&w=1080&q=75 1080w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fecmel-ayral.9114c7af.png&w=1200&q=75 1200w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fecmel-ayral.9114c7af.png&w=1920&q=75 1920w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fecmel-ayral.9114c7af.png&w=2048&q=75 2048w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fecmel-ayral.9114c7af.png&w=3840&q=75 3840w"
                            style={{
                              border: 'none',
                              boxSizing: 'border-box',
                              display: 'block',
                              height: '0px',
                              inset: '0px',
                              margin: 'auto',
                              maxHeight: '100%',
                              maxWidth: '100%',
                              minHeight: '100%',
                              minWidth: '100%',
                              objectFit: 'cover',
                              padding: '0px',
                              position: 'absolute',
                              width: '0px'
                            }}
                          />
                          <noscript />
                        </span>
                      </a>
                    </div>
                    <span className="craw-name">
                      Dr. Ecmel Ayral
                    </span>
                    <span className="craw-title">
                      Unlearn Academy
                    </span>
                    <span className="craw-title">
                      Kurucu
                    </span>
                  </div>
                  <div className="craw">
                    <div className="craw-image">
                      <a
                        href="https://www.linkedin.com/in/atacik/"
                        target="_blank" rel="noreferrer"
                      >
                        <span
                          style={{
                            background: 'none',
                            border: '0px',
                            boxSizing: 'border-box',
                            display: 'block',
                            height: 'initial',
                            inset: '0px',
                            margin: '0px',
                            opacity: '1',
                            overflow: 'hidden',
                            padding: '0px',
                            position: 'absolute',
                            width: 'initial'
                          }}
                        >
                          <img
                            alt=""
                            data-nimg="fill"
                            decoding="async"
                            sizes="100vw"
                            src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcem-atacik.29af3d5b.png&w=3840&q=75"
                            srcSet="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcem-atacik.29af3d5b.png&w=640&q=75 640w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcem-atacik.29af3d5b.png&w=750&q=75 750w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcem-atacik.29af3d5b.png&w=828&q=75 828w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcem-atacik.29af3d5b.png&w=1080&q=75 1080w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcem-atacik.29af3d5b.png&w=1200&q=75 1200w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcem-atacik.29af3d5b.png&w=1920&q=75 1920w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcem-atacik.29af3d5b.png&w=2048&q=75 2048w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcem-atacik.29af3d5b.png&w=3840&q=75 3840w"
                            style={{
                              border: 'none',
                              boxSizing: 'border-box',
                              display: 'block',
                              height: '0px',
                              inset: '0px',
                              margin: 'auto',
                              maxHeight: '100%',
                              maxWidth: '100%',
                              minHeight: '100%',
                              minWidth: '100%',
                              objectFit: 'cover',
                              padding: '0px',
                              position: 'absolute',
                              width: '0px'
                            }}
                          />
                          <noscript />
                        </span>
                      </a>
                    </div>
                    <span className="craw-name">
                      Cem Atacık
                    </span>
                    <span className="craw-title">
                      Kampüs365 & Perculus
                    </span>
                    <span className="craw-title">
                      CEO
                    </span>
                  </div>
                  <div className="craw">
                    <div className="craw-image">
                      <a
                        href="https://www.linkedin.com/in/mehmetgursoy/"
                        target="_blank" rel="noreferrer"
                      >
                        <span
                          style={{
                            background: 'none',
                            border: '0px',
                            boxSizing: 'border-box',
                            display: 'block',
                            height: 'initial',
                            inset: '0px',
                            margin: '0px',
                            opacity: '1',
                            overflow: 'hidden',
                            padding: '0px',
                            position: 'absolute',
                            width: 'initial'
                          }}
                        >
                          <img
                            alt=""
                            data-nimg="fill"
                            decoding="async"
                            sizes="100vw"
                            src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmehmet-gursoy.7a0af94d.png&w=3840&q=75"
                            srcSet="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmehmet-gursoy.7a0af94d.png&w=640&q=75 640w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmehmet-gursoy.7a0af94d.png&w=750&q=75 750w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmehmet-gursoy.7a0af94d.png&w=828&q=75 828w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmehmet-gursoy.7a0af94d.png&w=1080&q=75 1080w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmehmet-gursoy.7a0af94d.png&w=1200&q=75 1200w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmehmet-gursoy.7a0af94d.png&w=1920&q=75 1920w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmehmet-gursoy.7a0af94d.png&w=2048&q=75 2048w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmehmet-gursoy.7a0af94d.png&w=3840&q=75 3840w"
                            style={{
                              border: 'none',
                              boxSizing: 'border-box',
                              display: 'block',
                              height: '0px',
                              inset: '0px',
                              margin: 'auto',
                              maxHeight: '100%',
                              maxWidth: '100%',
                              minHeight: '100%',
                              minWidth: '100%',
                              objectFit: 'cover',
                              padding: '0px',
                              position: 'absolute',
                              width: '0px'
                            }}
                          />
                          <noscript />
                        </span>
                      </a>
                    </div>
                    <span className="craw-name">
                      Mehmet Gürsoy
                    </span>
                    <span className="craw-title">
                      Ledd
                    </span>
                    <span className="craw-title">
                      Kurucu
                    </span>
                  </div>
                  <div className="craw">
                    <div className="craw-image">
                      <a
                        href="https://www.linkedin.com/in/alpaslan-gursoy-97463a90/"
                        target="_blank" rel="noreferrer"
                      >
                        <span
                          style={{
                            background: 'none',
                            border: '0px',
                            boxSizing: 'border-box',
                            display: 'block',
                            height: 'initial',
                            inset: '0px',
                            margin: '0px',
                            opacity: '1',
                            overflow: 'hidden',
                            padding: '0px',
                            position: 'absolute',
                            width: 'initial'
                          }}
                        >
                          <img
                            alt=""
                            data-nimg="fill"
                            decoding="async"
                            sizes="100vw"
                            src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Falparslan.ad11a534.png&w=3840&q=75"
                            srcSet="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Falparslan.ad11a534.png&w=640&q=75 640w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Falparslan.ad11a534.png&w=750&q=75 750w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Falparslan.ad11a534.png&w=828&q=75 828w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Falparslan.ad11a534.png&w=1080&q=75 1080w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Falparslan.ad11a534.png&w=1200&q=75 1200w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Falparslan.ad11a534.png&w=1920&q=75 1920w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Falparslan.ad11a534.png&w=2048&q=75 2048w, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Falparslan.ad11a534.png&w=3840&q=75 3840w"
                            style={{
                              border: 'none',
                              boxSizing: 'border-box',
                              display: 'block',
                              height: '0px',
                              inset: '0px',
                              margin: 'auto',
                              maxHeight: '100%',
                              maxWidth: '100%',
                              minHeight: '100%',
                              minWidth: '100%',
                              objectFit: 'cover',
                              padding: '0px',
                              position: 'absolute',
                              width: '0px'
                            }}
                          />
                          <noscript />
                        </span>
                      </a>
                    </div>
                    <span className="craw-name">
                      Alpaslan Gürsoy
                    </span>
                    <span className="craw-title">
                      Lidya Ventures
                    </span>
                    <span className="craw-title">
                      Yönetim Kurulu Üyesi
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gradient-line mt-5" />
        <div className="container-fluid">
          <div className="row about-banner">
            <span
              className="mb-10"
              style={{
                fontWeight: '600'
              }}
            >
              Ofisimiz
            </span>
            <span className="address">
              Kavacık, Rüzgarlıbahçe Mah. Çampınarı Sok. No:4 Smart Plaza B Blok Kat:3 34805, Beykoz,İstanbul
            </span>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row followus-banner">
            <span
              className="mb-10"
              style={{
                fontWeight: '600'
              }}
            >
              Bizi Takip Edin
            </span>
            <div className="col-12 col-lg-auto text-center" >
              <a
                className="text-decoration-none me-4"
                href="https://www.facebook.com/tobetoplatform"
                target="blank"
              >
                <svg
                  fill="none"
                  height="24" 
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                    stroke="#A628FF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </a>
              <a
                className="text-decoration-none me-4"
                href="https://www.instagram.com/tobeto_official/"
                target="blank"
              >
                <svg
                  fill="none"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z"
                    stroke="#A628FF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                  <path
                    d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61991 14.1902 8.22773 13.4229 8.09406 12.5922C7.9604 11.7615 8.09206 10.9099 8.47032 10.1584C8.84858 9.40685 9.45418 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87658 12.63 8C13.4789 8.12588 14.2648 8.52146 14.8717 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z"
                    stroke="#A628FF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                  <path
                    d="M17.5 6.5H17.51"
                    stroke="#A628FF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </a>
              <a
                className="text-decoration-none me-4"
                href="https://twitter.com/tobeto_platform"
                target="blank"
              >
                <svg
                  fill="none"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.9572 14.8821 3.28445C14.0247 3.61171 13.2884 4.1944 12.773 4.95372C12.2575 5.71303 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3V3Z"
                    stroke="#A628FF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </a>
              <a
                className="text-decoration-none"
                href="https://www.linkedin.com/company/tobeto/"
                target="blank"
              >
                <svg
                  fill="none"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z"
                    stroke="#A628FF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                  <path
                    d="M6 9H2V21H6V9Z"
                    stroke="#A628FF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                  <path
                    d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                    stroke="#A628FF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer2 />
    </div>
  );
};

export default AboutUs;
