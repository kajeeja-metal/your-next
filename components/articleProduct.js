import React, { useState, useEffect } from "react"
const ArticleProduct = (props) => {
    useEffect(() => {
    }, []);

    return (
        <div className={`article-product${props.class}`} style={{backgroundImage:`url("${props.data.bg}")`}}>
            <div className="img-product">
                <img src={props.data.img}/>
            </div>
            <div className="content">
                <span className="title">{props.data.title}</span>
                <span className="desciption">{props.data.desciption}</span>
            </div>
        </div>
    )
}
export default ArticleProduct