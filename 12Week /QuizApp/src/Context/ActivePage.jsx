import { createContext, useState } from "react";
const ActivePageContext = createContext();
import image1 from "/public/1.jpg";
import image2 from "/public/pamuk.jpg";
import image3 from "/public/tarkan.jpg";
import image4 from "/public/fobi.jpg";
import image5 from "/public/balik.jpg";
import image6 from "/public/bandira.jpg";
import image7 from "/public/billboard.jpg";
import image8 from "/public/parfum.jpg";
import image9 from "/public/trex.jpg";
import image10 from "/public/mutluluk.jpg";

//useState aktif edilir. State fonksiyon içerisinde tanımlanur ve Context export edilir.

function ActivePageProvider({ children }) {
  const [time, setTime] = useState(0);
  const [verilenCevap, setVerilenCevap] = useState([]);
  const [start, setStart] = useState(true);
  const [score, setScore] = useState(0);
  const [currentquiz, setCurrentQuiz] = useState(0);
  const [classN, setClass] = useState(false);
  const questions = [
    {
      question: "Çin Seddini oluşturan taşlar birbirine ne ile tutturulmuştur?",
      options: ["Bambu Harcı", "Anne Duası", "Pirinç Unu", "Noodle"],
      answer: "Pirinç Unu",
      media: image1,
    },
    {
      question: "İlk Pamuk şekeri bulan kişinin mesleği nedir?",
      options: [
        "Gıda Mühendisi",
        "Diş Doktoru",
        "Ev Hanımı",
        "Güzellik Uzmanı",
      ],
      answer: "Diş Doktoru",
      media: image2,
    },
    {
      question:
        "Tarkan'ın 'Hüp' klibini izledikten sonra gaza gelip 'Tarkan keşke beni hüpletseydi' diye açıklamda bulunan kişi kimdir?",
      options: ["Gülben Ergen", "Hülya Avşar", "Harika Avcı", "Sevtap Parman"],
      answer: "Gülben Ergen",
      media: image3,
    },
    {
      question: "Pteronofobi nedir?",
      options: [
        "Yeşil ışık yanar yanmaz korna çalacak korkusu",
        "Fakir kalma korkusu",
        "Taksi bulamama korkusu",
        "Kuş tüyüyle gıdıklanma korkusu",
      ],
      answer: "Kuş tüyüyle gıdıklanma korkusu",
      media: image4,
    },
    {
      question:
        "Ortalama ömürleri 5 yıl olan Japon balıklarının en uzun yaşayanı Tish, bütün istatistikleri alt üst ederek kaç yıl boyunca hayata tutunmayı başarmıştır?",
      options: ["43", "78", "23", "99"],
      answer: "43",
      media: image5,
    },
    {
      question:
        "90'lara damgasını vuran 'Bandıra Bandıra' şarkısının söz yazarı kimdir?",
      options: ["Sezen Aksu", "Sibel Can", "Mustafa Sandal", "Bülent Ersoy"],
      answer: "Mustafa Sandal",
      media: image6,
    },
    {
      question:
        "Hangi şarkıcımız yine kendisi gibi şarkıcı olan sevgilisinden ayrıldıktan sonra tam evinin karşısındaki apartmanın tamamını kendi posteriyle kaplatmıştır?",
      options: ["Hande Yener", "Hadise", "Gülşen", "Simge"],
      answer: "Hadise",
      media: image7,
    },
    {
      question: "Antik Roma'da kadınlar parfüm olarak ne kullanıyordu?",
      options: ["Gül Suyu", "Bal", "Gladyatör Teri", "Kan"],
      answer: "Gladyatör Teri",
      media: image8,
    },
    {
      question:
        "T-Rex'in yaşayan en yakın akrabası aşağıdakilerden hangisidir?",
      options: ["İnekler", "Tavuklar", "Timsahlar", "Köpekler"],
      answer: "Tavuklar",
      media: image9,
    },
    {
      question:
        "Her şeyin olduğu gibi mutluluğun da fobisi varmış. Bu fobiye ne ad verilir?",
      options: ["Çerofobi", "Euphobia", "Felicifobia", "Mutluluk Korkusu"],
      answer: "Çerofobi",
      media: image10,
    },
  ];

  if(time ==30) {
    setCurrentQuiz((prevCurrentquiz) => prevCurrentquiz + 1);
    setTime(0);
    setVerilenCevap([...verilenCevap, "Boş Cevap"]);
    setClass(false)
  }
  

  return (
    <ActivePageContext.Provider
      value={{
        start,
        setStart,
        score,
        setScore,
        currentquiz,
        setCurrentQuiz,
        classN,
        setClass,
        questions,
        verilenCevap,
        setVerilenCevap,
        time,
        setTime,
      }}
    >
      {children}
    </ActivePageContext.Provider>
  );
}

export default ActivePageProvider; //Provider Compo exportu
export { ActivePageContext }; //ContextExportu
