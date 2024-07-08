// www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
// http://localhost:8080/api/receitas

const api = 'http://127.0.0.1:8080/api/receitas'

fetch(api)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
