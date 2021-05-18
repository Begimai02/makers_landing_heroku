import React from 'react';
import './PageFive.css';
import career from '../../assets/career.png';
//💪
const PageFive = () => {
   
    return (
        <div className="pFive_outer">
            <div className="pFive_container">
                <div className="pFive_content">
                    <h1 className="pFive_title">Работа карьерного центра</h1>
                    <div className="pFive_info">
                        <ol className="pFive_list">
                            <li data-emoji="📄" className="pFive_list-item"><h4>Подготовка резюме</h4></li>
                            <li data-emoji="🧪" className="pFive_list-item"><h4> Подготовка к собеседованию через тестовые собеседования</h4></li>
                            <li data-emoji="🥷" className="pFive_list-item"><h4>Личная консультация опытного разработчика</h4></li>
                            <li data-emoji="🤝" className="pFive_list-item"><h4>Встречи и поддержка после выпуска</h4></li>
                            <li data-emoji="👩‍💻" className="pFive_list-item"><h4>Консультация с HR специалистом</h4></li>
                            <li data-emoji="🎯" className="pFive_list-item"><h4>Сопровождение в трудоустройстве</h4></li>
                        </ol>
                        <div className="pFive_img">
                            <img src={career} alt="People working"/>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    );
};

export default PageFive;

