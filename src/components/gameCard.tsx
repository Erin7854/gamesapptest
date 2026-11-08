import { Game } from "@/models/game"
import { colors, fontSize, lineHeight, spacing } from "@/styles/theme"
import { Image } from "expo-image"
import { memo } from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"

type GameCardProperties = {
    game: Game,
    onPress: (item: Game) => void
}

function GameCardComponent({game: game, onPress: onPress}: GameCardProperties) {
    return (
        <Pressable
            onPress={() => onPress(game)}
            style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
            accessibilityRole="link"
            accessibilityLabel={game.title}
            accessibilityHint="Open Game"
        >
            <Image
                source={{ uri: game.imageurl }}
                style={styles.image}
                contentFit="cover"
                transition={200}
                placeholder={{blurhash: 'L6PZfSi_.AyE_3t7t7R**0o#DgR4'}}
                accessible={false}
            />
            <View style={styles.textContainer}>
                <Text style={styles.title} numberOfLines={2}>
                    {game.title}
                </Text>
            </View>
        </Pressable>
    )
}

export const GameCard = memo(GameCardComponent);

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.md,
        padding: spacing.md,
        backgroundColor: colors.surface,
        borderRadius: spacing.md,
        shadowColor: colors.shadow,
        shadowOpacity: 0.08,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
        minHeight: 72
    },
    cardPressed: {
        opacity: 0.7,
        transform: [{scale: 0.98}],
    },
    image: {
        width: 64,
        height: 64,
        borderRadius: 8,
        backgroundColor: colors.placeholder,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: fontSize.body,
        fontWeight: '600',
        color: colors.text,
        lineHeight: lineHeight.body
    }
});