import { Text, View, TextInput, StyleSheet, Button, Switch, ScrollView, Alert, PanResponder } from 'react-native';
import { useState, useRef } from "react";
import { Formik } from 'formik';
import * as Yup from 'yup'
import * as Animatable from 'react-native-animatable';
import * as Notifications from 'expo-notifications';

const DonationsScreen = () => {
    const [contact, setContact] = useState(false);
    const view = useRef();

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderGrant: () => {
            view.current
                .swing(500)
                .then((endState) =>
                    console.log()
                );
        },
    })

    const alertForm = (values, actions) => {
        Alert.alert('Volinteer Form', "First Name: " + values.firstName + "\nLast Name: "
            + values.lastName + "\nPhone Number: " + values.phoneNumber + "\nEmail: "
            + values.email + "\namount " + values.amount + " dollars.",
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'OK',
                    onPress: () => {
                        presentLocalNotification(values.email);
                        actions.resetForm({})
                        setContact(false)
                    }
                }
            ],
            { cancelable: false },
        )
    }

    const presentLocalNotification = async (email) => {
        const sendNotification = () => {
            Notifications.setNotificationHandler({
                handleNotification: async () => ({
                    shouldShowAlert: true,
                    shouldPlaySOund: true,
                    shouldSetBadge: true
                })
            });

            Notifications.scheduleNotificationAsync({
                content: {
                    title: "Donation Form Submited",
                    body: "You Form has been successfully sent!  You billing will be sent to " + email
                },
                trigger: null
            });
        };
        let permissions = await Notifications.getPermissionsAsync();
        if (!permissions.granted) {
            permissions = await Notifications.requestPermissionsAsync();
        }
        if (permissions.granted) {
            sendNotification();
        }
    };

    //Error check for formik
    const displayErrorMesages = Yup.object().shape({
        firstName: Yup.string()
            .min(2, 'Must be 2 or more characters.')
            .required('First Name is required.'),
        lastName: Yup.string()
            .min(2, 'Must be 2 or more characters.')
            .required('Last Name is required.'),
        phoneNumber: Yup.string()
            .min(10, 'Must be ten digits, including area code.')
            .required('Phone number is required.'),
        email: Yup.string()
            .email('Missing @ or Domain Extention.')
            .required('Email is required.'),
        amount: Yup.number()
            .min(10, "Must be ten dollars or more.")
            .max(100, 'We can not accept more then 100 dollor.')
            .required('A number is required.')
    })
    return (
        <ScrollView>
            <Text style={styles.topTitle}>
                Fill out Donation Form below
            </Text>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    phoneNumber: '',
                    email: '',
                    amount: '',
                }}
                validationSchema={displayErrorMesages}
                onPanResponderEnd
                onSubmit={(values, actions) => { alertForm(values, actions) }}
            >
                {({ handleChange, handleBlur, handleSubmit, setFieldValue, values, errors, touched }) => {
                    const view = useRef();
                    const isLeftSwipe = ({ dx }) => dx < -200;
                    const isRightSwipe = ({ dx }) => dx > 200;

                    const panResponder = PanResponder.create({
                        onStartShouldSetPanResponder: () => true,
                        onPanResponderGrant: () => {
                            view.current
                                .pulse(500)
                                .then((endState) =>
                                    console.log()
                                );
                        },
                        onPanResponderEnd: (e, gestureState) => {
                            console.log('pan responder end', gestureState);
                            if (isLeftSwipe(gestureState)) {
                                setFieldValue('firstName', "")
                                setFieldValue('lastName', "")
                                setFieldValue('phoneNumber', "")
                                setFieldValue('email', "")
                                setFieldValue('amount', "")
                                setContact(false)
                            }
                            if (isRightSwipe(gestureState)) {
                                setFieldValue('firstName', "")
                                setFieldValue('lastName', "")
                                setFieldValue('phoneNumber', "")
                                setFieldValue('email', "")
                                setFieldValue('amount', "")
                                setContact(false)
                            }
                        }
                    })

                    return (
                        <Animatable.View
                            animation={"flipInY"}
                            duration={2000}
                            delay={1000}
                            ref={view}
                            {...panResponder.panHandlers}
                        >
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
                            <TextInput
                                style={styles.input}
                                onChangeText={handleChange('amount')}
                                onBlur={handleBlur('amount')}
                                value={values.amount}
                                placeholder='Amount'
                                keyboardType='numeric'
                                maxLength={3}
                            />
                            {errors.amount && touched.amount ? (
                                <Text style={styles.errorText}>{errors.amount}</Text>
                            ) : null}

                            <View style={styles.switchBox}>
                                <Text style={{ flex: 5, textAlign: 'center' }}>
                                    Would like to make this a monthly donation?
                                </Text>
                                <Text style={{ flex: 2, textAlign: 'right', marginRight: 5 }}>
                                    {contact ? 'Monthly' : 'One Time'}
                                </Text>
                                <Switch
                                    style={{ flex: 2 }}
                                    value={contact}
                                    trackColor={{ true: '#5637DD', false: null }}
                                    onValueChange={(value) => setContact(value)}
                                />
                            </View>
                            <Button onPress={handleSubmit} title="Submit" />
                        </Animatable.View>
                    )
                }}
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
    }
});

export default DonationsScreen