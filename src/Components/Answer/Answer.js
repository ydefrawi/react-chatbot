import React from 'react';
import './Answer.css';

// const yes = () => {
// 	console.log('Yes');
// };

// const no = () => {
// 	console.log('No');
// };

function Answer({ questionType, question, handleAnswer, handleInput, toNextQuestion }) {

	function yesNo() {
		return (
			<div>
				<button
					className="answer-bubble"
					question={question}
					name={question}
					value={'Yes'}
					onClick={handleAnswer}
				>
					Yes
				</button>
				<button
					className="answer-bubble"
					question={question}
					name={question}
					value={'No'}
					onClick={handleAnswer}
				>
					No
				</button>
			</div>
		);
	}

	function formInput() {
		return (
			<div>
				<form onChange={handleInput} onSubmit={toNextQuestion}>
					<input type="text" data-question={question} name={question} placeholder="something"  />
					<button >Submit</button>
				</form>
			</div>
		);
	}

	function upload() {
		return (
			<div>
				<form onChange={handleInput} onSubmit={handleAnswer}>
					<button>Upload Photo</button>
				</form>
			</div>
		);
	}

	function terminateForm() {
		return (
			<div>
				<form>
					<p>{question}</p> 
					<button onClick={handleAnswer}>Continue</button>
				</form>
			</div>
		);
	}

	function autoResponse() {
		return (
			<div>
				<form>
					<p>Auto Response</p> 
					<button>Continue</button>
				</form>
			</div>
		);
	}

	function endPrompt() {
		return (
			<div>
				<p> Thank you for submitting! Our people will get back to you in 3-5 business days</p>
			</div>
		);
	}

	function questionLogic() {
		switch (questionType) {
			case 'binary':
				return yesNo();
			case 'input':
				return formInput();
			case 'auto-response':
				return autoResponse();
			case 'terminate':
				return terminateForm();
			case 'end-prompt':
				return endPrompt();
			case 'upload':
				return upload();
			default:
				break;
		}
	}

	return <div className="answer-bubble">{questionLogic()}</div>;
}

export default Answer;
