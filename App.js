import {StatusBar} from 'expo-status-bar';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {colors} from './src/theme/colors';
import {spacing} from './src/theme/spacing';
import {useFonts} from 'expo-font'
import {typography} from './src/theme/typography';
import Text from './src/components/text/text';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Details from './src/screens/Details';

const Stack = createNativeStackNavigator();

export default function App() {
    const [fontsLoaded] = useFonts(
        {'Antonio-Medium': require('./assets/fonts/Antonio-Medium.ttf'), 'Spartan-Bold': require('./assets/fonts/LeagueSpartan-Bold.ttf'), 'Spartan-Regular': require('./assets/fonts/LeagueSpartan-Regular.ttf')}
    );

    if (!fontsLoaded) {
        return <Text>Font is loading</Text>
    }

    return (
      <>
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Details" component={Details}/>
            </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style='light' />

     </>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black
    }
});
