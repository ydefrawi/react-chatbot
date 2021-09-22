import React, { useState, useEffect } from 'react';
import QuestionRender from '../Question/QuestionRender';
import Answer from '../Answer/Answer';
import './ChatForm.css';

function ChatForm() {
	const [ answers, setAnswers ] = useState([]);
	let [index, setIndex]=useState(1);
	const [history, setHistory]=useState([]);

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
		3:{
			questionNumber:3,
			question:"Do you have a valid driver's license?",
			questionType: 'binary'
		}, 
		3:{
			questionNumber:4,
			question:"You need one",
			questionType: 'binary'
		}, 
		3:{
			questionNumber:3,
			question:"Do you have a valid driver's license?",
			questionType: 'binary'
		}, 
	};

	function formEnd(){
		return(
			<div>
				<h1>Thank you for submitting!</h1>
			</div>
		)
	}

	const handleAnswer = (event) => {
		event.preventDefault();
		const {name, value}=event.target
		// let q=event.target.question
		setAnswers({...answers, [questions[index].question]:value})
		setHistory()
		if(index!=questions.length) {
			setIndex(index+=1)
		} else if(index=questions.length) {
			return formEnd();
		}
	};



	

	return (
		<div className="chat-container">
			<div className="chat-wrapper">
				<div className="chat-screen">
					<QuestionRender className="from-them margin-b_one margin-t_one" text={questions[index].question} handleAnswer={handleAnswer}/>
					<Answer questionNumber={questions[index].question} questionType={questions[index].questionType} handleAnswer={handleAnswer}/>
					{/* <QuestionRender text={questions[2].question} handleAnswer={handleAnswer}/>
					<Answer questionNumber={questions[2].questionNumber} questionType={questions[2].questionType} handleAnswer={handleAnswer}/>
					<QuestionRender text={questions[3].question} handleAnswer={handleAnswer}/>
					<Answer questionNumber={questions[3].questionNumber} questionType={questions[3].questionType} handleAnswer={handleAnswer}/> */}
				</div>
			</div>
		</div>
	);
}

export default ChatForm;
