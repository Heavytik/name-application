import React, { useState, useEffect } from 'react'
import './App.css';
import nameService from './services/names'

function App() {

  const [names, setNames] = useState([])
  // alphabetical or quantity
  const [order, setOrder] = useState("quantity")

  useEffect(() => {
    nameService
      .getAll()
      .then(backendData => {
        setNames(backendData)
      })
  }, [])

  const isAplhabetical = () => order === "alphabetical"

  const changeOrder = () => isAplhabetical() ? setOrder("quantity") : setOrder("alphabetical")
  const ordering = isAplhabetical() ? "quantitative" : "aplhabetical"

  const mapper = name => <tr key={name.rowid}><td>{name.name}</td><td>{name.amount}</td></tr>

  const nameList = order === "alphabetical" ?
    [...names].sort((n1, n2) => n1.name > n2.name ).map(mapper) :
    [...names].sort((n1, n2) => n1.amount < n2.amount).map(mapper)

  const totalNames = names.reduce((p, c) => p + c.amount, 0)

  return (
    <div className="App-container">

      <header className="App-header">
        <h1>
          Name Application
        </h1>
      </header>

      <div className="App-content">
        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th><th>Amount</th>
              </tr>
            </thead>
            <tbody>
            { nameList }
            </tbody>
          </table>
        </div>
        <div>
          <button onClick={changeOrder}>Change to {ordering} ordering</button>
        </div>
        <div>
          total names: {totalNames}
        </div>
      </div>

      <div className="App-footer">
        <p>Mayde by Jere Tofferi</p>
      </div>

    </div>
  );
}

export default App;
