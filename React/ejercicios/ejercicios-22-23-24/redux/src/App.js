import './App.css';
import TodoContainer from '../src/components/containers/TodoContainer';
import TodoFormContainer from './components/containers/TodoFormContainer';
import Filteroptions from './components/pure/FilterOptions';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoContainer></TodoContainer> 
        <TodoFormContainer></TodoFormContainer>
        <Filteroptions></Filteroptions>
      </header>
    </div>
  );
}

export default App;
