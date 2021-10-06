import React from 'react';
import './NewMessage.css';

function NewMessage({ prompt, previousValue, input,handleChoice }) {
	// console.log('prompt in NewMessage', prompt);

	function questionLogic() {

		if (prompt.type === 'message') {
			//component
			return <div className="q-speech-bubble">{prompt.message}</div>;
		}

		if (prompt.type === 'user-input') {
            //component
			return  <div className="q-speech-bubble">input: {input}</div>;
			
		}


		if (prompt.type === 'choice') {
			//component
			return (
				<div className="p-options">
					<form >
						{prompt.options.map((item) => (
							<button key={item.label} className="btn btn-primary" value={item.label} label={item.label} onClick={handleChoice}>
								{item.label}
							</button>
						))}
					</form>
				</div>
			);
		}
	}

	return( 
    <span> 
    {questionLogic()}
    </span>
    )
    
   
}

export default NewMessage;
