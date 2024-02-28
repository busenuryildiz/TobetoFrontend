import React from "react";
import Footer2 from "../../components/footer/Footer2";
import Navi2 from "../../components/navbar/Navi2";
import { Link } from "react-router-dom";

const ForBusinesses = () => {
  return (
    <main className="bg-front-dark">
      <Navi2 />
      <section className="py-24" style={{ marginTop: 70 }}>
        <div className="position-relative mt-12">
          <div className="container">
            <div className="row web-pack py-8">
              <h1 className="ch-text text-center">
                Tobeto; yetenekleri yakalar, değerlendirir, geliştirir,
                destekler, eğitir, istihdam eder, ekosisteme dahil eder.
              </h1>
            </div>
          </div>
          <div className="container mobile-none">
            <div className="row">
              <div className="col-6 mt-8">
                <div className="corp-box d-flex text-center align-items-center justify-content-center">
                  <div
                    className="position-relative"
                    style={{ padding: "0px 1em" }}
                  >
                    <h1
                      style={{ fontSize: "2em", color: "rgb(255, 255, 255)" }}
                    >
                      Doğru yeteneğe ulaşmak için
                    </h1>
                    <p className="desc mt-10">
                      Kurumların değişen yetenek ihtiyaçları için istihdama
                      hazır adaylar yetiştirir.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-6 mt-8">
                <div className="corp-boxes">
                  <div className="row g-0">
                    <div className="col-md-4 col-12">
                      <div
                        className="box bg-gray-1 b-t-l-25 b-b-l-25"
                        style={{ minHeight: 340 }}
                      >
                        <div className="box-hover">
                          <div className="text-white">
                            <div>
                              <li>
                                Değerlendirilmiş ve yetişmiş geniş yetenek
                                havuzuna erişim olanağı ve ölçme, değerlendirme,
                                seçme ve raporlama hizmeti.
                              </li>
                            </div>
                          </div>
                          <a className="box-close mobile-d-none">
                            <svg
                              width={30}
                              height={29}
                              viewBox="0 0 30 29"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M22.5 7.19495L7.5 21.5848"
                                stroke="#D8D9DA"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M7.5 7.19495L22.5 21.5848"
                                stroke="#D8D9DA"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </a>
                        </div>
                        <div>
                          <svg
                            width={63}
                            height={60}
                            viewBox="0 0 63 60"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.2771 30.93C8.00565 30.93 1.29785 24.495 1.29785 16.56C1.29785 8.62498 8.00565 2.19 16.2771 2.19C24.5486 2.19 31.2565 8.62498 31.2565 16.56C31.2565 24.495 24.5486 30.93 16.2771 30.93ZM16.2771 3.37499C8.67799 3.37499 2.51741 9.285 2.51741 16.575C2.51741 23.865 8.67799 29.775 16.2771 29.775C23.8762 29.775 30.0369 23.865 30.0369 16.575C30.0213 9.285 23.8762 3.37499 16.2771 3.37499Z"
                              fill="white"
                            />
                            <path
                              d="M45.0164 30.93C36.7449 30.93 30.0371 24.495 30.0371 16.56C30.0371 8.62498 36.7449 2.19 45.0164 2.19C53.2878 2.19 59.9957 8.62498 59.9957 16.56C59.9801 24.495 53.2878 30.93 45.0164 30.93ZM45.0164 3.37499C37.4173 3.37499 31.2567 9.285 31.2567 16.575C31.2567 23.865 37.4173 29.775 45.0164 29.775C52.6155 29.775 58.7761 23.865 58.7761 16.575C58.7605 9.285 52.6155 3.37499 45.0164 3.37499Z"
                              fill="white"
                            />
                            <path
                              d="M16.2771 58.5C8.00565 58.5 1.29785 52.065 1.29785 44.13C1.29785 36.195 8.00565 29.76 16.2771 29.76C24.5486 29.76 31.2565 36.195 31.2565 44.13C31.2565 52.065 24.5486 58.485 16.2771 58.5ZM16.2771 30.93C8.67799 30.93 2.51741 36.84 2.51741 44.13C2.51741 51.42 8.67799 57.33 16.2771 57.33C23.8762 57.33 30.0369 51.42 30.0369 44.13C30.0213 36.84 23.8762 30.945 16.2771 30.93Z"
                              fill="white"
                            />
                            <path
                              d="M45.0164 58.5C36.7449 58.5 30.0371 52.065 30.0371 44.13C30.0371 36.195 36.7449 29.76 45.0164 29.76C53.2878 29.76 59.9957 36.195 59.9957 44.13C59.9801 52.065 53.2878 58.485 45.0164 58.5ZM45.0164 30.93C37.4173 30.93 31.2567 36.84 31.2567 44.13C31.2567 51.42 37.4173 57.33 45.0164 57.33C52.6155 57.33 58.7761 51.42 58.7761 44.13C58.7605 36.84 52.6155 30.945 45.0164 30.93Z"
                              fill="white"
                            />
                          </svg>
                          <h2 className="title">DEĞERLENDİRME</h2>
                          <a className="box-open mobile-d-none">
                            <svg
                              width={55}
                              height={52}
                              viewBox="0 0 55 52"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M20.3271 39L33.8784 26L20.3271 13"
                                stroke="white"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </a>
                          <div className="box-open d-desktop-none mobile-d-block">
                            <svg
                              width={55}
                              height={52}
                              viewBox="0 0 55 52"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M13.5508 19.5L27.102 32.5L40.6533 19.5"
                                stroke="white"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-12">
                      <div className="box bg-gray-2" style={{ minHeight: 340 }}>
                        <div className="box-hover">
                          <div className="text-white text-center">
                            <div>
                              Codecademy içerikleri, alanında uzman eğitmenler
                              ile canlı dersler, mentör desteği, proje ve
                              uygulamalar ile kuruma özel bootcamp projeleri
                              için uçtan uca destek ve stratejik ortaklık.
                            </div>
                          </div>
                          <a className="box-close mobile-d-none">
                            <svg
                              width={30}
                              height={29}
                              viewBox="0 0 30 29"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M22.5 7.19495L7.5 21.5848"
                                stroke="#D8D9DA"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M7.5 7.19495L22.5 21.5848"
                                stroke="#D8D9DA"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </a>
                        </div>
                        <div>
                          <svg
                            width={63}
                            height={60}
                            viewBox="0 0 63 60"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_141_177)">
                              <path
                                d="M62.5439 30V30.625L-0.000225067 30.625V30C-0.000225067 13.4312 14.0005 0 31.2719 0C48.5432 0 62.5439 13.4312 62.5439 30ZM1.30929 29.375L61.2344 29.375C60.8739 13.5 47.1685 0.912506 30.6204 1.25626C14.5782 1.59167 1.65893 13.9854 1.30929 29.375Z"
                                fill="white"
                              />
                              <path
                                d="M62.5439 59.375V60H-0.000225067V59.375C-0.000225067 42.8062 14.0005 29.375 31.2719 29.375C48.5432 29.375 62.5439 42.8062 62.5439 59.375ZM1.30929 58.75H61.2344C60.8739 42.875 47.1685 30.2875 30.6204 30.6312C14.5782 30.9667 1.65893 43.3604 1.30929 58.75Z"
                                fill="white"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_141_177">
                                <rect
                                  width="62.5442"
                                  height={60}
                                  fill="white"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                          <h2 className="title">BOOTCAMP</h2>
                          <a className="box-open mobile-d-none">
                            <svg
                              width={55}
                              height={52}
                              viewBox="0 0 55 52"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M20.3271 39L33.8784 26L20.3271 13"
                                stroke="white"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </a>
                          <div className="box-open d-desktop-none mobile-d-block">
                            <svg
                              width={55}
                              height={52}
                              viewBox="0 0 55 52"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M13.5508 19.5L27.102 32.5L40.6533 19.5"
                                stroke="white"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-12">
                      <div
                        className="box bg-gray-3 b-t-r-25 b-b-r-25"
                        style={{ minHeight: 340 }}
                      >
                        <div className="box-hover">
                          <div className="text-white text-center">
                            <div>
                              Esnek, uzaktan, tam zamanlı iş gücü için doğru ve
                              hızlı işe alım.
                            </div>
                          </div>
                          <a className="box-close mobile-d-none">
                            <svg
                              width={30}
                              height={29}
                              viewBox="0 0 30 29"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M22.5 7.19495L7.5 21.5848"
                                stroke="#D8D9DA"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M7.5 7.19495L22.5 21.5848"
                                stroke="#D8D9DA"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </a>
                        </div>
                        <div>
                          <svg
                            width={67}
                            height={60}
                            viewBox="0 0 67 60"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_141_201)">
                              <path
                                d="M17.4618 1.04517C9.0194 1.04517 2.1748 7.40287 2.1748 15.245V15.8964C2.1748 23.7386 9.0194 30.0963 17.4618 30.0963H50.0466C58.489 30.0963 65.3336 23.7386 65.3336 15.8964V15.245C65.3336 7.40287 58.489 1.04517 50.0466 1.04517H17.4618V1.04517Z"
                                stroke="white"
                              />
                              <path
                                d="M17.4618 30.1525C9.0194 30.1525 2.1748 36.5102 2.1748 44.3524V45.0038C2.1748 52.8459 9.0194 59.2036 17.4618 59.2036H50.0466C58.489 59.2036 65.3336 52.8459 65.3336 45.0038V44.3524C65.3336 36.5102 58.489 30.1525 50.0466 30.1525H17.4618V30.1525Z"
                                stroke="white"
                              />
                              <path
                                d="M53.9051 39.0318L53.9051 39.0318L45.4784 52.9395C44.9542 53.8044 44.3311 54.1399 43.7977 54.1399C43.2642 54.1399 42.6412 53.8045 42.117 52.9396C42.1169 52.9396 42.1169 52.9395 42.1169 52.9395L33.6925 39.0319L33.6924 39.0318C33.1661 38.1633 33.1858 37.5026 33.4359 37.0894C33.6916 36.667 34.3023 36.3113 35.3721 36.3113H52.2255C53.2939 36.3113 53.9048 36.6669 54.1609 37.0896C54.4113 37.5029 54.4314 38.1636 53.9051 39.0318Z"
                                stroke="white"
                              />
                              <path
                                d="M33.6901 21.5871L33.6901 21.587L42.1168 7.67937C42.641 6.81444 43.2641 6.479 43.7975 6.479C44.331 6.479 44.9541 6.81444 45.4783 7.67937L53.9027 21.587L53.9028 21.5871C54.4291 22.4555 54.4095 23.1163 54.1593 23.5294C53.9036 23.9519 53.2929 24.3076 52.2231 24.3076H35.3697C34.3013 24.3076 33.6904 23.952 33.4343 23.5293C33.1839 23.116 33.1639 22.4553 33.6901 21.5871Z"
                                stroke="white"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_141_201">
                                <rect
                                  width="66.2782"
                                  height={60}
                                  fill="white"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                          <h2 className="title">EŞLEŞTİRME</h2>
                          <a className="box-open mobile-d-none">
                            <svg
                              width={55}
                              height={52}
                              viewBox="0 0 55 52"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M20.3271 39L33.8784 26L20.3271 13"
                                stroke="white"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </a>
                          <div className="box-open d-desktop-none mobile-d-block">
                            <svg
                              width={55}
                              height={52}
                              viewBox="0 0 55 52"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M13.5508 19.5L27.102 32.5L40.6533 19.5"
                                stroke="white"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6 mt-8">
                <div className="corp-box d-flex text-center align-items-center justify-content-center">
                  <div
                    className=" position-relative "
                    style={{ padding: "0px 1em" }}
                  >
                    <div className="ch-text">Çalışanlarınız için Tobeto</div>
                    <p className="desc mt-10">
                      Çalışanların ihtiyaçları doğrultusunda, mevcut
                      becerilerini güncellemelerine veya yeni beceriler
                      kazanmalarına destek olur.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-6 mt-8">
                <div className="corp-boxes">
                  <div className="row g-0">
                    <div className="col-md-4 col-12">
                      <div
                        className="box bg-gray-1 b-t-l-25 b-b-l-25"
                        style={{ minHeight: 340 }}
                      >
                        <div className="box-hover">
                          <div className="text-white text-center">
                            <div>
                              Uzmanlaşmak için yeni beceriler kazanmak (reskill)
                              veya yeni bir role başlamak (upskill) isteyen
                              adaylar için, teknik ve yetkinlik ölçme araçları.
                            </div>
                          </div>
                          <a className="box-close mobile-d-none">
                            <svg
                              width={30}
                              height={29}
                              viewBox="0 0 30 29"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M22.5 7.19495L7.5 21.5848"
                                stroke="#D8D9DA"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M7.5 7.19495L22.5 21.5848"
                                stroke="#D8D9DA"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </a>
                        </div>
                        <div>
                          <svg
                            width={72}
                            height={72}
                            viewBox="0 0 72 72"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_398_605)">
                              <path
                                d="M1 36C1 16.67 16.67 1 36 1C55.33 1 71 16.67 71 36C71 55.33 55.33 71 36 71C16.67 71 1 55.33 1 36Z"
                                stroke="white"
                                strokeWidth={2}
                              />
                              <path
                                d="M1.90735e-06 72H1.06205L72 1.062V1.90735e-06H70.938L1.90735e-06 70.938V72Z"
                                fill="white"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_398_605">
                                <rect width={72} height={72} fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                          <span className="title">ÖLÇME ARAÇLARI</span>
                          <a className="box-open mobile-d-none">
                            <svg
                              width={55}
                              height={52}
                              viewBox="0 0 55 52"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M20.3271 39L33.8784 26L20.3271 13"
                                stroke="white"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </a>
                          <div className="box-open d-desktop-none mobile-d-block">
                            <svg
                              width={55}
                              height={52}
                              viewBox="0 0 55 52"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M13.5508 19.5L27.102 32.5L40.6533 19.5"
                                stroke="white"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-12">
                      <div className="box bg-gray-2">
                        <div className="box-hover">
                          <div className="text-white text-center">
                            <div>
                              Yeni uzmanlık becerileri ve yeni bir rol için
                              gerekli yetkinlik kazınımı ihtiyaçlarına bağlı
                              olarak açılan eğitimlere katılım ve kuruma özel
                              sınıf açma olanakları.
                            </div>
                          </div>
                          <a className="box-close mobile-d-none">
                            <svg
                              width={30}
                              height={29}
                              viewBox="0 0 30 29"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M22.5 7.19495L7.5 21.5848"
                                stroke="#D8D9DA"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M7.5 7.19495L22.5 21.5848"
                                stroke="#D8D9DA"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </a>
                        </div>
                        <div>
                          <svg
                            width={70}
                            height={72}
                            viewBox="0 0 70 69"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M35.0003 9.14603C16.3994 9.14603 1.28333 24.0966 1.01588 42.634L35.0003 42.634L68.9847 42.634C68.7172 24.0966 53.6012 9.14603 35.0003 9.14603Z"
                              stroke="white"
                            />
                            <path
                              d="M35.0002 43.6339C25.9216 43.6339 18.528 50.8633 18.2635 59.8779L51.7368 59.8779C51.4723 50.8633 44.0788 43.6339 35.0002 43.6339Z"
                              stroke="white"
                            />
                          </svg>
                          <span className="title">EĞİTİM</span>
                          <a className="box-open mobile-d-none">
                            <svg
                              width={55}
                              height={52}
                              viewBox="0 0 55 52"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M20.3271 39L33.8784 26L20.3271 13"
                                stroke="white"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </a>
                          <div className="box-open d-desktop-none mobile-d-block">
                            <svg
                              width={55}
                              height={52}
                              viewBox="0 0 55 52"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M13.5508 19.5L27.102 32.5L40.6533 19.5"
                                stroke="white"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-12">
                      <div className="box bg-gray-3 b-t-r-25 b-b-r-25">
                        <div className="box-hover" id="box-hover">
                          <div className="text-white text-center">
                            <div>
                              Kurumsal hedefler doğrultusunda mevcut yetenek
                              gücünün gelişimi ve konumlandırılmasına destek.
                            </div>
                          </div>
                          <a className="box-close mobile-d-none" id="box-close">
                            <svg
                              width={30}
                              height={29}
                              viewBox="0 0 30 29"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M22.5 7.19495L7.5 21.5848"
                                stroke="#D8D9DA"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M7.5 7.19495L22.5 21.5848"
                                stroke="#D8D9DA"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </a>
                        </div>
                        <div>
                          <svg
                            width={72}
                            height={72}
                            viewBox="0 0 72 72"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_398_547)">
                              <path
                                d="M1.512 70.5059C1.926 51.4619 17.712 36.3419 36.756 36.7559C55.224 37.1519 70.092 52.0379 70.506 70.5059L70.506 71.9999L72 71.9999L72 71.2439C72 51.3539 55.89 35.2439 36 35.2439C16.11 35.2439 2.61154e-06 51.3539 3.48096e-06 71.2439L3.51401e-06 71.9999L1.49398 71.9999L1.512 70.5059Z"
                                fill="white"
                              />
                              <path
                                d="M72 0.756024L72 0L70.506 6.53038e-08L70.506 1.49398C70.092 20.538 54.306 35.658 35.262 35.244C16.794 34.848 1.926 19.962 1.512 1.49398L1.512 3.08113e-06L1.90735e-06 3.14722e-06L1.9404e-06 0.756027C2.80982e-06 20.646 16.11 36.756 36 36.756C55.89 36.756 72 20.628 72 0.756024Z"
                                fill="white"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_398_547">
                                <rect
                                  width={72}
                                  height={72}
                                  fill="white"
                                  transform="translate(0 72) rotate(-90)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                          <span className="title">GELİŞİM</span>
                          <a className="box-open mobile-d-none">
                            <svg
                              width={55}
                              height={52}
                              viewBox="0 0 55 52"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M20.3271 39L33.8784 26L20.3271 13"
                                stroke="white"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </a>
                          <div className="box-open d-desktop-none mobile-d-block">
                            <svg
                              width={55}
                              height={52}
                              viewBox="0 0 55 52"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M13.5508 19.5L27.102 32.5L40.6533 19.5"
                                stroke="white"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container corp-head">
            <ul
              className="nav nav-pills d-block mb-3"
              id="pills-tab"
              role="tablist"
            >
              <div className="row corp">
                <div className="col-6">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link p-0 w-100 active"
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-home"
                      type="button"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                    >
                      <div className="corp-box d-flex text-center align-items-center justify-content-center">
                        <div className="mw-sm mx-auto position-relative">
                          <h1 className="title">Doğru yeteneğe ulaşmak için</h1>
                          <p className="desc mt-10">
                            Kurumların değişen yetenek ihtiyaçları için
                            istihdama hazır adaylar yetiştirir.
                          </p>
                          <svg
                            width={55}
                            height={52}
                            viewBox="0 0 55 52"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.5508 19.5L27.102 32.5L40.6533 19.5"
                              stroke="white"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </button>
                  </li>
                </div>
                <div className="col-6">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link p-0 w-100"
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                    >
                      <div className="corp-box d-flex text-center align-items-center justify-content-center">
                        <div className="mw-sm mx-auto position-relative ">
                          <h1 className="title">Çalışanlarınız için Tobeto</h1>
                          <p className="desc mt-10">
                            Çalışanların ihtiyaçları doğrultusunda, mevcut
                            becerilerini güncellemelerine veya yeni beceriler
                            kazanmalarına destek olur.
                          </p>
                          <svg
                            width={55}
                            height={52}
                            viewBox="0 0 55 52"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.5508 19.5L27.102 32.5L40.6533 19.5"
                              stroke="white"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </button>
                  </li>
                </div>
              </div>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <div className="row">
                  <div className="col-6">
                    <div className="gradient-line2 mb-2" />
                  </div>
                  <div className="col-6" />
                </div>
                <div className="row">
                  <div className="col-lg-6 col-12">
                    <div className="corp-boxes">
                      <div className="row g-0">
                        <div className="col-md-4 col-12">
                          <div
                            className="box bg-gray-1 b-t-l-25 b-b-l-25"
                            style={{ minHeight: 340 }}
                          >
                            <div className="box-hover">
                              <div className="text-white">
                                <div>
                                  Değerlendirilmiş ve yetişmiş geniş yetenek
                                  havuzuna erişim olanağı ve ölçme,
                                  değerlendirme, seçme ve raporlama hizmeti.
                                </div>
                              </div>
                              <a className="box-close mobile-d-none">
                                <svg
                                  width={30}
                                  height={29}
                                  viewBox="0 0 30 29"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M22.5 7.19495L7.5 21.5848"
                                    stroke="#D8D9DA"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M7.5 7.19495L22.5 21.5848"
                                    stroke="#D8D9DA"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </a>
                            </div>
                            <div>
                              <svg
                                width={63}
                                height={60}
                                viewBox="0 0 63 60"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M16.2771 30.93C8.00565 30.93 1.29785 24.495 1.29785 16.56C1.29785 8.62498 8.00565 2.19 16.2771 2.19C24.5486 2.19 31.2565 8.62498 31.2565 16.56C31.2565 24.495 24.5486 30.93 16.2771 30.93ZM16.2771 3.37499C8.67799 3.37499 2.51741 9.285 2.51741 16.575C2.51741 23.865 8.67799 29.775 16.2771 29.775C23.8762 29.775 30.0369 23.865 30.0369 16.575C30.0213 9.285 23.8762 3.37499 16.2771 3.37499Z"
                                  fill="white"
                                />
                                <path
                                  d="M45.0164 30.93C36.7449 30.93 30.0371 24.495 30.0371 16.56C30.0371 8.62498 36.7449 2.19 45.0164 2.19C53.2878 2.19 59.9957 8.62498 59.9957 16.56C59.9801 24.495 53.2878 30.93 45.0164 30.93ZM45.0164 3.37499C37.4173 3.37499 31.2567 9.285 31.2567 16.575C31.2567 23.865 37.4173 29.775 45.0164 29.775C52.6155 29.775 58.7761 23.865 58.7761 16.575C58.7605 9.285 52.6155 3.37499 45.0164 3.37499Z"
                                  fill="white"
                                />
                                <path
                                  d="M16.2771 58.5C8.00565 58.5 1.29785 52.065 1.29785 44.13C1.29785 36.195 8.00565 29.76 16.2771 29.76C24.5486 29.76 31.2565 36.195 31.2565 44.13C31.2565 52.065 24.5486 58.485 16.2771 58.5ZM16.2771 30.93C8.67799 30.93 2.51741 36.84 2.51741 44.13C2.51741 51.42 8.67799 57.33 16.2771 57.33C23.8762 57.33 30.0369 51.42 30.0369 44.13C30.0213 36.84 23.8762 30.945 16.2771 30.93Z"
                                  fill="white"
                                />
                                <path
                                  d="M45.0164 58.5C36.7449 58.5 30.0371 52.065 30.0371 44.13C30.0371 36.195 36.7449 29.76 45.0164 29.76C53.2878 29.76 59.9957 36.195 59.9957 44.13C59.9801 52.065 53.2878 58.485 45.0164 58.5ZM45.0164 30.93C37.4173 30.93 31.2567 36.84 31.2567 44.13C31.2567 51.42 37.4173 57.33 45.0164 57.33C52.6155 57.33 58.7761 51.42 58.7761 44.13C58.7605 36.84 52.6155 30.945 45.0164 30.93Z"
                                  fill="white"
                                />
                              </svg>
                              <h2 className="title">DEĞERLENDİRME</h2>
                              <a className="box-open mobile-d-none">
                                <svg
                                  width={55}
                                  height={52}
                                  viewBox="0 0 55 52"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M20.3271 39L33.8784 26L20.3271 13"
                                    stroke="white"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </a>
                              <div className="box-open d-desktop-none mobile-d-block">
                                <svg
                                  width={55}
                                  height={52}
                                  viewBox="0 0 55 52"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M13.5508 19.5L27.102 32.5L40.6533 19.5"
                                    stroke="white"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-12">
                          <div
                            className="box bg-gray-2"
                            style={{ minHeight: 340 }}
                          >
                            <div className="box-hover">
                              <div className="text-white text-center">
                                <div>
                                  Codecademy içerikleri, alanında uzman
                                  eğitmenler ile canlı dersler, mentör desteği,
                                  proje ve uygulamalar ile kuruma özel bootcamp
                                  projeleri için uçtan uca destek ve stratejik
                                  ortaklık.
                                </div>
                              </div>
                              <a className="box-close mobile-d-none">
                                <svg
                                  width={30}
                                  height={29}
                                  viewBox="0 0 30 29"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M22.5 7.19495L7.5 21.5848"
                                    stroke="#D8D9DA"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M7.5 7.19495L22.5 21.5848"
                                    stroke="#D8D9DA"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </a>
                            </div>
                            <div>
                              <svg
                                width={63}
                                height={60}
                                viewBox="0 0 63 60"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip0_141_177)">
                                  <path
                                    d="M62.5439 30V30.625L-0.000225067 30.625V30C-0.000225067 13.4312 14.0005 0 31.2719 0C48.5432 0 62.5439 13.4312 62.5439 30ZM1.30929 29.375L61.2344 29.375C60.8739 13.5 47.1685 0.912506 30.6204 1.25626C14.5782 1.59167 1.65893 13.9854 1.30929 29.375Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M62.5439 59.375V60H-0.000225067V59.375C-0.000225067 42.8062 14.0005 29.375 31.2719 29.375C48.5432 29.375 62.5439 42.8062 62.5439 59.375ZM1.30929 58.75H61.2344C60.8739 42.875 47.1685 30.2875 30.6204 30.6312C14.5782 30.9667 1.65893 43.3604 1.30929 58.75Z"
                                    fill="white"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_141_177">
                                    <rect
                                      width="62.5442"
                                      height={60}
                                      fill="white"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                              <h2 className="title">BOOTCAMP</h2>
                              <a className="box-open mobile-d-none">
                                <svg
                                  width={55}
                                  height={52}
                                  viewBox="0 0 55 52"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M20.3271 39L33.8784 26L20.3271 13"
                                    stroke="white"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </a>
                              <div className="box-open d-desktop-none mobile-d-block">
                                <svg
                                  width={55}
                                  height={52}
                                  viewBox="0 0 55 52"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M13.5508 19.5L27.102 32.5L40.6533 19.5"
                                    stroke="white"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-12">
                          <div
                            className="box bg-gray-3 b-t-r-25 b-b-r-25"
                            style={{ minHeight: 340 }}
                          >
                            <div className="box-hover">
                              <div className="text-white text-center">
                                <div>
                                  Esnek, uzaktan, tam zamanlı iş gücü için doğru
                                  ve hızlı işe alım.
                                </div>
                              </div>
                              <a className="box-close mobile-d-none">
                                <svg
                                  width={30}
                                  height={29}
                                  viewBox="0 0 30 29"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M22.5 7.19495L7.5 21.5848"
                                    stroke="#D8D9DA"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M7.5 7.19495L22.5 21.5848"
                                    stroke="#D8D9DA"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </a>
                            </div>
                            <div>
                              <svg
                                width={67}
                                height={60}
                                viewBox="0 0 67 60"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip0_141_201)">
                                  <path
                                    d="M17.4618 1.04517C9.0194 1.04517 2.1748 7.40287 2.1748 15.245V15.8964C2.1748 23.7386 9.0194 30.0963 17.4618 30.0963H50.0466C58.489 30.0963 65.3336 23.7386 65.3336 15.8964V15.245C65.3336 7.40287 58.489 1.04517 50.0466 1.04517H17.4618V1.04517Z"
                                    stroke="white"
                                  />
                                  <path
                                    d="M17.4618 30.1525C9.0194 30.1525 2.1748 36.5102 2.1748 44.3524V45.0038C2.1748 52.8459 9.0194 59.2036 17.4618 59.2036H50.0466C58.489 59.2036 65.3336 52.8459 65.3336 45.0038V44.3524C65.3336 36.5102 58.489 30.1525 50.0466 30.1525H17.4618V30.1525Z"
                                    stroke="white"
                                  />
                                  <path
                                    d="M53.9051 39.0318L53.9051 39.0318L45.4784 52.9395C44.9542 53.8044 44.3311 54.1399 43.7977 54.1399C43.2642 54.1399 42.6412 53.8045 42.117 52.9396C42.1169 52.9396 42.1169 52.9395 42.1169 52.9395L33.6925 39.0319L33.6924 39.0318C33.1661 38.1633 33.1858 37.5026 33.4359 37.0894C33.6916 36.667 34.3023 36.3113 35.3721 36.3113H52.2255C53.2939 36.3113 53.9048 36.6669 54.1609 37.0896C54.4113 37.5029 54.4314 38.1636 53.9051 39.0318Z"
                                    stroke="white"
                                  />
                                  <path
                                    d="M33.6901 21.5871L33.6901 21.587L42.1168 7.67937C42.641 6.81444 43.2641 6.479 43.7975 6.479C44.331 6.479 44.9541 6.81444 45.4783 7.67937L53.9027 21.587L53.9028 21.5871C54.4291 22.4555 54.4095 23.1163 54.1593 23.5294C53.9036 23.9519 53.2929 24.3076 52.2231 24.3076H35.3697C34.3013 24.3076 33.6904 23.952 33.4343 23.5293C33.1839 23.116 33.1639 22.4553 33.6901 21.5871Z"
                                    stroke="white"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_141_201">
                                    <rect
                                      width="66.2782"
                                      height={60}
                                      fill="white"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                              <h2 className="title">EŞLEŞTİRME</h2>
                              <a className="box-open mobile-d-none">
                                <svg
                                  width={55}
                                  height={52}
                                  viewBox="0 0 55 52"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M20.3271 39L33.8784 26L20.3271 13"
                                    stroke="white"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </a>
                              <div className="box-open d-desktop-none mobile-d-block">
                                <svg
                                  width={55}
                                  height={52}
                                  viewBox="0 0 55 52"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M13.5508 19.5L27.102 32.5L40.6533 19.5"
                                    stroke="white"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                <div className="row">
                  <div className="col-6" />
                  <div className="col-6">
                    <div className="gradient-line2 2mb-10" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-12">
                    <div className="corp-boxes">
                      <div className="row g-0">
                        <div className="col-md-4 col-12">
                          <div
                            className="box bg-gray-1 b-t-l-25 b-b-l-25"
                            style={{ minHeight: 340 }}
                          >
                            <div className="box-hover">
                              <div className="text-white text-center">
                                <div>
                                  Uzmanlaşmak için yeni beceriler kazanmak
                                  (reskill) veya yeni bir role başlamak
                                  (upskill) isteyen adaylar için, teknik ve
                                  yetkinlik ölçme araçları.
                                </div>
                              </div>
                              <a className="box-close mobile-d-none">
                                <svg
                                  width={30}
                                  height={29}
                                  viewBox="0 0 30 29"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M22.5 7.19495L7.5 21.5848"
                                    stroke="#D8D9DA"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M7.5 7.19495L22.5 21.5848"
                                    stroke="#D8D9DA"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </a>
                            </div>
                            <div>
                              <svg
                                width={72}
                                height={72}
                                viewBox="0 0 72 72"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip0_398_605)">
                                  <path
                                    d="M1 36C1 16.67 16.67 1 36 1C55.33 1 71 16.67 71 36C71 55.33 55.33 71 36 71C16.67 71 1 55.33 1 36Z"
                                    stroke="white"
                                    strokeWidth={2}
                                  />
                                  <path
                                    d="M1.90735e-06 72H1.06205L72 1.062V1.90735e-06H70.938L1.90735e-06 70.938V72Z"
                                    fill="white"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_398_605">
                                    <rect width={72} height={72} fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                              <span className="title">ÖLÇME ARAÇLARI</span>
                              <a className="box-open mobile-d-none">
                                <svg
                                  width={55}
                                  height={52}
                                  viewBox="0 0 55 52"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M20.3271 39L33.8784 26L20.3271 13"
                                    stroke="white"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </a>
                              <div className="box-open d-desktop-none mobile-d-block">
                                <svg
                                  width={55}
                                  height={52}
                                  viewBox="0 0 55 52"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M13.5508 19.5L27.102 32.5L40.6533 19.5"
                                    stroke="white"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-12">
                          <div
                            className="box bg-gray-2"
                            style={{ minHeight: 340 }}
                          >
                            <div className="box-hover">
                              <div className="text-white text-center">
                                <div>
                                  Yeni uzmanlık becerileri ve yeni bir rol için
                                  gerekli yetkinlik kazınımı ihtiyaçlarına bağlı
                                  olarak açılan eğitimlere katılım ve kuruma
                                  özel sınıf açma olanakları.
                                </div>
                              </div>
                              <a className="box-close mobile-d-none">
                                <svg
                                  width={30}
                                  height={29}
                                  viewBox="0 0 30 29"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M22.5 7.19495L7.5 21.5848"
                                    stroke="#D8D9DA"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M7.5 7.19495L22.5 21.5848"
                                    stroke="#D8D9DA"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </a>
                            </div>
                            <div>
                              <svg
                                width={70}
                                height={72}
                                viewBox="0 0 70 69"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M35.0003 9.14603C16.3994 9.14603 1.28333 24.0966 1.01588 42.634L35.0003 42.634L68.9847 42.634C68.7172 24.0966 53.6012 9.14603 35.0003 9.14603Z"
                                  stroke="white"
                                />
                                <path
                                  d="M35.0002 43.6339C25.9216 43.6339 18.528 50.8633 18.2635 59.8779L51.7368 59.8779C51.4723 50.8633 44.0788 43.6339 35.0002 43.6339Z"
                                  stroke="white"
                                />
                              </svg>
                              <span className="title">EĞİTİM</span>
                              <a className="box-open mobile-d-none">
                                <svg
                                  width={55}
                                  height={52}
                                  viewBox="0 0 55 52"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M20.3271 39L33.8784 26L20.3271 13"
                                    stroke="white"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </a>
                              <div className="box-open d-desktop-none mobile-d-block">
                                <svg
                                  width={55}
                                  height={52}
                                  viewBox="0 0 55 52"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M13.5508 19.5L27.102 32.5L40.6533 19.5"
                                    stroke="white"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-12">
                          <div
                            className="box bg-gray-3 b-t-r-25 b-b-r-25"
                            style={{ minHeight: 340 }}
                          >
                            <div className="box-hover" id="box-hover">
                              <div className="text-white text-center">
                                <div>
                                  Kurumsal hedefler doğrultusunda mevcut yetenek
                                  gücünün gelişimi ve konumlandırılmasına
                                  destek.
                                </div>
                              </div>
                              <a
                                className="box-close mobile-d-none"
                                id="box-close"
                              >
                                <svg
                                  width={30}
                                  height={29}
                                  viewBox="0 0 30 29"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M22.5 7.19495L7.5 21.5848"
                                    stroke="#D8D9DA"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M7.5 7.19495L22.5 21.5848"
                                    stroke="#D8D9DA"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </a>
                            </div>
                            <div>
                              <svg
                                width={72}
                                height={72}
                                viewBox="0 0 72 72"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip0_398_547)">
                                  <path
                                    d="M1.512 70.5059C1.926 51.4619 17.712 36.3419 36.756 36.7559C55.224 37.1519 70.092 52.0379 70.506 70.5059L70.506 71.9999L72 71.9999L72 71.2439C72 51.3539 55.89 35.2439 36 35.2439C16.11 35.2439 2.61154e-06 51.3539 3.48096e-06 71.2439L3.51401e-06 71.9999L1.49398 71.9999L1.512 70.5059Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M72 0.756024L72 0L70.506 6.53038e-08L70.506 1.49398C70.092 20.538 54.306 35.658 35.262 35.244C16.794 34.848 1.926 19.962 1.512 1.49398L1.512 3.08113e-06L1.90735e-06 3.14722e-06L1.9404e-06 0.756027C2.80982e-06 20.646 16.11 36.756 36 36.756C55.89 36.756 72 20.628 72 0.756024Z"
                                    fill="white"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_398_547">
                                    <rect
                                      width={72}
                                      height={72}
                                      fill="white"
                                      transform="translate(0 72) rotate(-90)"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                              <span className="title">GELİŞİM</span>
                              <a className="box-open mobile-d-none">
                                <svg
                                  width={55}
                                  height={52}
                                  viewBox="0 0 55 52"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M20.3271 39L33.8784 26L20.3271 13"
                                    stroke="white"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </a>
                              <div className="box-open d-desktop-none mobile-d-block">
                                <svg
                                  width={55}
                                  height={52}
                                  viewBox="0 0 55 52"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M13.5508 19.5L27.102 32.5L40.6533 19.5"
                                    stroke="white"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container position-relative mt-10">
            <div className="b-r-25 bg-dark-purple py-8 px-10">
              <div className="row">
                <div className="col-lg-9 col-12 d-flex align-items-center">
                  <p className="text-white mw-5xl pt-5">
                    Kurumlara özel eğitim paketleri ve bootcamp programları için
                    bizimle iletişime geçin.
                  </p>
                </div>
                <div className="col-lg-3 col-12 d-flex align-items-center ">
                  <Link className="btn btn-secondary w-100" to="/iletisim">
                    Bize Ulaşın
                  </Link>
                </div>
              </div>
            </div>
            <div className="vector-contact">
              <span
                style={{
                  boxSizing: "border-box",
                  display: "inline-block",
                  overflow: "hidden",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: 1,
                  border: 0,
                  margin: 0,
                  padding: 0,
                  position: "relative",
                  maxWidth: "100%",
                }}
              >
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "block",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                    maxWidth: "100%",
                  }}
                >
                  <img
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27200%27%20height=%27200%27/%3e"
                    style={{
                      display: "block",
                      maxWidth: "100%",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                    }}
                  />
                </span>
                <img
                  srcSet="tobeto.com/_next/static/media/dot-purple.e0e5c9d8.svg 1x, tobeto.com/_next/static/media/dot-purple.e0e5c9d8.svg 2x"
                  src="tobeto.com/_next/static/media/dot-purple.e0e5c9d8.svg"
                  decoding="async"
                  data-nimg="intrinsic"
                  style={{
                    position: "absolute",
                    inset: 0,
                    boxSizing: "border-box",
                    padding: 0,
                    border: "none",
                    margin: "auto",
                    display: "block",
                    width: 0,
                    height: 0,
                    minWidth: "100%",
                    maxWidth: "100%",
                    minHeight: "100%",
                    maxHeight: "100%",
                  }}
                />
              </span>
            </div>
          </div>
          <div className="container py-0 px-8" style={{ marginTop: "4em" }}>
            <div className="row">
              <div className=" col-12 py-4 px-lg-40 px-md-20 px-sm-2">
                <div className="ik-card-2">
                  <div className="ik-container">
                    <div className="header-left-3">
                      <span className="text-ik fw-bold header-left-text">
                        Aradığın{" "}
                        <span style={{ color: "rgb(0, 176, 120)" }}>
                          &nbsp;"
                        </span>
                        İşe Hazır Aday
                        <span style={{ color: "rgb(0, 176, 120)" }}>
                          "&nbsp;
                        </span>{" "}
                        Burada!
                      </span>
                    </div>
                    <div className="ik-logo-container corpPage">
                      <span
                        style={{
                          boxSizing: "border-box",
                          display: "inline-block",
                          overflow: "hidden",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                          position: "relative",
                          maxWidth: "100%",
                        }}
                      >
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            maxWidth: "100%",
                          }}
                        >
                          <img
                            aria-hidden="true"
                            src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27200%27%20height=%27200%27/%3e"
                            style={{
                              display: "block",
                              maxWidth: "100%",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                            }}
                          />
                        </span>
                        <img
                          alt="İstanbul Kodluyor Logo "
                          srcSet="/_next/static/media/ik-logo-light.ace655db.svg 1x, /_next/static/media/ik-logo-light.ace655db.svg 2x"
                          src="/_next/static/media/ik-logo-light.ace655db.svg"
                          decoding="async"
                          data-nimg="intrinsic"
                          style={{
                            position: "absolute",
                            inset: 0,
                            boxSizing: "border-box",
                            padding: 0,
                            border: "none",
                            margin: "auto",
                            display: "block",
                            width: 0,
                            height: 0,
                            minWidth: "100%",
                            maxWidth: "100%",
                            minHeight: "100%",
                            maxHeight: "100%",
                          }}
                        />
                      </span>
                    </div>
                  </div>
                  <a
                    className="btn d-md-inline-block mt-5 ik-btn"
                    href="/istanbul-kodluyor"
                  >
                    Başvur
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer2 />
    </main>
  );
};

export default ForBusinesses;
