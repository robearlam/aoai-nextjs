"use client"

import { useState } from 'react';

export default function Home() {
  const [question, setQuestion] = useState('');
  let messages: string[] = [];
  const requestBody = {
    question: question
  };

  const askQuestion = function() {
    fetch('/api/chat', {
      method: 'POST',
      body: JSON.stringify(requestBody)
    })
    .then((res) => res.json())
    .then((data) => {
      alert(data);
      messages.push(data);    
    })
  }
  
  return (
    <main>
      <label htmlFor="question">Welcome to Sitecore Clippy, your friendly Sitecore helper!</label>

      <ul>
        {
          messages.map(function(message, index) {
            return <li key={index}>{message}</li>
          })
        }
      </ul>

      <input
        type="text"
        id="question"
        value={question}
        placeholder="What would you like to know?"
        onChange={(e) => setQuestion(e.target.value)}
      />

      <button type="button" onClick={askQuestion}>
        Ask Clippy
      </button>

    </main>
  )
}
