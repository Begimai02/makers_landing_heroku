import React from 'react';
import Hero from './Hero/Hero';
import PageTwo from './PageTwo/PageTwo'
import PageThree from './PageThree/PageThree';
import PageFour from './PageFour/PageFour';
import PageFive from './PageFive/PageFive';
import PageSix from './PageSixReview/PageSix';
import PageSeven from './PageSevenCareer/PageSeven';
import PageEight from './PageEightFaq/PageEight';
import PageNine from './PageNine/PageNine';

const Main = () => {
    return (
        <div style={{background: "rgb(240, 240, 240)"}}>
                <Hero />
                <PageTwo />
                <PageThree />
                <PageFour />
                <PageFive />
                <PageSix />
                <PageSeven />
                <PageEight />
                <PageNine />
        </div>
    );
};

export default Main;