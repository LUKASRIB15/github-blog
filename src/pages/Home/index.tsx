import { FormSearch } from "../../components/FormSearch"
import { Profile } from "../../components/Profile"
import { CardList, CardRepository, HeaderCard, LayoutMainHome, MainCard } from "./styles"

export function Home(){
    return(
            <LayoutMainHome>
                <Profile/>
                <FormSearch/>
                <CardList>
                    <CardRepository>
                        <HeaderCard>
                            <strong>JavaScript data types and data structures</strong>
                            <span>Há 1 dia</span>
                        </HeaderCard>
                        <MainCard>
                            <p>
                               Programming languages all have built-in data structures, 
                               but these often differ from one language to another. 
                               This article attempts to list the built-in data structures available in... 
                            </p>
                        </MainCard>
                    </CardRepository>
                    <CardRepository>
                        <HeaderCard>
                            <strong>JavaScript data types and data structures</strong>
                            <span>Há 1 dia</span>
                        </HeaderCard>
                        <MainCard>
                            <p>
                               Programming languages all have built-in data structures, 
                               but these often differ from one language to another. 
                               This article attempts to list the built-in data structures available in... 
                            </p>
                        </MainCard>
                    </CardRepository>
                    <CardRepository>
                        <HeaderCard>
                            <strong>JavaScript data types and data structures</strong>
                            <span>Há 1 dia</span>
                        </HeaderCard>
                        <MainCard>
                            <p>
                               Programming languages all have built-in data structures, 
                               but these often differ from one language to another. 
                               This article attempts to list the built-in data structures available in... 
                            </p>
                        </MainCard>
                    </CardRepository>
                    <CardRepository>
                        <HeaderCard>
                            <strong>JavaScript data types and data structures</strong>
                            <span>Há 1 dia</span>
                        </HeaderCard>
                        <MainCard>
                            <p>
                               Programming languages all have built-in data structures, 
                               but these often differ from one language to another. 
                               This article attempts to list the built-in data structures available in... 
                            </p>
                        </MainCard>
                    </CardRepository>
                    <CardRepository>
                        <HeaderCard>
                            <strong>JavaScript data types and data structures</strong>
                            <span>Há 1 dia</span>
                        </HeaderCard>
                        <MainCard>
                            <p>
                               Programming languages all have built-in data structures, 
                               but these often differ from one language to another. 
                               This article attempts to list the built-in data structures available in... 
                            </p>
                        </MainCard>
                    </CardRepository>
                </CardList>
            </LayoutMainHome>
    )
}