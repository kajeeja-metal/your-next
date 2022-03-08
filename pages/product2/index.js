import React, { useState, useEffect } from "react";
import {
  Modal,
  Tabs,
  Tab,
  Row,
  Col,
  Nav,
  Image,
  Accordion,
} from "react-bootstrap";
import ArticleReview from "../../components/articleReview";
import Icon_property from "../../components/icon_property";
import HeaderMenu from "../../components/headerMenu";
import FooterMenu from "../../components/footerMenu";
const product2 = (props) => {
  const [articleReview, setArticleReview] = useState([
    {
      titleReview: "ผลเลือดออกมาดีมากพร้อมให้คีโมต่อค่ะ",
      descipReview:
        "หลังจากทานผลิตภัณฑ YOUR beta glucan แล้ว และได้ทำการมาตรวจค่าเลือด ปรากฎว่าค่าเลือดดีมากค่ะ จึงพร้อมให้ยาคีโมครั้งที่ 2 ได้เลยค่ะ ",
      date: "APR 2021",
      byUser: "คุณธนxxx",
      icon: "static/img_mockup/icon-article.png",
    },
    {
      titleReview: "ผลเลือดออกมาดีมากพร้อมให้คีโมต่อค่ะ",
      descipReview:
        "หลังจากทานผลิตภัณฑ YOUR beta glucan แล้ว และได้ทำการมาตรวจค่าเลือด ปรากฎว่าค่าเลือดดีมากค่ะ จึงพร้อมให้ยาคีโมครั้งที่ 2 ได้เลยค่ะ ",
      date: "APR 2021",
      byUser: "คุณธนxxx",
      icon: "static/img_mockup/icon-article2.png",
    },
    {
      titleReview: "ผลเลือดออกมาดีมากพร้อมให้คีโมต่อค่ะ",
      descipReview:
        "หลังจากทานผลิตภัณฑ YOUR beta glucan แล้ว และได้ทำการมาตรวจค่าเลือด ปรากฎว่าค่าเลือดดีมากค่ะ จึงพร้อมให้ยาคีโมครั้งที่ 2 ได้เลยค่ะ ",
      date: "APR 2021",
      byUser: "คุณธนxxx",
      icon: "static/img_mockup/icon-article.png",
    },
    {
      titleReview: "ผลเลือดออกมาดีมากพร้อมให้คีโมต่อค่ะ",
      descipReview:
        "หลังจากทานผลิตภัณฑ YOUR beta glucan แล้ว และได้ทำการมาตรวจค่าเลือด ปรากฎว่าค่าเลือดดีมากค่ะ จึงพร้อมให้ยาคีโมครั้งที่ 2 ได้เลยค่ะ ",
      date: "APR 2021",
      byUser: "คุณธนxxx",
      icon: "static/img_mockup/icon-article2.png",
    },
    {
      titleReview: "ผลเลือดออกมาดีมากพร้อมให้คีโมต่อค่ะ",
      descipReview:
        "หลังจากทานผลิตภัณฑ YOUR beta glucan แล้ว และได้ทำการมาตรวจค่าเลือด ปรากฎว่าค่าเลือดดีมากค่ะ จึงพร้อมให้ยาคีโมครั้งที่ 2 ได้เลยค่ะ ",
      date: "APR 2021",
      byUser: "คุณธนxxx",
      icon: "static/img_mockup/icon-article.png",
    },
    {
      titleReview: "ผลเลือดออกมาดีมากพร้อมให้คีโมต่อค่ะ",
      descipReview:
        "หลังจากทานผลิตภัณฑ YOUR beta glucan แล้ว และได้ทำการมาตรวจค่าเลือด ปรากฎว่าค่าเลือดดีมากค่ะ จึงพร้อมให้ยาคีโมครั้งที่ 2 ได้เลยค่ะ ",
      date: "APR 2021",
      byUser: "คุณธนxxx",
      icon: "static/img_mockup/icon-article2.png",
    },
  ]);
  const ingredientsData = [
    { text: "Beta 1,3/1,6 D-Glucan", id: 1 },
    { text: "Saccharomyces Cerevisiae", id: 2 },
    { text: "เบต้ากลูแคนบริสุทธิ์ 91%", id: 7 },
    { text: "นำเข้าจากสวิตเซอร์แลนด์", id: 4 },
    { text: "เข้มข้น 300 มิลลิกรรม", id: 8 },
    { text: "60 แคปซูลใน 1 ขวด", id: 9 },
  ];
  const ingredientsSubData = [
    {
      image: "static/img_mockup/ingredients_sub.png",
      topic: "simple",
      title: "Lorem Ipsum is simply dummy text of the printing",
      desciption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the  ",
    },{
      image: "static/img_mockup/ingredients_sub.png",
      topic: "Suggested use",
      title: "Lorem Ipsum is simply dummy text of the printing",
      desciption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the  ",
    },{
      image: "static/img_mockup/ingredients_sub.png",
      topic: "WHO",
      title: "Lorem Ipsum is simply dummy text of the printing",
      desciption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the  ",
    },{
      image: "static/img_mockup/ingredients_sub.png",
      topic: "Safety",
      title: "Lorem Ipsum is simply dummy text of the printing",
      desciption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the  ",
    },
    
  ];
  const differenceData = [
    {
      type: "black",
      title: "ยัวร์เบต้ากลูแคน",
      list: [
        {
          text: "Beta 1,3/1,6 D-Glucan สกัดจาก ยีสต์ Sccharomyces Cerevisiae",
          id: 1,
        },
        { text: "ความบริสุทธิ์เบต้ากลูแคน สูงสุดที่ 91%", id: 7 },
        { text: "นำเข้าจากสวิตเซอร์แลนด์", id: 4 },
        {
          text: "Enzymatic Extraction Technology จดสิธิบัตรในสหภาพยุโรป",
          id: 2,
        },
        { text: "เข้มข้น 300มก. บรรจุ 60 แคปซูล ราคา 1300 บาท/ขวด", id: 9 },
      ],
    },
    {
      type: "white",
      title: "เบต้ากลูแคนในตลาด",
      list: [
        {
          text: "สกัดจากเห็ด,ข้าวโอ๊ต,บาร์เล่ย์,สาหร่าย ซึ่งมีประสิทธิภาพการทำงานน้อยกว่า",
          id: 1,
        },
        { text: "80% หรือต่ำกว่า", id: 7 },
        { text: "วัตถุดิบในประเทศ หรือไม่ระบุแหล่งที่มา", id: 4 },
        { text: "ไม่เปิดเผย หรือไม่ได้รับ การจดสิทธิบัตรที่ชัดเจน", id: 2 },
        { text: "ราคาสูงกว่า เทียบกับความเข้มข้น และจำนวนแคปซูล", id: 9 },
      ],
    },
  ];
  const [articleProduct, setArticleProduct] = useState([
    {
      img: "static/img_mockup/price.png",
      desciption:
        "ยัวร์ เบต้ากลูแคน (YOUR Beta Glucan) เป็นผลิตภัณฑ์เสริมอาหารสกัดมาจาก ผนังเซลล์ของยีสต์ Saccharomyces",
      fullPrice: 4770,
      salePrice: 3600
    },{
      img: "static/img_mockup/price.png",
      desciption:
        "ยัวร์ เบต้ากลูแคน (YOUR Beta Glucan) เป็นผลิตภัณฑ์เสริมอาหารสกัดมาจาก ผนังเซลล์ของยีสต์ Saccharomyces",
      fullPrice: 4770,
      salePrice: 3600
    },{
      img: "static/img_mockup/price.png",
      desciption:
        "ยัวร์ เบต้ากลูแคน (YOUR Beta Glucan) เป็นผลิตภัณฑ์เสริมอาหารสกัดมาจาก ผนังเซลล์ของยีสต์ Saccharomyces",
      fullPrice: 4770,
      salePrice: 3600
    },{
      img: "static/img_mockup/price.png",
      desciption:
        "ยัวร์ เบต้ากลูแคน (YOUR Beta Glucan) เป็นผลิตภัณฑ์เสริมอาหารสกัดมาจาก ผนังเซลล์ของยีสต์ Saccharomyces",
      fullPrice: 4770,
      salePrice: 3600
    },{
      img: "static/img_mockup/price.png",
      desciption:
        "ยัวร์ เบต้ากลูแคน (YOUR Beta Glucan) เป็นผลิตภัณฑ์เสริมอาหารสกัดมาจาก ผนังเซลล์ของยีสต์ Saccharomyces",
      fullPrice: 4770,
      salePrice: 3600
    },
  ]);

  useEffect(() => {
    getStart();
  }, []);

  const setFormatCurrency = (data, value = 2) => {
    if (!data) data = 0;
    return data.toLocaleString("th-TH", {
      minimumFractionDigits: value,
      maximumFractionDigits: value,
    });
  };

  const getStart = async () => {};

  return (
    <>
      <HeaderMenu/>
      <div className="page-review page4">
        <section className="section-banner">
          <div className="banner-list">
            <img className="img-banner" src="static/img_mockup/banner2.png" />
            <span className="text-banner3">YOUR Beta Glucan</span>
          </div>
        </section>

        <section className="section-intro">
          <span className="title">
            YOUR Beta Glucan
            <br />
            (เบต้ากลูแคน)
          </span>
          <div className="content">
            <span>
              ยัวร์ เบต้ากลูแคน (YOUR Beta Glucan) เป็นผลิตภัณฑ์เสริมอาหาร
              <br />
              สกัดมาจากผนังเซลล์ของยีสต์ Saccharomyces Cerevisiae
              ซึ่งมีส่วนช่วยในการเสริมภูมิคุ้มกันให้แก่ร่างกาย
              <br />
              ซึ่งมีประสิทธิภาพสูงสุดเท่าที่วงการวิทยาศาสตร์รู้จักในปัจจุบันนี้
              (The Most Powerful Immune Modulator)
              <br />
            </span>
            <span>
              ทั้งยังช่วยลดระดับไขมันคอเลสเตอรอลในเลือดลง เป็นสารต้านอนุมูลอิสระ
              (Antioxidant)
              <br />
              และจากงานวิจัยทั่วโลก
              เบต้ากลูแคนยังมีส่วนช่วยสำหรับผู้ป่วยโรคมะเร็งอีกด้วย
              <br />
            </span>
            <span>
              โดยชนิดของเบต้ากลูแคนที่มีประสิทธิภาพสูงสุดในการเพิ่มภูมิต้านทาน คือ
              เบต้า 1,3/1,6 D-กลูแคน
              <br />
              ซึ่งถือเป็นใยอาหารชนิดไม่ละลายน้ำ (Insoluble Fiber)
              ทำให้มีคุณสมบัติในการลดไขมันคอเลสเตอรอลด้วย
              <br />
            </span>
          </div>
        </section>
        <section className="section-ingredients">
          <span className="title-section">Ingredients</span>
          <div className="box-content">
            <div className="img-product">
              <img src="static/img_mockup/beta_glucan.png" />
            </div>
            <div className="content-icon">
              {ingredientsData.map((item, index) => {
                return (
                  <div className="list-icon" key={index}>
                    <div className="icon">
                      <Icon_property id={item.id} />
                    </div>
                    <span>{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section className="section-ingredients-sub">
        <div className="box-content">
            {ingredientsSubData.map((item, index1) => {
              return (
                <div className={`d-flex w-50 ${(index1+1) % 2 == 1 ? 'justify-content-end' : ''}`} key={index1}>
                <div className="list-content">
                  <img src={item.image}/>
                  <span className="topic">{item.topic}</span>
                  <div className="content">
                    <span className="title">{item.title}</span>
                    <span className="desciption">{item.desciption}</span>
                  </div>
                </div>
                </div>
              );
            })}
          </div>
        </section>
        <section className="section-difference">
          <div className="box-content">
            {differenceData.map((item, index1) => {
              return (
                <div className={"list-content " + item.type} key={index1}>
                  <span className="title">{item.title}</span>
                  <div className="content-icon">
                    {item.list.map((item2, index2) => {
                      return (
                        <div className="list-icon" key={index2}>
                          <div className="icon">
                            <Icon_property id={item2.id} />
                          </div>
                          <span>{item2.text}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <section className="section-video">
          <video width="100%" height="calc(100vw / 16 * 9)" controls>
            <source src="https://youtu.be/Ikgzkr4dWQ8" type="video/mp4" />
          </video>
        </section>
        <section className="section-price">
          <span className="title-section">Price</span>
          <div className="box-article">
            {articleProduct &&
              articleProduct.map((item, index) => {
                return (
                  <div className={`article-product${index == 2 ? " focus" : ""}`}>
                      <div className="img-product">
                          <img src={item.img}/>
                      </div>
                      <div className="content">
                          <span className="desciption">{item.desciption}</span>
                      </div>
                      <div className="price">
                          <span className="full-price">{setFormatCurrency(item.fullPrice, 0)} ฿</span>
                          <span className="sale-price">{setFormatCurrency(item.salePrice, 0)} ฿</span>
                      </div>
                  </div>
                  // <ArticleProduct
                  //   class={index == 2 ? " focus" : ""}
                  //   data={item}
                  //   key={index}
                  // />
                );
              })}
          </div>
        </section>
        <section className="section-review">
          <span className="title-section">Reviews</span>
          <div className="box-article">
            {articleReview &&
              articleReview.map((item, index) => {
                return <ArticleReview data={item} key={index} />;
              })}
          </div>
          <div className="flex-center">
            <span className="more my-3">ดูเพิ่มเติม</span>
          </div>
        </section>
        <section className="section-certification mt-0">
          <div className="w-75">
            <img src="static/img_mockup/cert.png"/>
          </div>
        </section>
      </div>
      <FooterMenu/>
    </>
  );
};
export default product2;
