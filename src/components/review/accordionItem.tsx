import React from 'react';
const yetkinlikler = [
    {
      baslik: "Yeni dünyaya hazırlanıyorum",
      puan: 4.3,
      aciklama: "Tobeto ‘İşte Başarı Modeli’nin son yetkinliği yeni dünya ile ilgilidir...",
      geliştirme: [
        "Tobeto size yeni teknolojileri ve yeni dünyanın kodlarını tanıtan eğitimler sunmaktadır. Bu eğitimleri tamamlayın.",
        "Bununla birlikte bu alan son derece dinamik ve sürekli olarak yeniliklerin ortaya çıktığı bir alandır..."
      ],
      onerilenEgitimler: []
    },
    {
      baslik: "Profesyonel duruşumu geliştiriyorum",
      puan: 4.5,
      aciklama: "Profesyonellik bir alanda uzmanlaşma, meslek sahibi olma ve bu alanda bir kurumda ya da kendi işinde çalışma ile ilgili bir kavramdır...",
      geliştirme: [
        "Öncelikle profesyonellik nedir, profesyonel davranış ve duruş nasıl bir şeydir, bunları iyi bir şekilde araştırın. Bu araştırmalar sonrasında kendinize bir profesyonellik puanı verin. Sonra bu puanı yükseltmeye çalışın.",
        "Tobeto tarafından bu alanda sunulan eğitimler bu alanda size tüm temel bilgileri sağlayacaktır."
      ],
      onerilenEgitimler: []
    },
    {
      baslik: "Kendimi tanıyor ve yönetiyorum",
      puan: 3.6,
      aciklama: "Kendini tanıma ve yönetebilme, sadece iş hayatında değil, yaşam boyu başarı için ilk odaklanılması gereken yetkinliktir...",
      geliştirme: [
        "Öncelikle kendinizi iyi bir şekilde tanımanız gerekmektedir. Bu süreçte kendinize yöneltebileceğiniz sorulara cevaplar arayın...",
        "Kendinizi tanıma ve yönetme konusunda Tobeto'nun sunmuş olduğu eğitimlere katılabilirsiniz."
      ],
      onerilenEgitimler: []
    }
  ];
  
interface AccordionItemProps {
  baslik: string;
  aciklama: string;
  gelisim: string[];
  onerilenEgitimler: string[];
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  baslik,
  aciklama,
  gelisim,
  onerilenEgitimler,
}) => {
  return (
    <div className="accordion-item bg-white">
      <h2 className="accordion-header">
        <button className="accordion-button result collapsed" type="button" data-bs-toggle="collapse" aria-expanded="false">
          <span className="fw-bolder">{baslik}</span>
        </button>
      </h2>
      <div className="accordion-collapse collapse" aria-expanded="false">
        <div className="accordion-body">
          <div className="accordion-body bg-white">
            <p style={{ textAlign: 'justify' }}>
              <span style={{ fontFamily: 'Poppins' }}>{aciklama}</span>
            </p>
            {gelisim.map((gelisimItem, index) => (
              <p key={index} style={{ textAlign: 'justify' }}>
                <span style={{ fontFamily: 'Poppins' }}>{gelisimItem}</span>
              </p>
            ))}
            <ul>
              {onerilenEgitimler.map((egitim, index) => (
                <li key={index} style={{ textAlign: 'justify' }}>
                  <span style={{ fontFamily: 'Poppins' }}>{egitim}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
