import { useRef } from 'react';
import { StyleSheet, Text, View, PanResponder, Alert, Share } from "react-native";
import { Card, Icon } from 'react-native-elements';
import { baseURL } from "../../shared/baseURL";
import * as Animatable from 'react-native-animatable';

const RenderNews = (props) => {
    const { newsAndUpdates } = props;
    const view = useRef();

    const isLeftSwipe = ({ dx }) => dx < -200;
    const isRightSwipe = ({ dx }) => dx > 200;

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderGrant: () => {
            view.current
                .shake(1000)
                .then((endState) =>
                    console.log()
                );
        },
        onPanResponderEnd: (e, gestureState) => {
            console.log('pan responder end', gestureState);
            if (isLeftSwipe(gestureState)) {
                shareCampsite(
                    newsAndUpdates.name,
                    newsAndUpdates.description,
                    baseURL + newsAndUpdates.image
                )
            }
            if (isRightSwipe(gestureState)) {
                props.isFavorite ? 
                props.unMarkFavorite():
                props.markFavorite()
            }
        }
    })

    const shareCampsite = (title, message, url) => {
        Share.share(
            {
                title,
                message: `${title}: ${message} ${url}`,
                url
            },
            {
                dialogTitle: 'Share ' + title
            }
        )
    }

    if (newsAndUpdates) {
        return (
            <Animatable.View
                animation={'fadeInLeftBig'}
                duration={2000}
                delay={1000}
                ref={view}
                {...panResponder.panHandlers}
            >
                <Card containerStyle={styles.CardContainer}>
                    <Card.Image source={{ uri: baseURL + newsAndUpdates.image }}>
                        <View style={{ justifyContent: 'center', flex: 1 }}>
                            <Text style={styles.cardText}>
                                {newsAndUpdates.name}
                            </Text>
                        </View>
                    </Card.Image>
                    <Text style={{ marginLeft: 20, marginTop: 10 }}>
                        {newsAndUpdates.date}
                    </Text>
                    <Text style={{ margin: 20, fontSize: 15 }}>
                        {newsAndUpdates.description}
                    </Text>
                    <View style={styles.cardRow}>
                        <Icon
                            name={props.isFavorite ? 'heart' : 'heart-o'}
                            type='font-awesome'
                            color='red'
                            raised
                            reverse
                            onPress={() => props.isFavorite ? 
                            props.unMarkFavorite() : 
                            props.markFavorite()}
                        />
                        <Icon
                            name='share'
                            type='font-awesome'
                            color='#5637DD'
                            raised
                            reverse
                            onPress={() => shareCampsite(
                                newsAndUpdates.name,
                                newsAndUpdates.description,
                                baseURL + newsAndUpdates.image
                            )}
                        />
                    </View>
                </Card>
            </Animatable.View>
        );
    }
    return < View />;
};

const styles = StyleSheet.create({
    CardContainer: {
        padding: 0,
        margin: 0,
        marginBottom: 20
    },
    cardRow: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        margin: 20
    },
    cardText: {
        textShowColor: 'rgba(0, 0, 0, 1)',
        textShadowOffset: { width: -1, height: 1},
        textShadowRadius: 20,
        textAlign: 'center',
        color:'white',
        fontSize: 30
    }
})

export default RenderNews;