import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'


const styles = {
    viewStyle: {
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative',
    },
    textStyle: {
        fontSize: 20,
    },
}

const Header = ({ headerText }) => (
    <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>{headerText}</Text>
    </View>
)

Header.propTypes = {
    headerText: PropTypes.string,
}

Header.defaultProps = {
    headerText: '',
}

export { Header }
