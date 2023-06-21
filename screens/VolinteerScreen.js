import { Text, View, TextInput, StyleSheet, Button, Switch, ScrollView, Alert } from 'react-native';
import { useState } from "react";
import { Formik } from 'formik';
import * as Yup from 'yup'

const VolinteerScreen = () => {

    const [contact, setContact] = useState(false);
    const [extraText, onChangeExtraText] = useState('');

    const alertForm = (values, actions) => {
        Alert.alert('Volinteer Form', "First Name: " + values.firstName + "\nLast Name: "
            + values.lastName + "\nPhone Number: " + values.phoneNumber + "\nEmail: " + values.email,
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'OK',
                    onPress: () => {
                        actions.resetForm({})
                        setContact(false)
                        onChangeExtraText('')
                    }
                }
            ],
            { cancelable: false },

        )
    }
    const displayErrorMesages = Yup.object().shape({
        firstName: Yup.string()
            .min(2, 'Must be 2 or more characters.')
            .required('First Name is required.'),
        lastName: Yup.string()
            .min(2, 'Must be 2 or more characters.')
            .required('Last Name is required.'),
        phoneNumber: Yup.string()
            .min(9, 'Must be ten digits, including area code.')
            .required('Phone number is required.'),
        email: Yup.string()
            .email('Missing @ or Domain Extention.')
            .required('Email is required.')
    });
    return (
        <ScrollView>
            <Text style={styles.topTitle}>
                Fill out the form below please.
            </Text>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    phoneNumber: '',
                    email: '',
                }}
                validationSchema={displayErrorMesages}
                onSubmit={(values, actions) => { alertForm(values, actions) }}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                    <View>
                        <TextInput
                            style={styles.input}
                            onChangeText={handleChange('firstName')}
                            onBlur={handleBlur('firstName')}
                            value={values.firstName}
                            placeholder='First Name'
                            autoCapitalize='words'
                            maxLength={10}
                        />
                        {errors.firstName && touched.firstName ? (
                            <Text style={styles.errorText}>{errors.firstName}</Text>
                        ) : null}
                        <TextInput
                            style={styles.input}
                            onChangeText={handleChange('lastName')}
                            onBlur={handleBlur('lastName')}
                            value={values.lastName}
                            placeholder='Last Name'
                            autoCapitalize='words'
                            maxLength={10}
                        />
                        {errors.lastName && touched.lastName ? (
                            <Text style={styles.errorText}>{errors.lastName}</Text>
                        ) : null}
                        <TextInput
                            style={styles.input}
                            onChangeText={handleChange('phoneNumber')}
                            onBlur={handleBlur('phoneNumber')}
                            value={values.phoneNumber}
                            placeholder='Phone Number'
                            keyboardType="numeric"
                            maxLength={10}
                        />
                        {errors.phoneNumber && touched.phoneNumber ? (
                            <Text style={styles.errorText}>{errors.phoneNumber}</Text>
                        ) : null}
                        <TextInput
                            style={styles.input}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            placeholder='Email'
                            keyboardType='email-address'
                        />
                        {errors.email && touched.email ? (
                            <Text style={styles.errorText}>{errors.email}</Text>
                        ) : null}
                        <View style={styles.switchBox}>
                            <Text style={{ flex: 5, textAlign: 'center' }}>
                                Do you Prefer to be contacted by Phone or Email?
                            </Text>
                            <Text style={{ flex: 2, textAlign: 'right', marginRight: 5 }}>
                                {contact ? 'Email' : 'Phone'}
                            </Text>
                            <Switch
                                style={{ flex: 2 }}
                                value={contact}
                                trackColor={{ true: '#5637DD', false: null }}
                                onValueChange={(value) => setContact(value)}
                            />
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <Text style={{ textAlign: 'center' }}>Additional information?</Text>
                            <TextInput
                                style={styles.bixBog}
                                onChangeText={onChangeExtraText}
                                value={extraText}
                                placeholder="Optional"
                                multiline={true}
                            />
                        </View>
                        <Button onPress={handleSubmit} title="Submit" />
                    </View>
                )}
            </Formik>
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
        textAlign: 'center',
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
        textAlign: 'center',
        color: 'red'
    },

});

export default VolinteerScreen