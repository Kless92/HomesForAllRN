import { Platform, StyleSheet, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import Constants from "expo-constants";
import NewsInfoScreen from './NewsInfoScreen';
import DirectoryScreen from "./DirectoryScreen";
import HomeScreen from "./HomeScreen";
import VolinteerScreen from './VolinteerScreen';
import DonationsScreen from './DonationsScreen'

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
            options={{ title: 'Home',
               headerLeft: () => (
                  <Icon
                     name='home'
                     type='font-awesome'
                     iconStyle={styles.stackIcon}
                  />
               )
         }}
         />
      </Stack.Navigator>
   )
}
const VolinteerNavigatior = () => {
   const Stack = createStackNavigator();
   return (
      <Stack.Navigator screenOptions={screenOptions}>
         <Stack.Screen
            name='Volinteer'
            component={VolinteerScreen}
            options={{ title: 'Volinteer',
               headerLeft: () => (
                  <Icon
                     name='heart'
                     type='font-awesome'
                     iconStyle={styles.stackIcon}
                  />
               )
            }}
         />
      </Stack.Navigator>
   );
}
const DonationNavigatior = () => {
   const Stack = createStackNavigator();
   return (
      <Stack.Navigator screenOptions={screenOptions}>
         <Stack.Screen
            name='Donations'
            component={DonationsScreen}
            options={{ title: 'Donations',
               headerLeft: () => (
                  <Icon
                     name='money'
                     type='font-awesome'
                     iconStyle={styles.stackIcon}
                  />
               )
            }}
         />
      </Stack.Navigator>
   );
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
            options= {{ title: 'News And Updates',
               headerLeft: () => (
                  <Icon
                     name='list'
                     type='font-awesome'
                     iconStyle={styles.stackIcon}
                  />
               )
            }}
         />
         <Stack.Screen
            name='NewsInfo'
            component={NewsInfoScreen}
            options = {({ route }) => ({
               title: route.params.news.name
            })}
         />
         <Stack.Screen
            name='Volinteer'
            component={VolinteerScreen}
            options= {{ title: 'Volinteer',
         }}
         />
         <Stack.Screen
            name='Donations'
            component={DonationsScreen}
            options= {{ title: 'Donations'}}
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
            <BotTab.Screen 
               name='Home' 
               component={HomeNavigator} 
               options={{ tabBarLabel: 'Home',
                        tabBarIcon: ({ color }) => (
                           <Icon
                              name='home'
                              type='font-awesome'
                              size={24}
                              iconStyle={{ width: 24 }}
                              color={color}
                           />
                        )
               }}
            />
            <BotTab.Screen 
               name='News and Updates' 
               component={DirectoryNavigator} 
               options={{ tabBarLabel: 'News and Updates',
                  tabBarIcon: ({ color }) => (
                     <Icon
                        name='list'
                        type='font-awesome'
                        size={24}
                        iconStyle={{ width: 24 }}
                        color={color}
                     />
                  )
               }}   
            />
            <BotTab.Screen 
               name='Volinteer' 
               component={VolinteerNavigatior} 
               options={{ tabBarLabel: 'Volinteer',
                  tabBarIcon: ({ color }) => (
                     <Icon
                        name='heart'
                        type='font-awesome'
                        size={24}
                        iconStyle={{ width: 24 }}
                        color={color}
                     />
                  )
               }}
            />
            <BotTab.Screen 
               name='Donations' 
               component={DonationNavigatior} 
               options={{ tabBarLabel: 'Donations',
                  tabBarIcon: ({ color }) => (
                     <Icon
                        name='money'
                        type='font-awesome'
                        size={24}
                        iconStyle={{ width: 24 }}
                        color={color}
                     />
                  )
               }}   
            />
         </BotTab.Navigator>
      </View>
    )
 };

 const styles = StyleSheet.create({
   stackIcon: {
      marginLeft: 10,
      color: '#fff',
      fontSize: 24
   }
 })
 export default Main;