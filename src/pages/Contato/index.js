import { Link } from 'react-router-dom'

function Contato(){
    return(
        <div>
            <h1>Pagina CONTATO</h1>
            <p>Contato: (42) 99983-9865</p>
            <Link to="/">Home</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/produto">Produto</Link>
        </div>
    );
}

export default Contato;