import { Header } from "../../components/Header"
import { Profile } from "../../components/Profile"
import { LayoutMainHome } from "./styles"

export function Home(){
    return(
        <div>
            <Header/>
            <LayoutMainHome>
                <Profile/>
            </LayoutMainHome>
        </div>
    )
}