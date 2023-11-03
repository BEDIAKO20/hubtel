import {useState,useEffect}from 'react'
import "../components/NumApi.css"

function NumApi() {
    const [number, setNumber] = useState('');
    const [fact, setFact] = useState('');
    

    const fetchNumberFact = () => {
        if (number) {
          // Make an API call to get the fact
          fetch(`http://numbersapi.com/${number}/trivia?json`)
            .then((response) => response.json())
            .then((data) => {
              setFact(data.text);
            })
            .catch((error) => {
              console.error(error);
              setFact('Error fetching the fact.');
            });
        }
      };
    return (
      <div>
 
 <div className="card">
      <h2>
        <svg className="icon" aria-hidden="true">
          <use xlinkHref="#icon-coffee" href="#icon-coffee" />
        </svg>
        Regular
      </h2>
      <label>
       
        <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} className='number-input' placeholder=' Enter a number: ' />
      </label>
      <br/>
      <button onClick={fetchNumberFact} className='btn'>Get Fact</button>
      <div className='num-text'>
        {fact && <p>Fact: {fact}</p>}
      </div>
    </div>
      </div>


    )
}

export default NumApi
