import React, { useState, useEffect } from 'react';
import ChatBox from '../ChatBox/ChatBox'


const prompts = [
        { 
            id: "q-name", 
            message: "Hello There! What's your name?",
            next: "a-name",
        },
        { 
            id: "a-name", 
            user:true,
            next: "q-code",
        },
        { 
            id: "q-code", 
            message: "Do you like to code?",
            next: "a-code",
        },
        { 
            id: "a-code", 
            options: [
                {value:'y', label:"Yes", next: "y-code"},
                {value:'n', label:"No", next: "n-code"}
            ]
        },
        { 
            id: "y-code", 
            message: "That's awesome!",
            end:true
        },
        { 
            id: "n-code", 
            message: "You should learn to!",
            end:true
        },

]

function ChatFormRedo(){
    const [summary, setSummary] = useState({
        name:"",
        likesToCode:"",
    });

    const [steps, setSteps]=useState(prompts)

 
    return(
        <div>

            <ChatBox/>

        </div>
    )

}

export default ChatFormRedo