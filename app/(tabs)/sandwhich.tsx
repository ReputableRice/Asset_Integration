import { Text, View, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
    return <View style={styles.sandwhichPage}>
        <Image source={{
            uri: 'https://tiffycooks.com/wp-content/uploads/2021/03/Japanese-Egg-Sandwich-500x500.png'
        }}
            style={styles.imageEgg}
        />
        <Text style={styles.textBlock}>
            <h4 className='text-4xl font-bold tracking-tight text-black sm:text-6xl'>
                I Love Egg Sandwiches
            </h4>
            <p className="mt-5 mb-5 text-lg leading-8 text-gray-500">
                Even if I mispelled "sandwich" as "sandwhich" while making this page
            </p>
        </Text>
        <div>
        </div>
        <Link href="/cheese" className="rounded-lg bg-cyan-500 flex-1 text-center p-5 text-lg w-1/4 hover:bg-cyan-100 hover:w-1/5 transition-all drop-shadow-lg">Go to Cheese</Link>

    </View>
}

const styles = StyleSheet.create({
    sandwhichPage: {
        width: '85vw',
        margin: 'auto',
        padding: '5rem',
        alignItems: 'left'
    },
    imageEgg: {
        width: 250,
        height: 250,
        marginBottom: '2rem',
        borderRadius: '2rem'
    }
})