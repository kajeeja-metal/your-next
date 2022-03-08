import React, { useState, useEffect } from "react"
const FooterMenu = (props) => {
    useEffect(() => {
    }, []);

    return (
        <div className="footer">
            <div className="brand">
                <a className="logo-brand">
                    <img src="static/img_mockup/logo.png"/>
                </a>
                <span>Spring Season Co.,Ltd All Right Reserved</span>
            </div>
            <div className="contact">
                <div className="mb-3">
                    <span>Contact Us</span>
                </div>
                <a>
                    <span>Line </span>: @YourThailand
                </a>
                <a>
                    <span>Phone </span>: 062-824-9142 l 093-895-5641
                </a>
                <a>
                    <span>Email </span>: yourofficialthailand@gmail.com
                </a>
            </div>
            <div className="social">
                <div className="mb-3">
                    <span>Social</span>
                </div>
                <div className="icon">
                    <a>
                        <img src="static/icon/Icon_line.png"/>
                    </a>
                    <a>
                        <img src="static/icon/Icon_facebook.png"/>
                    </a>
                    <a>
                        <img src="static/icon/Icon_instagram.png"/>
                    </a>
                    <a>
                        <img src="static/icon/Icon_youtube.png"/>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default FooterMenu