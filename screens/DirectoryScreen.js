import { FlatList } from "react-native";
import { Tile } from "react-native-elements";
import { useSelector } from 'react-redux';
import { baseURL } from '../shared/baseURL';

const DirectoryScreen = ({ navigation }) => {

    const newsandUpdates = useSelector((state) => state.newandUpdates);

    const renderDirectoryItem = ({ item: news }) => {
        return (
            <Tile
                title={news.name}
                caption={news.description}
                featured
                onPress={() => navigation.navigate('NewsInfo', { news })}
                imageSrc={{ uri: baseURL + news.image }}
            />
        );
    }

    return (
        <FlatList
            data={newsandUpdates.newsArray}
            renderItem={renderDirectoryItem}
            keyExtractor={(item) => item.id.toString()}
        />
    )

}

export default DirectoryScreen;
