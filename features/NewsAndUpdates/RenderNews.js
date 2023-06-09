import { StyleSheet, Text, View } from "react-native";
import { Card, Icon } from 'react-native-elements';

const RenderNews = ( props ) => {
    const { newsAndUpdates } = props;
    if (newsAndUpdates) {
        return (
            <Card containerStyle={styles.cardContainer}>
                <Card.Image source={newsAndUpdates.image}>
                    <View style={{ justifyContent: 'center', flex: 1}}>
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
                <Text style={{ marginLeft: 20, marginTop: 10}}>{newsAndUpdates.date}</Text>
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
        );
    }
    return < View />;
};

const styles= StyleSheet.create({
    CardContainer: {
        padding:0,
        margin: 0,
        marginBottom: 20
    }
})

export default RenderNews;