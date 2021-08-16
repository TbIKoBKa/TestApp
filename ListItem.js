import React from 'react'
import { Image, StyleSheet, Text, View, Animated, Dimensions, TouchableHighlight } from 'react-native'

const display = Dimensions.get('screen')
const imageSize = display.width / 2

const ListItem = ({ id, title, author, urlFull, urlSmall, navigation }) => {
    return (
        <View style={styles.imageContainer}>
            <TouchableHighlight onPress={() => navigation.navigate({ name: "Detailed", params: { urlFull } })}>
                <Image style={styles.image} source={{ uri: urlSmall }}/>
            </TouchableHighlight>
            <Text style={styles.text}>{title}</Text>
            <Text style={styles.text}>Author: {author}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        width: '95%',
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20,
    },
    image: {
        width: imageSize,
        height: imageSize,
        resizeMode:'cover',
        zIndex: 100
    },
    text: {
        fontSize: 18,
        textAlign: "center"
    }
})

export default ListItem