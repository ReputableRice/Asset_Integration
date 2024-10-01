import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
    return <View style={styles.sandwhichPage}>
        <Text style={styles.textBlock}>
            "Sandwhich"
        </Text>
        <Link href="/cheese" className="border-red-700 border-2 bg-red-500 flex-1 text-center">Cheese</Link>
    </View>
}

const styles = StyleSheet.create({
    sandwhichPage: {
        width: '50vw',
        margin: 'auto',
        padding: '5rem',
        border: '1rem solid blue'
    },
    textBlock: {
        margin: 'auto'
    }
})