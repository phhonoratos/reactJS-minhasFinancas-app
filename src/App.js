import 'bootswatch/dist/flatly/bootstrap.css'
import NavBar from './components/NavBar';
import './custom.css'
import Routes from './main/routes'

function App() {
  return (
    <>
      <NavBar />
      <div className="App container">
        <Routes />
      </div>
    </>
  );
}

export default App;
