import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logoIcon from "../../assets/icons/livros.png";
import googleIcom from "../../assets/icons/google-white.svg";
export function Cadastro(){
    return(
    <Container fluid className="my-5">
        <p className="text-center">
        <img src={logoIcon} width="256" alt="Log do app"/>
        </p>
        <h4>Faça parte da nossa plataforma</h4>
        <p>Já tem conta? <Link to="/login">Entre</Link></p>
        <hr/>
        <Button className="mb-3" variant="danger">
            <img src={googleIcom} widht="32" alt="logo do google"/>
            Entrar com Google 
        </Button>
    </Container>
    );
}