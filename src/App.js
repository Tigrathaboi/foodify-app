import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/nav-pages/about";
import Events from "./components/nav-pages/events";
import AddRecipeModal from "./components/modal/AddRecipeModal";
import './app.scss';

const body = document.querySelector('body');

function App() {
  const [isModalShowed, setIsModalShowed] = useState(false);

  const handleShowModal = () => {
    // console.log(isModalShowed);
    setIsModalShowed(true);
    body.classList.add('stop-scrolling');
  };

  const handleDestroyModal = () => {
    // console.log(isModalShowed);
    setIsModalShowed(false);
    body.classList.remove('stop-scrolling');
  };

  return (
    <Router >
      <Navbar handleShowModal={handleShowModal}/>
      <Routes>
        <Route path="/" exact element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/AddRecipeModal" element={
          isModalShowed &&
        <AddRecipeModal handleDestroyModal={handleDestroyModal}/>
        }/>
      </Routes>
    </Router>
  );
}

export default App;
