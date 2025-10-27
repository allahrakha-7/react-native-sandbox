import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, ScrollView } from 'react-native';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import PlacesAndBlogCards from './components/PlacesAndBlogCards';
import ContactCards from './components/ContactCards';
import RNBootSplash from 'react-native-bootsplash';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    RNBootSplash.hide({ fade: true });
  }, []);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.mainContainer} edges={['top']}>
        <ScrollView>
          <FlatCards />
          <ElevatedCards />
          <PlacesAndBlogCards />
          <ContactCards />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#333333',
  },
});
