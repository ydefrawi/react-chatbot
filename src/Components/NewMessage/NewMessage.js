import React from 'react';
import './NewMessage.css';



function NewMessage({ history }) {
console.log("history", history)

    function questionLogic(){
		if(!history.user){
            return (
                <div className="q-speech-bubble">
                  {history.message}
                </div>
            )
        }   
        if(history.options){
            return (
                <div className="p-options">
                  <button className="btn btn-primary">One</button>
                </div>
            )
        }

		}



	return (

    <span> {questionLogic()}</span>
   
    );
}

export default NewMessage;
