import React, { useEffect, useState } from "react";
import { Meal } from "./Meal";
import { fetchMeals } from "../fetchMeals.js";

export function MealMain() {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        async function loadMeals() {
            const fetchedMeals = await fetchMeals();
            setMeals(fetchedMeals);
        }
        loadMeals();
    }, []);

    return (
        <main className="flex flex-wrap gap-4">
            {meals.map((meal) => (
                <Meal
                    key={meal.idMeal}
                    image={meal.strMealThumb}
                    title={meal.strMeal}
                    description={meal.strInstructions}
                />
            ))}
        </main>
    );
}