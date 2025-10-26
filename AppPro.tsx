import { ScrollView, StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import pic from './images/attaabad-lake.jpg';
import rnfeature from './images/rnfeatures.png';
import f1 from './images/f1.jpg';
import b1 from './images/b1.jpg';
import User from './images/user.png';

const AppPro = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.mainContainer} edges={['top']}>
        <ScrollView>
          <View style={styles.sectionContainer}>
            <Text style={styles.titleText}>Flash Cards:</Text>
            <ScrollView horizontal={true} style={styles.scroller}>
              <View style={[styles.card, styles.red]}>
                <Text style={styles.cardText}>Red</Text>
              </View>
              <View style={[styles.card, styles.green]}>
                <Text style={styles.cardText}>Green</Text>
              </View>
              <View style={[styles.card, styles.blue]}>
                <Text style={styles.cardText}>Blue</Text>
              </View>
              <View style={[styles.card, styles.orange]}>
                <Text style={styles.cardText}>Orange</Text>
              </View>
              <View style={[styles.card, styles.yellow]}>
                <Text style={[styles.cardText, styles.darkText]}>Yellow</Text>
              </View>
              <View style={[styles.card, styles.indigo]}>
                <Text style={styles.cardText}>Indigo</Text>
              </View>
            </ScrollView>
          </View>

          <View style={styles.sectionContainer}>
            <Text style={styles.titleText}>Elevated Cards:</Text>
            <ScrollView horizontal={true} style={styles.scroller2}>
              <View style={[styles.card2]}>
                <Text style={styles.cardText2}>These</Text>
              </View>
              <View style={[styles.card2]}>
                <Text style={styles.cardText2}>are</Text>
              </View>
              <View style={[styles.card2]}>
                <Text style={styles.cardText2}>the</Text>
              </View>
              <View style={[styles.card2]}>
                <Text style={styles.cardText2}>elevated</Text>
              </View>
              <View style={[styles.card2]}>
                <Text style={[styles.cardText2]}>cards</Text>
              </View>
              <View style={[styles.card2]}>
                <Text style={styles.cardText2}>!</Text>
              </View>
            </ScrollView>
          </View>

          <View style={styles.sectionContainer}>
            <Text style={styles.titleText}>Trending Places:</Text>
            <View style={styles.placeCard}>
              <Image source={pic} style={styles.placeImage} />
              <View style={styles.placeCardBody}>
                <Text style={styles.placeTitle}>Attabad Lake</Text>
                <Text style={styles.placeSubtitle}>15 minutes away</Text>
                <Text style={styles.placeDescription}>
                  A stunning, crystal-clear blue lake located in the Hunza
                  Valley, Gilgit-Baltistan.
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

           <View style={styles.contactsContainer}>
            <Text style={styles.titleText}>Contacts:</Text>
            <View style={styles.contactCard}>
              <View style={styles.contactImageContainer}>
                <Image source={f1} style={styles.f1Image} />
              </View>
              <View style={styles.contactCardBody}>
                <Text style={styles.contactTitle}>Najam Shehroz</Text>
                <Text style={styles.contactSubtitle}>Shining bright like a star 🌟👑</Text>
              </View>
            </View>

            <View style={styles.contactCard}>
              <View style={styles.contactImageContainer}>
                <Image source={User} style={styles.f1Image} />
              </View>
              <View style={styles.contactCardBody}>
                <Text style={styles.contactTitle}>Zain Ul Abideen</Text>
                <Text style={styles.contactSubtitle}>A true gem 💎 to all ✨</Text>
              </View>
            </View>

            <View style={styles.contactCard}>
              <View style={styles.contactImageContainer}>
                <Image source={b1} style={styles.f1Image} />
              </View>
              <View style={styles.contactCardBody}>
                <Text style={styles.contactTitle}>Ali Murtaza</Text>
                <Text style={styles.contactSubtitle}>Standing with courage & honor🦁🛡️</Text>
              </View>
            </View>

            <View style={styles.contactCard}>
              <View style={styles.contactImageContainer}>
                <Image source={User} style={styles.f1Image} />
              </View>
              <View style={styles.contactCardBody}>
                <Text style={styles.contactTitle}>Abdul Ahad</Text>
                <Text style={styles.contactSubtitle}>A dedicated servant of Allah 🕊️</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default AppPro;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#333333',
  },
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
  scroller: {
    height: 170,
  },
  card: {
    width: 165,
    height: 165,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 6,
    borderRadius: 7,
  },
  cardText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  darkText: {
    color: '#000',
  },
  red: { backgroundColor: 'red' },
  green: { backgroundColor: 'green' },
  blue: { backgroundColor: 'blue' },
  orange: { backgroundColor: 'orange' },
  yellow: { backgroundColor: 'yellow' },
  indigo: { backgroundColor: 'purple' },

  scroller2: {
    height: 125,
  },
  card2: {
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 6,
    backgroundColor: 'white',
    borderRadius: 7,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  cardText2: {
    color: '#000',
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
  contactsContainer: {
    gap: 10,
    marginBottom: 10,
  },
  contactImageContainer: {
    marginLeft: 8,
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  contactCard: {
    alignItems: "center",
    gap: 35,
    flexDirection: "row",
  },
  f1Image: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginLeft: 7,
  },
  contactCardBody: {
    flexDirection: "column",
  },
  contactSubtitle: {
    color: "#F0F8FF"
  },
  contactTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
  }
});
