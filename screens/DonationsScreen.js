import { Text, View, TextInput, StyleSheet } from 'react-native';
import { useState } from "react";

const DonationsScreen = () => {
    const [firstText, onChangefirstText] = useState('First Name');
    const [lastText, onChangeLastText] = useState('Last Name');
    const [phoneText, onChangePhoneText] = useState('Phone Number');
    const [emilText, onCHangeEmailText] = useState("Email");
    const [ammountText, onChangeAmmountText] = useState("Amount");

    return(
        <View>
            <Text>Donations Screen</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangefirstText}
                value={firstText}
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeLastText}
                value={lastText}
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangePhoneText}
                value={phoneText}
            />
            <TextInput
                style={styles.input}
                onChangeText={onCHangeEmailText}
                value={emilText}
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeAmmountText}
                value={ammountText}
            />
            
            <Text>Additional information?</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12, 
        borderWidth: 1, 
        padding: 10 
    },
});

export default DonationsScreen