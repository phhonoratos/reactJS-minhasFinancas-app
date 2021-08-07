import 'bootswatch/dist/flatly/bootstrap.css'
import 'toastr/build/toastr.css'
import './custom.css'
import NavBar from './components/NavBar';
import Routes from './main/routes'
import 'toastr/build/toastr.min.js'

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
