import { getGameById } from "@/data/gameData";
import { Game } from "@/models/game";
import { Stack, useLocalSearchParams } from "expo-router";
import { ActivityIndicator, Platform, StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";

export default function WebFrame() {
    const { id } = useLocalSearchParams<{ id: string }>();
    const game = getGameById(id);

    if (!game) {
        return (
            <View style={styles.centered}>
                <Stack.Screen options={{ title: 'Not Found' }} />
                <Text>Game not Found!</Text>
            </View>
        )
    }

    return (
        <>
        <Stack.Screen options={{ title: game.title}} />
        <PlatformFrame game={game} />
        </>
    )
}

function PlatformFrame({ game }: { game: Game}) {
    if (Platform.OS === 'web'){
        return (
            <iframe src={game.url} title={game.title} style={styles.web} />
        )
    }

    return (
        <WebView
            source={{uri: game.url}}
            style={styles.webView}
            originWhitelist={['https://*']}
            startInLoadingState
            renderLoading={() => (
                <View style={[StyleSheet.absoluteFill, styles.centered]}>
                    <ActivityIndicator size="large" />
                </View>
            )}
            allowsBackForwardNavigationGestures
            setSupportMultipleWindows={false}
        />
    )
}

const styles = StyleSheet.create({
    webView: { flex: 1 },
    centered: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 },
    web: { flex: 1, width: '100%', height: '100%'}
})