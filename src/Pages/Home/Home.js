import React from 'react';
import ChatForm from '../../Components/ChatForm/ChatForm';
import './Home.css';

function Home() {
	return (
		<div className="home2">
        <container className="container">
            <a href="/customform">
				<button className="btn btn-primary">SimpleChat Basic Chat</button>
			</a>
			<a href="/chatsummary">
				<button className="btn btn-primary">SimpleChat With Summary</button>
			</a>
			<a href="/firsttry">
				<button className="btn btn-primary">Ground-up First Try</button>
			</a>
			<a href="/harborscustom">
				<button className="btn btn-primary">Ground-up Chatbot</button>
			</a>
        </container>
			
		</div>
	);
}

export default Home;
