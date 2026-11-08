import { Game } from "@/models/game";
import { GameCounts } from "@/providers/gameStatsProvider";

export type StatsSummary = {
    topCategory: { name: string, clicks: number } | null;
    topGame: { game: Game, clicks: number } | null;
}

// build game and category click stats fresh each time
export function getClickSummary(counts: GameCounts, games: Game[]): StatsSummary {
    const categoryClicks = new Map<string, number>();
    let topGame: StatsSummary['topGame'] = null;

    for (const game of games) {
        const clicks = counts[game.id] ?? 0;

        // if the game has not been "played" there is no point adding to the stats or opening the category to be ranked
        if (clicks == 0) continue;

        categoryClicks.set(game.category, (categoryClicks.get(game.category) ?? 0) + clicks);

        if (clicks > (topGame?.clicks ?? 0)) {
            topGame = { game, clicks }
        }
    }

    let topCategory: StatsSummary['topCategory'] = null;
    for (const [name, clicks] of categoryClicks) {
        if (clicks > (topCategory?.clicks ?? 0)) {
            topCategory = { name, clicks };
        }
    }

    return { topCategory, topGame };
}