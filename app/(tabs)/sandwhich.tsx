import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
    return <View>
        <Text>
            "Sandwhich"
            <Link href="/cheese">Cheese</Link>
        </Text>;
    </View>
}
