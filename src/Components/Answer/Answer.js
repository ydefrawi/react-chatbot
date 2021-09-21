import React from 'react';
import './Answer.css';

const yes = () => {
	console.log('Yes');
};

const no = () => {
	console.log('No');
};

function Answer({questionType, questionNumber, handleAnswer}) {

	function questionLogic(){
		console.log(questionType)
		if (questionType === 'binary') {
			return (
				<div>
					<button className="answer-bubble" value={true} onClick={yes}>
						Yes
					</button>
					<button className="answer-bubble" value={false} onClick={no}>
						No
					</button>
				</div>
			);
		} else if (questionType === 'input') {
			return (
				<div>
					<form>
						<input type="text" name={questionNumber} placeholder="something" onChange={handleAnswer}/>
					</form>
				</div>
			);
		}
	}

	return (
		<div className="answer-bubble">
			{questionLogic()}
		</div>
	);
}

export default Answer;
