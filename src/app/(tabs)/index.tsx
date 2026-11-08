import { GameGroup } from "@/components/gameGroup";
import { GamesList } from "@/data/gameData";
import { Game } from "@/models/game";
import { useProfileStats } from "@/providers/gameStatsProvider";
import { colors, fontSize, spacing } from "@/styles/theme";
import { GameGrouping, groupGames } from "@/utils/groupingUtils";
import { router } from "expo-router";
import { useCallback, useMemo } from "react";
import { Dimensions, FlatList, ListRenderItem, StyleSheet, Text, View } from "react-native";

const screenWidth = Dimensions.get('window').width;

export default function HomeScreen() {
  const { recordClick } = useProfileStats();
  const sections = useMemo(() => groupGames(GamesList), []);

  const handlePress = useCallback((game: Game) => {
    recordClick(game.id);
    router.push({ pathname: '/web/[id]', params:{ id: game.id } });
  }, [])

  const renderGroup: ListRenderItem<GameGrouping> = useCallback(
  ({ item }) => <GameGroup title={item.title} games={item.games} onPressGame={handlePress} />,
    [handlePress]
  );


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Games App</Text>
      </View>
      <View style={styles.body}>
        <FlatList 
          data={sections}
          keyExtractor={(section) => section.title}
          renderItem={renderGroup}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<Text style={styles.empty}>No Games Found.</Text>}
          />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: "center",
    justifyContent: "center",
  },
  screen: { flex: 1 },
  header: { height: 60, backgroundColor: '#333', justifyContent: 'center', alignItems: 'center', width: '100%' },
  body: { flex: 1, padding: 16 },
  content: {
    padding: 16,
    paddingBottom: spacing.xl,
    gap: spacing.xl,
  },
  empty: {
    textAlign: 'center',
    color: colors.textSecondary,
    marginTop: 40,
    fontSize: fontSize.body,
  },
  headerText: { color: '#fff', fontWeight: 'bold' },
});
