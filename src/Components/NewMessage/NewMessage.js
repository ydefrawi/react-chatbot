import React from 'react';
import './NewMessage.css';

function NewMessage({ history }) {
	return (
    <div className="q-speech-bubble">
    {console.log("history",history)}
    {!history.user && history.message}
    </div>
    );
}

export default NewMessage;
