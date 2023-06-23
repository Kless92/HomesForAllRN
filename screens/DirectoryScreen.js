import { FlatList, Text, View, PanResponder, Alert } from "react-native";
import { Tile } from "react-native-elements";
import { useSelector } from 'react-redux';
import { baseURL } from '../shared/baseURL';
import Loading from "../commpoents/LodingComponent";
import * as Animatable from 'react-native-animatable';

const DirectoryScreen = ({ navigation }) => {

    const newsandUpdates = useSelector((state) => state.newandUpdates);
    //Loding component called and errMess displayed if json server isn't up
    if (newsandUpdates.isLoading) {
        return <Loading />
    }
    if (newsandUpdates.errMess) {
        return (
            <View>
                <Text>{newsandUpdates.errMess}</Text>
            </View>
        )
    }

    const isLeftSwipe = ({ dx }) => dx < -200;
    const isRightSwipe = ({ dx }) => dx > 200;
    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderEnd: (e, gestureState) => {
            console.log('pan responder end', gestureState);
            if (isLeftSwipe(gestureState)) {
                Alert.alert(
                    'left at -200'
                )
            }
            if (isRightSwipe(gestureState)) {
                Alert.alert(
                    'right at 200'
                )
            }
        }
    })

    const renderDirectoryItem = ({ item: news }) => {
        return (
            <Animatable.View
                animation='fadeInLeft'
                duration={2000}
                delay={1000}
                {...panResponder.panHandlers}
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
