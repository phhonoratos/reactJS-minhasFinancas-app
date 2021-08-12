import 'bootswatch/dist/flatly/bootstrap.css'
import 'toastr/build/toastr.css'
import './custom.css'
import 'toastr/build/toastr.min.js'
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

import NavBar from './components/NavBar';
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
