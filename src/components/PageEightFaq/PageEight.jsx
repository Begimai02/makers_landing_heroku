import React from 'react';
import './PageEight.css';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { eightData } from './EightData';


const useStyles = makeStyles((theme) => ({
    root3: {
      width: '80%',
      margin: 'auto',
      padding: '20px',
      textAlign: 'start',
      fontFamily: 'Montserrat'
    },
    heading: {
      fontWeight: theme.typography.fontWeightRegular,
      padding: '10px',
      textAlign: 'start',
      fontFamily: 'Montserrat',
    },
    body: {
        fontFamily: 'Montserrat',
        fontSize: '14px',
        textAlign: 'start'
    },
    acc: {
        borderRadius: '4px',
        margin: '10px 0'
    },
    more: {
        color: 'rgb(146, 90, 246)'
    }
}));

const PageEight = () => {
    const classes = useStyles();

    return (
        <div className={classes.root3}>
            <div className="pEight_outer">
                <h1 className="pEight_title">FAQ</h1>
                {
                    eightData && eightData.map(item => (
                        <Accordion key={item.title} className={classes.acc}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon className={classes.more} />}
                                aria-controls={item.aria}
                                id={item.id}
                            >
                                <Typography className={`${classes.heading} pEight_heading`}>{item.title}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography component={'div'} className={classes.body}>
                                    {item.desc}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))
                }
            </div>
        </div>
    );
};

export default PageEight;