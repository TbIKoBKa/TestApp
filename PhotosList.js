import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import ListItem from './ListItem'

const PhotosList = ({ navigation }) => {
    const data = useSelector(state => state.photos.list)
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollViewContainer}>
                <View style={styles.scrollViewInner}>
                {
                    data.map(item =>
                        <ListItem 
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            author={item.author}
                            urlFull={item.urlFull}
                            urlSmall={item.urlSmall}
                            navigation={navigation}
                        />
                    )
                }
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    scrollViewContainer: {
        flex: 1,
        width: '100%'
    },
    scrollViewInner: {
        flex: 1,
        alignItems: "center",
    },
})

export default PhotosList