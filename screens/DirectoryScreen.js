import { useState } from "react";
import { FlatList } from "react-native";
import { Avatar, ListItem } from 'react-native-elements';
import { NEWSANDUPDATES } from "../shared/newsAndUpdates";
import { Tile } from "react-native-elements";

const DirectoryScreen = ({ navigation }) => {
const [ newsAndUpdates, setNewsAndUpdates] = useState(NEWSANDUPDATES);

    const renderDirectoryItem = ({ item: news }) => {
        return(
           /* <ListItem onPress={() => navigation.navigate('NewsInfo', { news })}>
                <Avatar source={news.image} rounded />
                <ListItem.Content>
                    <ListItem.Title>{news.name}</ListItem.Title>
                    <ListItem.Subtitle>{news.date}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>*/
            <Tile
                title={news.name}
                caption={news.description}
                featured
                onPress={() => navigation.navigate('NewsInfo', { news })}
                imageSrc={ news.image }
            />
        );
    }

    return (
        <FlatList
            data={newsAndUpdates}
            renderItem={renderDirectoryItem}
            keyExtractor={(item) => item.id.toString()}
        />
    )

}

export default DirectoryScreen;
