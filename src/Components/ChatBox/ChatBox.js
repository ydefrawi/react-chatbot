import React from 'react';
import './ChatBox.css';
import NewQuestion from '../NewMessage/NewMessage'

function ChatBox() {
	return (
		<div className="d-flex container">
			<div id="chat-box" className="card chat-card">

				<NewQuestion/>
			
			</div>
		</div>
	);
}

export default ChatBox;
