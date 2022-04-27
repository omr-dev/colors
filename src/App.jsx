
import './App.scss'

function App() {
 const colors=["red","green","yellow", "orange"];
  return (
    <div className="App">
    <h1>Info Site</h1>
    <p>There are {colors.length} colors:</p>
    {colors.map((color,index)=>{
      return <li key={index}>{color}</li>
    })}
    </div>
  )
}

export default App
