import React, { useState, useEffect } from 'react';
import { Meal } from './Meal';
import { fetchRecipes } from '../fetchRecipe';

export function MealMain() {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        async function getMeals() {
            try {
                const fetchedMeals = await fetchRecipes();
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
                        modoDePreparo={meal.modoDePreparo}
                        pathImagem={meal.pathImagem}
                    />
                ))
            ) : (
                <p>Nenhuma receita encontrada.</p>
            )}
        </main>
    );
}
