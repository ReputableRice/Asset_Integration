import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Page() {
    return (
        <View className="m-2">
        <Link href="/sandwhich" className="rounded-lg bg-cyan-500 flex-1 text-center p-5 text-lg w-1/4 hover:bg-cyan-100 hover:w-1/5 transition-all drop-shadow-lg">Go To Sandwhich</Link>
        </View>
    )
}