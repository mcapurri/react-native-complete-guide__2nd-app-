import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const StartGameScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>The Game Screen</Text>
            <View style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <TextInput />
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Reset" onPress={() => {}} />
                <Button title="Confirm" onPress={() => {}} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        padding: 15,
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 5, // shadow on android
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
    },
});

export default StartGameScreen;
