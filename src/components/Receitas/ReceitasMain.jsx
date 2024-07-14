import React, { useState, useEffect } from 'react';
import { Meal } from './ReceitaCard';
import { fetchRecipes } from '../../fetchRecipe';

export function ReceitasMain() {
    const [meals, setMeals] = useState([]);
    const api = 'http://localhost:8080/api/receitas'
    useEffect(() => {
        async function getMeals() {
            try {
                const fetchedMeals = await fetchRecipes(api);
                setMeals(fetchedMeals);
            } catch (error) {
                console.error('Error fetching meals:', error);
                // Optionally, handle the error state or show an error message to the user
            }
        }
        getMeals();
    }, []);

    return (
        <main className="mt-3 flex flex-wrap gap-4 justify-center">
            {meals && meals.length > 0 ? (
                meals.map((meal, index) => (
                    <Meal 
                        key={index} 
                        nome={meal.nome} 
                        categoria={meal.categoria}
                        origem={meal.origem}
                        ingredientes={meal.ingredientes}
                        descricao={meal.descricao}
                        pathImagem={meal.pathImagem}
                    />
                ))
            ) : (
                <p>Nenhuma receita encontrada.</p>
            )}
        </main>
    );
}
