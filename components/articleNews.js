import React, { useState, useEffect } from "react"
const ArticleNews = (props) => {
    useEffect(() => {
    }, []);

    return (
        <div className="article-news">
            <div className="img-news">
                <img src={props.data.img}/>
            </div>
            <span className="desciption">{props.data.content}</span>
        </div>
    )
}
export default ArticleNews