import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Nav from './Nav';
import Home from './Home';
import Dog from './Dog';
import NotFound from './NotFound';
import whiskey from './whiskey.jpg';
import duke from './duke.jpg';
import perry from './perry.jpg';
import tubby from './tubby.jpg';
import './App.css';

function App(props) {
  const { dogs } = props;
  const dogNames = dogs.map(dog => dog.name);

  return (
    <>
      <BrowserRouter>
        <Nav dogNames={dogNames} />
        <Routes>
          <Route path="/dogs" element={<Home dogs={dogs}/>} />
          <Route path="/dogs/:name" element={<Dog dogs={dogs}/>} />
          <Route path="/dogs/*" element={<NotFound />} />

          <Route path="*" element={<Navigate to="/dogs" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

export default App;
