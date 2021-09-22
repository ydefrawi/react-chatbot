import React from 'react';
import './QuestionRender.css'

function QuestionRender({text}) {
	return (    
    <div className="speech-bubble sb1">
        <p className="question-prompt">{text}</p> 
    </div>
    )

}

export default QuestionRender;
