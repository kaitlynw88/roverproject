import Header from './components/Header';
import Footer from './components/Footer';
import RoverGrid from './components/RoverGrid';
import "./styles/App.css"
import {useState} from 'react'

function App() {
  const [difficulty, setDifficulty] = useState()
  const rockArray = [];
  const iceArray = []

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
        break
      }
      default:{
        setDifficulty("")
      }
    }
  };

  
  const randomNumberGen = () => {
    for (let i = 1; i<= 6; i++){
      let random1 = Math.floor(Math.random()* 64)+2;
      iceArray.push(random1)
    }

    for (let i = 1; i <= difficulty; i++) {
      let random = Math.floor(Math.random() * 62) + 2;
      if(random !== 56 && random !== 57 && iceArray.includes(random)=== false){
        rockArray.push(random);
      }
    }
  };
  
  randomNumberGen();

  const refresh = () => {
      setDifficulty(null)
  };
  
  return (
      <div className="App">
          <div className="wrapper">
              <Header />
              {difficulty ? (
                  <>
                      <button className="refreshButton" onClick={refresh}>
                          Restart Game
                      </button>
                      <RoverGrid rockArray={rockArray} iceArray={iceArray}/>
                  </>
              ) : (
                  <>
                      <div className="hero">
                          <p>Select your difficulty</p>
                          <form onChange={formSubmit}>
                              <select name="difficulty">
                                  <option value="" disabled>
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
      </div>
  );
}

export default App;
