import React from 'react';
import axios from 'axios';

const API = 'https://sheet.best/api/sheets/dbb32bd7-b9d4-41a1-a15a-aaa9e4fc1e4e'

export const personContext = React.createContext()

// const INIT_STATE = {
//     person: {}
// }

// const reducer = (state = INIT_STATE, action) => {
//     switch(action.type){
//         case "ADD_PERSON": 
//             return {...state, person: action.payload}
//         default: return state
//     }
// }


const PersonContextProvider = ({children}) => {
    // const [state, dispatch] = useReducer(reducer, INIT_STATE)

    const addPerson = async (pers) => {
        console.log(pers)
        try{
            await axios.post(API, pers)
        }catch(e){
            console.log(e)
        }
    }

    return (
        <personContext.Provider value={{
            addPerson
        }}>
            {children}
        </personContext.Provider>
    );
};

export default PersonContextProvider;