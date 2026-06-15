"use client";

import { getMealsByArea } from "@/actions/mealdb.actions";
import RecipeGrid from "@/components/RecipeGrid";
import { useParams } from "next/navigation";



export default function CuisineRecipesPage() {
    const params = useParams();
    
    // Decode URL encoding (Saudi%20Arabian → Saudi Arabian)
    const cuisine = decodeURIComponent(params.cuisine);

    return (
        <RecipeGrid 
            type="cuisine"
            value={cuisine}
            fetchAction={getMealsByArea}
            backLink="/dashboard"
        />
    );
}