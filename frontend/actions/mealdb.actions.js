"use server";

const MEALDB_BASE = "https://www.themealdb.com/api/json/v1/1";


export async function getRecipeOfTheDay() {
    try {
        const response = await fetch(`${MEALDB_BASE}/random.php`, {
            next: { revalidate: 86400 },  //Cache for 24 hours
        });

        if (!response.ok) {
            throw new Error("Failed to fetch recipe of the day");
        }

        const data = await response.json();
        return {
            success: true,
            recipe: data.meals[0], 
        };
    } catch (error) {
        console.error("Error fetching recipe of the day:", error);
        throw new Error(error.message || "Failed to load recipe");
    }
}

export async function getCategories() {
    try {
        const response = await fetch(`${MEALDB_BASE}/list.php?c=list`, {
            next: { revalidate: 604800 },  //Cache for 1 week (categories rarely change)
        });

        if (!response.ok) {
            throw new Error("Failed to fetch categories");
        }

        const data = await response.json();
        return {
            success: true,
            categories: data.meals || [], 
        };
    } catch (error) {
        console.error("Error fetching categories:", error);
        throw new Error(error.message || "Failed to load categories");
    }
}

export async function getAreas() {
    try {
        const response = await fetch(`${MEALDB_BASE}/list.php?a=list`, {
            next: { revalidate: 604800 },  //Cache for 1 week 
        });

        if (!response.ok) {
            throw new Error("Failed to fetch areas");
        }

        const data = await response.json();
        const seen = new Set();
        const uniqueAreas = (data.meals || []).filter((area) => {
            if (seen.has(area.strArea)) return false;
            seen.add(area.strArea);
            return true;
        });
        return {
            success: true,
            areas: uniqueAreas, 
        };
    } catch (error) {
        console.error("Error fetching areas:", error);
        throw new Error(error.message || "Failed to load areas");
    }
}

export async function getMealsByCategory(category) {
      try {
        const response = await fetch(`${MEALDB_BASE}/filter.php?c=${category}`, {
            next: { revalidate: 86400 },  //Cache for 24 hours
        });

        if (!response.ok) {
            throw new Error("Failed to fetch meals");
        }

        const data = await response.json();
        return {
            success: true,
            meals: data.meals || [], 
            category,
        };
    } catch (error) {
        console.error("Error fetching meals by category:", error);
        throw new Error(error.message || "Failed to load meals");
    }
}

export async function getMealsByArea(area) {
    try {
        // Some countries work with adjective (Indian, Chinese)
        // Some only work with country name (India, France)
        // So we try adjective first, then country name as fallback

        const adjectiveToCountry = {
            "Indian": "India",
            "French": "France",
            "American": "United States",
            "Dutch": "Netherlands",
            "Norwegian": "Norway",
            "Slovak": "Slovakia",
            "Venezuelan": "Venezuela",
            "Argentine": "Argentina",
            "Portuguese": "Portugal",
            "British": "United Kingdom",
            "Italian": "Italy",
            "Japanese": "Japan",
            "Mexican": "Mexico",
            "Thai": "Thailand",
            "Greek": "Greece",
            "Moroccan": "Morocco",
            "Turkish": "Turkey",
            "Canadian": "Canada",
            "Croatian": "Croatia",
            "Egyptian": "Egypt",
            "Filipino": "Philippines",
            "Irish": "Ireland",
            "Jamaican": "Jamaica",
            "Kenyan": "Kenya",
            "Malaysian": "Malaysia",
            "Polish": "Poland",
            "Russian": "Russia",
            "Ukrainian": "Ukraine",
            "Vietnamese": "Vietnam",
            "Uruguayan": "Uruguay",
            "Tunisian": "Tunisia",
            "Australian": "Australia",
            "Saudi Arabian": "Saudi Arabia",
            "Spanish": "Spain",
            "Chinese": "China",
            "Kenyan": "Kenya",
        };

        // Step 1: Try with adjective form first (e.g. "Indian")
        const adjectiveResponse = await fetch(
            `${MEALDB_BASE}/filter.php?a=${area}`,
            { next: { revalidate: 86400 } }
        );

        if (adjectiveResponse.ok) {
            const adjectiveData = await adjectiveResponse.json();
            if (adjectiveData.meals && adjectiveData.meals.length > 0) {
                console.log(`✅ Adjective worked for ${area}`);
                return {
                    success: true,
                    meals: adjectiveData.meals,
                    area,
                };
            }
        }

        // Step 2: Adjective returned null, try country name
        // e.g. "Indian" → "India", "French" → "France"
        const countryName = adjectiveToCountry[area];

        if (countryName) {
            console.log(`⚠️ Trying country name: ${countryName}`);
            const countryResponse = await fetch(
                `${MEALDB_BASE}/filter.php?a=${encodeURIComponent(countryName)}`,
                { next: { revalidate: 86400 } }
            );

            if (countryResponse.ok) {
                const countryData = await countryResponse.json();
                if (countryData.meals && countryData.meals.length > 0) {
                    console.log(`✅ Country name worked for ${countryName}`);
                    return {
                        success: true,
                        meals: countryData.meals,
                        area,
                    };
                }
            }
        }

        // Step 3: Both failed, return null
        console.log(`❌ No meals found for ${area}`);
        return {
            success: true,
            meals: null,
            area,
        };

    } catch (error) {
        console.error("Error fetching meals by area:", error);
        throw new Error(error.message || "Failed to load meals");
    }
}

