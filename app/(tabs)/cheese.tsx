import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Page() {
    return (
        <View>
            <Link href="/sandwhich" className="bg-red-500 flex-1 text-center">Sandwhich</Link>
        </View>
    )
}