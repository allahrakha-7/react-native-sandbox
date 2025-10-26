import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';

const ElevatedCards = () => {
  return (
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
  );
};

export default ElevatedCards;

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
});
