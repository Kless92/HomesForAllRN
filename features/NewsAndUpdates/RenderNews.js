import { Text, View } from "react-native";
import { Card } from 'react-native-elements';

const RenderNews = ({ newAndUpdates }) => {
    if (newAndUpdates) {
        return (
            <Card containerStyle={{ padding: 0}}>
                <Card.Image source={newAndUpdates.image}>
                    <View style={{ justifyContent: 'center', flex: 1}}>
                        <Text
                            style={{ 
                                color: 'white',
                                textALign: 'center',
                                fontSize: 20
                            }}
                        >
                            {newAndUpdates.name}
                        </Text>
                    </View>
                </Card.Image>
                <Text style={{ marginLeft: 20, marginTop: 10}}>{newAndUpdates.date}</Text>
                <Text style={{ margin: 20 }}>{newAndUpdates.description}</Text>
            </Card>
        );
    }
    return < View />;
};

export default RenderNews;