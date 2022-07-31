import { useState } from 'react';
import Button from './components/Button'
import './App.css';
import Header from './components/Header';

function App() {
  const [color,setColor] = useState('red');

  const changeColor = () => {
    color==='red'?setColor('blue'):setColor('red');
  }

  return (
    <div className="App" style={{backgroundColor:color}}>
      <Header color={color} changeColor={changeColor}/>
      <Button color={color} changeColor={changeColor}/>
    </div>
  );
}

export default App;
