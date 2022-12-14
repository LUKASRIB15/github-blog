import { InputFormSearch, HeaderFormSearch, LayoutFormSearch } from "./styles";
import * as z from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"

export function FormSearch(){
    const FormSearchValidationSchema = z.object({
        query: z.string(),
    })

    type FormSearchValidationSchemaProps = z.infer<typeof FormSearchValidationSchema>

    const {handleSubmit, register} = useForm<FormSearchValidationSchemaProps>({
        resolver: zodResolver(FormSearchValidationSchema),
    })

    function handleSearchForm(data:FormSearchValidationSchemaProps){
        console.log(data)
    }
    return(
        <LayoutFormSearch>
            <HeaderFormSearch>
                <strong>Publicações</strong>
                <span>13 publicações</span>
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