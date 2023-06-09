import { Text, View } from "react-native";
import { Card } from 'react-native-elements';

const RenderNews = ({ newsAndUpdates }) => {
    if (newsAndUpdates) {
        return (
            <Card containerStyle={{ padding: 0}}>
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
            </Card>
        );
    }
    return < View />;
};

export default RenderNews;