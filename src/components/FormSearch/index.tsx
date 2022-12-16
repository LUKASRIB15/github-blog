import { InputFormSearch, HeaderFormSearch, LayoutFormSearch } from "./styles";
import * as z from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import { BlogContext } from "../../contexts/BlogContext";
import { useContext } from "react";


export function FormSearch(){

    const {listCards, getNameRepository, search} = useContext(BlogContext)
    const FormSearchValidationSchema = z.object({
        query: z.string(),
    })
    
    type FormSearchValidationSchemaProps = z.infer<typeof FormSearchValidationSchema>

    const {handleSubmit, register} = useForm<FormSearchValidationSchemaProps>({
        resolver: zodResolver(FormSearchValidationSchema),
    })

    async function handleSearchForm(data:FormSearchValidationSchemaProps){
        getNameRepository(data.query)
    }
    return(
        <LayoutFormSearch>
            <HeaderFormSearch>
                {
                    !search ?
                    <>
                        <strong>Publicações</strong>
                        <span>{listCards.length} publicações</span>
                    </>
                    :
                    <>
                        <strong>Publicações</strong>
                        <span>1 publicação</span>
                    </>
                }
            </HeaderFormSearch>
            <form onSubmit={handleSubmit(handleSearchForm)}>
                <InputFormSearch 
                    type="text" 
                    placeholder="Buscar conteúdo"
                    {...register("query")} 
                />
            </form>
        </LayoutFormSearch>
    )
}