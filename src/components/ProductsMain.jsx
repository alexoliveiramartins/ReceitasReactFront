import React, { useState, useEffect } from 'react';
import { Product } from './Product';
import { fetchMeals } from '../fetchMeals';

export function ProductsMain() {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        async function getMeals() {
            const fetchedMeals = await fetchMeals();
            setMeals(fetchedMeals);
        }
        getMeals();
    }, []);

    return (
        <main className="flex flex-wrap gap-4 justify-center">
            {meals.map((meal, index) => (
                <Product 
                    key={index} 
                    image={`${meal.strMealThumb}`}
                    title={meal.strMeal} 
                    description={meal.strInstructions} 
                    type={meal.strCategory}
                />
            ))}
        </main>
    );
}
