import { Game } from "@/models/game";

// JSON style game list. This can be replaced with an async service to fetch on app load.
export const GamesList: Game[] = [
    { id: '1', title: "Merge & Fight", imageurl: "https://img.cdn.famobi.com/portal/html5games/images/tmp/MergeFightTeaser.jpg", url: "https://play.famobi.com/merge-fight", category: "Arcade" },
    { id: '2', title: "State Connect", imageurl: "https://img.cdn.famobi.com/portal/html5games/images/tmp/StateConnectTeaser.jpg", url: "https://play.famobi.com/state-connect", category: "Arcade" },
    { id: '3', title: "Giant Rush", imageurl: "https://img.cdn.famobi.com/portal/html5games/images/tmp/GiantRushTeaser.jpg", url: "https://play.famobi.com/giant-rush", category: "Arcade" },
    { id: '4', title: "Pirate Cards", imageurl: "https://img.cdn.famobi.com/portal/html5games/images/tmp/PirateCardsTeaser.jpg", url: "https://play.famobi.com/pirate-cards", category: "Cards" },
    { id: '5', title: "Solitaire Classic Christmas", imageurl: "https://img.cdn.famobi.com/portal/html5games/images/tmp/SolitaireClassicChristmasTeaser.jpg", url: "https://play.famobi.com/solitaire-classic-christmas", category: "Cards" },
    { id: '6', title: "High Hills", imageurl: "https://img.cdn.famobi.com/portal/html5games/images/tmp/HighHillsTeaser.jpg", url: "https://play.famobi.com/high-hills", category: "Racing" },
    { id: '7', title: "Race Right", imageurl: "https://img.cdn.famobi.com/portal/html5games/images/tmp/RaceRightTeaser.jpg", url: "https://play.famobi.com/race-right", category: "Racing" },
    { id: '8', title: "Drag Racing Club", imageurl: "https://img.cdn.famobi.com/portal/html5games/images/tmp/DragRacingClubTeaser.jpg", url: "https://play.famobi.com/drag-racing-club", category: "Racing" },
    { id: '9', title: "Burnin' Rubber", imageurl: "https://img.cdn.famobi.com/portal/html5games/images/tmp/BurninRubber_Teaser.jpg", url: "https://play.famobi.com/burnin-rubber", category: "Racing" },
    { id: '10', title: "Fashion Battle", imageurl: "https://img.cdn.famobi.com/portal/html5games/images/tmp/FashionBattleTeaser.jpg", url: "https://play.famobi.com/fashion-battle", category: "Girls" },
    { id: '11', title: "3D Anime Fantasy", imageurl: "https://img.cdn.famobi.com/portal/html5games/images/tmp/3d_AnimeFantasyTeaser.jpg", url: "https://play.famobi.com/3d-anime-fantasy", category: "Girls" },
]

export function getGameById(id: string): Game | undefined {
    return GamesList.find((game, index, array) => game.id === id) ?? undefined;
}