import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import PropTypes from 'prop-types'


const spinnerStyle = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
}

const Spinner = ({ size }) => (
    <View style={spinnerStyle}>
        <ActivityIndicator size={size} />
    </View>
)

Spinner.propTypes = {
    size: PropTypes.string,
}

Spinner.defaultProps = {
    size: 'large',
}

export { Spinner }
