import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from "react";

export type GameCounts = Record<string, number>;

type ProfileStatsContextValue = {
    counts: GameCounts;
    recordClick: (id: string) => void;
}

const ProfileStatsContext = createContext<ProfileStatsContextValue | null>(null);

// Update profile stats whenever a game is "played" - Clicking into the game counts as a play
export function ProfileStatsProvider({children}: { children: ReactNode }) {
    const [counts, setCounts] = useState<GameCounts>({});

    const recordClick = useCallback((id: string) => {
        setCounts((gameCount) => ({ ...gameCount, [id]: (gameCount[id] ?? 0) + 1}));
    }, []);

    const value = useMemo(() => ({ counts, recordClick }), [counts, recordClick]);

    return <ProfileStatsContext.Provider value={value}>{children}</ProfileStatsContext.Provider>
}

export function useProfileStats() {
    const context = useContext(ProfileStatsContext);
    if (!context){
        throw new Error("useProfileStats can only be called from within ClickStatsProvider");
    }

    return context;
}