import { FlatList } from "react-native";
import { Avatar, ListItem } from 'react-native-elements';

const DirectoryScreen = (props) => {
    const renderDirectoryItem = ({ item: newAndUpdates }) => {
        return(
            <ListItem onPress={() => props.onPress(newAndUpdates.id)}>
                <Avatar source={newAndUpdates.image} rounded />
                <ListItem.Content>
                    <ListItem.Title>{newAndUpdates.name}</ListItem.Title>
                    <ListItem.Subtitle>{newAndUpdates.date}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        );
    }

    return (
        <FlatList
            data={props.newAndUpdates}
            renderItem={renderDirectoryItem}
            keyExtractor={(item) => item.id.toString()}
        />
    )

}

export default DirectoryScreen;
