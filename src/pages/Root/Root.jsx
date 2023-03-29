import { useContext } from "react";
import { Outlet, Navigate } from "react-router";
import { Menu } from "../../components/Menu/Menu";
import{AuthContext} from "../../contexts/AuthContext";

export function Root (){
    const usuarioLogado=useContext(AuthContext);
    if (usuarioLogado === null) {
        // se está deslogado
        // redireciona para a página de login
        return <Navigate to="/login" />;
      }
    
    return(
        <>
        <header>
            <Menu/>
        </header>
        <main>
            <Outlet/>
        </main>
        </>
    )
}