import React from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="flex flex-col items-center p-4">
    <div className="w-full max-w-md my-4">
    </div>
    <div className="text-center mb-4">
      <h2 className="text-xl font-semibold">Learn Rövarspråket</h2>
      <hr className="border-blue-500 w-24 mx-auto" />
      <p className="mt-2">Text & Instructions</p>
    </div>
    <div className="flex md:flex-nowrap justify-center w-full max-w-5xl">
      <div className="w-full md:w-1/2 p-4">
        <div className="border border-blue-500 p-4 rounded-md bg-white shadow-lg">
          <h3 className="text-lg font-semibold">User 1</h3>
        </div>
      </div>
      <div className="w-0 md:w-px md:mx-4 bg-blue-500"></div>
      <div className="w-full md:w-1/2 p-4">
        <div className="border border-blue-500 p-4 rounded-md bg-white shadow-lg">
          <h3 className="text-lg font-semibold">User 2</h3>
        </div>
      </div>
    </div>
  </main>
      <Footer />
    </div>
  );
}

export default App;
