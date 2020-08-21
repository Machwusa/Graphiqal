import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Users"
                    component={HomeScreen}
                    options={{
                        title: 'My users',
                        headerStyle: {
                            backgroundColor: '#87CEEB'
                        }
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
