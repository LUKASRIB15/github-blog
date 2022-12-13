import { InputFormSearch, HeaderFormSearch, LayoutFormSearch } from "./styles";

export function FormSeacrh(){
    return(
        <LayoutFormSearch>
            <HeaderFormSearch>
                <strong>Publicações</strong>
                <span>13 publicações</span>
            </HeaderFormSearch>
            <form>
                <InputFormSearch type="text" placeholder="Buscar conteúdo"/>
            </form>
        </LayoutFormSearch>
    )
}