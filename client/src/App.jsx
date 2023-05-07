import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import { encodeTexts, decodeTexts } from '../lib/translateData';

function App() {
  const [Text1, setText1] = useState('');
  const [Text2, setText2] = useState('');
  const [Messages1, setMessages1] = useState([]);
  const [Messages2, setMessages2] = useState([]);
  const [RevealText1, setRevealText1] = useState(false);
  const [RevealText2, setRevealText2] = useState(false);

  const handle1 = (e) => {
    setText1(e.target.value);
  };

  const handle2 = (e) => {
    setText2(e.target.value);
  };

  const handle1KeyPress = async (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (Text1.trim() !== '') {
        const encodedMessages = await encodeTexts([Text1]);
        setMessages1((prevMessages) => [...prevMessages, encodedMessages[0]]);
        setText1('');
      }
    }
  };

  const handle2KeyPress = async (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (Text2.trim() !== '') {
        const encodedMessages = await encodeTexts([Text2]);
        setMessages2((prevMessages) => [...prevMessages, encodedMessages[0]]);
        setText2('');
      }
    }
  };

  const ToggleUser1Text = async () => {
    if (Messages1.length) {
      if (!RevealText1) {
        const decodedMessages = await decodeTexts(Messages1);
        setMessages1(decodedMessages);
      } else {
        const encodedMessages = await encodeTexts(Messages1);
        setMessages1(encodedMessages);
      }
    }
    setRevealText1(!RevealText1);
  };

  const ToggleUser2Text = async () => {
    if (Messages2.length) {
      if (!RevealText2) {
        const decodedMessages = await decodeTexts(Messages2);
        setMessages2(decodedMessages);
      } else {
        const encodedMessages = await encodeTexts(Messages2);
        setMessages2(encodedMessages);
      }
    }
    setRevealText2(!RevealText2);
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
              <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded mt-4" onClick={ToggleUser2Text}>
                {RevealText2 ? 'Conceal' : 'Unveil'}
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
              <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded mt-4" onClick={ToggleUser1Text}>
                {RevealText1 ? 'Conceal' : 'Unveil'}
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
