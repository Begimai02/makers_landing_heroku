import React, { useState } from 'react';
import ModalPage from '../Modal/Modal';
import './PageSeven.css';

const PageSeven = () => {
    const [open, setOpen] = useState(false); //for modal inputs

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    
    const sevenCareer = [
        {title: "Регистрация на курс", desc: "Онлайн, занимате около 4 минут."},
        {title: "Прохождение вступительного теста", desc: "Займет около 20 минут, общие вопросы, скорость печати. Ответы вы узнаете в течение 2 дней."},
        {title: "Пройти наш бесплатный курс по основам программирования", desc: "Обязательный этап перед bootcamp. С этими знаниями вам будет легче обучаться в bootcamp."},
    ]
    return (
        <div className="pSeven_outer" id="seven">
            <div className="pSeven_container">
                <div className="pSeven_content">
                    <h1 className="pSeven_title">Как поступить в bootcamp?</h1>
                    <ol className="pSeven_list">
                        {
                            sevenCareer && sevenCareer.map((item) => (
                                <li key={item.title} className="pSeven_list-item">
                                    <h2 className="list_head">{item.title}</h2>
                                    <span>{item.desc}</span>
                                </li>
                            ))
                        }
                    </ol>

                    <div className="pSeven_btn_wrapper">
                        <button onClick={handleOpen} className="btn_seven">Оставить заявку</button>
                    </div>
                    <ModalPage handleClose={handleClose} open={open} />
                </div>
            </div>
        </div>
    );
};

export default PageSeven;