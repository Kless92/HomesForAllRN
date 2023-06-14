import { Text, View, TextInput, StyleSheet, Button, Switch, ScrollView} from 'react-native';
import { useState } from "react";


const VolinteerScreen = () => {
    const [firstText, onChangefirstText] = useState('');
    const [lastText, onChangeLastText] = useState('');
    const [phoneText, onChangePhoneText] = useState('');
    const [emilText, onChangeEmailText] = useState("");
    const [contact, setContact] = useState(false);
    const [extraText, onChangeExtraText] = useState("");

    const resetForm = () => {
        onChangefirstText('');
        onChangeLastText('');
        onChangePhoneText('');
        onChangeEmailText('');
        setContact(false);
        onChangeExtraText('');
    }
    return(
        <ScrollView>
            <Text 
                style={styles.topTitle}
            >
                Fill out the form below please.
            </Text>
            <View>  
                <TextInput
                    style={styles.input}
                    onChangeText={onChangefirstText}
                    value={firstText}
                    placeholder='First Name'
                    autoCapitalize='words'
                    maxLength={10}
                />
            </View>
            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeLastText}
                    value={lastText}
                    placeholder='Last Name'
                    autoCapitalize='words'
                    maxLength={10}
                />
            </View>
            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangePhoneText}
                    value={phoneText}
                    placeholder='Phone Number'
                    keyboardType="numeric"
                    maxLength={10}
                />
            </View>
            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeEmailText}
                    value={emilText}
                    placeholder='Email'
                    autoCapitalize='none'
                    keyboardType='email-address'
                />
            </View>
            <View style={styles.switchBox}>
                <Text style={{flex: 5, textAlign: 'center'}}>Do you Prefer to be contacted by Phone or Email?</Text>
                <Text style={{ flex: 2, textAlign: 'right', marginRight: 5}}>{contact ? 'Email' : 'Phone'}</Text>
                <Switch
                    style={{ flex: 2 }}
                    value={contact}
                    trackColor={{ true: '#5637DD', false: null}}
                    onValueChange={(value) => setContact(value)}                   
                />
            </View>
            <View style={{ marginTop: 10}}>
                <Text style={{ textAlign: 'center'}}>Additional information?</Text>
                <TextInput
                    style={styles.bixBog}
                    onChangeText={onChangeExtraText}
                    value={extraText}
                    placeHolder="Anythign you would like to add?"
                    multiline={true}
                />
            </View>
            <View>
                <Button onPress={() => {
                    resetForm();
                }}title='Submit'/>
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        marginHorizontal: 12, 
        borderWidth: 1, 
        paddingHorizontal: 15,
        borderRadius: 5,
    },
    bixBog: {
        height: 160,
        margin: 12,
        marginHorizontal: 12, 
        borderWidth: 1, 
        paddingHorizontal: 15,
        borderRadius: 5,
    },
    topTitle: {
        textAlign:'center', 
        fontSize: 24, 
        margin: 12
    },
    switchBox: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        margin: 12
    },
});

export default VolinteerScreen