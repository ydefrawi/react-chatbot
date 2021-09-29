import React, { useState, useEffect } from 'react';
import NewMessage from '../NewMessage/NewMessage'

const findQuestion = (id) => prompts.find((item) => item.id === id);

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
    //sets first question to 0. May be causing a prob
	const [ history, setHistory ] = useState([prompts[0]]);
    const [active, setActive ] = useState(prompts[1].id)
    const [value, setValue ] = useState("")

    const promptData = findQuestion(active);


    // const handleChange = (event) => {
    //     event.preventDefault();
    //     setValue(event.target.value);
    // }

    const handleSubmit = (event) => {
    // Store the history with the question details
    // to go through later
        event.preventDefault();
		const fd = new FormData(event.target);


        setHistory([...history,
            {
                ...promptData,
                value: fd.get('answer')
            }
    ]);
    //check if there's a next question
        if (promptData.next) {
            setActive(
                promptData.next
                );
          }
    
          setValue("");

        console.log("active")
        console.log(active)
    }


	return (
		<div>
			<div className="d-flex container">
				<div id="chat-box" className="card chat-card">
                
                {history?.map((item)=>
                    <NewMessage key={item.id} history={item}/>
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
