// themealdb.com/api/json/v1/1/search.php?f=a

function naoEhNulo(valor) {
    return valor !== null && valor !== '' && valor !== ' ';
}

export async function fetchMeals() {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
    const json = await response.json();
    const array = json.meals;
    
    const filteredArray = array.map(meal => {
        const filteredMeal = {};

        for (const key in meal) {
            if (naoEhNulo(meal[key])) {
                filteredMeal[key] = meal[key];
            }
        }

        return filteredMeal;
    });

    return filteredArray;
}