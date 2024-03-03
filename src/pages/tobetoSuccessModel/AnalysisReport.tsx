import { useEffect, useState } from 'react';
import Navi from '../../components/navbar/Navi'
import { AppDispatch } from '../../store';
import ChartComponent from '../profile/myProfile/ChartComponent'
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../store/slices/chartDataSlice';
import { PayloadAction, SerializedError } from '@reduxjs/toolkit';

function AnalysisReport() {
    const dispatch: AppDispatch = useDispatch();
    const user = useSelector((state: any) => state.auth.user);
    const [chartData, setChartData] = useState<Record<string, number>>({});
    console.log("chartData", chartData.data);
    const accordionItems = [
        {
            id: "heading1",
            title: "Bu yetkinlik nedir ve neden önemli?",
            content: "Tobeto ‘İşte Başarı Modeli’nin son yetkinliği yeni dünya ile ilgilidir..."
        },
        {
            id: "heading2",
            title: "Geliştirmek için ne yapmalı?",
            content: [
                "Tobeto size yeni teknolojileri ve yeni dünyanın kodlarını tanıtan eğitimler sunmaktadır. Bu eğitimleri tamamlayın.",
                "Bu alan son derece dinamik ve sürekli olarak yeniliklerin ortaya çıktığı bir alandır. Tüm yenilikleri takip edin.",
                // diğer maddeler...
            ]
        },
        {
            id: "heading3",
            title: "Bu alanda önerilen eğitimler",
            content: [

            ]
        },

    ];
    const contents = {
        item1: 'İçerik 1',
        item2: 'İçerik 2',
        item3: 'İçerik 3',
    };
    useEffect(() => {
        if (user) {
          dispatch(fetchData({ userId: user.id, surveyId: 1 }))
          .then((action: PayloadAction<Record<string, number>, string, { arg: { userId: string; surveyId: number; }; requestId: string; requestStatus: "fulfilled"; }, never> | PayloadAction<unknown, string, { arg: { userId: string; surveyId: number; }; requestId: string; requestStatus: "rejected"; aborted: boolean; condition: boolean; } & ({ rejectedWithValue: true; } | ({ rejectedWithValue: false; } & {})), SerializedError>) => {
            const data: Record<string, number> = action.payload as Record<string, number>;
            setChartData(data);
          })
          .catch((error:any) => {
            console.error('Error fetching data:', error); // Log any errors
          });
        }
      }, [dispatch, user?.id]);
      
      
    return (
        <div>
            <Navi />
            <div className="bg-light">
                <div className="container px-7 pt-10 pb-5">
                    <h6 className="text-center f-size-24 text-secondary">
                        Tobeto ”İşte Başarı Modeli”
                    </h6>
                    <p className="h6 text-center">
                        Analiz Raporum
                    </p>
                </div>
            </div>
            <section className='py-2'>
                <div className="container mb-6 mt-6">
                    <div className='p-6 mb-6 tobeto-light-bg'>
                        <div className="row">
                            <div className="col-12">
                                <div className="row">
                                    <div className="text-center mobile-d-block">
                                        <ChartComponent/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="accordion" id="accordionExample" >
                {Object.keys(chartData).map((key, index) => (
                    <div key={index} className="mt-8">
                        <div className="p-6 rounded-end border-4 border-start bg-light-light border-light">
                            <div className="row">
                                <div className="col-lg-8 col-md-8 col-sm-8 col-12">
                                    <h3 className="h6 mb-0 fw-bolder text-primary">
                                        {key}: {chartData[key]}
                                    </h3>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-8 col-12 d-flex mobile-justify-content-start">
                                    <span className="badge bg-secondary text-white m-mt-5 mobile-d-block" style={{ fontSize: '16px' }}>
                                        Yetkinlik Puanı: {Number(chartData[key])}
                                    </span>
                                </div>
                            </div>

                        </div>
                        {accordionItems.map((item, index) => (
                            <div key={index} className="accordion-item bg-white">
                                <h2 className="accordion-header" id={item.id}>
                                    <button className="accordion-button result collapsed" aria-controls={`collapse${index + 1}`} aria-expanded="false" data-bs-target={`#collapse${index + 1}`} data-bs-toggle="collapse" type="button">
                                        <span className="fw-bolder">{item.title}</span>
                                    </button>
                                </h2>
                                <div className="result-collapse accordion-collapse collapse" aria-labelledby={item.id} data-bs-parent="#accordionExample" id={`collapse${index + 1}`} style={{}}>
                                    <div className="accordion-body bg-white">
                                        {Array.isArray(item.content) ? (
                                            <ul>
                                                {item.content.map((subItem, subIndex) => (
                                                    <li key={subIndex} style={{ textAlign: 'justify', fontFamily: 'Poppins' }}>
                                                        <span>{subItem}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p style={{ textAlign: 'justify', fontFamily: 'Poppins' }}>
                                                {item.content}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}

                <div className="accordion-item bg-white">
                    <h2 className="accordion-header" id="heading8">
                        <button className="accordion-button result collapsed" aria-controls="collapse8" aria-expanded="false" data-bs-target="#collapse8" data-bs-toggle="collapse" type="button">
                            <span className="fw-bolder">Bu yetkinlik nedir ve neden önemli?</span>
                        </button>
                    </h2>
                    <div className="result-collapse accordion-collapse collapse" aria-labelledby="heading8" data-bs-parent="#accordionExample" id="collapse8" style={{}}>
                        <div className="accordion-body bg-white">
                            <p style={{ textAlign: 'justify', fontFamily: 'Poppins' }}>
                                Tobeto ‘İşte Başarı Modeli’nin son yetkinliği yeni dünya ile ilgilidir. Bu yetkinlik, diğer yedi yetkinlikten farklı olarak, yeni dünya ile ilgili farkındalık yaratmak ve herkesin kendisini olabildiğince buna hazırlaması konusunda yönlendirici olması için modele eklenmiştir. Zira içinde bulunduğumuz zamanlar önemli bir geçiş sürecine işaret etmektedir. Dijital teknolojilerle birlikte yaşanan dönüşümler hayatın her alanını yeninden şekillendirmektedir.
                            </p>
                            <p style={{ textAlign: 'justify', fontFamily: 'Poppins' }}>
                                İş dünyası ve şirketler de bu dönüşümün hem lokomotifi hem de etkilenenidir. Teknolojinin bu kadar yaygınlaşması ve karmaşık hale gelmesi, onu kullanabilecek nitelikte donanımlı insanlar gerektirmektedir. Birçok araştırma göstermektedir ki, hızlı teknolojik gelişmeler karşısında gereken yetenek altyapısı oluşturulamamıştır. Bu yüzden birçok şirket, özellikle teknoloji yoğun pozisyonlarda yetenek açığı çekmektedir. Bu açığı kapatmak için kendi içinde gelişim programları düzenleyen pek çok şirket var. İşin daha dramatik boyutu, bazı meslekler artık kendini tamamen teknolojiye bırakmış durumda ve artık bu meslek alanlarında çalışanların kendilerini başka alanlarda çalışacak şekilde geliştirmesi bir zorunluluk.
                            </p>
                            <p style={{ textAlign: 'justify', fontFamily: 'Poppins' }}>
                                Tüm bu dönüşüm süreci içinde; yeni dünyayı anlamış, bu dünyada başarılı olabilecek dijital ve teknoloji yetkinliklerine sahip adayların istihdamı kuşkusuz daha kolay. Bu konudaki gelişim ihtiyacı sadece istihdamla ilgili de değil çünkü bu beceriler gündelik yaşamda da çok önemli hale gelmiş durumda. İnterneti iyi kullanan, aradığı tüm bilgilere ulaşabilen, ihtiyacına göre dijital uygulamaları arayıp bulan, siber dünyada güvenliğini koruyabilen tüm bireyler birçok alanda öne çıkıyor. Ayrıca bu dünya fırsatlar dünyasıdır. Yeni mecralar, yeni işler, yeni para kazanma biçimleri ortaya çıkarken bu fırsatları ancak yeterli donanıma sahip bireyler yakalayabilecek. Tüm bu açılardan bakıldığında bu yetkinlik, diğer tüm yetkinliklerin gücünü artırması açısından önemli.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item bg-white">
                    <h2 className="accordion-header" id="heading28">
                        <button className="accordion-button result collapsed" aria-controls="collapse28" aria-expanded="false" data-bs-target="#collapse28" data-bs-toggle="collapse" type="button">
                            <span className="fw-bolder">Geliştirmek için ne yapmalı?</span>
                        </button>
                    </h2>
                    <div className="result-collapse accordion-collapse collapse" aria-labelledby="heading28" data-bs-parent="#accordionExample" id="collapse28">
                        <div className="accordion-body bg-white">
                            <div className="accordion-body bg-white">
                                <ul>
                                    {[
                                        "Tobeto size yeni teknolojileri ve yeni dünyanın kodlarını tanıtan eğitimler sunmaktadır. Bu eğitimleri tamamlayın.",
                                        "Bu alan son derece dinamik ve sürekli olarak yeniliklerin ortaya çıktığı bir alandır. Tüm yenilikleri takip edin.",
                                        "Yeni okuryazarlıkları araştırın: 'Dijital okuryazarlık', 'teknoloji okuryazarlığı', 'yeni medya okuryazarlığı', 'bilgi okuryazarlığı' gibi anahtar kelimelerle.",
                                        "Çalışmak istediğiniz alandaki yeni teknolojilerle ilgili araştırmalar yapın.",
                                        "Yeni dünya ile ilgili yapılan araştırmaları inceleyin ve gelişime öncelik verin.",
                                        "Eğitim ve araştırmalarınızın ardından kendiniz için bir analiz yapın ve puanlayın.",
                                        "Dijital içerik üretimine odaklanın ve profesyonel denemeler yapın.",
                                        "Temel düzeyde yazılım ve veri bilimi öğrenmeye çalışın.",
                                        "Dijital dünyadaki iş fırsatlarını araştırın ve girişimde bulunun.",
                                        "'Netiket' kavramını araştırın ve dijital varlığınızı koruyun.",
                                        "Bireysel düzeyde siber güvenlik risklerini araştırın ve önlemler alın.",
                                        "Yeni teknolojileri takip eden kişilerle paylaşım grupları kurun ve bilgi paylaşımında bulunun."
                                    ].map((item, index) => (
                                        <li key={index} style={{ textAlign: 'justify', fontFamily: 'Poppins' }}>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item bg-white">
                    <h2 className="accordion-header" id="hheading8">
                        <button className="accordion-button result collapsed" aria-controls="ccollapse8" aria-expanded="false" data-bs-target="#ccollapse8" data-bs-toggle="collapse" type="button">
                            <span className="fw-bolder">Bu alanda önerilen eğitimler</span>
                        </button>
                    </h2>
                    <div className="result-collapse accordion-collapse collapse" aria-labelledby="hheading8" data-bs-parent="#accordionExample" id="ccollapse8">
                        <div className="accordion-body">
                            <div className="mx-0 row" />
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <div className="p-6 rounded-end border-4 border-start bg-light-light border-light">
                        <div className="row">
                            <div className="col-lg-8 col-md-8 col-sm-8 col-12">
                                <h3 className="h6 mb-0 fw-bolder text-primary">
                                    Profesyonel duruşumu geliştiriyorum
                                </h3>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-8 col-12 d-flex mobile-justify-content-start">
                                <span className="badge bg-secondary text-white m-mt-5 mobile-d-block" style={{ fontSize: '16px' }}>
                                    Yetkinlik Puanı: 4.5
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item bg-white">
                    <h2 className="accordion-header" id="heading7">
                        <button className="accordion-button result collapsed" aria-controls="collapse7" aria-expanded="false" data-bs-target="#collapse7" data-bs-toggle="collapse" type="button">
                            <span className="fw-bolder">Bu yetkinlik nedir ve neden önemli?</span>
                        </button>
                    </h2>
                    <div className="result-collapse accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#accordionExample" id="collapse7">
                        <div className="accordion-body bg-white">
                            <p style={{ textAlign: 'justify', fontFamily: 'Poppins' }}>
                                Profesyonellik bir alanda uzmanlaşma, meslek sahibi olma ve bu alanda bir kurumda ya da kendi işinde çalışma ile ilgili bir kavramdır. Kurumlar da profesyonel yapılanma içinde olan örgütlerdir.
                            </p>
                            <p style={{ textAlign: 'justify', fontFamily: 'Poppins' }}>
                                Profesyonel davranışın temeli, hangi işi yapıyorsan yap onu en iyi şekilde yapmaya çalışmaktır. Okulların, Tobeto gibi gelişim platformlarının verdikleri geliştirme hizmetleri bu açıdan profesyonel yaşama hazırlık niteliğindedir.
                            </p>
                            <p style={{ textAlign: 'justify', fontFamily: 'Poppins' }}>
                                Kuşkusuz profesyonel duruş altında başka birçok nitelikten bahsetmek mümkündür. Profesyonellik, tüm bu yetkinlikler ve dikkat edilmesi gereken bazı kurallarla birlikte ortaya koyduğumuz resmin dışarıdan algılanmasıdır.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item bg-white">
                    <h2 className="accordion-header" id="heading27">
                        <button className="accordion-button result collapsed" aria-controls="collapse27" aria-expanded="false" data-bs-target="#collapse27" data-bs-toggle="collapse" type="button">
                            <span className="fw-bolder">Geliştirmek için ne yapmalı?</span>
                        </button>
                    </h2>
                    <div className="result-collapse accordion-collapse collapse" aria-labelledby="heading27" data-bs-parent="#accordionExample" id="collapse27">
                        <div className="accordion-body bg-white">
                            <div className="accordion-body bg-white">
                                <ul>
                                    <li style={{ textAlign: 'justify', fontFamily: 'Poppins' }}>
                                        Öncelikle profesyonellik nedir, profesyonel davranış ve duruş nasıl bir şeydir, bunları iyi bir şekilde araştırın. Bu araştırmalar sonrasında kendinize bir profesyonellik puanı verin. Sonra bu puanı yükseltmeye çalışın.
                                    </li>
                                    <li style={{ textAlign: 'justify', fontFamily: 'Poppins' }}>
                                        Tobeto tarafından bu alanda sunulan eğitimler bu alanda size tüm temel bilgileri sağlayacaktır.
                                    </li>
                                    <li style={{ textAlign: 'justify', fontFamily: 'Poppins' }}>
                                        Diğer tüm İşte Başarı yetkinlikleri de profesyonel duruşunuza katkı sağlayacak niteliktedir. Dolayısıyla diğer yetkinlikler için paylaşılan tüm gelişim önerileri aynı zamanda profesyonellikle ilgili önerilerdir. Ayrıca diğer tüm Tobeto eğitimleri de profesyonel dünya için hazırlanmış eğitimlerdir. Eğitimlerin tamamını bitirdiğinizde profesyonellikle ilgili çok geniş bir bakış açısına sahip olacaksınız.
                                    </li>
                                    <li style={{ textAlign: 'justify', fontFamily: 'Poppins' }}>
                                        Özellikle ilk defa kurumsal dünyada işe başlayacak olan genç arkadaşların staj, şirket gezisi, şirket projeleri vb. yollarla şirketlerle erken dönemde ilişki içinde olması önemli düzeyde bir görgü kazandıracaktır.
                                    </li>
                                    <li style={{ textAlign: 'justify', fontFamily: 'Poppins' }}>
                                        Herkesin kurumsal dünyada çalışan bir yakını ya da yakınlarının yakınları olabilir. Onlarla özellikle kurumlardaki yaşam, kurallar, beklentiler, hoş karşılanmayan davranışlar vb. ile ilgili sohbet edebilirsiniz.
                                    </li>
                                    <li style={{ textAlign: 'justify', fontFamily: 'Poppins' }}>
                                        Şirketlerin iş ilanları, faaliyet ve kurumsal sosyal sorumluluk raporları, sosyal medya paylaşımları gibi kamuya açılan bilgileri de kurumsal yaşamla ilgili ipucu verecek bilgiler barındırır. Bunları da olabildiğince incelemenizi öneririz.
                                    </li>
                                    <li style={{ textAlign: 'justify', fontFamily: 'Poppins' }}>
                                        Sürdürülebilirlik bakışı ile çevreye ve doğaya saygılı olma da özellikle kendinizi geliştirmeniz gereken bir insanlık ve profesyonellik alanıdır. Geçek bir profesyonel, başarının peşinden koşarken insanları, çevreyi, doğayı ve kaynakları en iyi şekilde koruyandır.
                                    </li>
                                    <li style={{ textAlign: 'justify', fontFamily: 'Poppins' }}>
                                        Profesyonellik, adalet, dürüstlük, sorumluluk sahibi olma, sözünde durma, ölçülülük, vb. gibi insani erdemlerin üzerinde yükselen bir olgudur. İyi ve erdemli insan olma çabaları aynı zamanda iyi bir profesyonel olmanıza da destek olacaktır.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item bg-white">
                    <h2 className="accordion-header" id="hheading7">
                        <button className="accordion-button result collapsed" aria-controls="ccollapse7" aria-expanded="false" data-bs-target="#ccollapse7" data-bs-toggle="collapse" type="button">
                            <span className="fw-bolder">Bu alanda önerilen eğitimler</span>
                        </button>
                    </h2>
                    <div className="result-collapse accordion-collapse collapse" aria-labelledby="hheading7" data-bs-parent="#accordionExample" id="ccollapse7">
                        <div className="accordion-body">
                            <div className="mx-0 row" />
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <div className="p-6 rounded-end border-4 border-start bg-light-light border-light">
                        <div className="row">
                            <div className="col-lg-8 col-md-8 col-sm-8 col-12">
                                <h3 className="h6 mb-0 fw-bolder text-primary">Kendimi tanıyor ve yönetiyorum</h3>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-8 col-12 d-flex mobile-justify-content-start">
                                <span className="badge bg-secondary text-white m-mt-5 mobile-d-block" style={{ fontSize: '16px' }}>Yetkinlik Puanı: 3.6</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item bg-white">
                    <h2 className="accordion-header" id="heading1">
                        <button className="accordion-button result collapsed" aria-controls="collapse1" aria-expanded="false" data-bs-target="#collapse1" data-bs-toggle="collapse" type="button">
                            <span className="fw-bolder">Bu yetkinlik nedir ve neden önemli?</span>
                        </button>
                    </h2>
                    <div className="result-collapse accordion-collapse collapse" aria-labelledby="heading1" data-bs-parent="#accordionExample" id="collapse1">
                        <div className="accordion-body bg-white">
                            <p style={{ textAlign: 'justify', fontFamily: 'Poppins' }}>
                                Kendini tanıma ve yönetebilme, sadece iş hayatında değil, yaşam boyu başarı için ilk odaklanılması gereken yetkinliktir. Bu açıdan “kendini tanımak” merkezi yetkinliktir. Herkes kendini doğal olarak tanıdığını düşünebilir ama insanın kendi coğrafyası içinde hiç gidilmemiş, bilinmeyen, tam anlamıyla keşfedilmemiş, keşfedilmiş ama haritası çıkarılmamış, adı konulmamış, yeteri kadar tanımlanmış yerler olabilir. Üstelik bu alanların kendisi de dinamiktir. Yaşla, deneyimle, yeni öğrenimler ve farkındalıklarla birlikte kendine yolculuğun tabiatı da değişir.
                            </p>
                            <p style={{ textAlign: 'justify', fontFamily: 'Poppins' }}>
                                Bu yolculukta şu keşif soruları yardımcı olabilir: Ben kimim? Yaşam amacım ne? Benim değerlerim, olmazsa olmazlarım neler? Doğuştan gelen ve bana güç veren özelliklerim hangileri? Beni zorlayan, yeteri kadar iyi olmadığımı düşündüğüm niteliklerim neler? Bana verilen altyapı üzerine şu ana kadar hangi bilgi ve becerileri inşa ettim? Hangi tutumları geliştirdim? Hangi alanda ne kadar yetkinim ve kapasitemi ne oranda kullanabiliyorum? Duygusal dinamiklerimin ne kadar farkındayım? Hangi durumda ne tür tepkiler veriyorum? Belirli zamanlarda nasıl davranışlar sergiliyorum? Hangi alanlarda iç çatışmalarım var? Beni mutlu eden şeyler neler? Limitlerimi biliyor muyum? Bunları ne kadar test ettim?
                            </p>
                            <p style={{ textAlign: 'justify', fontFamily: 'Poppins' }}>
                                Bunlara daha pek çok soru eklenebilir. Kendini tanıma bitmeyen bir yolculuktur. Tüm bu sorulara verilen yanıtlar şu en önemli sorunun yanıtını bulmayı kolaylaştırır: Benim potansiyelim nedir? Enerjimi hangi alana yönetmeliyim?
                            </p>
                            <p style={{ textAlign: 'justify', fontFamily: 'Poppins' }}>
                                İşte ve yaşamda başarının anahtarı ilk olarak bu sorunun yanıtında gizlidir. Potansiyelin yüksek olduğu alanlar, en başından iyi ve doğru tanımlanırsa, gelişim yolculuğu bu alana doğru yönlendirebilir. Kariyer süreci de olabildiğince buna göre inşa edildiğinde, kariyer boyunca karşılaşılabilecek sayısız durum, zorluk, meydan okuma ile daha iyi baş etmek mümkün olur.
                            </p>
                            <p style={{ textAlign: 'justify', fontFamily: 'Poppins' }}>
                                İyi bir işin tarifi de tam burada gizlidir: Sevdiğim, istediğim ve güçlü olduğum bir alanda zorlukların üstesinden gelerek değer üretebildiğim ve bunun karşılığını alabildiğim bir iş...
                            </p>
                            <p style={{ textAlign: 'justify', fontFamily: 'Poppins' }}>
                                O halde kendini tanımak, iyi bir iş ve iyi bir yaşam için en öncelikli ve sürekli olarak devam eden bir keşif sürecidir.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item bg-white">
                    <h2 className="accordion-header" id="heading21">
                        <button className="accordion-button result collapsed" aria-controls="collapse21" aria-expanded="false" data-bs-target="#collapse21" data-bs-toggle="collapse" type="button">
                            <span className="fw-bolder">Geliştirmek için ne yapmalı?</span>
                        </button>
                    </h2>
                    <div className="result-collapse accordion-collapse collapse" aria-labelledby="heading21" data-bs-parent="#accordionExample" id="collapse21">
                        <div className="accordion-body bg-white">
                            <ul>
                                {[
                                    "Bu yetkinliği geliştirmenin en iyi yolu sürekli olarak sorular sorarak kendi içinizde yolculuğa çıkmaktır.",
                                    "Her yolculuk öncesi olduğu gibi kendine yolculuk öncesinde de gidilmesi gereken yerler, bakılması gereken noktalar, açılması gereken kapılar, alınması gereken anahtarlar vb. sorularla iyi bir hazırlık yapmak şarttır.",
                                    "Bu gelişim için öncelikle Tobeto tarafından sunulan ve size belirli bir yolculuk donanımı kazandırmada yardımcı olacak eğitimleri tamamlamanızı öneririz.",
                                    "Bu eğitimlerin dışında da başka kaynakları araştırın. “Kendimi nasıl daha iyi tanıyabilirim”, “Kendimi tanımak için sorular”, “duysal zekâ” gibi anahtar kelimelerle arama yapın ve kendi soru setinizi oluşturun. Testler, düşünme teknikleri, analiz yöntemleri, soru setleri gibi size yardımcı olabilecek araçları araştırın ve bunları yeri geldiğinde kullanın.",
                                    "Kendini tanımanın amacı ve odağı gelecektir. İyi bir gelecek inşa etmek için yatırım alanlarını belirlemektir. Bunun için geçmişe ve negatif alanlara takılmadan, pozitif, çözüm odaklı ve yapıcı bir düşünce yapısı geliştirmek çok yardımcı olur.",
                                    "Bu yetkinlik alanında dış göz son derece kritiktir. Bazen insanın kendine kör olduğu alanlar dışarıdan daha iyi gözlemlenebilir. O yüzden olabilecek her fırsatta geribildirim alın.",
                                    "Gözlem yapın ve başkalarının deneyimlerinden yararlanın. Özellikle alanında başarılı insanların kendini tanıma sürecindeki deneyimlerini öğrenmeye çalışın.",
                                    "Fiziksel kapasite ve sağlık, kendini tanıma sürecinde en önemli alanlarından birisidir. Vücudunuzu iyi tanıyın, limitlerinizi iyi öğrenin ve sağlığınızı en üst düzeyde tutmak için elinizden gelen her şeyi yapın.",
                                    "Düzenli olarak kendi içinizde yolculuklara çıkarak, kendi değişiminizi gözlemleyebilir, sizi şaşırtacak ve geleceğinizi şekillendirecek sürpriz keşifler yapma ihtimalinizi artırabilirsiniz."
                                ].map((item, index) => (
                                    <li key={index} style={{ textAlign: 'justify', fontFamily: 'Poppins' }}>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item bg-white">
                    <h2 className="accordion-header" id="hheading1">
                        <button className="accordion-button result collapsed" aria-controls="ccollapse1" aria-expanded="false" data-bs-target="#ccollapse1" data-bs-toggle="collapse" type="button">
                            <span className="fw-bolder">Bu alanda önerilen eğitimler</span>
                        </button>
                    </h2>
                    <div className="result-collapse accordion-collapse collapse" aria-labelledby="hheading1" data-bs-parent="#accordionExample" id="ccollapse1">
                        <div className="accordion-body">
                            <div className="mx-0 row" />
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <div className="p-6 rounded-end border-4 border-start bg-light-light border-light">
                        <div className="row">
                            <div className="col-lg-8 col-md-8 col-sm-8 col-12">
                                <h3 className="h6 mb-0 fw-bolder text-primary">
                                    Yaratıcı ve doğru çözümler geliştiriyorum
                                </h3>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-8 col-12 d-flex mobile-justify-content-start">
                                <span className="badge bg-secondary text-white m-mt-5 mobile-d-block" style={{ fontSize: '16px' }}>
                                    Yetkinlik Puanı: 4.4
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item bg-white">
                    <h2 className="accordion-header" id="heading5">
                        <button className="accordion-button result collapsed" aria-controls="collapse5" aria-expanded="false" data-bs-target="#collapse5" data-bs-toggle="collapse" type="button">
                            <span className="fw-bolder">Bu yetkinlik nedir ve neden önemli?</span>
                        </button>
                    </h2>
                    <div className="result-collapse accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#accordionExample" id="collapse5">
                        <div className="accordion-body">
                            <div className="accordion-body bg-white">
                                <p style={{ textAlign: 'justify', fontFamily: 'Poppins' }}>
                                    Yaratıcı düşünme ve sıra dışı çözümler geliştirebilme yetkinliği işlerin ilerlemesi ve sürdürülebilirlik açısından en önemli yetkinliklerden birisidir. Burası analiz ve keşif ile başlayan çözüm geliştirme alanıdır. Geliştirilen çözüm bazen bir sorunla ilgili olabilir, sorun ortadan kalkar. Bazen bir yenilikle ilgili olabilir, ortaya yepyeni bir şey çıkar. Çözüm bazen çok basit nitelikte olabilir, bazen de çözümle o kadar önemli bir problem ortadan kalkar ya da öyle bir buluş yapılır ki etkisi çok büyük olabilir. Bu açıdan tüm yetkinlikler içindeki en fantastik yetkinlik belki de budur. Potansiyeli yüksektir.
                                </p>
                                <p style={{ textAlign: 'justify', fontFamily: 'Poppins' }}>
                                    Yaşam denen süreç son derece dinamik bir süreçtir. Bir konuda üretilen çözüm kısa zaman sonra boşa çıkabilir. Ya da yepyeni durumlar karşısında yepyeni çözümler geliştirmek gerekebilir. Kimsenin görmediği bir problemi görebilmek ya da tanımlayabilmek bile tek başına bir dönüşüm süreci başlatabilir. Bu açıdan çözüm odaklılık, özellikle karmaşık ve değişken karakterli bir dünyada, en gerekli yetkinliklerden birisidir. Çözülecek şeyi ya da problemi çok iyi bir şekilde analiz edebilmek yetkinliğin kritik bileşenlerinden birisidir. Burada analitik düşünme becerisi ön plana çıkar. Diğer bileşen, problem çözme sürecidir. Bu, problemi tanımlama, olası çözümleri belirleme, uygun çözümü seçme, bunu uygulama ve sonuçları değerlendirme şekliden kabaca tarif edilebilecek bir süreçtir. Bu süreçten harikalar yaratacak olan ise yaratıcı düşünce bileşenidir. Bir bütün olarak yaratıcı ve çözüm odaklı bakış da tıpkı gelişim odaklı bakış gibi bir zihin yapısı, dünyaya bakış şeklidir.
                                </p>
                                <p style={{ textAlign: 'justify', fontFamily: 'Poppins' }}>
                                    İş ortamları da son derece dinamik ve değişkendir. Zorluklar ve sorunlar ile iyileştirme ve yenilik fırsatlarının sürekli olarak ortaya çıkması, işin doğal bir karakteridir. Bu yüzden çalışanların çözüm bulma, geliştirme ve bunları uygulayabilme yetkinliği de aynı şekilde gerekli ve önemlidir. Küresel ölçekte ses getiren buluşların ya da yenilikçi uygulamaların çıkış noktalarına bakıldığında, orada sorunları görebilen, analitik düşünebilen, çözüm odaklı yaklaşım sergilen ve yaratıcı bir kafa yapısına sahip birilerinin olduğu görülecektir.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item bg-white">
                    <h2 className="accordion-header" id="heading25">
                        <button className="accordion-button result collapsed" aria-controls="collapse25" aria-expanded="false" data-bs-target="#collapse25" data-bs-toggle="collapse" type="button">
                            <span className="fw-bolder">Geliştirmek için ne yapmalı?</span>
                        </button>
                    </h2>
                    <div className="result-collapse accordion-collapse collapse" aria-labelledby="heading25" data-bs-parent="#accordionExample" id="collapse25">
                        <div className="accordion-body">
                            <div className="accordion-body bg-white">
                                <ul>
                                    <li style={{ textAlign: 'justify', fontFamily: 'Poppins' }}>
                                        Ne kadar analitik düşünebiliyorsunuz ne kadar çözüm odaklısınız ne kadar yaratıcısınız sorularının peşinde kendinizi analiz edin ve özellikle odaklanmanız gereken alanları belirlemeye çalışın.
                                    </li>
                                    <li style={{ textAlign: 'justify', fontFamily: 'Poppins' }}>
                                        Tobeto’nun bu konuda size yardımcı olacak eğitimlerini mutlaka tamamlayın.
                                    </li>
                                    <li style={{ textAlign: 'justify', fontFamily: 'Poppins' }}>
                                        “Analitik düşünce” üzerine özellikle araştırma yapın. Öğrendiklerinizden yola çıkarak kendi düşünme süreçlerinizi gözlemleyin ve analitik düşünmeyi geliştirecek denemeler yapın.
                                    </li>
                                    <li style={{ textAlign: 'justify', fontFamily: 'Poppins' }}>
                                        Bir problem çözme metodolojiniz olsun. Var olan yaklaşımları inceleyin ve kendi sentezinizi yapın. Bir problemle karşılaştığınızda kendi yaklaşımınızı uygulayın. Deneyimle birlikte yaklaşımınızı geliştirin.
                                    </li>
                                    <li style={{ textAlign: 'justify', fontFamily: 'Poppins' }}>
                                        Sorunları, durumları ya da çözümleri görselleştirme üzerine özellikle odaklanın. Görselleştirme sadece bir gösterim değil çözümü kolaylaştıran güçlü bir araçtır.
                                    </li>
                                    <li style={{ textAlign: 'justify', fontFamily: 'Poppins' }}>
                                        “Yaratıcı düşünme” alanında da derinlemesine araştırma yapın. Yaratıcılık denen olgunun dinamiklerini iyi anlamaya çalışın. Teknikleri öğrenin.
                                    </li>
                                    <li style={{ textAlign: 'justify', fontFamily: 'Poppins' }}>
                                        Buradaki tüm anahtar kelimelerde aramalar yaparak bilgi altyapınızı güçlendirin. Bu alan özellikle birlikte öğrenmenin çok iyi çalıştığı bir alandır. Bir öğrenme grubu kurun ve herkes araştırma yapsın, bilgi ve deneyimlerinizi paylaşın, ortak çözümler ya da çözüm metodolojileri geliştirin.
                                    </li>
                                    <li style={{ textAlign: 'justify', fontFamily: 'Poppins' }}>
                                        Beyin fırtınası gibi yöntemleri sıklıkla uygulayın. Bu gibi yöntemler grupların ortak aklını ortaya çıkarması açısından çok kıymetlidir.
                                    </li>
                                    <li style={{ textAlign: 'justify', fontFamily: 'Poppins' }}>
                                        Yaratıcılık ve yenilikçilik hikayelerini okuyun. Çıkış noktasını ve süreci analiz edin. Alınması gereken dersleri ya da kritik aksiyonları kayıt altına alıp kendi metodolojinize katın.
                                    </li>
                                    <li style={{ textAlign: 'justify', fontFamily: 'Poppins' }}>
                                        Kendi aklınıza başkalarının aklını eklemleyerek daha büyük bir zihinsel kaynak ile yaratıcı çözümler geliştirmeye çalışın. Bunu nasıl yapabileceğiniz üzerine odaklananın. Burada çevrim içi iş birliği ve birlikte çalışma araçlarını en iyi şekilde kullanabilirsiniz.
                                    </li>
                                    <li style={{ textAlign: 'justify', fontFamily: 'Poppins' }}>
                                        Bulduğunuz çözümlerin yarattığı etkiyi görünür hale getirin ve paylaşın. Başkalarına ilham olun.
                                    </li>
                                    <li style={{ textAlign: 'justify', fontFamily: 'Poppins' }}>
                                        Büyük ya da küçük, iyi çözümler geliştiren herkesi olabildiğince takdir edin, değer verdiğinizi gösterin.
                                    </li>
                                    <li style={{ textAlign: 'justify', fontFamily: 'Poppins' }}>
                                        Çözüm odaklı ve yenilikçi kişileri yakın takibe alın. Ulaşabildikleriniz olursa mutlaka deneyimlerini almaya çalışın.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item bg-white">
                    <h2 className="accordion-header" id="hheading5">
                        <button className="accordion-button result collapsed" aria-controls="ccollapse5" aria-expanded="false" data-bs-target="#ccollapse5" data-bs-toggle="collapse" type="button">
                            <span className="fw-bolder">Bu alanda önerilen eğitimler</span>
                        </button>
                    </h2>
                    <div className="result-collapse accordion-collapse collapse" aria-labelledby="hheading5" data-bs-parent="#accordionExample" id="ccollapse5">
                        <div className="accordion-body">
                            <div className="mx-0 row" />
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <div className="p-6 rounded-end border-4 border-start bg-light-light border-light">
                        <div className="row">
                            <div className="col-lg-8 col-md-8 col-sm-8 col-12">
                                <h3 className="h6 mb-0 fw-bolder text-primary">
                                    Başkaları ile birlikte çalışıyorum
                                </h3>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-8 col-12 d-flex mobile-justify-content-start">
                                <span className="badge bg-secondary text-white m-mt-5 mobile-d-block" style={{ fontSize: '16px' }}>
                                    Yetkinlik Puanı: 4.4
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item bg-white">
                    <h2 className="accordion-header" id="heading4">
                        <button className="accordion-button result collapsed" aria-controls="collapse4" aria-expanded="false" data-bs-target="#collapse4" data-bs-toggle="collapse" type="button">
                            <span className="fw-bolder">Bu yetkinlik nedir ve neden önemli?</span>
                        </button>
                    </h2>
                    <div className="result-collapse accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#accordionExample" id="collapse4">
                        <div className="accordion-body">
                            <div className="accordion-body bg-white">
                                <p style={{ textAlign: 'justify', fontFamily: 'Poppins' }}>
                                    Hem sosyal hem de iş yaşamında başarıyı getiren değerli unsurlardan birisi de amaca yönelik iş birlikleridir. Farklı özelliklerde bir grup insanın bir araya gelmesiyle ortaya çıkan şey, bu insanların toplamından farklı bir şeye dönüşür. Sinerji denilen olgu da tam olarak bunu ifade eder. O halde bir iş yaparken akıl ve emek birliği yapıp bir ekip olabilmek, daha önce olmayan yeni bir güç yaratmaktır. Ekipler, kendini oluşturan bireylerden bağımsız, kendileri de bir çeşit karmaşık varlıktır ve hiç beklenmedik sonuçlar üretme potansiyeli bulunmaktadır.
                                </p>
                                <p style={{ textAlign: 'justify', fontFamily: 'Poppins' }}>
                                    Bu sebeple, birlikte çalışabilmek en önemli güç yetkinliklerinden birisidir. Ekipler içinde herkes kendi bilgisi ve deneyimini ortaya koyar. Herkes ekibe farklı seviyelerde destek verir. Birisi, ekip içinde sadece kendisine düşen işleri yerine getirirken, başka birisi ekibe yön veren lider olabilir. Bir başkası anlaşmazlık durumlarında devreye giren arabulucu olurken, birisi özellikle ekibi motive edip enerjisini yükseltebilir. Zorluk anında birisinin bulduğu yaratıcı bir çözüm tüm ekibi rahatlatırken, başka birisinin deneyimi ve bilgeliği, ekibin hata yapmasının önüne geçebilir. Herkes bir ekipte birden fazla rol üstlenebilir, farklı ekiplerde farklı rollerde görev alabilir.
                                </p>
                                <p style={{ textAlign: 'justify', fontFamily: 'Poppins' }}>
                                    Ekipler şirketlerin ve tüm kurumların dinamosudur. Kendi misyonuna göre odaklı ve hedefli bir şekilde çalışan organizmalardır. Çalışan sayısı ne kadar artarsa artsın, bir kurumun en tepeden en aşağıya kadar yönetilmesini mümkün kılan iş birimleridir. Ekipler öğrenmenin, gelişimin, sosyalleşmenin, deneyim paylaşımının, yaratıcılığın, yeniliğin ve büyümenin de çekirdekleridir. Takım oyuncusu olmak, iş yaşamında başarılı olmak isteyen herkesin özellikle geliştirmesi gereken yetkinliklerden birisidir.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item bg-white">
                    <h2 className="accordion-header" id="heading24">
                        <button className="accordion-button result collapsed" aria-controls="collapse24" aria-expanded="false" data-bs-target="#collapse24" data-bs-toggle="collapse" type="button">
                            <span className="fw-bolder">Geliştirmek için ne yapmalı?</span>
                        </button>
                    </h2>
                    <div className="result-collapse accordion-collapse collapse" aria-labelledby="heading24" data-bs-parent="#accordionExample" id="collapse24">
                        <div className="accordion-body">
                            <div className="accordion-body bg-white">
                                <ul>
                                    <li style={{ textAlign: 'justify', fontFamily: 'Poppins' }}>
                                        Ne kadar takım oyuncusu olduğunuz üzerinde kafa yorun. Kendinize bir takım oyuncusu puanı verin. Tobeto ‘İşte Başarı Modeli’ dışında da takım oyuncusu olmakla ilgili testler bulup kendinizi bu konuda daha iyi tanıyabilirsiniz.
                                    </li>
                                    <li style={{ textAlign: 'justify', fontFamily: 'Poppins' }}>
                                        Olabildiğince takım çalışmaları içinde yer alın ve deneyiminizi artırın. Bunları yaparken aynı zamanda bilinçli gözlemci olun ve başarıya götüren veya sorun yaratan unsurları kayıt altına alın.
                                    </li>
                                    <li style={{ textAlign: 'justify', fontFamily: 'Poppins' }}>
                                        Tobeto’nun takım çalışması ile ilgili sunduğu eğitimleri özellikle tamamlayın. Bu eğitimlerden öğrendiklerinizden yola çıkarken kendi takım oyuncusu manifestonuzu yazın.
                                    </li>
                                    <li style={{ textAlign: 'justify', fontFamily: 'Poppins' }}>
                                        İş içinde ya da dışında belirli bir amaca dönük olarak gönüllü takımlar kurabilir, takım kurma ve yönetme deneyiminizi artırabilirsiniz.
                                    </li>
                                    <li style={{ textAlign: 'justify', fontFamily: 'Poppins' }}>
                                        Okulda, iş ortamında ya da farklı yerlerde yaptığınız ekip çalışmalarında sizi en çok zorlayan konuları listelemeye çalışın. Hem deneyimlerinizden hem öğrendiklerinizden, bunların çözüm yolları ile ilgili stratejiler oluşturun.
                                    </li>
                                    <li style={{ textAlign: 'justify', fontFamily: 'Poppins' }}>
                                        Takımlarda üstlenilebilecek olası rolleri ve takımın başarısına katkı sağlama yollarını araştırın. Daha çok mucit misiniz, şekillendirici mi, yoksa değerlendirici mi, uygulayıcılık size daha mı uygun, yoksa iş bitirici misiniz... kendinizi analiz edin.
                                    </li>
                                    <li style={{ textAlign: 'justify', fontFamily: 'Poppins' }}>
                                        Yetkinlikle ilgili bilgi altyapınızı güçlendirmek için “takım rolleri”, “takımların bilgeliği”, “ekip ya da takım çalışması”, “takım olmak”, “ekip ruhu” gibi anahtar kelimelerle araştırma yapabilirsiniz.
                                    </li>
                                    <li style={{ textAlign: 'justify', fontFamily: 'Poppins' }}>
                                        Ekip üyelerinin motivasyonu bir ekibi ayakta tutan ve ileriye götüren en önemli güçtür. Kendi deneyimlerinizden ya da edindiğiniz bilgilerden yola çıkarak ekip içinde motivasyonu artıran ve düşüren unsurların bir listesini yapın, paylaşın ve bunu ekip arkadaşlarınızla birlikte geliştirin.
                                    </li>
                                    <li style={{ textAlign: 'justify', fontFamily: 'Poppins' }}>
                                        İyi çalışan takımları gözlemleyin. Neyi nasıl yaptıklarını öğrenmeye çalışın. Takım olarak başka takımlarla deneyim paylaşımları da yapabilirsiniz.
                                    </li>
                                    <li style={{ textAlign: 'justify', fontFamily: 'Poppins' }}>
                                        Uzmanlığı sadece takımlar olan, takım rehberi, takım koçu olarak hizmet veren kişilerle karşılaşırsanız bunlardan tavsiyeler almaya çalışın.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item bg-white">
                    <h2 className="accordion-header" id="hheading4">
                        <button className="accordion-button result collapsed" aria-controls="ccollapse4" aria-expanded="false" data-bs-target="#ccollapse4" data-bs-toggle="collapse" type="button">
                            <span className="fw-bolder">Bu alanda önerilen eğitimler</span>
                        </button>
                    </h2>
                    <div className="result-collapse accordion-collapse collapse" aria-labelledby="hheading4" data-bs-parent="#accordionExample" id="ccollapse4">
                        <div className="accordion-body">
                            <div className="mx-0 row"></div>
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <div className="p-6 rounded-end border-4 border-start bg-light-light border-light">
                        <div className="row">
                            <div className="col-lg-8 col-md-8 col-sm-8 col-12">
                                <h3 className="h6 mb-0 fw-bolder text-primary">
                                    Kendimi sürekli geliştiriyorum
                                </h3>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-8 col-12 d-flex mobile-justify-content-start">
                                <span
                                    className="badge bg-secondary text-white m-mt-5 mobile-d-block"
                                    style={{
                                        fontSize: '16px'
                                    }}
                                >
                                    Yetkinlik Puanı: 3.9
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item bg-white">
                    <h2
                        className="accordion-header"
                        id="heading2"
                    >
                        <button
                            aria-controls="collapse2"
                            aria-expanded="false"
                            className="accordion-button result collapsed"
                            data-bs-target="#collapse2"
                            data-bs-toggle="collapse"
                            type="button"
                        >
                            <span className="fw-bolder">
                                Bu yetkinlik nedir ve neden önemli?
                            </span>
                        </button>
                    </h2>
                    <div
                        aria-labelledby="heading2"
                        className="result-collapse accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                        id="collapse2"
                    >
                        <div className="accordion-body">
                            <div className="accordion-body bg-white">
                                <p
                                    style={{
                                        textAlign: 'justify'
                                    }}
                                >
                                    <span
                                        style={{
                                            fontFamily: 'Poppins'
                                        }}
                                    >
                                        Sürekli gelişim yetkinliği, kendini tanımak gibi yaşamsal önemde bir yetkinliktir. Sadece belirli bir davranış setinden ibaret olmayan daha bütünsel bir zihin yapısıdır. Hiç bitmeyen bir inşa sürecidir. Şu an yapamadığım ama potansiyel olarak yapabileceğim tüm şeyler için gerekli altyapıyı oluşturma sürecidir. Bu açıdan gelişim, gerçekleşmesi mümkün ama henüz gerçekleşmemiş olan her şey için yapılan yolculuktur. Kendimizi doğru bir şekilde tanıdıktan ve buna göre hedeflerimizi net olarak belirledikten sonra bizi hedefe ulaştıracak olan kilit çabadır.
                                    </span>
                                </p>
                                <p
                                    style={{
                                        textAlign: 'justify'
                                    }}
                                >
                                    <span
                                        style={{
                                            fontFamily: 'Poppins'
                                        }}
                                    >
                                        Sürekli gelişim yetkinliği insana çeviklik kazandırır. Çeviklik, 21. yüz yılın karmaşık ve değişken ortamında en kritik yetkinliklerinden birisi haline gelmiştir. Yeterince çeviksem, değişen koşullara hızla uyum sağlayabilir, daha başarılı ve mutlu olacağım bir kariyer fırsatına hızla geçiş yapabilir veya işimi daha iyi yapmamı sağlayacak bir teknolojiyi hemen öğrenip uygulayabilirim. Ben kendimi sürekli olarak geliştiren çevik birisiyim. Her şeyi öğrenebilir, her şeyi yapabilirim. İşte bu güvenli duruşu sağlayan şey gelişim odaklı zihin yapısıdır ve bu, başarı için gerekli olan bakış açısıdır.
                                    </span>
                                </p>
                                <p
                                    style={{
                                        textAlign: 'justify'
                                    }}
                                >
                                    <span
                                        style={{
                                            fontFamily: 'Poppins'
                                        }}
                                    >
                                        Çeviklik ve sürekli gelişim iş hayatında da olmazsa olmaz bir yetkinliktir. Bir iş demek aynı zamanda bir performans beklentisi demektir. Yani görev aldığınız pozisyona göre sizden beklenen bir başarı vardır. Bunun için yeterli kapasiteniz yoksa en başından bunu geliştirmeniz gerekir. Sonrasında ise işin doğası, kapsamı, derinliği değişebilir, yeni görevler üstlenebilirsiniz, geçici olarak başka görevlerde çalışabilirsiniz; yani performans beklentisi sürekli olarak değişebilir. Buna uyum sağlamanızı mümkün kılacak olan da sürekli gelişim gücünüzdür.
                                    </span>
                                </p>
                                <p>
                                    <span
                                        style={{
                                            fontFamily: 'Poppins'
                                        }}
                                    >
                                        Kısaca sürekli gelişim, bir iş bulmak, o işte kalıcı ve başarılı olmak, hatta başka işlere yelken açmak için kilit yetkinliğinizdir.
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item bg-white">
                    <h2
                        className="accordion-header"
                        id="heading22"
                    >
                        <button
                            aria-controls="collapse22"
                            aria-expanded="false"
                            className="accordion-button result collapsed"
                            data-bs-target="#collapse22"
                            data-bs-toggle="collapse"
                            type="button"
                        >
                            <span className="fw-bolder">
                                Geliştirmek için ne yapmalı?
                            </span>
                        </button>
                    </h2>
                    <div
                        aria-labelledby="heading22"
                        className="result-collapse accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                        id="collapse22"
                    >
                        <div className="accordion-body">
                            <div className="accordion-body bg-white">
                                <ul>
                                    <li
                                        style={{
                                            textAlign: 'justify'
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontFamily: 'Poppins'
                                            }}
                                        >
                                            Bu yetkinliği geliştirmenin en iyi yolu sürekli olarak gelişim denemeleri yapmak ve bu denemeleri gözlemleyerek iyileştirmektir.
                                        </span>
                                    </li>
                                    <li
                                        style={{
                                            textAlign: 'justify'
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontFamily: 'Poppins'
                                            }}
                                        >
                                            Düşünmek, öğrenmek, gelişmek kuşkusuz en kritik temel yetkinliklerdir. Bunların etkinliğini artırmak için bir üst düzeye çıkıp bunları gözlemlemek ve iyileştirmek mümkündür. Yani düşünme üzerine düşünmek, öğrenmeyi öğrenmek, gelişim yetkinliğini daha da geliştirmek için elinizden gelen tüm çabayı gösterin.
                                        </span>
                                    </li>
                                    <li
                                        style={{
                                            textAlign: 'justify'
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontFamily: 'Poppins'
                                            }}
                                        >
                                            Bunun için Tobeto tarafından size sunulan eğitimleri mutlaka tamamlayın.
                                        </span>
                                    </li>
                                    <li
                                        style={{
                                            textAlign: 'justify'
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontFamily: 'Poppins'
                                            }}
                                        >
                                            Bunun dışında “gelişim odaklı zihin yapısı”, “growth mindset”, “öğrenmeyi öğrenmek”, “sürekli öğrenme”, “sürekli gelişim” ve “çevik olmak” anahtar kelimelerinde araştırma yapın. Bu araştırmalar sonunda harika bilgilere ulaşacaksınız. Önemli gördüğünüz bilgileri özetleyin ve kendinize sürekli hatırlatın.
                                        </span>
                                    </li>
                                    <li
                                        style={{
                                            textAlign: 'justify'
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontFamily: 'Poppins'
                                            }}
                                        >
                                            Kendinize bir gelişim planı hazırlayın ve sürekli olarak güncelleyin. Bu planda “hangi alanda gelişmem gerekli, bu alanda neden ve ne kadar gelişmeliyim, bu süreci ne kadar zamanda tamamlamalıyım, nasıl gelişeceğim ve geliştiğimi nasıl anlayacağım?” sorularının yanıtı mutlaka olsun. Gelişim süreci boyunca da aldığınız mesafeyi ve buradaki kazanımlarınızı not alın.
                                        </span>
                                    </li>
                                    <li
                                        style={{
                                            textAlign: 'justify'
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontFamily: 'Poppins'
                                            }}
                                        >
                                            Yeni olduğunuz alanlarda iyi ve yapılandırılmış bilgilere ulaşmak işinizi kolaylaştırır. Tobeto gibi güvenilir kaynaklara başvurun. Biraz daha deneyimli olduğunuz alanlarda bireysel keşifleriniz ve başkalarının desteğine daha sık başvurabilirsiniz.
                                        </span>
                                    </li>
                                    <li
                                        style={{
                                            textAlign: 'justify'
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontFamily: 'Poppins'
                                            }}
                                        >
                                            Gelişim iş birlikleri kurun. Başkalarının bilgisi ve deneyimi en kıymetli gelişim hazinesidir. Gelişim süreci yürüttüğünüz alanlarda destek alabileceğiniz kişileri belirleyin ve dinamik bir gelişim ağı inşa edin.
                                        </span>
                                    </li>
                                    <li
                                        style={{
                                            textAlign: 'justify'
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontFamily: 'Poppins'
                                            }}
                                        >
                                            Bildiklerinizi başkalarına öğretin, deneyimlerinizi paylaşın, yazın, eğitimler hazırlayın. Öğretmek, öğrenmenin en iyi yollarından birisidir. Başkalarına vereceğiniz gelişim desteği kendi gelişiminiz için farkındalığınızı artırır.
                                        </span>
                                    </li>
                                    <li
                                        style={{
                                            textAlign: 'justify'
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontFamily: 'Poppins'
                                            }}
                                        >
                                            Bilgilenin, deneyin, alıştırma yapın, uygulayın. Gelişimin anahtarı budur. Temel bilgileri edindikten sonra bir an önce deneme ve uygulamaya geçmek önemlidir. Denemelerden gelen deneyim son derece geliştirici ve ufuk açıcıdır. Buluşların, yeniliklerin ve değer yaratan gelişimin anahtarı bu döngüdür.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item bg-white">
                    <h2
                        className="accordion-header"
                        id="hheading2"
                    >
                        <button
                            aria-controls="ccollapse2"
                            aria-expanded="false"
                            className="accordion-button result collapsed"
                            data-bs-target="#ccollapse2"
                            data-bs-toggle="collapse"
                            type="button"
                        >
                            <span className="fw-bolder">
                                Bu alanda önerilen eğitimler
                            </span>
                        </button>
                    </h2>
                    <div
                        aria-labelledby="hheading2"
                        className="result-collapse accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                        id="ccollapse2"
                    >
                        <div className="accordion-body">
                            <div className="mx-0 row" />
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <div className="p-6 rounded-end border-4 border-start bg-light-light border-light">
                        <div className="row">
                            <div className="col-lg-8 col-md-8 col-sm-8 col-12">
                                <h3 className="h6 mb-0 fw-bolder text-primary">
                                    Sonuç ve başarı odaklıyım
                                </h3>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-8 col-12 d-flex mobile-justify-content-start">
                                <span
                                    className="badge bg-secondary text-white m-mt-5 mobile-d-block"
                                    style={{
                                        fontSize: '16px'
                                    }}
                                >
                                    Yetkinlik Puanı: 4.1
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item bg-white">
                    <h2
                        className="accordion-header"
                        id="heading6"
                    >
                        <button
                            aria-controls="collapse6"
                            aria-expanded="false"
                            className="accordion-button result collapsed"
                            data-bs-target="#collapse6"
                            data-bs-toggle="collapse"
                            type="button"
                        >
                            <span className="fw-bolder">
                                Bu yetkinlik nedir ve neden önemli?
                            </span>
                        </button>
                    </h2>
                    <div
                        aria-labelledby="heading6"
                        className="result-collapse accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                        id="collapse6"
                    >
                        <div className="accordion-body">
                            <div className="accordion-body bg-white">
                                <p
                                    style={{
                                        textAlign: 'justify'
                                    }}
                                >
                                    <span
                                        style={{
                                            fontFamily: 'Poppins'
                                        }}
                                    >
                                        Sonuç odaklılık çekici bir güçtür. İstenilen başarı noktasına konulmuş bir çıpadır. Kişilerin, işlerin, projelerin, kurumların hedefine ulaşmasını sağlayan disiplindir. Fikirlerin hayata geçmesi ve sonuca ulaşması sürecidir. Bu yetkinlik yürütücü bir yetkinliktir. Bu açıdan diğer tüm yetkinliklerin ürettiği değerin tamamlayıcısı, bitiricisidir. Bu yüzden çok önemlidir. Kendinizi çok iyi tanıyor, hedeflerinizi çok doğru belirlemiş, harika iş birlikleri kurmuş ve çok yaratıcı çözüm fikirleri üretmiş olabilirsiniz. Ama tüm bunlar, hayata geçip sonuçlanmadıkça hiçbir anlam ifade etmez. Kurumların dünyası, hatta insanların kendi dünyaları bile, hayata geçmeyen nice fikirle doludur.
                                    </span>
                                </p>
                                <p
                                    style={{
                                        textAlign: 'justify'
                                    }}
                                >
                                    <span
                                        style={{
                                            fontFamily: 'Poppins'
                                        }}
                                    >
                                        Burası stratejik bir alan olmaktan çok bir uygulama alanıdır. Belirlenmiş olan hedef ne olursa olsun ona ulaşabilme yetkinliğidir. Bunun için öncelikle iyi bir planlama gerekir. Plan, hedefe ulaşmak için bana yol gösteren bir haritadır. Plan, sürecin neresinde olduğumu takip edebildiğim bir ölçektir. Plan, belirsiz ve karmaşık işleri netleştiren ve herkesin üzerinde uzlaşabildiği bir kolaylaştırıcıdır. Plan doğrultusunda gerekli organizasyonu yapmak, öncelikleri ve zamanı yönetmek, zorlukların üstesinden gelmek, azim ve kararlıkla planı uygulamak da bu yetkinliği oluşturan bileşenler arasındadır.
                                    </span>
                                </p>
                                <p
                                    style={{
                                        textAlign: 'justify'
                                    }}
                                >
                                    <span
                                        style={{
                                            fontFamily: 'Poppins'
                                        }}
                                    >
                                        Bitirici ve tamamlayıcı bir yetkinlik olması açısından kurumlar tarafında çok aranan bir yetkinliktir. Zira sonuca giden yol zorluklarla, tuzaklarla ve gizli ya da açık yavaşlatıcılarla doludur. Mükemmele ulaşma isteği örneğin, özünde iyi bir şey olmasına karşın mükemmeliyetçilik, sonucu ulaşma noktasında en büyük engellerden birisi olabilir. Bu yolda inisiyatif ya da risk alınması gereken anlar olabilir. Asıl mesele, tüm bunlara durumsal olarak karar verebilmektir. O yüzden başarı ve sonuç odaklılık olmak tüm yetkinliklerin dışında tek başına odaklanılması gereken bir yetkinliktir.
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item bg-white">
                    <h2
                        className="accordion-header"
                        id="heading26"
                    >
                        <button
                            aria-controls="collapse26"
                            aria-expanded="false"
                            className="accordion-button result collapsed"
                            data-bs-target="#collapse26"
                            data-bs-toggle="collapse"
                            type="button"
                        >
                            <span className="fw-bolder">
                                Geliştirmek için ne yapmalı?
                            </span>
                        </button>
                    </h2>
                    <div
                        aria-labelledby="heading26"
                        className="result-collapse accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                        id="collapse26"
                    >
                        <div className="accordion-body">
                            <div className="accordion-body bg-white">
                                <ul>
                                    <li
                                        style={{
                                            textAlign: 'justify'
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontFamily: 'Poppins'
                                            }}
                                        >
                                            Kendi sonuç odaklılık seviyenizle ilgili bir analiz çalışması yapın. Başkalarına “bir işi ver ve unut” seviyesinde güven verebiliyor musunuz, bunu değerlendirin.
                                        </span>
                                    </li>
                                    <li
                                        style={{
                                            textAlign: 'justify'
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontFamily: 'Poppins'
                                            }}
                                        >
                                            Sonuç odaklılıkla ilgili tüm kritik bileşenleri öğrenin. Bunun için sunulan tüm Tobeto eğitimlerini tamamlayın.
                                        </span>
                                    </li>
                                    <li
                                        style={{
                                            textAlign: 'justify'
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontFamily: 'Poppins'
                                            }}
                                        >
                                            Bu eğitimlere ek olarak, “planlama”, “sonuç odaklılık”, “zaman yönetimi”, “azim”, “dayanıklılık”, “performans engelleyicileri” gibi anahtar kelimelerle araştırmalarınızı derinleştirebilir ve güçlü bir bilgi altyapısı oluşturabilirsiniz.
                                        </span>
                                    </li>
                                    <li
                                        style={{
                                            textAlign: 'justify'
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontFamily: 'Poppins'
                                            }}
                                        >
                                            Planlama ile ilgili bir deneyiminiz olsa da olmasa da yeni baştan üzerinde çalışın. Yeni nesil çevik planlama ve iş yapma yöntemlerini araştırın ve kendi yaklaşımınızı geliştirin.
                                        </span>
                                    </li>
                                    <li
                                        style={{
                                            textAlign: 'justify'
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontFamily: 'Poppins'
                                            }}
                                        >
                                            Farklı metodolojiler kullanarak planlama denemeleri yapın. Planları güncel tutma, revize etme ve sonuna kadar gitme konusunda kendinizi zorlayın.
                                        </span>
                                    </li>
                                    <li
                                        style={{
                                            textAlign: 'justify'
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontFamily: 'Poppins'
                                            }}
                                        >
                                            Dijital planlayıcı, takvim, iş yönetimi, hatırlatıcı gibi verimlilik araçlarını inceleyin ve kendinize uygun olanları kullanın. Bu gibi dijital araçları kullanma becerinizi geliştirin. Ekibinizle ya da arkadaşlarınızla birlikte ortak dijital platformlarda çalışma kabiliyetinizi güçlendirin.
                                        </span>
                                    </li>
                                    <li
                                        style={{
                                            textAlign: 'justify'
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontFamily: 'Poppins'
                                            }}
                                        >
                                            Öncelikleri belirleme ve zaman yönetimi konusunda kendinizi gözlemleyin. Ne kadar başarılısınız? Son dakikaya kalan işleriniz ne kadar çok? Peki ya vakit yetmediği için yetiştiremedikleriniz… Bunların nedenlerini ve çözüm yollarını araştırın ve kendi zaman yönetimi disiplininizi oluşturun.
                                        </span>
                                    </li>
                                    <li
                                        style={{
                                            textAlign: 'justify'
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontFamily: 'Poppins'
                                            }}
                                        >
                                            İş yapma süreçlerinde sizi en çok zorlayan durumları ve bunların ne zaman ortaya çıktığını analiz etmeye çalışın. Örneğin hangi durumlarda çekilme ya da bırakma ihtiyacı hissediyorsunuz. Erteleme davranışına ne kadar sıklıkla başvuruyorsunuz?
                                        </span>
                                    </li>
                                    <li
                                        style={{
                                            textAlign: 'justify'
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontFamily: 'Poppins'
                                            }}
                                        >
                                            Ne kadar azimlisiniz? Ya da zorluklar karşısında ne kadar dayanıklısınız? Azim ve dayanıklılık dinamiğini çok iyi araştırın. Buradan elde edeceğiniz bilgilerle birlikte işinizde, hayatınızla denemeler yaparak bu alanlarda güçlenebilirsiniz.
                                        </span>
                                    </li>
                                    <li
                                        style={{
                                            textAlign: 'justify'
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontFamily: 'Poppins'
                                            }}
                                        >
                                            Eylem ve sonuç odaklılık noktasında başarılarınızı ve deneyimlerinizi paylaşın ve başkalarına ilham olmaya çalışın.
                                        </span>
                                    </li>
                                    <li
                                        style={{
                                            textAlign: 'justify'
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontFamily: 'Poppins'
                                            }}
                                        >
                                            Başarılı iş bitiricileri bulup onları gözlemleyin. Yapabiliyorsanız deneyimlerini ve yöntemlerini öğrenin. Başarıya ulaşmış insanlarla ilgili yazılmış kitapları okuyun kendinize dersler çıkarın.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item bg-white">
                    <h2
                        className="accordion-header"
                        id="hheading6"
                    >
                        <button
                            aria-controls="ccollapse6"
                            aria-expanded="false"
                            className="accordion-button result collapsed"
                            data-bs-target="#ccollapse6"
                            data-bs-toggle="collapse"
                            type="button"
                        >
                            <span className="fw-bolder">
                                Bu alanda önerilen eğitimler
                            </span>
                        </button>
                    </h2>
                    <div
                        aria-labelledby="hheading6"
                        className="result-collapse accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                        id="ccollapse6"
                    >
                        <div className="accordion-body">
                            <div className="mx-0 row" />
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <div className="p-6 rounded-end border-4 border-start bg-light-light border-light">
                        <div className="row">
                            <div className="col-lg-8 col-md-8 col-sm-8 col-12">
                                <h3 className="h6 mb-0 fw-bolder text-primary">
                                    Anlıyorum ve anlaşılıyorum
                                </h3>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-8 col-12 d-flex mobile-justify-content-start">
                                <span
                                    className="badge bg-secondary text-white m-mt-5 mobile-d-block"
                                    style={{
                                        fontSize: '16px'
                                    }}
                                >
                                    Yetkinlik Puanı: 4
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item bg-white">
                    <h2
                        className="accordion-header"
                        id="heading3"
                    >
                        <button
                            aria-controls="collapse3"
                            aria-expanded="false"
                            className="accordion-button result collapsed"
                            data-bs-target="#collapse3"
                            data-bs-toggle="collapse"
                            type="button"
                        >
                            <span className="fw-bolder">
                                Bu yetkinlik nedir ve neden önemli?
                            </span>
                        </button>
                    </h2>
                    <div
                        aria-labelledby="heading3"
                        className="result-collapse accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                        id="collapse3"
                    >
                        <div className="accordion-body">
                            <div className="accordion-body bg-white">
                                <p
                                    style={{
                                        textAlign: 'justify'
                                    }}
                                >
                                    <span
                                        style={{
                                            fontFamily: 'Poppins'
                                        }}
                                    >
                                        Anlamak ve anlaşılmak iletişim yetkinliğinin temel bileşenleri, iletişim yetkinliği de başarı açısından kilit yetkinliklerden birisidir.
                                    </span>
                                </p>
                                <p
                                    style={{
                                        textAlign: 'justify'
                                    }}
                                >
                                    <span
                                        style={{
                                            fontFamily: 'Poppins'
                                        }}
                                    >
                                        İnsan sosyal bir varlıktır. Sürekli olarak sosyal ortamların içindedir. Tek başına yaşaması, başarılı olması ve kendini gerçekleştirmesi mümkün değildir. Sosyal ve iş yaşamında üstlenilen roller, başkaları ile birlikte olmayı, sonuca birlikte ulaşmayı gerektirir. Tüm bunların gerçekleşmesi, anlamak ve anlaşılmak dinamiklerinin iyi çalışmasına bağlıdır.
                                    </span>
                                </p>
                                <p
                                    style={{
                                        textAlign: 'justify'
                                    }}
                                >
                                    <span
                                        style={{
                                            fontFamily: 'Poppins'
                                        }}
                                    >
                                        Sizden ne beklendiğini iyi anlamak ve bu konuda neler yatığınızı iyi anlatabilmek, dışarıdan nasıl göründüğünüzü, nasıl algılandığınızı bilmek ve varsa yanlış anlamaları, algı hatalarını düzeltebilmek, meseleleri açık ve net olarak ortaya koyabilmek, böylece belirsizlikten doğabilecek karmaşa ve zaman kayıplarının önüne geçebilmek, zorlayıcı bile olsa, gerektiğinde çekinmeden duygu ve düşüncelerinizi ifade etmek ve geribildirimleri bir hediye olarak görebilmek, başkalarına yapıcı ve geliştirici geribildirimler verebilmek, olası görüş ayrılıkları ya da  çatışmaları tüm tarafların yararına olacak şekilde çözmek için çaba sarf etmek gerekir.
                                    </span>
                                </p>
                                <p
                                    style={{
                                        textAlign: 'justify'
                                    }}
                                >
                                    <span
                                        style={{
                                            fontFamily: 'Poppins'
                                        }}
                                    >
                                        Tüm bu davranışlar iş yaşamındaki gizli başarı faktörleridir. Belirsizlik, hedefe odaklanma ve yön birliğini zorlaştırır. Netliğin olmadığı durumlarda hatalar, kayıplar, kaçaklar ve maliyetler artar. İletişim boşluklarını varsayımlarla doldurmalar ya da yanlış anlamalardan kaynaklanan çatışmalar gereksiz yere enerji tüketebilir. Bu yüzden iyi iletişim yetkinliği iş birliğinin anahtarıdır. Birlikte başarmak için stratejik bir çarpandır.
                                    </span>
                                </p>
                                <p
                                    style={{
                                        textAlign: 'justify'
                                    }}
                                >
                                    <span
                                        style={{
                                            fontFamily: 'Poppins'
                                        }}
                                    >
                                        Başkalarını dinlemek, onlarla empati kurabilmek, onları anlamak, buna göre kendini net bir şekilde ifade etmek, varsa anlaşmazlıkları çözmek, güçlü iş birlikleri kurmak, yazılı ve sözlü iletişimi ve beden dilini en iyi şekilde kullanmak, mesleki yetkinliklerinden bağımsız, iş dünyasının bir adayda aradığı öncelikli yetkinlikler arasındadır.
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item bg-white">
                    <h2
                        className="accordion-header"
                        id="heading23"
                    >
                        <button
                            aria-controls="collapse23"
                            aria-expanded="false"
                            className="accordion-button result collapsed"
                            data-bs-target="#collapse23"
                            data-bs-toggle="collapse"
                            type="button"
                        >
                            <span className="fw-bolder">
                                Geliştirmek için ne yapmalı?
                            </span>
                        </button>
                    </h2>
                    <div
                        aria-labelledby="heading23"
                        className="result-collapse accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                        id="collapse23"
                    >
                        <div className="accordion-body">
                            <div className="accordion-body bg-white">
                                <ul>
                                    <li
                                        style={{
                                            textAlign: 'justify'
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontFamily: 'Poppins'
                                            }}
                                        >
                                            Anlama ve anlaşılma sürecinde özellikle sorun yaşadığınız ya da gelişim ihtiyacı olan alanları bulmaya çalışın ve bunların üzerine bilinçli bir şekilde odaklanın. Kendi iletişim analizini yapın.
                                        </span>
                                    </li>
                                    <li
                                        style={{
                                            textAlign: 'justify'
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontFamily: 'Poppins'
                                            }}
                                        >
                                            İletişim zihinde başlar. Önyargısız ve her türlü görüşe açık olmak sağlıklı iletişimin temelidir. İletişim sırasında size güven duyulmasını sağlayacak olan yapıcı, sabırlı, samimi, tutarlı ve dürüst bir duruş sergilemenizdir. Bu konularda kendinizi izleyip geliştirin.
                                        </span>
                                    </li>
                                    <li
                                        style={{
                                            textAlign: 'justify'
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontFamily: 'Poppins'
                                            }}
                                        >
                                            İletişimde sizi başarıya götürecek olan tüm bilgi ve teknikleri öğrenin. Bunun için Tobeto’nun iletişim alanında size sunduğu harika eğitimleri bitirin.
                                        </span>
                                    </li>
                                    <li
                                        style={{
                                            textAlign: 'justify'
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontFamily: 'Poppins'
                                            }}
                                        >
                                            Özellikle geliştirmek istediğiniz alanla ilgili bilinçli denemeler yapın.
                                        </span>
                                    </li>
                                    <li
                                        style={{
                                            textAlign: 'justify'
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontFamily: 'Poppins'
                                            }}
                                        >
                                            İfadelerinizin basitleşmeye ihtiyacı varsa, karmaşık bir konuyu on cümlede özetlemeyi deneyin ya da bir akıl haritası ile tek sayfada özetleyin.
                                        </span>
                                    </li>
                                    <li
                                        style={{
                                            textAlign: 'justify'
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontFamily: 'Poppins'
                                            }}
                                        >
                                            Sunum konusunda ilerlemek için hazırlık yapıp arkadaşlarınıza ve sonra başka kişilere sunumlar yapmayı deneyin.
                                        </span>
                                    </li>
                                    <li
                                        style={{
                                            textAlign: 'justify'
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontFamily: 'Poppins'
                                            }}
                                        >
                                            Yazılı iletişimi düzeltmek için deneme yazıları yazın ve geribildirim alın.
                                        </span>
                                    </li>
                                    <li
                                        style={{
                                            textAlign: 'justify'
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontFamily: 'Poppins'
                                            }}
                                        >
                                            Yeni öğrendiğiniz dinleme tekniklerini uygulayın, anlayışınızı ve iletişimi derinleştirmek adına güçlü sorulara başvurun ve sonuçları gözlemleyin.
                                        </span>
                                    </li>
                                    <li
                                        style={{
                                            textAlign: 'justify'
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontFamily: 'Poppins'
                                            }}
                                        >
                                            “İletişim zekâsı”, “sosyal zekâ”, “etkili iletişim” gibi anahtar kelimelerle aramalar yapın ve kendi iletişim stratejinizi oluşturun.
                                        </span>
                                    </li>
                                    <li
                                        style={{
                                            textAlign: 'justify'
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontFamily: 'Poppins'
                                            }}
                                        >
                                            Öncelikle ana dilinizi doğru kullanın. Dil kurallarına, telaffuza, kelime seçimlerine özen gösterin. Dil, düşünmenin ana mecrasıdır. Dil altyapısı ile kelime ve kavram bilgisi, iyi düşüncenin ve doğru iletişimin temelidir.
                                        </span>
                                    </li>
                                    <li
                                        style={{
                                            textAlign: 'justify'
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontFamily: 'Poppins'
                                            }}
                                        >
                                            İletişimini güçlü gördüğünüz kişileri gözlemleyip analiz edin. Neyi iyi yaptıklarını bulmaya çalışın. Fırsat bulduğunuz her durumda bu kişilerin stratejilerini ve deneyimlerini kendilerinden dinlemeye çalışın.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item bg-white">
                    <h2
                        className="accordion-header"
                        id="hheading3"
                    >
                        <button
                            aria-controls="ccollapse3"
                            aria-expanded="false"
                            className="accordion-button result collapsed"
                            data-bs-target="#ccollapse3"
                            data-bs-toggle="collapse"
                            type="button"
                        >
                            <span className="fw-bolder">
                                Bu alanda önerilen eğitimler
                            </span>
                        </button>
                    </h2>
                    <div
                        aria-labelledby="hheading3"
                        className="result-collapse accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                        id="ccollapse3"
                    >
                        <div className="accordion-body">
                            <div className="mx-0 row" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnalysisReport