import logo from './logo.svg';
import './App.css';
//import Greeting from './components/pure/greeting';
//import Greetingf from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          { /**Llamamos al componenete*/}

          {/**<Greeting name={"Sergio"}></Greeting>*/}
          {/* <Greetingf name="Sergio"></Greetingf>*/}
          <TaskListComponent></TaskListComponent>
        </p>
      </header>
    </div>
  );
}

export default App;
