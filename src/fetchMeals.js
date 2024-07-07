// themealdb.com/api/json/v1/1/search.php?f=a

const api = 'https://www.themealdb.com/api/json/v1/1/search.php?f=p'

function naoEhNulo(valor) {
    return valor !== null && valor !== '' && valor !== ' ';
}

export async function fetchMeals() {
    const response = await fetch(api);
    const json = await response.json();
    const array = json.meals;
    
    const filteredArray = array.map(meal => {
        const filteredMeal = {};

        for (const key in meal) {
            if (naoEhNulo(meal[key])) {
                filteredMeal[key] = meal[key];
            }
        }
        
        for (const key in filteredMeal) {
            console.log(`${key}: ${filteredMeal[key]}`)
        }
        
        return filteredMeal;
    });

    return filteredArray;
}


// async function main() {
//     const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
//     const json = await response.json();
//     const array = json.meals;

//     // Function to check if a value is not null, empty string, or a single space
//     function naoEhNulo(valor) {
//         return valor !== null && valor !== '' && valor !== ' ';
//     }

//     // Iterate through the array
//     array.forEach(meal => {
//         // Create an object to store the filtered key-value pairs
//         const filteredMeal = {};

//         // Iterate through the properties of each meal
//         for (const key in meal) {
//             if (naoEhNulo(meal[key])) {
//                 // Store the value in its original data type
//                 filteredMeal[key] = meal[key];
//             }
//         }
        
//         // Print the keys and values in the "key: value" format
//         for (const key in filteredMeal) {
//             console.log(`${key}: ${filteredMeal[key]}`);
//         }
//         console.log('-----------------------------'); // Separator between meals
//     });
// }

// main();
