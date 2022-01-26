import React, { useState, useEffect } from "react"
import { Modal, Tabs, Tab, Row, Col, Nav, Image, Accordion } from 'react-bootstrap';
import ArticleReview from "../../components/articleReview";
import ArticleNews from "../../components/articleNews";
const Review2 = (props) => {
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
        <div className="page-review page2">

            <section className="section-banner">
                <div className="banner-list">
                    <img className="img-banner" src="static/img_mockup/banner1.png" />
                    <span className="word-top">Reviews</span>
                    <div className="text-banner2">
                        <span className="title">Lorem Ipsum is simply</span>
                        <span className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </span>
                    </div>
                    
                </div>
            </section>
            <section className="section-review">
                <div className="box-article">
                    { articleReview &&
                        articleReview.map((item, index) => {
                            return <ArticleReview data={item} key={index}/>
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
export default Review2