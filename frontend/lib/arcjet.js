import arcjet, { detectBot, shield, tokenBucket } from "@arcjet/next";

export const aj = arcjet({
    key: process.env.NEXT_PUBLIC_ARCJET_KEY,
    rules: [
        shield({
            mode: "LIVE",
        }),

        detectBot({
            mode: "LIVE",
            allow: [
                "CATEGORY:SEARCH_ENGINE",
                "CATEGORY:PREVIEW",
            ],
        }),
    ],
});

// Free tier pantry scan limits (10 scans per month)
export const freePantryScans = aj.withRule(
    tokenBucket({
        mode:"LIVE",
        characteristic: ["userId"],
        refillRate: 10,
        interval: "30d",
        capacity: 10,
    })
);

// Free tier meal recommendations (5 per month)
export const freeMealRecommendations = aj.withRule(
    tokenBucket({
        mode:"LIVE",
        characteristic: ["userId"],
        refillRate: 5,
        interval: "30d",
        capacity: 5,
    })
);

// Pro tier - effectively unlimited (very high limits)
// 1000 requests per day should be more than enough for any user
export const proTierLimit = aj.withRule(
    tokenBucket({
        mode:"LIVE",
        characteristic: ["userId"],
        refillRate: 1000,
        interval: "1d",
        capacity: 1000,
    })
);
