import { GamesList } from "@/data/gameData";
import { useProfileStats } from "@/providers/gameStatsProvider";
import { colors, fontSize, lineHeight, spacing } from "@/styles/theme";
import { getClickSummary } from "@/utils/statsSummary";
import { useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Profile() {
  const { counts } = useProfileStats();
  const { topCategory, topGame } = useMemo(() => getClickSummary(counts, GamesList), [counts]);

  if (!topCategory || !topGame) {
    return (
      <View style={styles.centered}>
        <Text style={styles.empty}>No stats recorded. Play some games to see your favourites!</Text>
      </View>
    )
  }
  return (
    <View style={styles.screen}>
      <StatBlock label="Favourite Category" value={topCategory.name} detail={`${plural(topCategory.clicks, 'play')}`}></StatBlock>
      <StatBlock label="Favourite Game" value={topGame.game.title} detail={`${plural(topGame.clicks, 'play')}`}></StatBlock>
    </View>
  );
}

function StatBlock({ label, value, detail }: { label: string, value: string, detail: string}) {
  return (
    <View style={styles.stat} accessible accessibilityLabel={`${label}: ${value}, ${detail}`}>
      <Text style={styles.statLabel}>{label}</Text>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statDetail}>{detail}</Text>
    </View>
  );
}

const plural = (count: number, word: string) => `${count} ${word}${count === 1 ? '' : 's'}`;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: spacing.lg,
    gap: spacing.lg,
    backgroundColor: colors.surface,
  },
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.lg,
    backgroundColor: colors.surface,
  },
  empty: {
    textAlign: 'center',
    fontSize: fontSize.body,
    lineHeight: lineHeight.body,
    color: colors.textSecondary,
  },
  stat: {
    backgroundColor: colors.groupBackground,
    borderRadius: 16,
    padding: spacing.lg,
    gap: spacing.xs,
  },
  statLabel: {
    fontSize: fontSize.caption,
    lineHeight: lineHeight.caption,
    color: colors.textSecondary,
  },
  statValue: {
    fontSize: fontSize.title,
    lineHeight: lineHeight.title,
    color: colors.text,
    fontWeight: '700',
  },
  statDetail: {
    fontSize: fontSize.body,
    lineHeight: lineHeight.body,
    color: colors.text,
  }
});
