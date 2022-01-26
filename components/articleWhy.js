import React, { useState, useEffect } from "react"
const ArticleWhy = (props) => {
    useEffect(() => {
    }, []);

    return (
        <div className="article-why">
            <div className="img">
                <img src={props.data.img}/>
            </div>
            <span className="desciption">{props.data.content}</span>
        </div>
    )
}
export default ArticleWhy