import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import { fetchPhotos } from './photoSlice'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PhotosList from './PhotosList'
import Detailed from './Detailed'
import { StatusBar } from 'react-native'

const App = () => {
    useEffect(() => {
        console.log('fetching')
        store.dispatch(fetchPhotos)
    })

    const Stack = createNativeStackNavigator()

    return (
        <>
            <StatusBar hidden={true}/>
            <Provider store={store}>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="ListPhotos">
                        <Stack.Screen name="ListPhotos" component={PhotosList} />
                        <Stack.Screen name="Detailed" component={Detailed} />
                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>
        </>
    )
}

export default App