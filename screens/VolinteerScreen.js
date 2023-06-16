import { Text, View, TextInput, StyleSheet, Button, Switch, ScrollView, Alert} from 'react-native';
import { useEffect, useState } from "react";

const VolinteerScreen = () => {
    const [firstText, onChangefirstText] = useState('');
    const [lastText, onChangeLastText] = useState('');
    const [phoneText, onChangePhoneText] = useState('');
    const [emailText, onChangeEmailText] = useState('');
    const [contact, setContact] = useState(false);
    const [extraText, onChangeExtraText] = useState('');
    ///Error checks////
    const [fnError, setfnError] = useState('');
    const [lnError, setlnError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [emailError, setEmailError] = useState('');
    ///////////////////////
    const handleSubmit = () => {
        firstText.length == 0  ? setfnError('First Name is required.') 
        : firstText.length <= 1 ? setfnError('Must be 2 or more characters.')
        : setfnError('');
        
        lastText.length == 0  ? setlnError('Last Name is required.') 
        : lastText.length <= 1 ? setlnError('Must be 2 or more characters.')
        : setlnError('');

        phoneText.length < 10 ? setPhoneError('Phone number is required, including area code.')
        : setPhoneError('');

        emailText.length == 0 ? setEmailError('Email is required')
        :emailText.indexOf(' ') >= 0 ? setEmailError('Email can not contain spaces')
        :emailText.includes('@') != true ? setEmailError('This email is missing @') 
        //FInd a way to check form more @'s
        //:emailText.includes('@') >=2 ? setEmailError('There should only be 1 @')
        :emailText.includes('.com') != true ? setEmailError('This email is missing the Domain Name')
        : setEmailError('');
    }

    useEffect (() => {
        fnError.length == 0 &&
        lnError.length == 0 &&
        phoneError.length == 0 &&
        emailError.length == 0 &&
        firstText.length != 0 &&
        lastText.length != 0 &&
        phoneText.length != 0 &&
        emailText.length != 0 ? alertForm()
        : console.log(fnError.length+" else");
       // console.log("text");
    })
    ///Resets all form to default
    const resetForm = () => {
        onChangefirstText('');
        onChangeLastText('');
        onChangePhoneText('');
        onChangeEmailText('');
        setContact(false);
        onChangeExtraText('');
        setEmailError('')
    }

    const alertForm = () => {
        Alert.alert('Volinteer Form', "First Name: "+firstText+"\nLast Name: "
        +lastText+"\nPhone Number: "+phoneText+"\nEmail: "+emailText,
        [
            {
                text: 'Cancel',
                onPress: () => setEmailError('Alert was cancled, hit submit again or make changes'),
                style: 'cancel',
            },
            {
                text: 'OK',
                onPress: () => resetForm()
            }
        ],
        { cancelable: false },
        
    )}

    return(
        <ScrollView>
            <Text style={styles.topTitle}>
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
                <Text style={styles.errorText}>{fnError}</Text>
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
                <Text style={styles.errorText}>{lnError}</Text>
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
                <Text style={styles.errorText}>{phoneError}</Text>
            </View>
            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeEmailText}
                    value={emailText}
                    placeholder='Email'
                    autoCapitalize='none'
                    keyboardType='email-address'
                />
                <Text style={styles.errorText}>{emailError}</Text>
            </View>
            <View style={styles.switchBox}>
                <Text style={{flex: 5, textAlign: 'center'}}>
                    Do you Prefer to be contacted by Phone or Email?
                </Text>
                <Text style={{ flex: 2, textAlign: 'right', marginRight: 5}}>
                    {contact ? 'Email' : 'Phone'}
                </Text>
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
                    placeholder="Optional"
                    multiline={true}
                />
            </View>
            <View>
                <Button onPress={() => {
                    handleSubmit();
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
    errorText: {
        textAlign:'center', 
        color: 'red'
    }
});

export default VolinteerScreen