import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

import img1 from "../assets/imgs/services/image1.jpg";
import img2 from "../assets/imgs/services/ritim-bozukluk.jpeg";
import img3 from "../assets/imgs/services/kalp_yetersizligi.jpg";
import img4 from "../assets/imgs/services/carpinti.jpg";

import { Link } from "react-router-dom";
import Card from "./card";
import datas from "../data.json";

const aboutDisease = () => {
  const diseases = datas.filter((d) => d.type === "d");
  return (
    <div>
      <Header />
      <div className="aboutDisease-page">
        <div className="container">
          <h1 className="mb-4 text-center">Kalp Sağlığı Nasıl Korunur?</h1>
          <div className="my-3 text-center nav-text">
            <Link to={"/"} className="text-decoration-none text-dark">
              Ana Sayfa
            </Link>
            <span className="mx-3">{">>"}</span>
            <Link
              to={"/diseasesPage"}
              className="text-decoration-none text-dark"
            >
              Şikayet ve Tanı
            </Link>
            <span className="mx-3 ">{">>"}</span>
            <a className="color-blue text-decoration-none">
              Kalp Sağlığı Nasıl Korunur?
            </a>
          </div>
          <p className="text-center">9 Kasım 2022</p>
          <div>
            <img
              src={img1}
              className="article-image d-block m-auto"
              alt="article-image"
            />
          </div>
          <div className="article-text py-5 mt-2">
            <p>
              Kalp, tüm vücudun sağlığını etkileyen ve sağlıklı çalışmaması
              durumunda ciddi sağlık riskleri doğurabilecek bir organdır.
              Küresel ölçekte 70 yaş altı, bulaşıcı olmayan hastalıklara bağlı
              ölümlerin %37’si kalp ve damar hastalıkları nedeniyle meydana
              gelmiştir. Ancak kalp sağlığımızı korumak ve kalp ve damar
              hastalıklarına yakalanma riskimizi önemli ölçüde düşürmek
              elimizdedir.
            </p>
            <p>
              <span className="text-bold"> 1. Sağlıklı Beslenin</span>
              <br />
              Kalp ve damar yolu hastalıklarına yakalanma riskini arttıran
              faktörlerin başında sağlıksız beslenme gelmektedir. Kalp dostu bir
              beslenme için doymuş yağ tüketimini olabildiğince azaltmak ve tuz
              tüketimini günde 5gr ile sınırlandırmak gerekir.
              <br />
              Sakatatlar, kabuklu deniz hayvanları işlenmiş et ürünleri ve yağlı
              gıdalar (krema, mayonez, margarin) mümkün olduğunca az tüketilmesi
              gereken ürünler arasındadır. Taze sebzeler, bakliyat, balık ve
              lifli gıdalar ağırlıklı bir beslenme tercih ederek kalp
              sağlığınızı koruyabilirsiniz.
            </p>
            <p>
              <span className="text-bold">
                2. Sağlıksız Alışkanlıklardan Uzaklaşın
              </span>
              <br />
              Kalp sağlığınızı korumak için sigaradan uzak durmalısınız. Damar
              iç yüzeyinde birikimi kolaylaştıran, damar elastikiyetini bozan ve
              pıhtılaşma eğilimini arttıran sigara, kalp ve damar hastalıklarına
              yakalanma riskini çok önemli ölçüde arttırıyor. Sigarayı
              bıraktıktan sonraki ilk bir yıl içerisinde hastalık riski %50
              azalırken riskin kaybolması 10 yılı buluyor.
            </p>
            <p>
              <span className="text-bold">3. İdeal Kilonuzu Koruyun</span>
              <br />
              Obezite, kalp ve damar hastalıklarına yakalanma riskini arttıran
              nedenlerin başında gelmektedir. Bel kalınlığının kadınlarda 80
              cm’nin, erkeklerde ise 94 cm’in üzerinde olması sağlık risklerini
              arttırmaktadır. Beden kitle indeksinizi 18.5 – 24.9 BMI aralığında
              tutarak sağlık sorunlarına yakalanma riskinizi azaltabilirsiniz.
            </p>
            <p>
              <span className="text-bold">4. Egzersiz Yapın</span>
              <br />
              Yetersiz fiziksel aktivite kalp ve damar hastalıkların riskini
              arttırırken, düzenli egzersiz bu riski %23 azaltmaktadır. Haftada
              en az 3 gün, 30’ar dakikalık aerobik egzersiz yapmak kalp
              sağlığınızı korumanıza önemli ölçüde yardımcı olmaktadır.
            </p>
            <p>
              <span className="text-bold">5. Kontrollerinizi Aksatmayın</span>
              <br />
              Kalp ve damar hastalıkları erken aşamalarındayken genellikle
              belirti vermezler. Ancak düzenli kontroller ile risk faktörlerinin
              erkenden teşhis edilmesi ve hastalık ilerlemeden gerekli
              önlemlerin alınması mümkündür. Özellikle 40 yaşından sonra kan
              şekeri, trigliserid, total kolesterol, HDL (iyi huylu kolesterol),
              LDL (kötü huylu kolesterol) ölçümlerinin düzenli olarak
              yapılmasında fayda vardır. Kan değerlerinin yanı sıra düzenli
              tansiyon ölçümleri de olası kalp damar hastalıklarının erkenden
              fark edilmesine yardımcı olacaktır.
            </p>
          </div>
          <hr />
          <div className=" px-3 px-lg-0">
            <h2 className="my-4 pt-5">Benzer Yazılar</h2>
            <div className="row cards-container ">
              {diseases.slice(0, 3).map((d) => (
                <Card
                  cardImg={d.img}
                  cardHeader={d.header}
                  cardInfo={d.info}
                  slug={d.slug}
                  className={"col-12 col-md-6 col-lg-4"}
                />
              ))}
              {/* <div class="card border-0 col-12 col-md-6 col-lg-4 mb-5 mb-lg-0">
                <a className="card-head" href="#">
                  <img class="card-img-top" src={img2} alt="Card image cap" />
                </a>
                <div class="card-body">
                  <p class="card-text">
                    <Link to={"/tesd/" + slug}>
                      Aritmi (Kalp Ritim Bozukluğu) Neden Olur, Belirtileri
                      Nelerdir?
                    </Link>
                  </p>
                  <small className="text-secondary">12 HAZ, 2023</small>
                </div>
              </div>
              <div class="card border-0 col-12 col-md-6 col-lg-4 mb-5 mb-lg-0">
                <a className="card-head" href="#">
                  <img class="card-img-top" src={img3} alt="Card image cap" />
                </a>
                <div class="card-body">
                  <p class="card-text">
                    <a href="#">Kalp Yetersizliği</a>
                  </p>
                  <small className="text-secondary">12 HAZ, 2023</small>
                </div>
              </div>
              <div class="card border-0 col-12 col-md-6 col-lg-4">
                <a className="card-head" href="#">
                  <img class="card-img-top" src={img4} alt="Card image cap" />
                </a>
                <div class="card-body">
                  <p class="card-text">
                    <a href="#">Kalp Çarpıntısı</a>
                  </p>
                  <small className="text-secondary">12 HAZ, 2023</small>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default aboutDisease;
