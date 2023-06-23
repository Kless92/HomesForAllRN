import { useRef } from 'react';
import { StyleSheet, Text, View, PanResponder, Alert } from "react-native";
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
                            <Text
                                style={{
                                    color: 'white',
                                    textALign: 'center',
                                    fontSize: 20
                                }}
                            >
                                {newsAndUpdates.name}
                            </Text>
                        </View>
                    </Card.Image>
                    <Text style={{ marginLeft: 20, marginTop: 10 }}>{newsAndUpdates.date}</Text>
                    <Text style={{ margin: 20 }}>{newsAndUpdates.description}</Text>
                    <Icon
                        name={props.isFavorite ? 'heart' : 'heart-o'}
                        type='font-awesome'
                        color='red'
                        raised
                        reverse
                        onPress={() => props.isFavorite ? console.log('Already Set as Fav') : props.markFavorite()}
                    />
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
    }
})

export default RenderNews;