import Item from "./Item";

function NavBar() {
    return (
        <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
            <div className="container">
                <a href="/#/home" className="navbar-brand">Minhas Finanças</a>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav">
                        <Item href="#/home" label="Home" />
                        <Item href="#/cadastrarUsuario" label="Usuários" />
                        <Item href="#/consultaLancamento" label="Lançamentos" />
                        <Item href="#/login" label="Login" />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar;