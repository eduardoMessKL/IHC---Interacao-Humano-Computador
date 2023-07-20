import { Link } from 'react-router-dom'

function Home(){
    return(
        <div>
            <h1>Bem vindo a pagina HOME</h1>
            <span>Eduardo Messias Kulka</span>

            <Link to="/sobre">Sobre</Link>
            <Link to="/contato">Contato</Link>
            <Link to="/produto">Produto</Link>
        </div>
    );
}

export default Home;