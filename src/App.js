import Header from './components/Header';
import Footer from './components/Footer';
import RoverGrid from './components/RoverGrid';
import "./styles/App.css"
import {useEffect, useState} from 'react'

function App() {
  const [difficulty, setDifficulty] = useState()
  const rockArray = [];

  const formSubmit = (e) => {
    switch(e.target.value){
      case "easy" : {
        setDifficulty(10)
        break
      }
      case "medium" :{
        setDifficulty(15)
        break
      }
      case "hard" :{
        setDifficulty(20)
      }
    }
  };

  
  const randomNumberGen = () => {
    for (let i = 1; i <= difficulty; i++) {
      let random = Math.floor(Math.random() * 62) + 2;
      if(random != 56 && random != 57){
        rockArray.push(random);
      }
    }
  };
  
  randomNumberGen();
  
  return (
      <div className="App">
          <Header />
          {difficulty ? (
              <RoverGrid rockArray={rockArray} />
          ) : (
              <>
                  <div>
                      <p>select your difficulty</p>
                      <form onChange={formSubmit}>
                          <select name="difficulty">
                              <option value="" selected="selected" disabled>
                                  Please select
                              </option>
                              <option value="easy">Easy</option>
                              <option value="medium">Medium</option>
                              <option value="hard">Hard</option>
                          </select>
                      </form>
                  </div>
              </>
          )}

          <Footer />
      </div>
  );
}

export default App;
