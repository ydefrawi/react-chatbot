import React, { useState, useEffect } from 'react';
import QuestionRender from '../Question/QuestionRender';
import Answer from '../Answer/Answer';
import './ChatForm.css';

function ChatForm() {
	const [ answers, setAnswers ] = useState([]);
	

	const handleAnswer = (event) => {
		const {name, value}=event.target

		setAnswers({...answers, [name]:value})
	};


	const questions = {
		1:{
			questionNumber:1,
			question:'Hello! Looking for employment?',
			questionType: 'binary'
		}, 
		2:{
			questionNumber:2,
			question:'Great! Fill out your info below',
			questionType: 'input'
		}, 
	};


	return (
		<div className="chat-container">
			<div className="chat-wrapper">
				<div className="chat-screen">
					<QuestionRender text={questions[1].question} handleAnswer={handleAnswer}/>
					<Answer questionNumber={questions[1].questionNumber} questionType={questions[1].questionType} handleAnswer={handleAnswer}/>
					<QuestionRender text={questions[2].question} handleAnswer={handleAnswer}/>
					<Answer questionNumber={questions[2].questionNumber} questionType={questions[2].questionType} handleAnswer={handleAnswer}/>
				</div>
			</div>
		</div>
	);
}

export default ChatForm;
