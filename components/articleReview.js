import React, { useState, useEffect } from "react"
const ArticleReview = (props) => {
    useEffect(() => {
    }, []);

    return (
        <div className="article-review">
            <div className="box-content">
                <div className="logo-article">
                    <img src="static/images/logo_article.png" />
                </div>
                
                <span className="brand-name">YOUR Beta Glucan</span>
                <div className="content">
                    <span className="title">{props.data.titleReview}</span>
                    <span className="desciption">{props.data.descipReview}</span>
                </div>
                <div className="user-post">
                    <span>{props.data.date}</span>
                    <span>{props.data.byUser}</span>
                </div>
            </div>
            <div className="icon">
                <img src={props.data.icon}/>
            </div>
        </div>
    )
}
export default ArticleReview