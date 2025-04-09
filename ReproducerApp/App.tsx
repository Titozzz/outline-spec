/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  View,
} from 'react-native';

function App(): React.JSX.Element {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <View
        style={{
          width: 200,
          height: 200,
          backgroundColor: 'red',
          outlineColor: 'rgba(0, 0, 255, 0.5)',
          outlineOffset: 30,
          outlineWidth: 1,
          borderRadius: 60,
        }}
      />
    </View>
  );
}

export default App;
