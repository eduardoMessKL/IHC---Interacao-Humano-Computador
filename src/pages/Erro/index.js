import { Link } from 'react-router-dom'
import './estilo.css'

function Erro(){
    return(
        <div>
            <h2> ERRRROOOOOOOOO!!!!!! </h2>
            <p>Outras paginas:</p>

            <Link to="/">Home</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/contato">Contato</Link>
            <Link to="/produto">Produto</Link>
        </div>
    );
}

export default Erro;