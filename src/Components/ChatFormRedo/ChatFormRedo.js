import React, { useState, useEffect } from 'react';
import NewMessage from '../NewMessage/NewMessage';

const prompts = [
	{
		id: 'q-name',
		type: 'message',
		first: true,
		message: "Hello There! What's your name?",
		next: 'a-name'
	},
	{
		id: 'a-name',
		type: 'user-input',
		user: true,
		next: 'name-response'
	},
	{
		id: 'name-response',
		type: 'message',
		message: 'Hello there!',
		next: 'q-code'
	},
	{
		id: 'q-code',
		type: 'message',
		message: 'Do you like to code?',
		next: 'a-code'
	},
	{
		id: 'a-code',
		type: 'choice',
		options: [
			{ value: 'y', label: 'Yes', next: 'y-code' },
			{ value: 'n', label: 'No', next: 'n-code' },
			{ value: 'm', label: 'Maybe', next: 'm-code' }
		]
	},
	{
		id: 'y-code',
		type: 'last',
		message: "That's awesome!"
	},
	{
		id: 'n-code',
		type: 'last',
		message: 'You should learn to!'
		// last: true
	},
	{
		id: 'm-code',
		type: 'last',
		message: 'Maybe!? You should really think about it!'
		// last: true
	},
	{
		id: 'end-form',
		type: 'end',
		message: 'Thank you for your time!'
		// last: true
	}
];

// finds the question in prompts[] with a specific id
const activeQuestion = (id) => prompts.find((prompt) => prompt.id === id);

function ChatFormRedo() {
	//? const [ index, setIndex ] = useState(0);

	// sets first question to prompts[0]
	const [ history, setHistory ] = useState([ prompts[0] ]);
	// sets the 'active' question's ID.
	const [ active, setActive ] = useState(prompts[1].id);
	const [ previousVal, setPreviousVal ] = useState('');
	const [ input, setInput ] = useState('');

	useEffect(() => {
		console.log('active', active);		
		// if(currentPromptData.type==="message"){
		// 	setActive(currentPromptData.next)
		// }
	}, []);

	const currentPromptData = activeQuestion(active);
	// console.log('currentPromptData', currentPromptData);

	const handleChange=(event)=>{
		event.preventDefault();
		setInput(event.target.value)
	}

	const handleChoice = (event) => {
		event.preventDefault();
		setHistory([
			...history,
			{
				...currentPromptData,
				value: event.target.value
			}
		]);
		if (currentPromptData.next) {
			setActive(currentPromptData.next);
		}
	};
	
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log('active', active);
		const fd = new FormData(event.target);
		// Store the history with the question details to map through later. If it's the first prompt, overwrite history.
		if (history === prompt[0]) {
			setHistory([
				{
					...currentPromptData,
					value: fd.get('answer')
				}
			]);
		} else {
			setHistory([
				...history,
				{
					...currentPromptData,
					value: fd.get('answer')
				}
			]);
			setPreviousVal(fd.get('answer'));
		}

		//checks if there's a next question trigger. If so, sets Active in state to the correct prompt
		//TODO have it move to the prompt with the matching 'next' trigger when the prompt has options[] based on the user's selection
		//TODO if the active prompt ends the form, (last=true), move to the final prompt

		if (currentPromptData.next) {
			setActive(currentPromptData.next);
		}


		//! Trying to display the next prompt if it's type is "message" without having to hit 'Submit'
		// if (currentPromptData.type==="message"){
		// 	setActive(currentPromptData.next)
		// }
		// else if (currentPromptData.type === 'message' && currentPromptData.next) {
		// 	setActive(currentPromptData.next);
		// }
		// else if (currentPromptData.type==='choice'){
		// 	setActive("choice")
		//   } else if (currentPromptData.type==='last'){
		// 	setActive("last")
		//   } else if (currentPromptData.type==='end') {
		// 	setActive("end-form")
		//   }
	};

	
	return (
		<div>
			<div className="d-flex container">
				<div id="chat-box" className="card chat-card">
{/* Mapping over history to render previous questions */}
					{history.map((prompt) => (
						<NewMessage
							key={prompt.id}
							prompt={prompt}
							previousVal={previousVal}
							handleSubmit={handleSubmit}
							handleChoice={handleChoice}
							input={input}
						/>
					))}

{/* Input/Chat Form. Static. */}
					<form className="chat-form" onSubmit={handleSubmit}>
						<input className="chat-input" name="answer" onChange={handleChange} />
						<button className="btn btn-primary submit-btn" type="submit">
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default ChatFormRedo;
