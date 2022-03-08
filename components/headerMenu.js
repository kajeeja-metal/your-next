import React, { useState, useEffect } from "react"
const HeaderMenu = (props) => {
    useEffect(() => {
    }, []);

    return (
        <div className="header">
            <a className="logo-brand">
                <img src="static/img_mockup/logo.png"/>
            </a>
            <div className="menu">
                <a className="active">Product</a>
                <a>Reviews</a>
                <a>News & Article</a>
                <a>About Us</a>
            </div>
            <a className="contact">Contact Us</a>
        </div>
    )
}
export default HeaderMenu