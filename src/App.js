import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from 'firebase'
import { Header, Button, Spinner, Card, CardSection } from './components/common'
import LoginForm from './components/LoginForm'


class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loggedIn: null,
        }

        this.renderContent = this.renderContent.bind(this)
    }

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyBWPhppNwNG5qK2ywXyTo4aiVFkvG1Nuks',
            authDomain: 'authreact-cecd6.firebaseapp.com',
            databaseURL: 'https://authreact-cecd6.firebaseio.com',
            projectId: 'authreact-cecd6',
            storageBucket: 'authreact-cecd6.appspot.com',
            messagingSenderId: '1020323890161',
        })

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true })
            } else {
                this.setState({ loggedIn: false })
            }
        })
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case false:
                return <LoginForm />

            case true:
                return (
                    <Card>
                        <CardSection>
                            <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
                        </CardSection>
                    </Card>
                )

            default:
                return (
                    <Card>
                        <CardSection>
                            <Spinner size="large" />
                        </CardSection>
                    </Card>
                )
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        )
    }
}

export default App
