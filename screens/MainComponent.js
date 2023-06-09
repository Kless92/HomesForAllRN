import { Platform, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Constants from "expo-constants";
import NewsInfoScreen from './NewsInfoScreen';
import DirectoryScreen from "./DirectoryScreen";
import HomeScreen from "./HomeScreen";

const BotTab = createBottomTabNavigator();

const screenOptions = {
   headerTintColor: '#fff',
   headerStyle: { backgroundColor: '#5637DD'}
}

const HomeNavigator = () => {
   const Stack = createStackNavigator();
   return (
      <Stack.Navigator screenOptions={screenOptions}>
         <Stack.Screen
            name='Home'
            component={HomeScreen}
            options={{ title: 'Home'}}
         />
      </Stack.Navigator>
   )
}

const DirectoryNavigator = () => {
   const Stack = createStackNavigator();
   return (
      <Stack.Navigator
         inintialRoutName='Directory'
         screenOptions={screenOptions}
      >
         <Stack.Screen
            name='Directory'
            component={DirectoryScreen}
            options= {{ title: 'News And Updates'}}
         />
         <Stack.Screen
            name='NewsInfo'
            component={NewsInfoScreen}
            options = {({ route }) => ({
               title: route.params.news.name
            })}
         />
      </Stack.Navigator>

   )
};

 const Main = () => {
    return (
      <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight}}>
         <BotTab.Navigator 
            tabBarOptions={{
				   activeTintColor: "#5637DD",
				   inactiveTintColor: "gray",
				   labelStyle: {
					   fontSize: 15,
				   },
			   }}
         >
            <BotTab.Screen name='Home' component={HomeNavigator} />
            <BotTab.Screen name='News and Updates' component={DirectoryNavigator} />
         </BotTab.Navigator>
      </View>
    )
 };

 export default Main;