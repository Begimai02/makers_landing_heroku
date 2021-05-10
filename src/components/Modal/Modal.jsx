import React, { useContext, useState } from 'react';
import './Modal.css';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { personContext } from '../../context/PersonContext';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        border: 'none',
        textAlign: 'center',
        position: 'relative',
        borderRadius: '8px'
    },
}));

const ModalPage = ({open, handleClose}) => {
    const classes = useStyles();
    const { addPerson } = useContext(personContext);
   
    const [values, setValues] = useState({
        name: '',
        number: '',
        email: ''
    })

    const handleChange = (e) => {
        let newPerson = {
            ...values,
            [e.target.name] : e.target.value
        }
        setValues(newPerson)
    }
    

    const handleSave = () => {
        addPerson(values)
        setValues({
            name: '',
            number: '',
            email: ''
        })
        handleClose()
    }

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={open}>
                <div className={classes.paper}>
                    <HighlightOffIcon onClick={() => handleClose()} className="modal_exit" fontSize="large" />
                    <h2 id="transition-modal-title">Оставить заявку</h2>
                    <div id="transition-modal-description" className="modal_form">
                        <div className="modal_form_first">
                            <input value={values.name} onChange={handleChange} name="name" className="modal_form_one" type="text" placeholder="Имя"/>
                            <input value={values.number} onChange={handleChange} name="number" className="modal_form_two" type="text" placeholder="Телефон"/>
                            <input value={values.email} onChange={handleChange} name="email" className="modal_form_three" type="text" placeholder="Email"/>
                        </div>
                    </div>

                    <div className="modal_btn_wrapper">
                        <button onClick={handleSave} className="btn_modal">Оставить заявку</button>
                    </div>
                </div>
                </Fade>
            </Modal>
        </div>
    );
};

export default ModalPage;