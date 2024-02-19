import React, { useEffect } from 'react'
import Navi from '../../components/navbar/Navi'
import Footer from '../../components/footer/footer'
import ProgressBar from './ProgressBar';

export default function TobetoSuccessModel() {
    const pageTitle = "Tobeto İşte Başarı Modeli";

    useEffect(() => {
        document.title = pageTitle;
    }, []);

    return (
        <div>
            <Navi />
            <div className="bg-light">
                <div className="container px-7 pt-10 pb-5">
                    <h6 className="text-center f-size-24 text-secondary">
                        Tobeto İşte Başarı Modeli{' '}
                    </h6>
                </div>
            </div>
            <section className="bg-light py-2">
                <div className="container mb-6 mt-6">
                    <div className="p-6 mb-6 bg-white rounded shadow">
                        <div className="row">
                            <div className="progress mt-5 mw-2xl mx-auto mb-10">
                              <ProgressBar/>
                            </div>
                            <div>
                                <div className="raw-html-embed">
                                    <div className="col-12 assetment-box pb-10 border-bottom mb-10">
                                        "Tobeto İşte Başarı Modeli" iş bulma ve bir işte başarılı olma sürecinde hayli kritik olan istihdam edilebilirlik yetkinlikleri üzerine kuruludur.
                                        <br />
                                        <br />
                                        Araştırmalar söylüyor ki bu yetkinlikler en az profesyonel iş yetkinlikleri kadar ve hatta bazı görüşlere göre daha önemli!
                                        <br />
                                        Çünkü bu yetkinlikler, hangi alanda olursa olsun; bir işte sürdürülebilir başarıyı sağlayacak temel becerileri içeriyor. Dolayısıyla da şirketler, kurumlar adayların bu yetkinleri çok önemsiyor ve çalışanlarını bu alanlarda geliştirmek için büyük yatırımlar yapıyorlar.
                                        <br />
                                        <br />
                                        O halde şimdi sen de kendini analiz et; yetkinlik raporun çıksın. Kendini hangi alanlarda güçlü görüyorsun öğren.
                                        <br />
                                        Ek olarak bu yetkinlikleri geliştirmek üzere Tobeto tarafından sunulan eğitimlere ücretsiz erişimin açılsın!
                                        <br />
                                        Unutma; bu bir öz değerlendirme. Kendini yine sen değerlendiriyor, kendi fotoğrafını çekiyorsun.
                                        <br />
                                        <br />
                                        Bu bir test ya da sınav değil. Güçlü ve gelişime açık yetkinliklerini belirlemen için bir araç.
                                        <br />
                                        O yüzden kendine karşı dürüst ol, gerçekten ne isen ona göre değerlendirme yap.
                                        <br />
                                        <br />
                                        Testi tamamlamak çok basit.
                                        <br />
                                        80 tane davranış ifadesi var. Bunların her birini okuyup o davranışta kendini ne kadar başarılı ya da iyi gördüğünü aşağıdaki ölçeği dikkate alarak işaretle.
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 text-center mt-4">
                                <p>
                                    Tüm maddeler için işaretleme yapmalısın.
                                    <br />
                                    Başarılar.{' '}
                                </p>
                                <div className="table-responsive">
                                    <table className="table table-sm text-center mt-5 table-striped table-bordered">
                                        <thead className="">
                                            <tr>
                                                <th className="text-center" scope="col" >  --  </th>
                                                <th className="text-center" scope="col" >  -   </th>
                                                <th className="text-center" scope="col" > 0 </th>
                                                <th scope="col"> +</th>
                                                <th className="text-center" scope="col" >  ++ </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td> Bu konuda hiç ama hiç iyi değilim </td>
                                                <td> Bu konuda pek iyi değilim </td>
                                                <td>  Bu konuda ortalama düzeydeyim, ne iyi ne kötü </td>
                                                <td> Bu konuda iyiyim </td>
                                                <td> Bu konuda çok ama çok iyiyim. </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <a
                                    className="btn btn-primary d-inline-block mt-8"
                                    href="/profilim/degerlendirmeler/tobeto-iste-basari-modeli/1"
                                >
                                    Değerlendirmeye Başla
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
