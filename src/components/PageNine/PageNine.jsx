import React from 'react';
import './PageNine.css';

const PageNine = () => {
    return (
        <div className="pNine_outer">
        <div className="pNine_container">
            <div className="pNine_content">
                <h1 className="pNine_title">Получить консультацию</h1>
                <div className="pNine_form">
                    <div className="form_first">
                        <input className="form_one" type="text" placeholder="Имя"/>
                        <input className="form_two" type="text" placeholder="Телефон"/>
                        <input className="form_three" type="text" placeholder="Email"/>
                    </div>
                </div>
                
                <div className="pNine_btn_wrapper">
                    <button className="btn_nine">Оставить заявку</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default PageNine;