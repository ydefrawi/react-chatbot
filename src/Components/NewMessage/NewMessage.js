import React from 'react';
import { isCompositeComponentWithType } from 'react-dom/test-utils';
import './NewMessage.css';



function NewMessage({prompt}) {
console.log("prompt", prompt)


    function questionLogic(){

		if(!prompt.user){
            return (
                <div className="q-speech-bubble">
                  {prompt.message}
                </div>
            )
        }   
        if(prompt.options){
            console.log("Button Here?")
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
