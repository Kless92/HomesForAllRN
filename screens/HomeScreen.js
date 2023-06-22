import { ScrollView, Text, View, Animated } from 'react-native';
import { useRef, useEffect } from 'react';
import { Card } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { baseURL } from '../shared/baseURL';
import Loading from '../commpoents/LodingComponent';

const FeaturedItem = (props) => {
    const { item } = props;
    /*Loding component called and errMess displayed 
      if json server isn't up*/
    if (props.isLoading) {
        return <Loading/>
    }
    if (props.errMess) {
        return (
            <View>
                <Text>{props.errMess}</Text>
            </View>
        )
    }
    
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

    const fadeValue = useRef(new Animated.Value(0)).current;
    const FadeInAnimation = Animated.timing(fadeValue, {
        toValue: 1, 
        duration: 3000, 
        useNativeDriver: true
    });

    const featFrontPage = frontPage.frontPageArray.find((item) => item.featured);
    const featNews = newsandUpdates.newsArray.find((item) => item.featured);

    useEffect(() => {
        FadeInAnimation.start();
    }, [])

    return (
        <Animated.ScrollView style={{ opacity: fadeValue  }}>
            <FeaturedItem 
                item={featFrontPage}
                isLoading={frontPage.isLoading}
                errMess={frontPage.errMess}
            />
            <FeaturedItem 
                item={featNews}
                isLoading={newsandUpdates.isLoading}
                errMess={newsandUpdates.errMess}
            />
        </Animated.ScrollView>
    )
}

export default HomeScreen;