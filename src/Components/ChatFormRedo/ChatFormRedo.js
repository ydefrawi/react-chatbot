import React, { useState, useEffect } from 'react';
import NewMessage from '../NewMessage/NewMessage'


const prompts = [
	{
		id: 'q-name',
		type:"message",
		first: true,
		message: "Hello There! What's your name?",
		next: 'a-name',
	},
	{
		id: 'a-name',
		type:"user-input",
		user: true,
		next: 'q-code',
		
	},
	{
		id: 'q-code',
		type:"message",
		message: 'Do you like to code?',
		next: 'a-code',
	},
	{
		id: 'a-code',
		type:"choice",
		options: [ { value: 'y', label: 'Yes', next: 'y-code' }, { value: 'n', label: 'No', next: 'n-code' } ]

	},
	{
		id: 'y-code',
		type:"last",
		message: "That's awesome!",
		
	},
	{
		id: 'n-code',
		type:"last",
		message: 'You should learn to!',
		// last: true
	},
	{ 
		id: 'end-form',
		type:"end",
		message: "Thank you for your time!",
		// last: true
	}
];

console.log(prompts)


// finds the question in prompts[] with a specific id
const activeQuestion = (id) => prompts.find((prompt) => prompt.id === id);

function ChatFormRedo() {

    // sets first question to prompts[0]
	const [index, setIndex] = useState(0);
	const [history, setHistory ] = useState([prompts[0]]);
	// sets the 'active' question. 
    const [active, setActive ] = useState(prompts[1].id)

useEffect(() => {
		console.log("active", active)
}, [])


    const promptData = activeQuestion(active);

    const handleSubmit = (event) => {
		event.preventDefault();
		console.log(active)
		const fd = new FormData(event.target);
		
		// Store the history with the question details to map through later. If it's the first prompt, overwrite history.
		if(history===prompt[0]){
			setHistory([
				{
					...promptData,
					value: fd.get('answer')
				}
			]);
		} else {
			setHistory([
				...history,
				{
					...promptData,
					value: fd.get('answer')
				}
			]);
		}
       
    //checks if there's a next question trigger. If so, sets Active in state to the correct prompt
	//TODO have it move to the prompt with the matching 'next' trigger when the prompt has options[] based on the user's selection

	//TODO if the active prompt ends the form, (last=true), move to the final prompt


        if (promptData.next) {
            setActive(promptData.next);
          } else if (promptData.type==='choice'){
			setActive("terminate")
		  } else if (promptData.type==='last'){
			setActive("terminate")
		  } else if (promptData.type==='end') {
			setActive("end-form")
		  }

       
    }

	return (
		<div>
			<div className="d-flex container">
				<div id="chat-box" className="card chat-card">
                
                {history?.map((prompt)=>
                    <NewMessage key={prompt.id} prompt={prompt} />
                )}
					

                    <form className="chat-form" onSubmit={handleSubmit}>
                        <input className="chat-input" name="answer"/>
                        <button className="btn btn-primary submit-btn" type="submit" >Submit</button>
                    </form>
                   
				</div>
			</div>
		</div>
	);
}

export default ChatFormRedo;
