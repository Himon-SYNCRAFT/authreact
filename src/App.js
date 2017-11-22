import React, { Component } from 'react'
import { View, Text } from 'react-native'
import firebase from 'firebase'
import { Header } from './components/common'
import LoginForm from './components/LoginForm'


class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDvRrGRkc52ILI_NYxzmnAIqv39lRsObyE',
            authDomain: 'auth-test-835e7.firebaseapp.com',
            databaseURL: 'https://auth-test-835e7.firebaseio.com',
            projectId: 'auth-test-835e7',
            storageBucket: 'auth-test-835e7.appspot.com',
            messagingSenderId: '365852175863',
        })
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        )
    }
}

export default App
