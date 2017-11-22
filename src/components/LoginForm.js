import React, { Component } from 'react'
import firebase from 'firebase'
import { Text } from 'react-native'
import { Button, Card, CardSection, Input, Spinner } from './common'

const errorTextStyle = {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
}

class LoginFrom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            error: '',
            loading: false,
        }

        this.onButtonPress = this.onButtonPress.bind(this)
    }

    onButtonPress() {
        const { email, password } = this.state
        this.setState({ error: '', loading: true })

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this))
            })
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: '',
        })
    }

    onLoginFail() {
        this.setState({
            loading: false,
            error: 'Authentication Failed',
        })
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size="small" />
        }

        return <Button onPress={this.onButtonPress}>Log in</Button>
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        onChangeText={email => this.setState({ email })}
                        placeholder="user@domain.com"
                        value={this.state.email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Password"
                        onChangeText={password => this.setState({ password })}
                        secureTextEntry
                        value={this.state.password}
                    />
                </CardSection>

                <Text style={errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        )
    }
}

export default LoginFrom
