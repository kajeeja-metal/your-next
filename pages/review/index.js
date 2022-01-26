import React, { useState, useEffect } from "react"
import { Modal, Tabs, Tab, Row, Col, Nav, Image, Accordion } from 'react-bootstrap';
import ArticleReview from "../../components/articleReview";
import ArticleWhy from "../../components/articleWhy";
import ArticleProduct from "../../components/articleProduct";
import ArticleNews from "../../components/articleNews";
const Review = (props) => {
    const [articleReview, setArticleReview] = useState([
        {
            titleReview: 'ผลเลือดออกมาดีมากพร้อมให้คีโมต่อค่ะ',
            descipReview: 'หลังจากทานผลิตภัณฑ YOUR beta glucan แล้ว และได้ทำการมาตรวจค่าเลือด ปรากฎว่าค่าเลือดดีมากค่ะ จึงพร้อมให้ยาคีโมครั้งที่ 2 ได้เลยค่ะ ',
            date: 'APR 2021',
            byUser: 'คุณธนxxx',
            icon: 'static/img_mockup/icon-article.png'
        },{
            titleReview: 'ผลเลือดออกมาดีมากพร้อมให้คีโมต่อค่ะ',
            descipReview: 'หลังจากทานผลิตภัณฑ YOUR beta glucan แล้ว และได้ทำการมาตรวจค่าเลือด ปรากฎว่าค่าเลือดดีมากค่ะ จึงพร้อมให้ยาคีโมครั้งที่ 2 ได้เลยค่ะ ',
            date: 'APR 2021',
            byUser: 'คุณธนxxx',
            icon: 'static/img_mockup/icon-article2.png'
        },{
            titleReview: 'ผลเลือดออกมาดีมากพร้อมให้คีโมต่อค่ะ',
            descipReview: 'หลังจากทานผลิตภัณฑ YOUR beta glucan แล้ว และได้ทำการมาตรวจค่าเลือด ปรากฎว่าค่าเลือดดีมากค่ะ จึงพร้อมให้ยาคีโมครั้งที่ 2 ได้เลยค่ะ ',
            date: 'APR 2021',
            byUser: 'คุณธนxxx',
            icon: 'static/img_mockup/icon-article.png'
        },{
            titleReview: 'ผลเลือดออกมาดีมากพร้อมให้คีโมต่อค่ะ',
            descipReview: 'หลังจากทานผลิตภัณฑ YOUR beta glucan แล้ว และได้ทำการมาตรวจค่าเลือด ปรากฎว่าค่าเลือดดีมากค่ะ จึงพร้อมให้ยาคีโมครั้งที่ 2 ได้เลยค่ะ ',
            date: 'APR 2021',
            byUser: 'คุณธนxxx',
            icon: 'static/img_mockup/icon-article2.png'
        },{
            titleReview: 'ผลเลือดออกมาดีมากพร้อมให้คีโมต่อค่ะ',
            descipReview: 'หลังจากทานผลิตภัณฑ YOUR beta glucan แล้ว และได้ทำการมาตรวจค่าเลือด ปรากฎว่าค่าเลือดดีมากค่ะ จึงพร้อมให้ยาคีโมครั้งที่ 2 ได้เลยค่ะ ',
            date: 'APR 2021',
            byUser: 'คุณธนxxx',
            icon: 'static/img_mockup/icon-article.png'
        },{
            titleReview: 'ผลเลือดออกมาดีมากพร้อมให้คีโมต่อค่ะ',
            descipReview: 'หลังจากทานผลิตภัณฑ YOUR beta glucan แล้ว และได้ทำการมาตรวจค่าเลือด ปรากฎว่าค่าเลือดดีมากค่ะ จึงพร้อมให้ยาคีโมครั้งที่ 2 ได้เลยค่ะ ',
            date: 'APR 2021',
            byUser: 'คุณธนxxx',
            icon: 'static/img_mockup/icon-article2.png'
        }
    ])
    const [articleWhy, setArticleWhy] = useState([
        {
            img: 'static/img_mockup/why.png',
            content: '100% จากธรรมชาต และปลอดภัย'
        },{
            img: 'static/img_mockup/why.png',
            content: '100% จากธรรมชาต และปลอดภัย'
        },{
            img: 'static/img_mockup/why.png',
            content: '100% จากธรรมชาต และปลอดภัย'
        },
    ])
    const [articleProduct, setArticleProduct] = useState([
        {
            bg: 'static/img_mockup/product.png',
            img: 'static/img_mockup/product_1.png',
            title: 'YOUR Beta Glucan (เบต้ากลูแคน)',
            desciption: 'ยัวร์ เบต้ากลูแคน (YOUR Beta Glucan) เป็นผลิตภัณฑ์เสริมอาหารสกัดมาจาก ผนังเซลล์ของยีสต์ Saccharomyces'
        },{
            bg: 'static/img_mockup/product.png',
            img: 'static/img_mockup/product_1.png',
            title: 'YOUR Beta Glucan (เบต้ากลูแคน)',
            desciption: 'ยัวร์ เบต้ากลูแคน (YOUR Beta Glucan) เป็นผลิตภัณฑ์เสริมอาหารสกัดมาจาก ผนังเซลล์ของยีสต์ Saccharomyces'
        },{
            bg: 'static/img_mockup/product.png',
            img: 'static/img_mockup/product_1.png',
            title: 'YOUR Beta Glucan (เบต้ากลูแคน)',
            desciption: 'ยัวร์ เบต้ากลูแคน (YOUR Beta Glucan) เป็นผลิตภัณฑ์เสริมอาหารสกัดมาจาก ผนังเซลล์ของยีสต์ Saccharomyces'
        },,{
            bg: 'static/img_mockup/product.png',
            img: 'static/img_mockup/product_1.png',
            title: 'YOUR Beta Glucan (เบต้ากลูแคน)',
            desciption: 'ยัวร์ เบต้ากลูแคน (YOUR Beta Glucan) เป็นผลิตภัณฑ์เสริมอาหารสกัดมาจาก ผนังเซลล์ของยีสต์ Saccharomyces'
        },{
            bg: 'static/img_mockup/product.png',
            img: 'static/img_mockup/product_1.png',
            title: 'YOUR Beta Glucan (เบต้ากลูแคน)',
            desciption: 'ยัวร์ เบต้ากลูแคน (YOUR Beta Glucan) เป็นผลิตภัณฑ์เสริมอาหารสกัดมาจาก ผนังเซลล์ของยีสต์ Saccharomyces'
        },
    ])
    const [articleNews, setArticleNews] = useState([
        {
            img: 'static/img_mockup/news.png',
            content: '10 อาหารป้องกันโรคหัวใจ แม้เธอบอกเรายังไม่ใช่ แต่หัวใจก็แข็งแรง!'
        },{
            img: 'static/img_mockup/news.png',
            content: '10 อาหารป้องกันโรคหัวใจ แม้เธอบอกเรายังไม่ใช่ แต่หัวใจก็แข็งแรง!'
        },{
            img: 'static/img_mockup/news.png',
            content: '10 อาหารป้องกันโรคหัวใจ แม้เธอบอกเรายังไม่ใช่ แต่หัวใจก็แข็งแรง!'
        },
    ])
    useEffect(() => {
        getStart()
    }, []);

    const getStart = async () => {
        
    }

    return (
        <div className="page-review page1">

            <section className="section-banner">
                <div className="banner-list">
                    <img className="img-banner" src="static/img_mockup/banner1.png" />
                    <span className="text-banner1">ภูมิคุ้มกันแข็งแรง<br/>ห่างไกลมะเร็ง สุดยอด</span>
                </div>
            </section>
            <section className="section-review">
                <span className="title-section">
                    Reviews
                </span>
                <div className="box-article">
                    { articleReview &&
                        articleReview.map((item, index) => {
                            return <ArticleReview data={item} key={index}/>
                        })
                    }
                </div>
                <div className="flex-center">
                    <span className="more my-3">ดูเพิ่มเติม</span>
                </div>
            </section>
            <section className="section-why">
                <span className="title-section">
                    Why us?
                </span>
                <div className="box-article">
                    { articleWhy &&
                        articleWhy.map((item, index) => {
                            return <ArticleWhy data={item} key={index}/>
                        })
                    }
                </div>
            </section>
            <section className="section-product">
                <span className="title-section">
                    Product
                </span>
                <div className="box-article">
                    { articleProduct &&
                        articleProduct.map((item, index) => {
                            return <ArticleProduct class={index == 2 ? ' focus' : ''} data={item} key={index}/>
                        })
                    }
                </div>
            </section>
            <section className="section-news">
                <span className="title-section">
                    News & Article
                </span>
                <div className="box-article">
                    { articleNews &&
                        articleNews.map((item, index) => {
                            return <ArticleNews data={item} key={index}/>
                        })
                    }
                </div>
                <div className="flex-center">
                    <span className="more my-3">ดูเพิ่มเติม</span>
                </div>
            </section>
            
        </div>
    )
}
export default Review