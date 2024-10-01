import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Page() {
    return (
        <View className="m-2">
            <Link href="/sandwhich" className="border-red-700 border-2 bg-red-500 flex-1 text-center">Sandwhich</Link>
        </View>
    )
}