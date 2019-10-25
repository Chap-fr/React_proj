import React, {Component, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/StarGame.css'

const colors = {
  available: 'lightgray',
  used: 'lightgreen',
  wrong: 'lightcoral',
  candidate: 'deepskyblue',
};

// Math science
const utils = {
 
  sum: arr => arr.reduce((acc, curr) => acc + curr, 0),    // Sum an array
  
  
  range: (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i),    // create an array of numbers between min and max (edges included)
  
  
  random: (min, max) => min + Math.floor(Math.random() * (max - min + 1)),    // pick a random number between min and max (edges included)
  
  // Given an array of numbers and a max...
  // Pick a random sum (< max) from the set of all available sums in arr
  randomSumIn: (arr, max) => {
    const sets = [[]];
    const sums = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0, len = sets.length; j < len; j++) {
        const candidateSet = sets[j].concat(arr[i]);
        const candidateSum = utils.sum(candidateSet);
        if (candidateSum <= max) {
          sets.push(candidateSet);
          sums.push(candidateSum);
        }
      }
    }
    return sums[utils.random(0, sums.length - 1)];
  },
};

const PlayNumber = (props) =>(
  
  <button className="number" 
          onClick={()=> console.log('Num', props.number)}
          style={{backgroundColor: colors[props.status]}}>
    {props.number}
  </button>
  
)

const StarDisplay = (props) =>(
  <>
    {utils.range(1, props.count).map(starId =>
      <div key={starId} className="star" />
    )}
  </>
)



const StarMatch = () => {

  const [stars, setStars] = useState(utils.random(1, 9));
  const [availableNums, setAvailableNums] = useState(utils.range(1, 9))
  const [candidateNums, setCandidateNums] = useState([])

  const candidateAreWrong = utils.sum(candidateNums) < stars;

  const numberStatus = (number) => {
    if (!availableNums.includes(number)){
      return 'used';
    }
    if (candidateNums.includes(number)){
      return candidateAreWrong ? 'wrong' : 'candidate';
    }return 'available'
  }

    return (
      <div className="game">
      <div className="help">
        
        Choisir 1 numéro ou plus dont la somme correspond au nombre d'étoiles
      </div>
      <div className="body">
        <div className="left">
          <StarDisplay count={stars} />
        </div>
        <div className="right">
          {utils.range(1, 9).map(number =>
            <PlayNumber key={number} 
                        number={number}
                        status={numberStatus(number)}/>
            )}
        </div>
      </div>
      <div className="timer">Temps restant : </div>
    </div>
  );
};

export default class StarGame extends Component{
  render(){
    return(

   
        <StarMatch />   
   

    )
  }
}