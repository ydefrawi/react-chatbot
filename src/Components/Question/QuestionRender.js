import React from 'react';
import './QuestionRender.css'

function QuestionRender(props) {
	return (    
    <div className="question-bubble">
    {props.text}
    </div>
    )

}

export default QuestionRender;
