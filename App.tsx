/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Button, NativeModules} from 'react-native';

const {CalendarModule} = NativeModules;

function App(): React.JSX.Element {
  const onPress = () => {
    CalendarModule.createCalendarEvent('testName', 'testLocation');
    console.log('We will invoke the native module here!');
  };

  return (
    <Button
      title="Click to invoke your native module!"
      color="#841584"
      onPress={onPress}
    />
  );
}

export default App;
