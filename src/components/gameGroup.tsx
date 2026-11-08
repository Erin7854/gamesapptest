import { Game } from "@/models/game";
import { colors, fontSize, lineHeight, spacing } from "@/styles/theme";
import { Ionicons } from "@expo/vector-icons";
import { memo, useState } from "react";
import { LayoutAnimation, Pressable, StyleSheet, Text, View } from "react-native";
import { GameCard } from "./gameCard";

type GameGroupProperties = {
    title: string;
    games: Game[];
    onPressGame: (game: Game) => void;
    defaultExpanded?: boolean;
}

function GameGroupComponent({ title, games, onPressGame, defaultExpanded = true}: GameGroupProperties) {
    const [expanded, setExpanded] = useState(defaultExpanded);

    const toggleExpanded = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpanded((state) => !state);
    };


    return (
        <View style={styles.group}>
            <Pressable
                onPress={toggleExpanded}
                style={({ pressed }) => [styles.header, pressed && styles.headerPressed]}
                accessibilityRole="button"
                accessibilityState={{ expanded }}
                accessibilityLabel={`${title}, ${games.length} games`}
                accessibilityHint={expanded ? 'Collapses Game Group' : 'Expands Game Group'}
            >

                <Text style={styles.title}>{title}</Text>
                <Text style={styles.count}>{games.length}</Text>
                <Ionicons
                    name='chevron-down'
                    size={24}
                    color={colors.icon}
                    style= {{transform: [{ rotate: expanded ? '0deg' : '180deg' }]}}
                />
            </Pressable>

            {expanded && (
                <View style={styles.cards}>
                    {games.map((game) => (
                        <GameCard key={game.id} game={game} onPress={onPressGame} />
                    ))}
                </View>
            )}
        </View>
    )
}

export const GameGroup = memo(GameGroupComponent);

const styles = StyleSheet.create({
    group: {
        backgroundColor: colors.groupBackground,
        borderRadius: 16,
        padding: 12,
        gap: spacing.sm,
        alignSelf: 'stretch',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        paddingHorizontal: 4,
        minHeight: 48,
    },
    headerPressed: {
        opacity: 0.7,
    },
    title: {
        fontSize: fontSize.title,
        lineHeight: lineHeight.title,
        fontWeight: '700',
        color: colors.text,
        paddingHorizontal: 4,
    },
    count: {
        fontSize: fontSize.caption,
        color: colors.textSecondary,
    },
    cards: {
        gap: 8,
    }
})