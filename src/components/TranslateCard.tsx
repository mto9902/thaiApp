import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface TranslateCardProps {
  thai: string;
  romanization: string;
}

export default function TranslateCard({ thai, romanization }: TranslateCardProps) {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.tag}>
        <Text style={styles.tagText}>TRANSLATE THIS!</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.thaiText}>{thai}</Text>
        <View style={styles.divider} />
        <Text style={styles.romanizationText}>"{romanization}"</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    paddingHorizontal: 20,
    marginTop: 30,
    zIndex: 1, // Ensure tag is visible
  },
  tag: {
    backgroundColor: '#FFFF00', // Bright yellow
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderWidth: 2,
    borderColor: 'black',
    // Comic shadow
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
    transform: [{ rotate: '-5deg' }], // Slanted look like the image
    marginBottom: -15, // Overlap with card
    zIndex: 2,
    marginLeft: 10,
  },
  tagText: {
    fontWeight: '900',
    fontSize: 14,
    textTransform: 'uppercase',
  },
  card: {
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    // Big thick comic shadow
    shadowColor: '#000',
    shadowOffset: { width: 8, height: 8 },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  thaiText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#1A237E', // Deep indigo/blue like the image
    textAlign: 'center',
    marginBottom: 10,
  },
  divider: {
    height: 3,
    backgroundColor: '#E0E0E0', // Light grey line
    width: '100%',
    marginVertical: 15,
  },
  romanizationText: {
    fontSize: 22,
    fontStyle: 'italic',
    color: '#757575', // Medium grey
    textAlign: 'center',
    fontWeight: '600',
  },
});
