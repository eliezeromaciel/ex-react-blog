import { Button } from "../Button"
import { Seila } from "./styles"
import { Link } from "react-router-dom"

export const Header = ()=> {
    return (
        <Seila>
            <h1>React Blog</h1>
            <Seila>
           
            <Link to="/" >
                <Button text={"Home"}/>
            </Link>

            <Link to="/cadastro">
                <Button text={"Criar Post"}/>
            </Link>
                
            
            
            </Seila>
        </Seila>
    )
}