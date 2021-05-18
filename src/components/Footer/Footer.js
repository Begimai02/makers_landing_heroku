import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-wrapper">
                <p className="footer-p">© 2021 Makers</p>
                <div className="footer_info_icons">
                    <a rel="noreferrer" href="https://www.facebook.com/makerskg/" target="_blank"><div className="info_icon"><i className="fab fa-facebook-f"></i></div></a>
                    <a rel="noreferrer" href="https://www.instagram.com/makerskg/" target="_blank"><div className="info_icon"><i className="fab fa-instagram"></i></div></a>
                    <a rel="noreferrer" href="https://vk.com/makerskg" target="_blank"><div className="info_icon"><i className="fab fa-vk"></i></div></a>
                    <a rel="noreferrer" href="https://t.me/makerskg" target="_blank"><div className="info_icon"><i className="fab fa-telegram-plane"></i></div></a>
                </div>
            </div>
        </div>
    );
};

export default Footer;