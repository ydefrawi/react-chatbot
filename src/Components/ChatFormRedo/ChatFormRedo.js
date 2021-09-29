import React, { useState, useEffect } from 'react';
import reactDom from 'react-dom';
import NewMessage from '../NewMessage/NewMessage'
import NewPrompt from '../NewPrompt/NewPrompt';

const prompts = [
	{
		id: 'q-name',
		message: "Hello There! What's your name?",
		next: 'a-name'
	},
	{
		id: 'a-name',
		user: true,
		next: 'q-code'
	},
	{
		id: 'q-code',
		message: 'Do you like to code?',
		next: 'a-code'
	},
	{
		id: 'a-code',
		options: [ { value: 'y', label: 'Yes', next: 'y-code' }, { value: 'n', label: 'No', next: 'n-code' } ]
	},
	{
		id: 'y-code',
		message: "That's awesome!",
		end: true
	},
	{
		id: 'n-code',
		message: 'You should learn to!',
		end: true
	}
];

function ChatFormRedo() {
	const [ steps, setSteps ] = useState(prompts);
	const [ history, setHistory ] = useState([]);
	const [ step, setStep ] = useState();
    const [answers, setAnswers ] = useState([])
	// const [ summary, setSummary ] = useState({
	//     name: '',
	//     likesToCode: ''
	// });

	// const renderMessage = (msg) => {
	// 	return <NewMessage message={msg} />;
	// };

	// const renderPrompt = (msg) => {
	// 	const prompt = <NewPrompt message={msg} />;
	// 	return <div>{prompt}</div>;
	// };

    
	useEffect(() => {
        setHistory(prompts[0]);
	}, []);


    const handleSubmit = (event) => {
        event.preventDefault();
        setAnswers(event.target.value);
    }

	return (
		<div>
			<div className="d-flex container">
				<div id="chat-box" className="card chat-card">
                
                {/* to be mapped over */}
					<NewMessage history={history}/>
                    <form onSubmit={handleSubmit}>
                        <input type="text" />
                        <button className="btn btn-primary" type="Submit">Submit</button>
                    </form>
                   
				</div>
			</div>
		</div>
	);
}

export default ChatFormRedo;
