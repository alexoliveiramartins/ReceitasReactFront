// www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
// http://localhost:8080/api/receitas

const api = 'http://localhost:8080/api/receitas'

// fetchRecipes();

export async function fetchRecipes(){

    try{
        const response = await fetch(api);

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        // console.log(data);
        return data;
    }
    catch(error){
        console.error(error);
    }
}