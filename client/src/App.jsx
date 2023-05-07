import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  const [Text1, setText1] = useState('');
  const [Text2, setText2] = useState('');
  const [Messages1, setMessages1] = useState([]);
  const [Messages2, setMessages2] = useState([]);
  const [revealText1, setRevealText1] = useState(false);
  const [revealText2, setRevealText2] = useState(false);
  const [DecodedMessages1, setDecodedMessages1] = useState([]);
  const [DecodedMessages2, setDecodedMessages2] = useState([]);

  
  const handle1 = (e) => {
    setText1(e.target.value);
  };

  const handle2 = (e) => {
    setText2(e.target.value);
  };

  const encodeText = async (text) => {
    const response = await fetch("http://localhost:3000/api/translate/normal", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });
  
    const data = await response.json();
    return data.data; // Return only the data property of the response
  };
  

  const decodeText = async (text) => {
    console.log("decodeText called");
    const response = await fetch("http://localhost:3000/api/translate/rovarsprak", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });
  
    const data = await response.json();
    return data.data; // Change this line to return data.data
  };
  
  
  const handle1KeyPress = async (e) => {
    console.log("handle1KeyPress called");
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent the default form submission behavior
      const encodedMessage = await encodeText(Text1);
      setMessages1((prevMessages) => [...prevMessages, encodedMessage]);
      setText1('');
    }
  };
  
  const handle2KeyPress = async (e) => {
    console.log("handle2KeyPress called");
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent the default form submission behavior
      const encodedMessage = await encodeText(Text2);
      setMessages2((prevMessages) => [...prevMessages, encodedMessage]);
      setText2('');
    }
  };
  

  
  const ToggleUser1Text = async () => {
    if (!revealText1) {
      const decodedMessages = await Promise.all(Messages1.map(decodeText));
      setDecodedMessages1(decodedMessages);
      setMessages1(decodedMessages);
    } else {
      const encodedMessages = await Promise.all(DecodedMessages1.map(encodeText));
      setMessages1(encodedMessages);
    }
    setRevealText1(!revealText1);
  };
  
  const ToggleUser2Text = async () => {
    if (!revealText2) {
      const decodedMessages = await Promise.all(Messages2.map(decodeText));
      setDecodedMessages2(decodedMessages);
      setMessages2(decodedMessages);
    } else {
      const encodedMessages = await Promise.all(DecodedMessages2.map(encodeText));
      setMessages2(encodedMessages);
    }
    setRevealText2(!revealText2);
  };
  

    return (
      <div className="App">
        <Header />
        <main className="flex flex-col items-center p-4">
          <div className="flex md:flex-nowrap justify-center w-full max-w-5xl">
            {/* User 1 */}
            <div className="w-full md:w-1/2 p-4">
              <div className="border border-blue-500 p-4 rounded-md bg-white shadow-lg">
                <h3 className="text-lg font-semibold mb-2">User 1</h3>
                <input
                  type="text"
                  value={Text1}
                  onChange={handle1}
                  onKeyDown={handle1KeyPress}
                  className="border border-blue-500 p-2 rounded-md w-full"
                  placeholder="Type something..."
                />
                <div className="mt-4 h-[500px] overflow-y-auto">
                  <p>User 2's messages:</p>
                  {Messages2.map((message, index) => (
                    <p key={index} className="text-blue-600">
                      {message}
                    </p>
                  ))}
                </div>
                <button
                  className="bg-blue-500 text-white font-semibold py-2 px-4 rounded mt-4"
                  onClick={ToggleUser2Text}
                >
                  {revealText2 ? 'Conceal' : 'Unveil'}
                </button>
              </div>
            </div>
  
            {/* Vertical Divider */}
            <div className="w-0 md:w-px md:mx-4 bg-blue-500"></div>
  
            {/* User 2 */}
            <div className="w-full md:w-1/2 p-4">
              <div className="border border-blue-500 p-4 rounded-md bg-white shadow-lg">
                <h3 className="text-lg font-semibold mb-2">User 2</h3>
                <input
                  type="text"
                  value={Text2}
                  onChange={handle2}
                  onKeyDown={handle2KeyPress}
                  className="border border-blue-500 p-2 rounded-md w-full"
                  placeholder="Type something..."
                />
                <div className="mt-4 h-[500px] overflow-y-auto">
                  <p>User 1's messages:</p>
                  {Messages1.map((message, index) => (
                    <p key={index} className="text-blue-600">
                      {message}
                    </p>
                  ))}
                </div>
                <button
                  className="bg-blue-500 text-white font-semibold py-2 px-4 rounded mt-4"
                  onClick={ToggleUser1Text}
                >
                  {revealText1 ? 'Conceal' : 'Unveil'}
                </button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  export default App;