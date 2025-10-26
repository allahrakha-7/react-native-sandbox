import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import pic from '../images/attaabad-lake.jpg';
import rnfeature from '../images/rnfeatures.png';

const PlacesAndBlogCards = () => {
  return (
    <>
      <View style={styles.sectionContainer}>
        <Text style={styles.titleText}>Trending Places:</Text>
        <View style={styles.placeCard}>
          <Image source={pic} style={styles.placeImage} />
          <View style={styles.placeCardBody}>
            <Text style={styles.placeTitle}>Attabad Lake</Text>
            <Text style={styles.placeSubtitle}>15 minutes away</Text>
            <Text style={styles.placeDescription}>
              A stunning, crystal-clear blue lake located in the Hunza Valley,
              Gilgit-Baltistan.
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.titleText}>Blog Card:</Text>
        <View style={styles.placeCard}>
          <View style={styles.txtBox}>
            <Text>What's new in React Native v0.82 ?</Text>
          </View>
          <Image source={rnfeature} style={styles.placeImage} />
          <View style={styles.placeCardBody}>
            <View style={styles.btnContainer}>
              <Pressable
                style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1.0 }]}
              >
                <Text style={styles.btntext}>Read More</Text>
              </Pressable>
              <Pressable
                style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1.0 }]}
              >
                <Text style={styles.btntext}>Follow Me</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default PlacesAndBlogCards;

const styles = StyleSheet.create({
  sectionContainer: {
    paddingVertical: 10,
  },
  titleText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
    marginLeft: 12,
  },
  placeCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginHorizontal: 12,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  placeImage: {
    width: '100%',
    height: 180,
  },
  placeCardBody: {
    padding: 12,
  },
  placeTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  placeSubtitle: {
    fontSize: 14,
    color: '#555555',
    marginTop: 4,
  },
  placeDescription: {
    fontSize: 14,
    color: '#333333',
    marginTop: 8,
  },
  txtBox: {
    padding: 10,
    alignItems: 'center',
  },
  btnContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  btntext: {
    color: '#1167b1',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
