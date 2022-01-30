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
import ArticleNews from "../../components/articleNews";
import Icon_property from "../../components/icon_property";
const product = (props) => {
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
  const propsData = [
    {
      type: "yellow",
      title: "Lorem Ipsum is simply",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
      list: [
        { text: "Beta 1,3/1,6 D-Glucan", id: 1 },
        { text: "Saccharomyces Cerevisiae", id: 2 },
        { text: "เบต้ากลูแคนบริสุทธิ์ 91%", id: 3 },
        { text: "นำเข้าจากสวิตเซอร์แลนด์", id: 4 },
        { text: "เข้มข้น 300 มิลลิกรรม", id: 5 },
        { text: "60 แคปซูลใน 1 ขวด", id: 6 },
      ],
    },
    {
      type: "red",
      title: "Lorem Ipsum is simply",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
      list: [
        { text: "Beta 1,3/1,6 D-Glucan", id: 1 },
        { text: "Saccharomyces Cerevisiae", id: 2 },
        { text: "เบต้ากลูแคนบริสุทธิ์ 91%", id: 3 },
        { text: "นำเข้าจากสวิตเซอร์แลนด์", id: 4 },
        { text: "เข้มข้น 300 มิลลิกรรม", id: 5 },
        { text: "60 แคปซูลใน 1 ขวด", id: 6 },
      ],
    },
  ];

  useEffect(() => {
    getStart();
  }, []);

  const getStart = async () => {};

  return (
    <div className="page-review page3">
      <section className="section-banner">
        <div className="banner-list">
          <img className="img-banner" src="static/img_mockup/banner1.png" />
          <span className="word-top">Product</span>
          <div className="text-banner2">
            <span className="title">Lorem Ipsum is simply</span>
            <span className="description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the{" "}
            </span>
          </div>
        </div>
      </section>

      <section className="section-property">
        <div className="box-property">
          {propsData &&
            propsData.map((item1, index1) => {
              return (
                <div className={"property-list " + item1.type} key={index1}>
                  <div className="img-product">
                    <img
                      className="img-banner"
                      src={`static/img_mockup/product_${item1.type}.png`}
                    />
                  </div>
                  <div className="property-product">
                    <span className="title">{item1.title}</span>
                    <span className="description">{item1.description}</span>
                    <span className="more my-3">ดูเพิ่มเติม</span>
                    <div className="box-content">
                      {item1.list.map((item2, index2) => {
                        return (
                          <div className="list-icon" key={index2}>
                            <div className={"icon " + item1.type}>
                              <Icon_property id={item2.id} />
                            </div>
                            <span>{item2.text}</span>
                          </div>
                        );
                      })}
                    </div>
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
    </div>
  );
};
export default product;
