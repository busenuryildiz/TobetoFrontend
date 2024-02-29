import React from 'react'
import Footer2 from '../../components/footer/Footer2'
import Navi2 from '../../components/navbar/Navi2'

const SSS = () => {
  return (
    <div>
      <Navi2/>
      <main className="bg-front-dark">
 <section className="py-24" style={{marginTop: 70}}><div className="position-relative"><div><div className="raw-html-embed"><div className="raw-html-embed">
          <div className="raw-html-embed">
            <div className="raw-html-embed">
              <style dangerouslySetInnerHTML={{__html: "\n                    .nav-link:hover {\n                         color: #828282 !important;\n                    }\n                    .nav-pills .nav-link.active,\n                    .nav-pills .show>.nav-link {\n                         color: #fff;\n                         border: 2px solid #93f !important;\n                         background-color: transparent !important;\n                    }\n                    .nav-pills .nav-link {\n                         color: #828282;\n                         border: 2px solid #828282 !important;\n                         background-color: transparent !important;\n                    }\n               " }} />
              <div className="container-fluid">
                <div className="sss-banner py-8" style={{height: '240px !important'}}>
                  <h1 className="ch-text text-center" style={{fontSize: '3em !important'}}>
                    Sıkça Sorulan Sorular
                  </h1>
                </div>
              </div>
              <div className="container">
                <div className="row web-pack" style={{borderRadius: 12}}>
                  <div className="col-md-4 col-12" style={{padding: '8px 8px'}}>
                    <div className="nav flex-column nav-pills " id="v-pills-tab" role="tablist" aria-orientation="vertical">
                      <button className="nav-link mb-4 active" id="v-pills-tobeto-tab" data-bs-toggle="pill" style={{textAlign: 'left', borderRadius: 50, height: 50}} data-bs-target="#v-pills-tobeto" type="button" role="tab" aria-controls="v-pills-tobeto" aria-selected="true">Tobeto</button>
                      <button className="nav-link mb-4" id="v-pills-egitim-tab" data-bs-toggle="pill" style={{textAlign: 'left', borderRadius: 50, height: 50}} data-bs-target="#v-pills-egitim" type="button" role="tab" aria-controls="v-pills-egitim" aria-selected="false" tabIndex={-1}>Eğitim</button>
                      {/* <button class="nav-link mb-4 " id="v-pills-abonelik-tab" data-bs-toggle="pill"
                                                         style="text-align:left; border-radius: 50px;height: 50px;"
                                                         data-bs-target="#v-pills-abonelik" type="button" role="tab"
                                                         aria-controls="v-pills-abonelik" aria-selected="false">Üyelik ve
                                                         Abonelik</button> */}
                      <button className="nav-link mb-4" id="v-pills-destek-tab" data-bs-toggle="pill" style={{textAlign: 'left', borderRadius: 50, height: 50}} data-bs-target="#v-pills-destek" type="button" role="tab" aria-controls="v-pills-destek" aria-selected="false" tabIndex={-1}>Destek</button>
                    </div>
                  </div>
                  <div className="col-md-8 col-12" style={{padding: '8px 8px'}}>
                    <div className="tab-content" id="v-pills-tabContent">
                      <div className="tab-pane fade active show" id="v-pills-tobeto" role="tabpanel" aria-labelledby="v-pills-tobeto-tab">
                        <div className="accordion" id="sssTobeto">
                          <div className="accordion-item" style={{border: 'none', marginBottom: 16, borderRadius: 30}}>
                            <h2 className="accordion-header" id="tobetosss-heading1">
                              <button style={{backgroundColor: 'transparent !important', color: '#93f !important', boxShadow: 'none !important'}} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#tobetosss-collapse1" aria-expanded="true" aria-controls="tobetosss-collapse1">
                                Tobeto nedir?
                              </button>
                            </h2>
                            <div id="tobetosss-collapse1" className="accordion-collapse collapse show" aria-labelledby="tobetosss-heading1" style={{}}>
                              <div className="accordion-body">
                                Üniversite öğrencileri, profesyoneller, işini/mesleğini
                                değiştirmek ya da
                                işinde
                                gelişmek isteyenler için aylık abonelik modeliyle üyelik
                                alan bir
                                eğitim ve
                                gelişim platformudur.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item" style={{border: 'none', marginBottom: 16, borderRadius: 30}}>
                            <h2 className="accordion-header" id="tobetosss-heading2">
                              <button style={{backgroundColor: 'transparent !important', color: '#93f !important', boxShadow: 'none !important'}} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#tobetosss-collapse2" aria-expanded="true" aria-controls="tobetosss-collapse2">
                                Neden Tobeto’yu tercih etmeliyim?
                              </button>
                            </h2>
                            <div id="tobetosss-collapse2" className="accordion-collapse collapse show" aria-labelledby="tobetosss-heading2" style={{}}>
                              <div className="accordion-body">
                                Tobeto’da ihtiyaçların ve kaynaklarına göre öğrenim
                                yolculuğunu
                                sen
                                tasarlarsın. Seçeceğin paket fark etmeksizin dünyanın bir
                                numaralı yazılım
                                eğitimi platformu Codecademy içeriklerine ve uygulama
                                araçlarına
                                tam erişim
                                hakkın olur. Tobeto değerlendirme araçlarıyla kendini test
                                edebilirsin.
                                Ücretsiz sunulan iş hayatına uygun yetkinlik gelişim
                                eğitimleriyle yeni
                                mesleğine hazırlanır, hem teknik hem de profesyonel olarak
                                gelişirsin.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="v-pills-egitim" role="tabpanel" aria-labelledby="v-pills-egitim-tab">
                        <div className="accordion" id="sssEgitim">
                          <div className="accordion-item" style={{border: 'none', marginBottom: 16, borderRadius: 30}}>
                            <h2 className="accordion-header" id="egitimsss-heading1">
                              <button style={{backgroundColor: 'transparent !important', color: '#93f !important', boxShadow: 'none !important'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#egitimsss-collapse1" aria-expanded="false" aria-controls="egitimsss-collapse1">
                                Hangi eğitimleri alabilirim?
                              </button>
                            </h2>
                            <div id="egitimsss-collapse1" className="accordion-collapse collapse " aria-labelledby="egitimsss-heading1">
                              <div className="accordion-body">
                                Tobeto’da eğitimler profesyonel, dijital ve yönetsel gelişim
                                alanları olarak
                                üç
                                ana başlığa ayrılır. Yazılım alanında <a href="https://www.tobeto.com/bireyler-icin#dijital-bir-meslek">Dijital
                                  Bir
                                  Meslek</a> edinmek istiyorsan “Dijital Gelişim”, <a href="https://www.tobeto.com/bireyler-icin#kendini-gelistirmek">Kendini
                                  Geliştirmek</a> için “Profesyonel Gelişim” ve <a href="https://www.tobeto.com/bireyler-icin#profesyonel-bir-yonetici">Profesyonel
                                  Bir Yönetici</a> olmak içinse “Yönetsel Gelişim”
                                alanındaki
                                eğitimler
                                için
                                <a href="https://www.tobeto.com/egitimler">kataloğa</a> göz
                                atabilirsin.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item" style={{border: 'none', marginBottom: 16, borderRadius: 30}}>
                            <h2 className="accordion-header" id="egitimsss-heading2">
                              <button style={{backgroundColor: 'transparent !important', color: '#93f !important', boxShadow: 'none !important'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#egitimsss-collapse2" aria-expanded="false" aria-controls="egitimsss-collapse2">
                                Bir Tobeto dersi nasıl işlenir?
                              </button>
                            </h2>
                            <div id="egitimsss-collapse2" className="accordion-collapse collapse" aria-labelledby="egitimsss-heading2">
                              <div className="accordion-body">
                                Codecademy içerikleriyle kendi kendine öğrenme deneyimi
                                yaşadıktan sonra
                                ilgili
                                konu için alanında uzman eğitmenlerin verdiği canlı derse
                                katılırsın.
                                Haftalık
                                mentör desteğiyle aklına takılan sorulara cevap
                                bulabilirsin.
                                Eğitim sonunda
                                proje ve/veya testle süreci tamamlayıp, yetkinlik rozetini
                                kazanırsın.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item" style={{border: 'none', marginBottom: 16, borderRadius: 30}}>
                            <h2 className="accordion-header" id="egitimsss-heading3">
                              <button style={{backgroundColor: 'transparent !important', color: '#93f !important', boxShadow: 'none !important'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#egitimsss-collapse3" aria-expanded="false" aria-controls="egitimsss-collapse3">
                                Derslere katılmak için teknik olarak neye ihtiyacım var?
                              </button>
                            </h2>
                            <div id="egitimsss-collapse3" className="accordion-collapse collapse" aria-labelledby="egitimsss-heading3">
                              <div className="accordion-body">
                                İnternet bağlantısı ve bilgisayarının olması yeterli.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item" style={{border: 'none', marginBottom: 16, borderRadius: 30}}>
                            <h2 className="accordion-header" id="egitimsss-heading4">
                              <button style={{backgroundColor: 'transparent !important', color: '#93f !important', boxShadow: 'none !important'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#egitimsss-collapse4" aria-expanded="false" aria-controls="egitimsss-collapse4">
                                Yazılımla ilgili tecrübeli olmam gerekir mi?
                              </button>
                            </h2>
                            <div id="egitimsss-collapse4" className="accordion-collapse collapse" aria-labelledby="egitimsss-heading4">
                              <div className="accordion-body">
                                Hayır, yazılım alanında bir tecrüben olması gerekmiyor.
                                Eğitimlerimizin
                                tamamı geleceğin yazılımcılarını bütüncül bir bakışla, tam
                                donanımla
                                yetiştirmek üzere kurgulandı.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item" style={{border: 'none', marginBottom: 16, borderRadius: 30}}>
                            <h2 className="accordion-header" id="egitimsss-heading5">
                              <button style={{backgroundColor: 'transparent !important', color: '#93f !important', boxShadow: 'none !important'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#egitimsss-collapse5" aria-expanded="false" aria-controls="egitimsss-collapse5">
                                Neden Codecademy?
                              </button>
                            </h2>
                            <div id="egitimsss-collapse5" className="accordion-collapse collapse" aria-labelledby="egitimsss-heading5">
                              <div className="accordion-body">
                                45 milyon kullanıcısıyla dünyanın en büyük yazılım eğitim
                                platformu olan
                                Codecademy, kodlama becerilerini esnek, ilgi çekici ve
                                uygulamaya
                                dayalı
                                öğretir. Tobeto, Codecademy’nin Türkiye’deki tek stratejik
                                ortağı
                                olarak
                                abonelerine Codecademy içeriklerine tam erişim imkânı tanır.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="v-pills-abonelik" role="tabpanel" aria-labelledby="v-pills-abonelik-tab">
                        <div className="accordion" id="sssAbonelik">
                          <div className="accordion-item" style={{border: 'none', marginBottom: 16, borderRadius: 30}}>
                            <h2 className="accordion-header" id="aboneliksss-heading1">
                              <button style={{backgroundColor: 'transparent !important', color: '#93f !important', boxShadow: 'none !important'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#aboneliksss-collapse1" aria-expanded="false" aria-controls="aboneliksss-collapse1">
                                Ücretsiz üye ve abone farkı nedir?
                              </button>
                            </h2>
                            <div id="aboneliksss-collapse1" className="accordion-collapse collapse " aria-labelledby="aboneliksss-heading1">
                              <div className="accordion-body">
                                Tobeto’ya üye olarak, değerlendirme araçlarını kullanabilir,
                                ücretsiz
                                sunulan eğitimler ve demo derslerden yaralanabilirsin. Abone
                                olduğunda ise,
                                yeni bir meslek edinmek için Codecademy içerikleriyle
                                oluşturulmuş, canlı
                                dersler ve mentör desteğiyle zenginleştirilmiş bir eğitim
                                yolculuğu
                                deneyimlersin.
                              </div>
                            </div>
                          </div>
                          {/* <div class="accordion-item"
                                            style="border: none;margin-bottom: 16px;    border-radius: 30px;">
                                            <h2 class="accordion-header" id="aboneliksss-heading2">
                                                 <button
                                                      style="background-color:transparent !important;color:#93f !important;box-shadow:none !important;"
                                                      class="accordion-button collapsed" type="button"
                                                      data-bs-toggle="collapse"
                                                      data-bs-target="#aboneliksss-collapse2"
                                                      aria-expanded="false" aria-controls="aboneliksss-collapse2">
                                                      Aboneliğimi yeniden nasıl başlatabilirim?
                                                 </button>
                                            </h2>
                                            <div id="aboneliksss-collapse2" class="accordion-collapse collapse"
                                                 aria-labelledby="aboneliksss-heading2">
                                                 <div class="accordion-body">
                                                      <a href="https://tobeto.com/aboneliklerim">Aboneliklerim</a>
                                                      sayfasından
                                                      sana uygun paketi seçerek ödeme yapman yeterli.
                                                 </div>
                                            </div>
                                       </div> */}
                          {/* <div class="accordion-item"
                                            style="border: none;margin-bottom: 16px;    border-radius: 30px;">
                                            <h2 class="accordion-header" id="aboneliksss-heading3">
                                                 <button
                                                      style="background-color:transparent !important;color:#93f !important;box-shadow:none !important;"
                                                      class="accordion-button collapsed" type="button"
                                                      data-bs-toggle="collapse"
                                                      data-bs-target="#aboneliksss-collapse3"
                                                      aria-expanded="false" aria-controls="aboneliksss-collapse3">
                                                      Tobeto abonelik paketleri nedir?
                                                 </button>
                                            </h2>
                                            <div id="aboneliksss-collapse3" class="accordion-collapse collapse"
                                                 aria-labelledby="aboneliksss-heading3">
                                                 <div class="accordion-body">
                                                      Beş farklı abonelik paketimiz var. Paketler arasındaki tek
                                                      fark
                                                      ise aylık
                                                      alabileceğin ders sayısı. Sunulan diğer özellikler tamamen
                                                      aynı.
                                                      Böylece
                                                      paket seçerken hedefine yönelik olarak kendi ihtiyaçların ve
                                                      kaynaklarına
                                                      göre özgün bir eğitim süreci planlayabilirsin.
                                                 </div>
                                            </div>
                                       </div> */}
                          <div className="accordion-item" style={{border: 'none', marginBottom: 16, borderRadius: 30}}>
                            <h2 className="accordion-header" id="aboneliksss-heading4">
                              <button style={{backgroundColor: 'transparent !important', color: '#93f !important', boxShadow: 'none !important'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#aboneliksss-collapse4" aria-expanded="false" aria-controls="aboneliksss-collapse4">
                                Şampiyonluk paketi nedir?
                              </button>
                            </h2>
                            <div id="aboneliksss-collapse4" className="accordion-collapse collapse" aria-labelledby="aboneliksss-heading4">
                              <div className="accordion-body">
                                Şampiyonluk paketi, ayda ortalama 80 saatlik eğitime denk
                                gelen 4
                                derslik
                                pakettir. Bu paketi satın aldığında, eğitim kriterlerini
                                yerine
                                getirirsen,
                                öğrenim ücretini geri alma şansı kazanırsın. Şampiyonluk
                                paket
                                detayları
                                için
                                tıkla.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item" style={{border: 'none', marginBottom: 16, borderRadius: 30}}>
                            <h2 className="accordion-header" id="aboneliksss-heading5">
                              <button style={{backgroundColor: 'transparent !important', color: '#93f !important', boxShadow: 'none !important'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#aboneliksss-collapse5" aria-expanded="false" aria-controls="aboneliksss-collapse5">
                                Şampiyonluk paketi ve 4 ders paket arasındaki fark nedir?
                              </button>
                            </h2>
                            <div id="aboneliksss-collapse5" className="accordion-collapse collapse" aria-labelledby="aboneliksss-heading5">
                              <div className="accordion-body">
                                Şampiyonluk paketine dahil olursan, senden beklenen şartları
                                yerine
                                getirdiğinde ödemeni geri alma şansı kazanırsın. 4 derslik
                                paketi
                                seçtiğinde
                                ise herhangi bir şarta uyman gerekmez ama geri ödeme
                                alamazsın.
                                Eğitim
                                sürecinde herhangi bir fark yok.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item" style={{border: 'none', marginBottom: 16, borderRadius: 30}}>
                            <h2 className="accordion-header" id="aboneliksss-heading6">
                              <button style={{backgroundColor: 'transparent !important', color: '#93f !important', boxShadow: 'none !important'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#aboneliksss-collapse6" aria-expanded="false" aria-controls="aboneliksss-collapse6">
                                Nasıl hediye abonelik kazanabilirim?
                              </button>
                            </h2>
                            <div id="aboneliksss-collapse6" className="accordion-collapse collapse" aria-labelledby="aboneliksss-heading6">
                              <div className="accordion-body">
                                Toplamda iki aylık hediye abone paketi kazanma hakkın var.
                                Paket
                                fark
                                etmeksizin, aboneliğini kesintisiz olarak altı ay
                                sürdürdüğünde
                                bir ay veya
                                on
                                ay sürdüğünde iki ay bizden hediye abonelik kazanırsın.
                                İstersen
                                altıncı
                                ayından
                                sonra bir ay ücretsiz hakkını kullan, istersen haklarını
                                onuncu
                                ayın sonunda
                                toplu olarak kullan.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item" style={{border: 'none', marginBottom: 16, borderRadius: 30}}>
                            <h2 className="accordion-header" id="aboneliksss-heading7">
                              <button style={{backgroundColor: 'transparent !important', color: '#93f !important', boxShadow: 'none !important'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#aboneliksss-collapse7" aria-expanded="false" aria-controls="aboneliksss-collapse7">
                                Tobeto aboneliğimi nasıl başlatabilirim?
                              </button>
                            </h2>
                            <div id="aboneliksss-collapse7" className="accordion-collapse collapse" aria-labelledby="aboneliksss-heading7">
                              <div className="accordion-body">
                                Zaten Tobeto’ya üye isen, platforma giriş yaparak “<a href="https://tobeto.com/aboneliklerim">Aboneliklerim</a>”
                                sayfasından
                                paketini seçip, ödeme adımlarını tamamlayarak abonelik
                                süreci
                                başlatılabilirsin. Eğer henüz üye değilsen, abone olabilmek
                                için
                                önce <a href="https://tobeto.com/kayit-ol">ücretsiz
                                  üyeliğini
                                  başlat</a>man
                                gerekir.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item" style={{border: 'none', marginBottom: 16, borderRadius: 30}}>
                            <h2 className="accordion-header" id="aboneliksss-heading8">
                              <button style={{backgroundColor: 'transparent !important', color: '#93f !important', boxShadow: 'none !important'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#aboneliksss-collapse8" aria-expanded="false" aria-controls="aboneliksss-collapse8">
                                Tobeto’ya abone olmadan eğitimlere katılabilir miyim?
                              </button>
                            </h2>
                            <div id="aboneliksss-collapse8" className="accordion-collapse collapse" aria-labelledby="aboneliksss-heading8">
                              <div className="accordion-body">
                                Tobeto’da ücretsiz sunulan eğitimlere katılabilirsin.
                                Codecademy
                                içerikleriyle
                                beraber sunulan canlı derslerin olduğu eğitimler, projeler
                                ve
                                mentör desteği
                                için aboneliğini başlatman gerekir.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item" style={{border: 'none', marginBottom: 16, borderRadius: 30}}>
                            <h2 className="accordion-header" id="aboneliksss-heading9">
                              <button style={{backgroundColor: 'transparent !important', color: '#93f !important', boxShadow: 'none !important'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#aboneliksss-collapse9" aria-expanded="false" aria-controls="aboneliksss-collapse9">
                                Debit banka kartları ile ödeme yapabilir miyim?
                              </button>
                            </h2>
                            <div id="aboneliksss-collapse9" className="accordion-collapse collapse" aria-labelledby="aboneliksss-heading9">
                              <div className="accordion-body">
                                Evet, debit kartla da ödeme yaparak abone olabilirsin.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item" style={{border: 'none', marginBottom: 16, borderRadius: 30}}>
                            <h2 className="accordion-header" id="aboneliksss-heading10">
                              <button style={{backgroundColor: 'transparent !important', color: '#93f !important', boxShadow: 'none !important'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#aboneliksss-collapse10" aria-expanded="false" aria-controls="aboneliksss-collapse10">
                                Yurt dışından abone olabilir miyim?
                              </button>
                            </h2>
                            <div id="aboneliksss-collapse10" className="accordion-collapse collapse" aria-labelledby="aboneliksss-heading10">
                              <div className="accordion-body">
                                Eğitimlere dünyanın her yerinden katılabilirsin.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item" style={{border: 'none', marginBottom: 16, borderRadius: 30}}>
                            <h2 className="accordion-header" id="aboneliksss-heading11">
                              <button style={{backgroundColor: 'transparent !important', color: '#93f !important', boxShadow: 'none !important'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#aboneliksss-collapse11" aria-expanded="false" aria-controls="aboneliksss-collapse11">
                                Tobeto aboneliği taahhütlü mü?
                              </button>
                            </h2>
                            <div id="aboneliksss-collapse11" className="accordion-collapse collapse" aria-labelledby="aboneliksss-heading11">
                              <div className="accordion-body">
                                Hayır değil. Aboneliğini ihtiyaç duyduğun süre boyunca
                                sürdürebilir ve
                                istediğin
                                zaman sonlandırabilirsin. Aboneliğini kesintisiz olarak
                                devam
                                ettirmen
                                durumunda
                                bizden hediye abonelik kazanabileceğini unutma.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="v-pills-destek" role="tabpanel" aria-labelledby="v-pills-destek-tab">
                        <div className="accordion" id="sssDestek">
                          {/* <div class="accordion-item"
                                            style="border: none;margin-bottom: 16px; border-radius: 30px;">
                                            <h2 class="accordion-header" id="desteksss-heading1">
                                                 <button
                                                      style="background-color:transparent !important;color:#93f !important;box-shadow:none !important;"
                                                      class="accordion-button collapsed" type="button"
                                                      data-bs-toggle="collapse"
                                                      data-bs-target="#desteksss-collapse1" aria-expanded="false"
                                                      aria-controls="desteksss-collapse1">
                                                      Tobeto aboneliğimi nasıl iptal edebilirim?
                                                 </button>
                                            </h2>
                                            <div id="desteksss-collapse1" class="accordion-collapse collapse "
                                                 aria-labelledby="desteksss-heading1">
                                                 <div class="accordion-body">
                                                      <a href="https://tobeto.com/aboneliklerim">Aboneliklerim
                                                           sayfasından
                                                           paketini iptal edebilir veya değiştirebilirsin.
                                                 </div>
                                            </div>
                                       </div> */}
                          <div className="accordion-item" style={{border: 'none', marginBottom: 16, borderRadius: 30}}>
                            <h2 className="accordion-header" id="desteksss-heading2">
                              <button style={{backgroundColor: 'transparent !important', color: '#93f !important', boxShadow: 'none !important'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#desteksss-collapse2" aria-expanded="false" aria-controls="desteksss-collapse2">
                                Tobeto hesabımı nasıl silerim?
                              </button>
                            </h2>
                            <div id="desteksss-collapse2" className="accordion-collapse collapse" aria-labelledby="desteksss-heading2">
                              <div className="accordion-body">
                                Platformda profil bilgilerindeki <a href="https://www.tobeto.com/profilim/profilimi-duzenle/ayarlar">ayarlar</a>
                                sekmesinden hesabını silebilirsin. Hesabını sildiğinde
                                kazandığın
                                tüm
                                rozetlerin
                                silineceğini ve eğitim yolculuğunun sıfırlanacağını unutma.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item" style={{border: 'none', marginBottom: 16, borderRadius: 30}}>
                            <h2 className="accordion-header" id="desteksss-heading3">
                              <button style={{backgroundColor: 'transparent !important', color: '#93f !important', boxShadow: 'none !important'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#desteksss-collapse3" aria-expanded="false" aria-controls="desteksss-collapse3">
                                Şifremi unuttum. Nasıl yeni şifre alabilirim?
                              </button>
                            </h2>
                            <div id="desteksss-collapse3" className="accordion-collapse collapse" aria-labelledby="desteksss-heading3">
                              <div className="accordion-body">
                                <a href="https://tobeto.com/sifremi-unuttum">Buradan</a>
                                kayıt
                                olduğun
                                eposta
                                adresini girmen yeterli.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item" style={{border: 'none', marginBottom: 16, borderRadius: 30}}>
                            <h2 className="accordion-header" id="desteksss-heading4">
                              <button style={{backgroundColor: 'transparent !important', color: '#93f !important', boxShadow: 'none !important'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#desteksss-collapse4" aria-expanded="false" aria-controls="desteksss-collapse4">
                                Tobeto şifremi nasıl değiştirebilirim?
                              </button>
                            </h2>
                            <div id="desteksss-collapse4" className="accordion-collapse collapse" aria-labelledby="desteksss-heading4">
                              <div className="accordion-body">
                                Platformda profil bilgilerindeki <a href="https://www.tobeto.com/profilim/profilimi-duzenle/ayarlar">ayarlar</a>
                                sekmesinden şifreni değiştirebilirsin.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item" style={{border: 'none', marginBottom: 16, borderRadius: 30}}>
                            <h2 className="accordion-header" id="desteksss-heading5">
                              <button style={{backgroundColor: 'transparent !important', color: '#93f !important', boxShadow: 'none !important'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#desteksss-collapse5" aria-expanded="false" aria-controls="desteksss-collapse5">
                                Tobeto faturamı nerede görüntüleyebilirim?
                              </button>
                            </h2>
                            <div id="desteksss-collapse5" className="accordion-collapse collapse" aria-labelledby="desteksss-heading5">
                              <div className="accordion-body">
                                Faturan, ödeme gerçekleştikten sonraki bir hafta içinde,
                                platformda kayıtlı
                                e-posta adresine gönderilir, oradan kontrol edebilirsin.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item" style={{border: 'none', marginBottom: 16, borderRadius: 30}}>
                            <h2 className="accordion-header" id="desteksss-heading6">
                              <button style={{backgroundColor: 'transparent !important', color: '#93f !important', boxShadow: 'none !important'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#desteksss-collapse6" aria-expanded="false" aria-controls="desteksss-collapse6">
                                Hesabıma giriş yaparken sorun yaşıyorum, neden olabilir?
                              </button>
                            </h2>
                            <div id="desteksss-collapse6" className="accordion-collapse collapse" aria-labelledby="desteksss-heading6">
                              <div className="accordion-body">
                                Sana daha iyi yardımcı olabilmemiz için <a href="mailto:destek@tobeto.com">destek@tobeto.com</a>
                                adresine yaşadığın
                                sorunu kısaca anlatan bir eposta gönderirsen ekibimiz sana
                                en
                                kısa sürede
                                dönüş
                                yapacak.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item" style={{border: 'none', marginBottom: 16, borderRadius: 30}}>
                            <h2 className="accordion-header" id="desteksss-heading7">
                              <button style={{backgroundColor: 'transparent !important', color: '#93f !important', boxShadow: 'none !important'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#desteksss-collapse7" aria-expanded="false" aria-controls="desteksss-collapse7">
                                Tobeto’ya nasıl ulaşabilirim?
                              </button>
                            </h2>
                            <div id="desteksss-collapse7" className="accordion-collapse collapse" aria-labelledby="desteksss-heading7">
                              <div className="accordion-body">
                                Merak ettiklerinle ilgili bize <a href="mailto:info@tobeto.com">info@tobeto.com</a>
                                adresinden
                                her zaman
                                ulaşabilirsin. Eğer teknik desteğe ihtiyacın varsa, <a href="mailto:destek@tobeto.com">destek@tobeto.com</a>
                                adresine mail
                                atman yeterli.
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
        </div></div></div></div></section>

      </main>
    <Footer2/>
    </div>
  )
}

export default SSS