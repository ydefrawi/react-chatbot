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
			<div className="button-container">
				<button
					className="btn-danger"
					question={question}
					name={question}
					value={'Yes'}
					onClick={handleAnswer}
				>
					Yes
				</button>
				<button
					className="btn-danger"
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
					<button className="btn btn-primary btn-sm">Submit</button>
				</form>
			</div>
		);
	}

	function upload() {
		return (
			<div>
				<form onChange={handleInput} onSubmit={handleAnswer}>
					<button className="btn btn-primary">Upload Photo</button>
				</form>
			</div>
		);
	}

	function terminateForm() {
		return (
			<div>
				<form>
					<p>{question}</p> 
					<button className="btn btn-danger" onClick={handleAnswer}>Continue</button>
				</form>
			</div>
		);
	}

	function autoResponse() {
		return (
			<div>
				<form>
					<p>Auto Response</p> 
					<button onClick={handleAnswer}>Continue</button>
				</form>
			</div>
		);
	}

	function endPrompt() {
		return (
			<div>
				<button className="btn btn-danger">End Form</button>
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
