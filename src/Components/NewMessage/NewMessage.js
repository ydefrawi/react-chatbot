import React from 'react';
import './NewMessage.css';

function NewMessage({ prompt, previousValue, handleSubmit }) {
	console.log('prompt', prompt);

	function questionLogic() {
		if (prompt.type === 'message') {
			return <div className="q-speech-bubble">{prompt.message}</div>;
		}

		if (prompt.type === 'user-input') {
            
			return  <div className="q-speech-bubble">User Input Bubble</div>;
			
		}

		if (prompt.type === 'choice') {
			return (
				<div className="p-options">
					<form onSubmit={handleSubmit}>
						{prompt.options.map((item) => (
							<button key={item.label} className="btn btn-primary" value={item.value} label={item.label}>
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
