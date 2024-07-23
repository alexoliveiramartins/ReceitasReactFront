import React, { useState, useEffect } from 'react';
import { Meal } from './ReceitaCard';
import { fetchRecipes } from '../../fetchRecipe';
import { useParams } from 'react-router-dom';

export function ReceitasResult() {
    const { ingredientes } = useParams();
    console.log(ingredientes);
    const ingredientesArgumentos = window.location.search;
    console.log(ingredientesArgumentos);
    const [meals, setMeals] = useState([]);
    const api = `${import.meta.env.VITE_API_KEY}${ingredientesArgumentos}`
    console.log(api);
    useEffect(() => {
        async function getMeals() {
            try {
                const fetchedMeals = await fetchRecipes(api);
                setMeals(fetchedMeals);
            } catch (error) {
                console.error('Error fetching meals:', error);
            }
        }
        getMeals();
        // console.log(meals);
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