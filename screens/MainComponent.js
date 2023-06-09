import { useState } from "react";
import { View } from "react-native";
import { NEWSANDUPDATES } from '../shared/newAndUpdates';
import NewsInfoScreen from './NewsInfoScreen';
import DirectoryScreen from "./DirectoryScreen";

 const Main = () => {
    const [newAndUpdates, setNews] = useState(NEWSANDUPDATES);
    const [selectedNewsId, setSelectedNewsId] = useState();

    return (
      <View style={{ flex: 1}}>
         <DirectoryScreen 
            newAndUpdates={newAndUpdates}
            onPress={(newAndUpdatesId) => setSelectedNewsId(newAndUpdatesId)}
         />
         <NewsInfoScreen
            newAndUpdates={
               newAndUpdates.filter(
                  (newAndUpdates) => newAndUpdates.id === selectedNewsId
               )[0]
            }
         />   
      </View>
    )
 };

 export default Main;