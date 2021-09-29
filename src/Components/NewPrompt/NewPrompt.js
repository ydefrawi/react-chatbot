import React from 'react';
import './NewPrompt.css'

function NewPrompt(props) {
return(
    <div>
        <div className="a-speech-bubble">
            {/* {props.message}         */}
            <input type="text">Input</input>
        </div>
       
    </div>
)
}

export default NewPrompt;