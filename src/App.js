import 'bootswatch/dist/flatly/bootstrap.css'
import './custom.css'
import CadastroUsuario from './views/CadastroUsuario'
import Login from './views/Login'

function App() {
  return (
    <div className="App">
      <Login />
      <CadastroUsuario />
    </div>
  );
}

export default App;
