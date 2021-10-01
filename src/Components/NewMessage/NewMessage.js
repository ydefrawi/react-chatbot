import React from 'react';
import './NewMessage.css';



function NewMessage({prompt}) {
    console.log("prompt", prompt)


    function questionLogic(){
        
		if(prompt.type==="message"){
            return (
                <div className="q-speech-bubble">
    
                  {prompt.message}
                </div>
            )
        } 

        console.log(prompt.type)/*?*/

        if(prompt.type==="user-input"){
            return (
                <div className="q-speech-bubble">
                  Hello there!
                </div>
            )
        } 
       

        if(prompt.type==="choice"){
            console.log("Button Here?")
            return (
                <div className="p-options">
                {prompt.options.map((item)=>
                    <button className="btn btn-primary" value={item.value} label={item.label}>{item.label}</button>
                )}
                </div>
            )
        }
		}

	return (

    <span> {questionLogic()}</span>
   
    );
}

export default NewMessage;
