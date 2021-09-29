import React, { useState, useEffect } from 'react';
import NewMessage from '../NewMessage/NewMessage'

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
	// const [ steps, setSteps ] = useState(prompts);
	const [ history, setHistory ] = useState([prompts[0], prompts[1]]);
	// const [ step, setStep ] = useState();
    const [answers, setAnswers ] = useState([])
    const [value, setValue ] = useState("")


    
	// useEffect(() => {
        
	// }, []);

    const handleChange = (event) => {
        event.preventDefault();
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setAnswers(value);
        console.log("answers")
        console.log(answers)
    }


	return (
		<div>
			<div className="d-flex container">
				<div id="chat-box" className="card chat-card">
                
                {/* to be mapped over */}

                {history?.map((item)=>
                    <NewMessage history={item}/>
                )}
					


                    <form className="chat-form" onSubmit={handleSubmit}>
                        <input className="chat-input" name="answer" onChange={handleChange}/>
                        <button className="btn btn-primary submit-btn" type="submit" >Submit</button>
                    </form>
                   
				</div>
			</div>
		</div>
	);
}

export default ChatFormRedo;
