import {Route, Routes} from "react-router-dom"
import { DefaultLayout } from "./Layout/LayoutDefault"
import { Home } from "./pages/Home"
import { RepositoryDetails } from "./pages/RepositoryDetails"

export function Router(){
    return(
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path={"/RepositoryDetails/:id"} element={<RepositoryDetails/>}/>
            </Route>
        </Routes>
    )
}