import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';

const FlatCards = () => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.titleText}>Flat Cards:</Text>
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
  );
};

export default FlatCards;

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
});
