import React from 'react';
import Navbar from './components/Navbar';
import TabComponent from './components/TabComponent';
//import Leaderboard from './components/Leaderboard';
import Playerboard from "./components/Playerboard";
// import './App.css'

const players = [
  {
    name: "Eiden",
    score: 2430,
    image: "public/Ellipse4.png", // Use your actual image paths
  },
  {
    name: "Jackson",
    score: 1847,
    image: "public/Ellipse4.png",
  },
  {
    name: "Emma Aria",
    score: 1674,
    image: "public/Ellipse4.png",
  },
];

function App() {
  return (
    <div>
     <Navbar />
     <TabComponent />
     <Playerboard players={players} />
    </div>
  );
}

export default App;
