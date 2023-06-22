import { FlatList, Text, View } from "react-native";
import { Tile } from "react-native-elements";
import { useSelector } from 'react-redux';
import { baseURL } from '../shared/baseURL';
import Loading from "../commpoents/LodingComponent";
import * as Animatable from 'react-native-animatable';

const DirectoryScreen = ({ navigation }) => {

    const newsandUpdates = useSelector((state) => state.newandUpdates);
    //Loding component called and errMess displayed if json server isn't up
    if (newsandUpdates.isLoading) {
        return <Loading/>
    }
    if (newsandUpdates.errMess) {
        return (
            <View>
                <Text>{newsandUpdates.errMess}</Text>
            </View>
        )
    }

    const renderDirectoryItem = ({ item: news }) => {
        return (
            <Animatable.View
                animation='fadeInLeft'
                duration={2000}
                delay={1000}
            >
                <Tile
                    title={news.name}
                    caption={news.description}
                    featured
                    onPress={() => navigation.navigate('NewsInfo', { news })}
                    imageSrc={{ uri: baseURL + news.image }}
                />
            </Animatable.View>
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
