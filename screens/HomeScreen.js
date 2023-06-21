import { ScrollView, Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { baseURL } from '../shared/baseURL';

const FeaturedItem = ({ item }) => {
    if (item) {
        return(
            <Card containerStyle={{ padding: 0 }}>
                <Card.Image source={{ uri: baseURL + item.image }}>
                    <View style={{ justifyContent: 'center', flex: 1 }}>
                        <Text
                            style={{
                                color: 'white',
                                textAlign: 'center',
                                fontSize: 20
                            }}
                        >
                            {item.name}
                        </Text>
                    </View>
                </Card.Image>
                <Text style={{ margin: 20 }}>{item.description}</Text>
            </Card>
        );
    }
    return <View/>;
};

const HomeScreen = () => {
    const frontPage = useSelector((state) => state.frontPage);
    const newsandUpdates = useSelector((state) => state.newandUpdates);

    const featFrontPage = frontPage.frontPageArray.find((item) => item.featured);
    const featNews = newsandUpdates.newsArray.find((item) => item.featured);
    return (
        <ScrollView>
            <FeaturedItem item={featFrontPage}/>
            <FeaturedItem item={featNews}/>
        </ScrollView>
    )
}

export default HomeScreen;