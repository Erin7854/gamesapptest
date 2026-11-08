import { Game } from "@/models/game";

export type GameGrouping = { title: string, games: Game[] }

// Group games by category into GameGroupings to be displayed on the home page
export function groupGames(games: Game[]): GameGrouping[] {
    const map = new Map<string, Game[]>();

    for (const game of games) {
        map.set(game.category, [...(map.get(game.category) ?? []), game])
    }

    return Array.from(map, ([title, games]) => ({title, games}));
}