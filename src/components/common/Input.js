import React from 'react'
import { TextInput, View, Text } from 'react-native'
import PropTypes from 'prop-types'


const inputStyle = {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
}

const labelStyle = {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
}

const containerStyle = {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
}

const Input = ({
    label,
    onChangeText,
    value,
    placeholder,
    secureTextEntry,
}) => (
    <View style={containerStyle}>
        <Text style={labelStyle}>{label}</Text>
        <TextInput
            autoCorrect={false}
            onChangeText={onChangeText}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            style={inputStyle}
            value={value}
        />
    </View>
)

Input.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChangeText: PropTypes.func,
    secureTextEntry: PropTypes.bool,
}

Input.defaultProps = {
    label: '',
    value: '',
    placeholder: '',
    onChangeText: null,
    secureTextEntry: false,
}

export { Input }
