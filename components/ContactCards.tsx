import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import f1 from '../images/f1.jpg'
import b1 from '../images/b1.jpg';
import User from '../images/user.png';

const ContactCards = () => {
  return (
    <View style={styles.contactsContainer}>
      <Text style={styles.titleText}>Contacts:</Text>
      <View style={styles.contactCard}>
        <View style={styles.contactImageContainer}>
          <Image source={f1} style={styles.f1Image} />
        </View>
        <View style={styles.contactCardBody}>
          <Text style={styles.contactTitle}>Najam Shehroz</Text>
          <Text style={styles.contactSubtitle}>
            Shining bright like a star 🌟👑
          </Text>
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
          <Text style={styles.contactSubtitle}>
            Standing with courage & honor🦁🛡️
          </Text>
        </View>
      </View>

      <View style={styles.contactCard}>
        <View style={styles.contactImageContainer}>
          <Image source={User} style={styles.f1Image} />
        </View>
        <View style={styles.contactCardBody}>
          <Text style={styles.contactTitle}>Abdul Ahad</Text>
          <Text style={styles.contactSubtitle}>
            A dedicated servant of Allah 🕊️
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ContactCards;

const styles = StyleSheet.create({
  contactsContainer: {
    gap: 10,
    marginBottom: 10,
  },
  titleText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
    marginLeft: 12,
  },
  contactImageContainer: {
    marginLeft: 8,
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  contactCard: {
    alignItems: 'center',
    gap: 35,
    flexDirection: 'row',
  },
  f1Image: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginLeft: 7,
  },
  contactCardBody: {
    flexDirection: 'column',
  },
  contactSubtitle: {
    color: '#F0F8FF',
  },
  contactTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
  },
});
