"use client";

import { getMealsByCategory } from "@/actions/mealdb.actions";
import RecipeGrid from "@/components/RecipeGrid";
import { useParams } from "next/navigation";

export default function CategoryRecipesPage() {
    const params = useParams();
    
    // Decode URL encoding (Beef%20%26%20Lamb → Beef & Lamb)
    const category = decodeURIComponent(params.category);

    return (
        <RecipeGrid 
            type="category"
            value={category}
            fetchAction={getMealsByCategory}
            backLink="/dashboard"
        />
    );
}