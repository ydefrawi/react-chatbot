import React from 'react';
import './Answer.css';

// const yes = () => {
// 	console.log('Yes');
// };

// const no = () => {
// 	console.log('No');
// };

function Answer({ questionType, question, handleAnswer }) {
	function yesNo() {
		return (
			<div>
				<button className="answer-bubble" question={question} name={question} value={'Yes'} onClick={handleAnswer}>
					Yes
				</button>
				<button className="answer-bubble" question={question} name={question} value={'No'} onClick={handleAnswer}>
					No
				</button>
			</div>
		);
	}

	function formInput() {
		return (
			<div>
				<form>
				<input type="text" data-question={question} name={question} placeholder="something"  />
				<button onClick={handleAnswer}>Submit</button>
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
			default:
				break;
		}
	}

	return <div className="answer-bubble">{questionLogic()}</div>;
}

export default Answer;
