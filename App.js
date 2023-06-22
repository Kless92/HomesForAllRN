import { NavigationContainer } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Main from './screens/MainComponent';
import * as SplashScreen from 'expo-splash-screen';

//SplashScreen.preventAutoHideAsync();

export default function App() {

  const [appIsReady, setAppIsReady] = useState(false);

  const styles = StyleSheet.create({
    center: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }
  })

  useEffect(() => {
    async function prepare() {
      try {
        //await Font.loadAsync(Entypo.font);
        await new Promise(resolve => setTimeout(resolve, 5000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return (
      <View style={styles.center} onLayout={onLayoutRootView}>
        <Text style={{ fontSize: 32 }}>Homes For All</Text>
        <Icon name='spinner' type='font-awesome' size={75} style={{marginTop: 30}}/>
      </View>
    );
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </Provider>
  )
}
