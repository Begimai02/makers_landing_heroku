import React, { useState } from 'react';
import './Hero.css'
import hero2 from '../../assets/main3.jpg';
import ModalPage from '../Modal/Modal';
import { Link } from 'react-router-dom';

const Hero = () => {
    const [open, setOpen] = useState(false); //for modal inputs

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className='hero_container'>
            <div className='hero_content'>

                <div className="hero_img">
                    <img src={hero2} alt=""/>
                </div>

                <div className="hero_info">
                    <h1 className='hero_title'>Научись программировать за 3 месяца обучаясь 5 дней в неделю по 8 часов.</h1>
                    <h3 className='hero_text'>520 часов обучения, полностью онлайн, 3 раза быстрее, чем другие курсы в Алматы</h3>
                </div>
                
            </div>

            <div className="hero_btn_wrapper">
                    <button onClick={handleOpen} className="btn_hero">Оставить заявку</button>
                    <Link to="/pay" style={{textDecoration: 'none'}}>
                        <button  className="btn_hero btn_pay">Записаться</button>
                    </Link>
            </div>
            <ModalPage handleClose={handleClose} open={open} />
        </div>
    );
};

export default Hero;