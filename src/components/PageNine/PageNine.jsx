import React, { useContext, useState } from 'react';
import './PageNine.css';
import { personContext } from '../../context/PersonContext';

const PageNine = () => {
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
       
    }

    return (
        <div className="pNine_outer">
        <div className="pNine_container">
            <div className="pNine_content">
                <h1 className="pNine_title">Получить консультацию</h1>
                <div className="pNine_form">
                    <div className="form_first">
                        <input value={values.name} onChange={handleChange} name="name" className="form_one" type="text" placeholder="Имя"/>
                        <input value={values.number} onChange={handleChange} name="number" className="form_two" type="text" placeholder="Телефон"/>
                        <input value={values.email} onChange={handleChange} name="email" className="form_three" type="text" placeholder="Email"/>
                    </div>
                </div>
                
                <div className="pNine_btn_wrapper">
                    <button onClick={handleSave} className="btn_nine">Оставить заявку</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default PageNine;