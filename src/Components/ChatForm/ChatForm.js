import React, { useState, useEffect } from 'react';
import QuestionRender from '../Question/QuestionRender';
import Answer from '../Answer/Answer';
import './ChatForm.css';

function ChatForm() {
	const [ answers, setAnswers ] = useState([]);
	let [ index, setIndex ] = useState(1);
	// const [ history, setHistory ] = useState([
		
	// 	{
	// 		question:value,
	// 		answer:value
	// 	},
	// 	{
	// 		question:value,
	// 		answer:value,
	// 	}
	// 	]);

	const questions = {
		1: {
			questionNumber: 1,
			question: 'Hello! Looking for employment?',
			questionType: 'binary'
		},
		2: {
			questionNumber: 2,
			question: 'Great! Fill out your info below',
			questionType: 'input'
		},
		3: {
			questionNumber: 3,
			question: "Do you have a valid driver's license?",
			questionType: 'binary'
		},
		4: {
			questionNumber: 4,
			question: 'Great! Please upload a photo',
			questionType: 'upload'
		},
		5: {
			questionNumber: 5,
			question: 'You need one',
			questionType: 'terminate'
		},
		6: {
			questionNumber: 6,
			question: "That's OK! Let's move on.",
			questionType: 'auto-response'
		},
		7: {
			questionNumber: 7,
			question: 'Thank you for submitting!',
			questionType: 'end-prompt'
		}
	};

	function formEnd() {
		return (
			<div>
				<h1>Thank you for submitting!</h1>
			</div>
		);
	}

	const handleAnswer = (event) => {
		event.preventDefault();
		const { name, value } = event.target;
		console.log(index);
		console.log(questions[index].questionType);
		setAnswers({ ...answers, [questions[index].question]: value });
		// setHistory(history.push(...answers));

		//TODO: Change these to switch case

		// Do you have a valid drivers license. Routes to appropriate question
		console.log('value', value);
		if (index === 3 && value === 'Yes') {
			return setIndex(4);
		} else if (index === 3 && value === 'No') {
			return setIndex(5);
		}

		//after upload
		if (index === 4) {
			return setIndex(7);
		}

		//questions that terminate the form
		if (questions[index].questionType === 'terminate') {
			return setIndex(questions.length);
		}

		//iterates to next question (default)
		if (index != questions.length) {
			console.log("ITERATING")
			setIndex((index += 1));
		} else if ((index = questions.length)) {
			return formEnd();
		}
	};

	//iterates to next question, higher scope
	const toNextQuestion = (event) => {
		event.preventDefault();
		if (index != questions.length) {
			setIndex((index += 1));
		} else if ((index = questions.length)) {
			return formEnd();
		}
	};

	const handleInput = (event) => {
		event.preventDefault();
		const { name, value } = event.target;
		// let q=event.target.question
		setAnswers({ ...answers, [questions[index].question]: value });
		// setHistory()
	};

	return (
		<div className="chat-container">
			<div className="chat-wrapper">
				<div className="chat-screen">
					{/* {history.map((item)=>
						<div>
						<QuestionRender text={item} />
						<Answer/>
						</div>
					)} */}
					<QuestionRender text={questions[index].question} handleAnswer={handleAnswer} />
					<Answer
						questionNumber={questions[index].question}
						questionType={questions[index].questionType}
						handleAnswer={handleAnswer}
						handleInput={handleInput}
						toNextQuestion={toNextQuestion}
					/>
				</div>
			</div>
		</div>
	);
}

export default ChatForm;
