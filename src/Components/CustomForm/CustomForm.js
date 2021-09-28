import React from 'react';
import ChatBot from 'react-simple-chatbot';

function SimpleForm() {
	return (
		<div>
			<ChatBot
				steps={[
					{
						id: 'q-name',
						message: "Hello! What's your name?",
						trigger: 'a-name'
					},
					{
						id: 'a-name',
						user: true,
						trigger: 'name-response'
					},
					{
						id: 'name-response',
						message: "Hi {previousValue}!",
						trigger: 'filler'
					},
					{
						id: 'filler',
						message: 'Just a moment...',
						trigger: 'q-employed'
					},
					{
						id: 'q-employed',
						message: 'Are you currently employed?',
						trigger: 'a-employed'
					},
					{
						id: 'a-employed',
						options: [
							{ value: 'y', label: 'Yes', trigger: 'yes-employed' },
							{ value: 'n', label: 'No', trigger: 'no-employed' }
						]
					},
					{
						id: 'yes-employed',
						message: 'Excellent!',
						trigger:"q-code"
					},
					{
						id: 'no-employed',
						message: 'Thats unfortunate.',
						trigger:"q-code"
					},
					{
						
						id: 'q-code',
						message:"Do you like to code?",
						trigger:"a-code",
						
					},
					{
						
						id: 'a-code',
						options: [
							{ value: 'y', label: 'Yes', trigger: 'yes-code' },
							{ value: 'n', label: 'No', trigger: 'no-code' }
						],
					},
					{
						
						id: 'yes-code',
						message:"Nice!",
						end:true
					},
					{
						
						id: 'no-code',
						message:"You should learn to!",
						end:true
					},
				]}
			/>
		</div>
	);
}

export default SimpleForm;
