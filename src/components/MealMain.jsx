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
        <main className="flex flex-col gap-4">
            <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
                {meals.map((meal) => (
                    <Meal
                        key={meal.idMeal}
                        image={meal.strMealThumb}
                        title={meal.strMeal}
                        description={meal.strInstructions}
                    />
                ))}
            </div>
        </main>
    );
}