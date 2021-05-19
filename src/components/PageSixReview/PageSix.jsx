import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './PageSix.css';

const PageSix = () => {
    let settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };

    const settings1 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div>
            <div className="pSix_outer">
                <div className="pSix_container">
                    <div className="pSix_content">
                        <h1 className="pSix_title">Отзывы наших выпускников:</h1>
                        <Slider className="pThree_max" {...settings}>
                            <div className="pThree">
                                <h3 className="t_card_h">Нурбек JavaScript 10</h3>
                                <p className="t_card_p">Makers дает уверенные базовые знания в сфере веб разработки. Я многому научился.</p>
                            </div>
                            <div className="pThree">
                                <h3 className="t_card_h">Элдияр Python 8 ev.</h3>
                                <p className="t_card_p">Здесь я получил стартовую точку для дальнейшего роста. Обучение здесь прошло отлично!</p>
                            </div>
                            <div className="pThree">
                                <h3 className="t_card_h">Анастасия Python 10</h3>
                                <p className="t_card_p">Очень дружественная компания. Приятно учиться и работать, очень мотивирует!</p>
                            </div>
                            <div className="pThree">
                                <h3 className="t_card_h">Акай JavaScript 7 ev. </h3>
                                <p className="t_card_p">Очень интенсивные и продуктивные курсы. Получил много практических знаний.</p>
                            </div>
                        </Slider>


                        <Slider className="pThree_min" {...settings1}>
                            <div className="pThree pThreeOne">
                                <h3 className="t_card_h">Нурбек JavaScript 10</h3>
                                <p className="t_card_p">Makers дает уверенные базовые знания в сфере веб разработки.</p>
                           </div>
                            <div className="pThree pThreeOne">
                                <h3 className="t_card_h">Элдияр Python 8 ev.</h3>
                                <p className="t_card_p">Здесь я получил стартовую точку для дальнейшего роста. Обучение здесь прошло отлично!</p>
                           </div>
                            <div className="pThree pThreeOne">
                                <h3 className="t_card_h">Анастасия Python 10</h3>
                                <p className="t_card_p">Очень дружественная компания. Приятно учиться и работать, очень мотивирует!</p>
                           </div>
                            <div className="pThree pThreeOne">
                                <h3 className="t_card_h">Акай JavaScript 7 ev.</h3>
                                <p className="t_card_p">Очень интенсивные и продуктивные курсы. Получил много практических знаний.</p>
                           </div>
                        </Slider>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default PageSix;