import { StyleSheet, Text, View } from 'react-native';

import * as Someapp from 'someapp';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{Someapp.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
