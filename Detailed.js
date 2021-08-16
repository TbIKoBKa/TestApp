import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

const Detailed = ({ route }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: route.params.urlFull }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: '100%',
        height: '100%'
    }
})

export default Detailed