import { Product } from "./Product";

export function ProductsMain(){
    return(
        <>
        <main>
            <Product title="teste" description="Teste Descrição" price={2.99}/>
        </main>
        </>
    )
}