// www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
// http://localhost:8080/api/receitas

// const api = 'http://localhost:8080/api/receitas?ingredientes=Cebola&ingredientes=Alho'

// fetchRecipes();

export async function fetchRecipes(api){
    

    try{
        const response = await fetch(api);

        if(!response.ok){
            throw new Error("Erro no fetch");
        }

        const data = await response.json();
        // console.log(data);
        return data;
    }
    catch(error){
        console.error(error);
    }
}