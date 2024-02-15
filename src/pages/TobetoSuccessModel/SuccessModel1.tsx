import React, { useState } from 'react'
import Footer from '../../components/footer/footer'
import Navi from '../../components/navbar/Navi'

export default function SuccessModel1() {
    const [currentSection, setCurrentSection] = useState(1);
    const [answers, setAnswers] = useState({});

    const handleRadioChange = (questionId: any, value: any) => {
        setAnswers({ ...answers, [questionId]: value });
    };

    const handleNextClick = () => {
        setCurrentSection(currentSection + 1);
    };

    const questions = [
        { id: '308996', text: 'Başkaları ile konuşurken dikkatle, kesmeden ve sonuna kadar dinlerim.' },
        { id: '308997', text: 'Başarısızlıklarımı öğrenme fırsatı olarak görür ve bunlardan gerekli dersleri çıkarırım.' },
        { id: '308998', text: 'Önceden ifade edilmiş tamamlama tarihlerine her zaman saygı gösterir ve görevlerimi zamanında tamamlarım.' },
        { id: '308999', text: 'Odaklandığım alanda sürekli denemeler yaparım, bu deneyimlerden öğrenirim ve daha iyiye ulaşmak için çabalarım.' },
        { id: '309000', text: 'Sürekli olarak çevreyi koruyacak ve kaynakları en verimli kullanacak şekilde hareket ederim.' },
        { id: '309001', text: 'İlgi alanlarımda ya da hedeflerimle ilgili iş birlikleri ve ilişki ağları kurarım.' },
        { id: '309002', text: 'Çözüme geçmeden önce problemleri tam olarak anlar ve tüm yönleriyle tanımlarım.' },
        { id: '309003', text: 'Yaratıcı ve sıra dışı bir zihin yapısının işleyişini bilir ve düşünce akışımı buna göre düzenlerim.' },
        { id: '309004', text: 'Belirsizliğin yüksek olduğu zaman ya da ortamlarda ortaya çıkan koşullara uygun olarak anlık çözümler geliştirebilirim.' },
        { id: '309005', text: 'Duygularımı dinlerim ve kişilerin/olayların beni duygusal olarak nasıl etkilediğini tanımlarım.' },
        { id: '309006', text: 'Başkalarının düşüncelerine saygı duyar ve düşüncelerini sonuna kadar ifade etmeleri için onları cesaretlendiririm.' },
        { id: '309007', text: 'Gizlilik ve güvenlik gerekenen konularda en yüksek hassasiyeti göstererek hata, kayıp ve kazaları ortaya çıkmadan önlemeye çalışırım.' },
        { id: '309008', text: 'Önceliklerimi doğru bir şekilde belirleyerek işlerimi zamanında bitirecek şekilde zaman planlaması yaparım.' },
        { id: '309009', text: 'Hedeflerime ulaşmaya yardımcı olacak öğrenme kaynaklarını sürekli araştırır ve takip ederim.' },
        { id: '309010', text: 'Bilmek ve yeni şeyler öğrenmek için güçlü bir merak ve istek duyarım.' },
        { id: '309011', text: 'Grup içinde farklı fikirlerin ifade edilmesini ve yaratıcı girişimleri desteklerim.' },
        { id: '309012', text: 'Bir iş ya da proje planına sadık kalmak için elimden gelen tüm çabayı göstererek planı uygularım.' },
        { id: '309013', text: 'Yaptığı işe ve uzmanlık alanına tam olarak hakim olmak ve bu alanda ustalaşmak için profesyonel bir çaba gösteririm.' },
        { id: '309014', text: 'Dijital ortamda farklı formatlarda (web sayfası, wiki, blog vb.) içerik üretip bunları başkalarının kullanımına açabilirim.' },
        { id: '309015', text: 'Güçlü olduğum bir alanda bilgimi ve deneyimimi paylaşır ve başkalarını geliştiririm.' },
        { id: '309016', text: 'Başkalarına karşı adil, önyargısız ve tutarlı bir şekilde yaklaşırım.' },
        { id: '309017', text: 'Veri biliminin temellerini bilir ve verinin üretilmesi, paylaşılması, kullanımı, analizi, görselleştirilmesi gibi süreçleri tarif ederim.' },
        { id: '309018', text: 'İş birliği yaparken kendi çıkarlarımla grubun çıkarlarını analiz eder ve grubun başarısı yönünde tercihte bulunurum.' },
        { id: '309019', text: 'Yapılması gerekli işleri fark eder ve bunları sorulmadan ya da istenmeden yapmak için harekete geçerim.' },
        { id: '309020', text: 'Bir iş sürecinde ortaya çıkan hata veya problemleri mazeretlere sığınmadan analiz eder ve düzeltme yoluna giderim.' },
        { id: '309021', text: 'Birilikte yapılan çalışmalarda üyelerin performansını izler, değerli katkıları takdir eder ve başarıları kutlarım.' },
        { id: '309022', text: 'Zorlayıcı durumlarda ve krizlerde sakin ve güvenilir kalmayı başarırım.' },
        { id: '309023', text: 'Zaman baskısı ve diğer olası zorluklara rağmen işlerin beklenen kalite standardında olması için çaba gösteririm.' },
        { id: '309024', text: 'Zor ve karmaşık konuları başkalarının kolayca anlayabileceği şekilde özetleyip ifade ederim.' },
        { id: '309025', text: 'Tercih ve eylemlerimin olası sonuçlarını analiz ederek karar alır, bu doğrultuda sorumluluk üstlenir ve hesap veririm.' },
        { id: '309026', text: 'İnternette ihtiyacım olan her türlü bilgiyi bulabilir ve sorgulayıcı bir yaklaşımla güvenilir kaynakları ayırt edebilirim.' },
        { id: '309027', text: 'Bireysel potansiyelimi, güçlü yanlarımı ve en çok başarılı olabileceğim alanları bilirim ve bunlara yatırım yaparım.' },
        { id: '309028', text: 'Duygu ve düşüncelerimi kolaylıkla ve çekinmeden ifade ederim.' },
        { id: '309029', text: 'Bir problemin çözümü için olabildiğince çözüm alternatifi üretir, dener ve bunların arasından en uygun olanı seçerim.' },
        { id: '309030', text: 'Vücudumu iyi tanırım, sınırlarını bilirim ve fiziksel olarak sağlıklı ve dengede kalmak için emek harcarım.' },
        { id: '309031', text: 'Gerektiğinde başkalarını incitmeden mizahi bir üslupla iletişim kurarım.' },
        { id: '309032', text: 'Stresimi iyi yönetirim ve stresin beni uzun süre olumsuz etkilemesine izin vermem.' },
        { id: '309033', text: 'Kendimi hedeflerim doğrultusunda sürekli motive ederim.' },
        { id: '309034', text: 'Varolan hedef ve sorumluluklarımdan ödün vermeden farklı alanlarda değer yaratma fırsatlarını kovalarım.' },
        { id: '309035', text: 'Sorumluluklarımı yerine getirirken zorlandığım ya da tıkandığım noktalar olduğunda destek isterim.' },
        { id: '309036', text: 'Bir konuda hedef belirler ve aksiyon alırken, başkalarının inançları, hakları, değerleri ile çelişip çelişmediğini kontrol ederim.' },
        { id: '309037', text: 'İçinde bulunduğum ortamlardaki problemlere ya da iyileştirme fırsatlarına karşı duyarlıyım ve bunları kolaylıkla görebilirim.' },
        { id: '309038', text: 'Bir hedefe ulaşmak için gerekli olan eylem planlamasını gerçekçi bir şekilde yaparım.' },
        { id: '309039', text: 'Konuşmamı karşımdaki kişilerin seviyesine ve beklentilerine uygun olacak şekilde ayarlarım.' },
        { id: '309040', text: 'İletişim anında duyguları gösteren işaretleri tanırım ve bunlardan yola çıkarak başkaların ne hissettiğini anlarım.' },
        { id: '309041', text: 'Kıyafet ve davranış bakımından verdiğim görüntüyü içinde bulunduğum kurumu en iyi temsil edecek şekilde düzenlerim.' },
        { id: '309042', text: 'Zayıf yönlerimi ve kusurlarımı bilirim ve bunları dengelemek için çaba sarf ederim.' },
        { id: '309043', text: 'Güçlü ve gelişime açık yetkinliklerimi analiz eder ve bunları geliştirmek için planlı bir şekilde çaba harcarım.' },
        { id: '309044', text: 'Ortak bir amaç için farklı insanlarla birlikte rahatlıkla çalışırım.' },
        { id: '309045', text: 'Üyesi olduğum bir ekibin başarısı için tüm bilgimi ve deneyimimi memnuniyetle paylaşırım.' },
        { id: '309046', text: 'Teknolojiyi yakından takip ederim ve yeni teknolojilerle birlikte gelen olası fırsatları ve riskleri araştırırım.' },
        { id: '309047', text: 'Dijital aklın yükselmesiyle yaşamın farklı alanlarında meydana gelen değişimi tarif edip olası gelecek senaryolarını tartışırım.' },
        { id: '309048', text: 'Problemleri çözmek ve yenilikçi yaklaşımlar geliştirmek için başkalarının fikirlerini alır, bunlarla yeni sentezler yaparım.' },
        { id: '309049', text: 'Başkalarının başarılarını öğrenme fırsatı olarak görürüm ve başarıya götüren unsurları öğrenmeye çalışırım.' },
        { id: '309050', text: 'Dijital dünyada siber güvenlikle ilgili olası riskleri bilirim ve bireysel olarak gerekli tüm önlemleri alarak hareket ederim.' },
        { id: '309051', text: 'Belirsizliklere ya da değişen koşullara hızlı bir şekilde uyum sağlamak için kendimi geliştiririm.' },
        { id: '309052', text: 'Yaratıcı fikirler üretmek için var olan teknikleri (beyin fırtınası vb.) bilir ve bunları uygun şekilde kullanırım.' },
        { id: '309053', text: 'Farklı ortamlarda (iş, okul vb.) var olan kuralları öğrenir, yerleşmiş olan kültürü anlar ve davranışlarımı buna göre ayarlarım.' },
        { id: '309054', text: 'Birlikte çalıştığım insanlarla anlaşmazlık durumları olduğunda sakince ve yapıcı bir şekilde yaklaşırım.' },
        { id: '309055', text: 'Konuşmalarım ve eylemlerim tutarlıdır, taahhütlerime uygun davranışlarda bulunurum.' },
        { id: '309056', text: 'Yazım yanlışı olmadan, anlaşılır, net ve öz bir şekilde yazılı metinler oluştururum.' },
        { id: '309057', text: 'Aldığım kararların ve geliştirdiğim çözümlerin sonuçlarını izlerim ve başarısını değerlendiririm.' },
        { id: '309058', text: 'Karşılaştığım durumları, olayları, işleyişleri vb. eleştirel bir bakış açısıyla analiz eder ve tüm yönleriyle tarif ederim.' },
        { id: '309059', text: 'Netiket olarak adlandırılan internet görgü kurallarını bilirim ve sanal dünyada buna göre bilinçli davranırım.' },
        { id: '309060', text: 'Hayatın doğal rollerinde (öğrenci, evlat, kardeş, çalışan vb.) ne oranda zaman geçirdiğimi ve başarılı olduğumu analiz ederim.' },
        { id: '309061', text: 'İddialı ve ulaşılabilir hedefler belirlerim ve bunlara ulaşmak için azimle çalışırım.' },
        { id: '309062', text: 'Hiç tanımadığım insanlarla kolaylıkla iletişim kurarım.' },
        { id: '309063', text: 'Odaklandığım bir alanda gelişimime ilham verecek ve destek olacak güçlü kişileri bulur ve gelişim işbirlikleri kurarım.' },
        { id: '309064', text: 'Mevcut beklenti ve standartların ötesine geçer ve performansımı daha iyi sonuçlar elde etmek için zorlarım.' },
        { id: '309065', text: 'Birlikte olduğum insanlara yapıcı bir şekilde geribildirim verir ve başkalarından geribildirim isterim.' },
        { id: '309066', text: 'Yazılım biliminin temellerini ve bileşenlerini bilir ve programlamanın nasıl yapıldığını ana hatları ile tarif ederim.' },
        { id: '309067', text: 'Dijital ortamın getirdiği fırsatlardan yola çıkarak, ticari ya da değil, yaratıcı dijital çözüm fikirleri üzerinde çalışırım.' },
        { id: '309068', text: 'Ekip çalışmalarında işler kötüye gittiğinde ya da zorluk zamanlarında inisiyatif alır ve zorluğun aşılmasında itici güç olurum.' },
        { id: '309069', text: 'Birlikte çalışılması gereken durumlarda ortak bir hedef ve yol haritası belirlenmesi konusunda aktif rol alırım.' },
        { id: '309070', text: 'Bireysel ilkelerim ve değerlerim nettir ve yaşamımda bana yön verir.' },
        { id: '309071', text: 'İş birliği, iş, eğlence, öğrenme, sosyal paylaşım vb. amaçlarla ihtiyacım olan en uygun dijital uygulamayı/mecrayı bulur kullanırım.' },
        { id: '309072', text: 'Kendi yaşamım ve geleceğim için net hedefler belirler ve gerektiğinde güncellerim.' },
        { id: '309073', text: 'Birlikte çalıştığım kişileri ortak amaçlar doğrultusunda motive eder ve harekete geçiririm.' },
        { id: '309074', text: 'Var olan problemleri çözmek için bilinenlerin ötesinde yeni çözüm yolları ararım.' },
        { id: '309075', text: 'Kendi öğrenme kapasitemi iyi bilir ve kalıcı öğrenme için gerekli strateji ve yöntemleri uygularım.' },

    ];

    const sectionQuestions = questions.slice((currentSection - 1) * 10, currentSection * 10);

    return (
        <div>
            <Navi />
            <main>
                <div className="bg-light">
                    <div className="container px-7 pt-10 pb-5">
                        <h6 className="text-center f-size-24 text-secondary">
                            Tobeto İşte Başarı Modeli{' '}
                        </h6>
                    </div>
                </div>
                <section className="bg-light py-2">
                    <div className="container mb-6">
                        <div className="p-6 mb-6 bg-white rounded shadow">
                            <div className="progress mt-5 mw-3xl mx-auto mb-10" style={{ height: "25px", borderRadius: "30px" }}>
                                <div className="progress-bar" role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={90} style={{ width: "25%", borderRadius: "30px" }}>%25</div>
                            </div>
                            <div className="row">
                                <div className="table-responsive">
                                    <table className="table tbt-table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Tobeto İşte Başarı Modeli</th>
                                                <th scope="col" style={{ textAlign: "center" }}>--</th>
                                                <th scope="col" style={{ textAlign: "center" }}>-</th>
                                                <th scope="col" style={{ textAlign: "center" }}>0</th>
                                                <th scope="col" style={{ textAlign: "center" }}>+</th>
                                                <th scope="col" style={{ textAlign: "center" }}>++</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {sectionQuestions.map((question) => (
                                                <tr key={question.id}>
                                                    <td className="d-flex gap-1" style={{ paddingRight: "40px" }}>
                                                        <b>{question.id}-</b>
                                                        <span><p>{question.text}</p></span>
                                                    </td>
                                                    <td><input className="form-check-input mx-2" type="radio" name={question.id} value="1" onChange={() => handleRadioChange(question.id, "1")} /></td>
                                                    <td><input className="form-check-input mx-2" type="radio" name={question.id} value="2" onChange={() => handleRadioChange(question.id, "2")} /></td>
                                                    <td><input className="form-check-input mx-2" type="radio" name={question.id} value="3" onChange={() => handleRadioChange(question.id, "3")} /></td>
                                                    <td><input className="form-check-input mx-2" type="radio" name={question.id} value="4" onChange={() => handleRadioChange(question.id, "4")} /></td>
                                                    <td><input className="form-check-input mx-2" type="radio" name={question.id} value="5" onChange={() => handleRadioChange(question.id, "5")} /></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col-12 text-center mt-4">
                                    <button className="btn btn-primary d-inline-block" style={{ marginRight: "10px" }} disabled={currentSection === 1}>Geri</button>
                                    <button className="btn btn-primary d-inline-block" onClick={handleNextClick}>İleri</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <section className="bg-light py-2">
                    <div className="container mb-6">
                        <div className="p-6 mb-6 bg-white rounded shadow">
                            <div
                                className="progress mt-5 mw-3xl mx-auto mb-10"
                                style={{
                                    borderRadius: '30px',
                                    height: '25px'
                                }}
                            >
                                <div
                                    aria-valuemax={90}
                                    aria-valuemin={0}
                                    aria-valuenow={20}
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{
                                        borderRadius: '30px',
                                        width: '0%'
                                    }}
                                >
                                    %0
                                </div>
                            </div>
                            <div
                                className="row"
                                style={{}}
                            >
                                <div className="table-responsive">
                                    <table className="table tbt-table">
                                        <thead>
                                            <tr>
                                                <th scope="col">
                                                    Tobeto İşte Başarı Modeli{' '}
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        textAlign: 'center'
                                                    }}
                                                >
                                                    --
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        textAlign: 'center'
                                                    }}
                                                >
                                                    -
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        textAlign: 'center'
                                                    }}
                                                >
                                                    0
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        textAlign: 'center'
                                                    }}
                                                >
                                                    +
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        textAlign: 'center'
                                                    }}
                                                >
                                                    ++
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        1-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Başkaları ile konuşurken dikkatle, kesmeden ve sonuna kadar dinlerim.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="308996"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="308996"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="308996"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="308996"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="308996"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        2-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Başarısızlıklarımı öğrenme fırsatı olarak görür ve bunlardan gerekli dersleri çıkarırım.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="308997"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="308997"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="308997"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="308997"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="308997"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        3-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Önceden ifade edilmiş tamamlama tarihlerine her zaman saygı gösterir ve görevlerimi zamanında tamamlarım.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="308998"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="308998"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="308998"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="308998"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="308998"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        4-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Odaklandığım alanda sürekli denemeler yaparım, bu deneyimlerden öğrenirim ve daha iyiye ulaşmak için çabalarım.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="308999"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="308999"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="308999"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="308999"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="308999"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        5-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Sürekli olarak çevreyi koruyacak ve kaynakları en verimli kullanacak şekilde hareket ederim.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309000"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309000"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309000"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309000"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309000"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        6-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            İlgi alanlarımda ya da hedeflerimle ilgili iş birlikleri ve ilişki ağları kurarım.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309001"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309001"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309001"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309001"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309001"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        7-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Çözüme geçmeden önce problemleri tam olarak anlar ve tüm yönleriyle tanımlarım.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309002"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309002"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309002"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309002"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309002"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        8-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Yaratıcı ve sıra dışı bir zihin yapısının işleyişini bilir ve düşünce akışımı buna göre düzenlerim.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309003"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309003"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309003"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309003"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309003"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        9-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Belirsizliğin yüksek olduğu zaman ya da ortamlarda ortaya çıkan koşullara uygun olarak anlık çözümler geliştirebilirim.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309004"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309004"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309004"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309004"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309004"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        10-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Duygularımı dinlerim ve kişilerin/olayların beni duygusal olarak nasıl etkilediğini tanımlarım.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309005"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309005"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309005"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309005"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309005"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col-12 text-center mt-4">
                                    <button
                                        className="btn btn-primary d-inline-block"
                                        disabled
                                    >
                                        İleri
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-light py-2">
                    <div className="container mb-6">
                        <div className="p-6 mb-6 bg-white rounded shadow">
                            <div
                                className="progress mt-5 mw-3xl mx-auto mb-10"
                                style={{
                                    borderRadius: '30px',
                                    height: '25px'
                                }}
                            >
                                <div
                                    aria-valuemax={90}
                                    aria-valuemin={0}
                                    aria-valuenow={20}
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{
                                        borderRadius: '30px',
                                        width: '12.5%'
                                    }}
                                >
                                    %12.5
                                </div>
                            </div>
                            <div
                                className="row"
                                style={{}}
                            >
                                <div className="table-responsive">
                                    <table className="table tbt-table">
                                        <thead>
                                            <tr>
                                                <th scope="col">
                                                    Tobeto İşte Başarı Modeli{' '}
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        textAlign: 'center'
                                                    }}
                                                >
                                                    --
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        textAlign: 'center'
                                                    }}
                                                >
                                                    -
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        textAlign: 'center'
                                                    }}
                                                >
                                                    0
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        textAlign: 'center'
                                                    }}
                                                >
                                                    +
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        textAlign: 'center'
                                                    }}
                                                >
                                                    ++
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        11-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Başkalarının düşüncelerine saygı duyar ve düşüncelerini sonuna kadar ifade etmeleri için onları cesaretlendiririm.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309006"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309006"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309006"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309006"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309006"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        12-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Gizlilik ve güvenlik gerekenen konularda en yüksek hassasiyeti göstererek hata, kayıp ve kazaları ortaya çıkmadan önlemeye çalışırım.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309007"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309007"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309007"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309007"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309007"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        13-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Önceliklerimi doğru bir şekilde belirleyerek işlerimi zamanınında bitirecek şekilde zaman planlaması yaparım.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309008"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309008"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309008"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309008"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309008"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        14-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Hedeflerime ulaşmaya yardımcı olacak öğrenme kaynaklarını sürekli araştırır ve takip ederim.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309009"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309009"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309009"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309009"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309009"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        15-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Bilmek ve yeni şeyler öğrenmek için güçlü bir merak ve istek duyarım.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309010"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309010"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309010"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309010"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309010"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        16-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Grup içinde farklı fikirlerin ifade edilmesini ve yaratıcı girişimleri desteklerim.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309011"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309011"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309011"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309011"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309011"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        17-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Bir iş ya da proje planına sadık kalmak için elimden gelen tüm çabayı göstererek planı uygularım.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309012"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309012"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309012"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309012"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309012"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        18-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Yaptığı işe ve uzmanlık alanına tam olarak hakim olmak ve bu alanda ustalaşmak için profesyonel bir çaba gösteririm.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309013"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309013"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309013"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309013"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309013"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        19-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Dijital ortamda farklı formatlarda (web sayfası, wiki, blog vb.) içerik üretip bunları başkalarının kullanımına açabilirim.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309014"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309014"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309014"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309014"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309014"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        20-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Güçlü olduğum bir alanda bilgimi ve deneyimimi paylaşır ve başkalarını geliştiririm.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309015"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309015"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309015"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309015"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309015"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col-12 text-center mt-4">
                                    <button
                                        className="btn btn-primary d-inline-block"
                                        style={{
                                            marginRight: '10px'
                                        }}
                                    >
                                        Geri
                                    </button>
                                    <button
                                        className="btn btn-primary d-inline-block"
                                        disabled
                                    >
                                        İleri
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-light py-2">
                    <div className="container mb-6">
                        <div className="p-6 mb-6 bg-white rounded shadow">
                            <div
                                className="progress mt-5 mw-3xl mx-auto mb-10"
                                style={{
                                    borderRadius: '30px',
                                    height: '25px'
                                }}
                            >
                                <div
                                    aria-valuemax={90}
                                    aria-valuemin={0}
                                    aria-valuenow={20}
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{
                                        borderRadius: '30px',
                                        width: '25%'
                                    }}
                                >
                                    %25
                                </div>
                            </div>
                            <div
                                className="row"
                                style={{}}
                            >
                                <div className="table-responsive">
                                    <table className="table tbt-table">
                                        <thead>
                                            <tr>
                                                <th scope="col">
                                                    Tobeto İşte Başarı Modeli{' '}
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        textAlign: 'center'
                                                    }}
                                                >
                                                    --
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        textAlign: 'center'
                                                    }}
                                                >
                                                    -
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        textAlign: 'center'
                                                    }}
                                                >
                                                    0
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        textAlign: 'center'
                                                    }}
                                                >
                                                    +
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        textAlign: 'center'
                                                    }}
                                                >
                                                    ++
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        21-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Başkalarına karşı adil, önyargısız ve tutarlı bir şekilde yaklaşırım.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309016"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309016"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309016"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309016"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309016"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        22-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Veri biliminin temellerini bilir ve verinin üretilmesi, paylaşılması, kullanımı, analizi, görselleştirilmesi gibi süreçleri tarif ederim.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309017"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309017"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309017"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309017"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309017"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        23-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            İş birliği yaparken kendi çıkarlarımla grubun çıkarlarını analiz eder ve grubun başarısı yönünde tercihte bulunurum.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309018"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309018"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309018"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309018"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309018"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        24-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Yapılması gerekli işleri fark eder ve bunları sorulmadan ya da istenmeden yapmak için harekete geçerim.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309019"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309019"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309019"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309019"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309019"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        25-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Bir iş sürecinde ortaya çıkan hata veya problemleri mazeretlere sığınmadan analiz eder ve düzeltme yoluna giderim.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309020"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309020"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309020"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309020"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309020"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        26-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Birilikte yapılan çalışmalarda üyelerin performansını izler, değerli katkıları takdir eder ve başarıları kutlarım.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309021"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309021"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309021"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309021"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309021"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        27-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Zorlayıcı durumlarda ve krizlerde sakin ve güvenilir kalmayı başarırım.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309022"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309022"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309022"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309022"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309022"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        28-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Zaman baskısı ve diğer olası zorluklara rağmen işlerin beklenen kalite standardında olması için çaba gösteririm.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309023"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309023"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309023"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309023"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309023"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        29-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Zor ve karmaşık konuları başkalarının kolayca anlayabileceği şekilde özetleyip ifade ederim.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309024"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309024"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309024"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309024"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309024"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        30-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Tercih ve eylemlerimin olası sonuçlarını analiz ederek karar alır, bu doğrultuda sorumluluk üstlenir ve hesap veririm.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309025"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309025"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309025"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309025"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309025"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col-12 text-center mt-4">
                                    <button
                                        className="btn btn-primary d-inline-block"
                                        style={{
                                            marginRight: '10px'
                                        }}
                                    >
                                        Geri
                                    </button>
                                    <button
                                        className="btn btn-primary d-inline-block"
                                        disabled
                                    >
                                        İleri
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                {/* <section className="bg-light py-2">
                    <div className="container mb-6">
                        <div className="p-6 mb-6 bg-white rounded shadow">
                            <div
                                className="progress mt-5 mw-3xl mx-auto mb-10"
                                style={{
                                    borderRadius: '30px',
                                    height: '25px'
                                }}
                            >
                                <div
                                    aria-valuemax={90}
                                    aria-valuemin={0}
                                    aria-valuenow={20}
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{
                                        borderRadius: '30px',
                                        width: '25%'
                                    }}
                                >
                                    %25
                                </div>
                            </div>
                            <div
                                className="row"
                                style={{}}
                            >
                                <div className="table-responsive">
                                    <table className="table tbt-table">
                                        <thead>
                                            <tr>
                                                <th scope="col">
                                                    Tobeto İşte Başarı Modeli{' '}
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        textAlign: 'center'
                                                    }}
                                                >
                                                    --
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        textAlign: 'center'
                                                    }}
                                                >
                                                    -
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        textAlign: 'center'
                                                    }}
                                                >
                                                    0
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        textAlign: 'center'
                                                    }}
                                                >
                                                    +
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        textAlign: 'center'
                                                    }}
                                                >
                                                    ++
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        21-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Başkalarına karşı adil, önyargısız ve tutarlı bir şekilde yaklaşırım.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309016"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309016"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309016"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309016"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309016"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        22-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Veri biliminin temellerini bilir ve verinin üretilmesi, paylaşılması, kullanımı, analizi, görselleştirilmesi gibi süreçleri tarif ederim.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309017"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309017"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309017"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309017"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309017"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        23-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            İş birliği yaparken kendi çıkarlarımla grubun çıkarlarını analiz eder ve grubun başarısı yönünde tercihte bulunurum.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309018"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309018"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309018"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309018"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309018"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        24-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Yapılması gerekli işleri fark eder ve bunları sorulmadan ya da istenmeden yapmak için harekete geçerim.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309019"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309019"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309019"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309019"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309019"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        25-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Bir iş sürecinde ortaya çıkan hata veya problemleri mazeretlere sığınmadan analiz eder ve düzeltme yoluna giderim.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309020"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309020"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309020"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309020"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309020"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        26-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Birilikte yapılan çalışmalarda üyelerin performansını izler, değerli katkıları takdir eder ve başarıları kutlarım.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309021"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309021"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309021"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309021"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309021"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        27-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Zorlayıcı durumlarda ve krizlerde sakin ve güvenilir kalmayı başarırım.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309022"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309022"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309022"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309022"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309022"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        28-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Zaman baskısı ve diğer olası zorluklara rağmen işlerin beklenen kalite standardında olması için çaba gösteririm.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309023"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309023"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309023"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309023"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309023"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        29-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Zor ve karmaşık konuları başkalarının kolayca anlayabileceği şekilde özetleyip ifade ederim.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309024"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309024"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309024"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309024"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309024"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        30-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Tercih ve eylemlerimin olası sonuçlarını analiz ederek karar alır, bu doğrultuda sorumluluk üstlenir ve hesap veririm.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309025"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309025"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309025"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309025"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309025"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col-12 text-center mt-4">
                                    <button
                                        className="btn btn-primary d-inline-block"
                                        style={{
                                            marginRight: '10px'
                                        }}
                                    >
                                        Geri
                                    </button>
                                    <button
                                        className="btn btn-primary d-inline-block"
                                        disabled
                                    >
                                        İleri
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                {/* <section className="bg-light py-2">
                    <div className="container mb-6">
                        <div className="p-6 mb-6 bg-white rounded shadow">
                            <div
                                className="progress mt-5 mw-3xl mx-auto mb-10"
                                style={{
                                    borderRadius: '30px',
                                    height: '25px'
                                }}
                            >
                                <div
                                    aria-valuemax={90}
                                    aria-valuemin={0}
                                    aria-valuenow={20}
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{
                                        borderRadius: '30px',
                                        width: '37.5%'
                                    }}
                                >
                                    %37.5
                                </div>
                            </div>
                            <div
                                className="row"
                                style={{}}
                            >
                                <div className="table-responsive">
                                    <table className="table tbt-table">
                                        <thead>
                                            <tr>
                                                <th scope="col">
                                                    Tobeto İşte Başarı Modeli{' '}
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        textAlign: 'center'
                                                    }}
                                                >
                                                    --
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        textAlign: 'center'
                                                    }}
                                                >
                                                    -
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        textAlign: 'center'
                                                    }}
                                                >
                                                    0
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        textAlign: 'center'
                                                    }}
                                                >
                                                    +
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        textAlign: 'center'
                                                    }}
                                                >
                                                    ++
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        31-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            İnternette ihtiyacım olan her türlü bilgiyi bulabilir ve sorgulayıcı bir yaklaşımla güvenilir kaynakları ayırt edebilirim.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309026"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309026"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309026"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309026"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309026"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        32-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Bireysel potansiyelimi, güçlü yanlarımı ve en çok başarılı olabileceğim alanları bilirim ve bunlara yatırım yaparım.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309027"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309027"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309027"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309027"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309027"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        33-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Duygu ve düşüncelerimi kolaylıkla ve çekinmeden ifade ederim.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309028"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309028"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309028"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309028"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309028"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        34-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Bir problemin çözümü için olabildiğince çözüm alternatifi üretir, dener ve bunların arasından en uygun olanı seçerim.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309029"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309029"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309029"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309029"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309029"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        35-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Vücudumu iyi tanırım, sınırlarını bilirim ve fiziksel olarak sağlıklı ve dengede kalmak için emek harcarım.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309030"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309030"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309030"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309030"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309030"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        36-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Gerektiğinde başkalarını incitmeden mizahi bir üslupla iletişim kurarım.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309031"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309031"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309031"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309031"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309031"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        37-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Stresimi iyi yönetirim ve stresin beni uzun süre olumsuz etkilemesine izin vermem.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309032"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309032"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309032"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309032"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309032"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        38-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Kendimi hedeflerim doğrultusunda sürekli motive ederim.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309033"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309033"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309033"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309033"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309033"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        39-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Varolan hedef ve sorumluluklarımdan ödün vermeden farklı alanlarda değer yaratma fırsatlarını kovalarım.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309034"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309034"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309034"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309034"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309034"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        40-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Sorumluluklarımı yerine getirirken zorlandığım ya da tıkandığım noktalar olduğunda destek isterim.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309035"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309035"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309035"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309035"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309035"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col-12 text-center mt-4">
                                    <button
                                        className="btn btn-primary d-inline-block"
                                        style={{
                                            marginRight: '10px'
                                        }}
                                    >
                                        Geri
                                    </button>
                                    <button
                                        className="btn btn-primary d-inline-block"
                                        disabled
                                    >
                                        İleri
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                {/* <section className="bg-light py-2">
                    <div className="container mb-6">
                        <div className="p-6 mb-6 bg-white rounded shadow">
                            <div
                                className="progress mt-5 mw-3xl mx-auto mb-10"
                                style={{
                                    borderRadius: '30px',
                                    height: '25px'
                                }}
                            >
                                <div
                                    aria-valuemax={90}
                                    aria-valuemin={0}
                                    aria-valuenow={20}
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{
                                        borderRadius: '30px',
                                        width: '50%'
                                    }}
                                >
                                    %50
                                </div>
                            </div>
                            <div
                                className="row"
                                style={{}}
                            >
                                <div className="table-responsive">
                                    <table className="table tbt-table">
                                        <thead>
                                            <tr>
                                                <th scope="col">
                                                    Tobeto İşte Başarı Modeli{' '}
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        textAlign: 'center'
                                                    }}
                                                >
                                                    --
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        textAlign: 'center'
                                                    }}
                                                >
                                                    -
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        textAlign: 'center'
                                                    }}
                                                >
                                                    0
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        textAlign: 'center'
                                                    }}
                                                >
                                                    +
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        textAlign: 'center'
                                                    }}
                                                >
                                                    ++
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        41-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Bir konuda hedef belirler ve aksiyon alırken, başkalarının inançları, hakları, değerleri ile çelişip çelişmediğini kontol ederim.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309036"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309036"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309036"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309036"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309036"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        42-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            İçinde bulunduğum ortamlardaki problemlere ya da iyileştirme fırsatlarına karşı duyarlıyım ve bunları kolaylıkla görebilirim.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309037"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309037"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309037"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309037"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309037"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        43-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Bir hedefe ulaşmak için gerekli olan eylem planlamasını gerçekçi bir şekilde yaparım.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309038"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309038"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309038"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309038"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309038"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        44-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Konuşmamı karşımdaki kişilerin seviyesine ve beklentilerine uygun olacak şekilde ayarlarım.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309039"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309039"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309039"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309039"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309039"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        45-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            İletişim anında duyguları gösteren işaretleri tanırım ve bunlardan yola çıkarak başkaların ne hissettiğini anlarım.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309040"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309040"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309040"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309040"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309040"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        46-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Kıyafet ve davranış bakımından verdiğim görüntüyü içinde bulunduğum kurumu en iyi temsil edecek şekilde düzenlerim.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309041"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309041"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309041"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309041"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309041"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        47-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Zayıf yönlerimi ve kusurlarımı bilirim ve bunları dengelemek için çaba sarf ederim.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309042"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309042"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309042"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309042"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309042"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        48-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Güçlü ve gelişime açık yetkinliklerimi analiz eder ve bunları geliştirmek için planlı bir şekilde çaba harcarım.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309043"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309043"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309043"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309043"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309043"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        49-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Ortak bir amaç için farklı insanlarla birlikte rahatlıkla çalışırım.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309044"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309044"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309044"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309044"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309044"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        50-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Üyesi olduğum bir ekibin başarısı için tüm bilgimi ve deneyimimi memnuniyetle paylaşırım.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309045"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309045"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309045"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309045"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309045"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col-12 text-center mt-4">
                                    <button
                                        className="btn btn-primary d-inline-block"
                                        style={{
                                            marginRight: '10px'
                                        }}
                                    >
                                        Geri
                                    </button>
                                    <button
                                        className="btn btn-primary d-inline-block"
                                        disabled
                                    >
                                        İleri
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                {/* <section className="bg-light py-2">
                    <div className="container mb-6">
                        <div className="p-6 mb-6 bg-white rounded shadow">
                            <div
                                className="progress mt-5 mw-3xl mx-auto mb-10"
                                style={{
                                    borderRadius: '30px',
                                    height: '25px'
                                }}
                            >
                                <div
                                    aria-valuemax={90}
                                    aria-valuemin={0}
                                    aria-valuenow={20}
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{
                                        borderRadius: '30px',
                                        width: '62.5%'
                                    }}
                                >
                                    %62.5
                                </div>
                            </div>
                            <div
                                className="row"
                                style={{}}
                            >
                                <div className="table-responsive">
                                    <table className="table tbt-table">
                                        <thead>
                                            <tr>
                                                <th scope="col">
                                                    Tobeto İşte Başarı Modeli{' '}
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        textAlign: 'center'
                                                    }}
                                                >
                                                    --
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        textAlign: 'center'
                                                    }}
                                                >
                                                    -
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        textAlign: 'center'
                                                    }}
                                                >
                                                    0
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        textAlign: 'center'
                                                    }}
                                                >
                                                    +
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        textAlign: 'center'
                                                    }}
                                                >
                                                    ++
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        51-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Teknolojiyi yakından takip ederim ve yeni teknolojilerle birlikte gelen olası fırsatları ve riskleri araştırırım.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309046"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309046"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309046"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309046"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309046"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        52-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Dijital aklın yükselmesiyle yaşamın farklı alanlarında meydana gelen değişimi tarif edip olası gelecek senaryolarını tartışırım.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309047"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309047"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309047"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309047"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309047"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        53-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Problemleri çözmek ve yenilikçi yaklaşımlar geliştirmek için başkalarının fikirlerini alır, bunlarla yeni sentezler yaparım.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309048"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309048"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309048"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309048"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309048"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        54-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Başkalarının başarılarını öğrenme fırsatı olarak görürüm ve başarıya götüren unsurları öğrenmeye çalışırım.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309049"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309049"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309049"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309049"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309049"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        55-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Dijital dünyada siber güvenlikle ilgili olası riskleri bilirim ve bireysel olarak gerekli tüm önlemleri alarak hareket ederim.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309050"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309050"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309050"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309050"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309050"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        56-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Belirsizliklere ya da değişen koşullara hızlı bir şekilde uyum sağlamak için kendimi geliştiririm.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309051"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309051"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309051"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309051"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309051"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        57-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Yaratıcı fikirler üretmek için var olan teknikleri (beyin fırtınası vb.) bilir ve bunları uygun şekilde kullanırım.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309052"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309052"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309052"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309052"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309052"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        58-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Farklı ortamlarda (iş, okul vb.) var olan kuralları öğrenir, yerleşmiş olan kültürü anlar ve davranışlarımı buna göre ayarlarım.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309053"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309053"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309053"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309053"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309053"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        59-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Birlikte çalıştığım insanlarla anlaşmazlık durumları olduğunda sakince ve yapıcı bir şekilde yaklaşırım.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309054"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309054"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309054"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309054"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309054"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        60-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Konuşmalarım ve eylemlerim tutarlıdır, taahhütlerime uygun davranışlarda bulunurum.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309055"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309055"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309055"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309055"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309055"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col-12 text-center mt-4">
                                    <button
                                        className="btn btn-primary d-inline-block"
                                        style={{
                                            marginRight: '10px'
                                        }}
                                    >
                                        Geri
                                    </button>
                                    <button
                                        className="btn btn-primary d-inline-block"
                                        disabled
                                    >
                                        İleri
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                {/* <section className="bg-light py-2">
                    <div className="container mb-6">
                        <div className="p-6 mb-6 bg-white rounded shadow">
                            <div
                                className="progress mt-5 mw-3xl mx-auto mb-10"
                                style={{
                                    borderRadius: '30px',
                                    height: '25px'
                                }}
                            >
                                <div
                                    aria-valuemax={90}
                                    aria-valuemin={0}
                                    aria-valuenow={20}
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{
                                        borderRadius: '30px',
                                        width: '75%'
                                    }}
                                >
                                    %75
                                </div>
                            </div>
                            <div
                                className="row"
                                style={{}}
                            >
                                <div className="table-responsive">
                                    <table className="table tbt-table">
                                        <thead>
                                            <tr>
                                                <th scope="col">
                                                    Tobeto İşte Başarı Modeli{' '}
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        textAlign: 'center'
                                                    }}
                                                >
                                                    --
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        textAlign: 'center'
                                                    }}
                                                >
                                                    -
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        textAlign: 'center'
                                                    }}
                                                >
                                                    0
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        textAlign: 'center'
                                                    }}
                                                >
                                                    +
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        textAlign: 'center'
                                                    }}
                                                >
                                                    ++
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        61-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Yazım yanlışı olmadan, anlaşılır, net ve öz bir şekilde yazılı metinler oluştururum.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309056"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309056"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309056"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309056"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309056"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        62-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Aldığım kararların ve geliştirdiğim çözümlerin sonuçlarını izlerim ve başarısını değerlendiririm.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309057"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309057"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309057"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309057"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309057"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        63-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Karşılaştığım durumları, olayları, işleyişleri vb. eleştirel bir bakış açısıyla analiz eder ve tüm yönleriyle tarif ederim.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309058"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309058"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309058"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309058"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309058"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        64-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Netiket olarak adlandırılan internet görgü kurallarını bilirim ve sanal dünyada buna göre bilinçli davranırım.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309059"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309059"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309059"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309059"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309059"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        65-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Hayatın doğal rollerinde (öğrenci, evlat, kardeş, çalışan vb.) ne oranda zaman geçirdiğimi ve başarılı olduğumu analiz ederim.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309060"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309060"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309060"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309060"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309060"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        66-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            İddialı ve ulaşılabilir hedefler belirlerim ve bunlara ulaşmak için azimle çalışırım.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309061"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309061"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309061"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309061"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309061"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        67-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Hiç tanımadığım insanlarla kolaylıkla iletişim kurarım.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309062"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309062"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309062"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309062"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309062"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        68-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Odaklandığım bir alanda gelişimime ilham verecek ve destek olacak güçlü kişileri bulur ve gelişim işbirlikleri kurarım.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309063"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309063"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309063"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309063"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309063"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        69-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Mevcut beklenti ve standartların ötesine geçer ve performansımı daha iyi sonuçlar elde etmek için zorlarım.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309064"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309064"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309064"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309064"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309064"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        70-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Birlikte olduğum insanlara yapıcı bir şekilde geribildirim verir ve başkalarından geribildirim isterim.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309065"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309065"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309065"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309065"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309065"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col-12 text-center mt-4">
                                    <button
                                        className="btn btn-primary d-inline-block"
                                        style={{
                                            marginRight: '10px'
                                        }}
                                    >
                                        Geri
                                    </button>
                                    <button
                                        className="btn btn-primary d-inline-block"
                                        disabled
                                    >
                                        İleri
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                {/* <section className="bg-light py-2">
                    <div className="container mb-6">
                        <div className="p-6 mb-6 bg-white rounded shadow">
                            <div
                                className="progress mt-5 mw-3xl mx-auto mb-10"
                                style={{
                                    borderRadius: '30px',
                                    height: '25px'
                                }}
                            >
                                <div
                                    aria-valuemax={90}
                                    aria-valuemin={0}
                                    aria-valuenow={20}
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{
                                        borderRadius: '30px',
                                        width: '87.5%'
                                    }}
                                >
                                    %87.5
                                </div>
                            </div>
                            <div
                                className="row"
                                style={{}}
                            >
                                <div className="table-responsive">
                                    <table className="table tbt-table">
                                        <thead>
                                            <tr>
                                                <th scope="col">
                                                    Tobeto İşte Başarı Modeli{' '}
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        textAlign: 'center'
                                                    }}
                                                >
                                                    --
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        textAlign: 'center'
                                                    }}
                                                >
                                                    -
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        textAlign: 'center'
                                                    }}
                                                >
                                                    0
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        textAlign: 'center'
                                                    }}
                                                >
                                                    +
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        textAlign: 'center'
                                                    }}
                                                >
                                                    ++
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        71-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Yazılım biliminin temellerini ve bileşenlerini bilir ve programlamanın nasıl yapıldığını ana hatları ile tarif ederim.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309066"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309066"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309066"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309066"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309066"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        72-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Dijital ortamın getirdiği fırsatlardan yola çıkarak, ticari ya da değil, yaratıcı dijital çözüm fikirleri üzerinde çalışırım.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309067"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309067"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309067"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309067"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309067"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        73-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Ekip çalışmalarında işler kötüye gittiğinde ya da zorluk zamanlarında inisiyatif alır ve zorluğun aşılmasında itici güç olurum.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309068"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309068"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309068"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309068"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309068"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        74-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Birlikte çalışılması gereken durumlarda ortak bir hedef ve yol haritası belirlenmesi konusunda aktif rol alırım.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309069"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309069"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309069"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309069"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309069"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        75-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Bireysel ilkelerim ve değerlerim nettir ve yaşamımda bana yön verir.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309070"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309070"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309070"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309070"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309070"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        76-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            İş birliği, iş, eğlence, öğrenme, sosyal paylaşım vb. amaçlarla ihtiyacım olan en uygun dijital uygulamayı/mecrayı bulur kullanırım.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309071"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309071"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309071"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309071"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309071"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        77-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Kendi yaşamım ve geleceğim için net hedefler belirler ve gerektiğinde güncellerim.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309072"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309072"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309072"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309072"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309072"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        78-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Birlikte çalıştığım kişileri ortak amaçlar doğrultusunda motive eder ve harekete geçiririm.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309073"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309073"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309073"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309073"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309073"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        79-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Var olan problemleri çözmek için bilinenlerin ötesinde yeni çözüm yolları ararım.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309074"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309074"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309074"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309074"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309074"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="d-flex gap-1"
                                                    style={{
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        80-
                                                    </b>
                                                    <span>
                                                        <p>
                                                            Kendi öğrenme kapasitemi iyi bilir ve kalıcı öğrenme için gerekli strateji ve yöntemleri uygularım.
                                                        </p>
                                                    </span>
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="1"
                                                        name="309075"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="2"
                                                        name="309075"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="3"
                                                        name="309075"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="4"
                                                        name="309075"
                                                        type="radio"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        className="form-check-input mx-2"
                                                        defaultValue="5"
                                                        name="309075"
                                                        type="radio"
                                                    />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col-12 text-center mt-4">
                                    <a
                                        className="btn btn-light d-inline-block"
                                        href="/profilim/degerlendirmeler/tobeto-iste-basari-modeli/1#"
                                    >
                                        Değerlendirmeyi Bitir
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                {/* <button   className="btn btn-primary d-inline-block"
                    disabled
                >
                    İleri
                </button> */}
                {/* <a
  className="btn btn-primary d-inline-block"
  href="/profilim/degerlendirmeler/rapor/tobeto-iste-basari-modeli/1"
>
  Değerlendirmeyi Bitir
</a> */}
{/* değerlendirme bitir butonuna tıklayınca https://tobeto.com/profilim/degerlendirmeler/rapor/tobeto-iste-basari-modeli/1 */}
            </main>
            <Footer />
        </div>
    )
}
