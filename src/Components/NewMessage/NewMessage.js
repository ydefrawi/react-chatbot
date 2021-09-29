import React from 'react';
import './NewMessage.css'

function NewMessage({history}) {
return(
    <div>
        <div className="q-speech-bubble">
            {console.log(history)}
            {!history.user&&history.message}        
        </div>
       
    </div>
)
}

export default NewMessage;