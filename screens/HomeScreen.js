import { ScrollView, Text, View } from 'react-native';
import { useState } from 'react';
import { Card } from 'react-native-elements';
import { FRONTPAGE } from '../shared/frontPage';
import { NEWSANDUPDATES } from '../shared/newsAndUpdates';

const FeaturedItem = ({ item }) => {
    if (item) {
        return(
            <Card containerStyle={{ padding: 0 }}>
                <Card.Image source={item.image}>
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
    const [frontPage, setFrontPage] = useState(FRONTPAGE);
    const [news, setNews] = useState(NEWSANDUPDATES);

    const featFrontPage = frontPage.find((item) => item.featured);
    const featNews = news.find((item) => item.featured);
    return (
        <ScrollView>
            <FeaturedItem item={featFrontPage}/>
            <FeaturedItem item={featNews}/>
        </ScrollView>
    )
}

export default HomeScreen;