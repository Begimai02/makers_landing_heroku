import React, { useState } from 'react';
import './PageFour.css';
import Grid from '@material-ui/core/Grid';
import html from '../../assets/stack/html.png';
import javascript from '../../assets/stack/javascript.png';
import jquery from '../../assets/stack/jquery.png';
import react from '../../assets/stack/react.png';
import node from '../../assets/stack/node3.png';
import git from '../../assets/stack/git2.png';
import data from '../../assets/stack/data2.png';
import ModalPage from '../Modal/Modal';

const PageFour = () => {
    const [open, setOpen] = useState(false); //for modal inputs

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    
    const stack = [
        {title: "Html/Css Bootstrap", logo: html, class: "card html", mainClass: "cirlce_inner"},
        {title: "JavaScript", logo: javascript, class: "card js", mainClass: "cirlce_inner"},
        {title: "JQuery", logo: jquery, class: "card jq", mainClass: "cirlce_inner"},
        {title: "React Material UI", logo: react, class: "card mui", mainClass: "cirlce_inner"},
        {title: "Node.js Espress PostgreSQL Mongo Db", logo: node, class: "card node", mainClass: "cirlce_inner circle_node"},
        {title: "Git", logo: git, class: "card git", mainClass: "cirlce_inner"},
        {title: "Алгоритмы и структуры данных", logo: data, class: "card data", mainClass: "cirlce_inner"}
    ]
    return (
        <div>
             <div className="pFour_outer" id="stack">
                <div className="pFour_container">
                    <div className="pFour_content">
                        <h1 className="pFour_title">Технологии, которые ты изучишь в bootcamp</h1>
                        <div className="pFour_cards">
                            <Grid container className="pFour_root" alignItems="center" spacing={4} d-flex="true" justify="center">
                                {
                                    stack && stack.map((item) => (
                                        <Grid item key={item.title + "four"} mb="24"  lg={3}>
                                            <div className={item.class}>
                                                <div className="overlay"></div>
                                                <div className={item.mainClass}>
                                                    <img src={item.logo} alt="Logo of the Card"/>
                                                </div>
                                                <p>{item.title}</p>
                                            </div>
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        </div>
                        <div className="pFour_btn_wrapper">
                            <button onClick={handleOpen} className="btn_four">Оставить заявку</button>
                        </div>
                        <ModalPage handleClose={handleClose} open={open} />
                    </div>
                </div>
             </div>
        </div>
    );
};

export default PageFour;