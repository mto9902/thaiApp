import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface TranslateCardProps {
  thai: string;
  romanization: string;
  grammarPoint?: string;
}

export default function TranslateCard({ thai, romanization, grammarPoint = "FORMING QUESTIONS" }: TranslateCardProps) {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.card}>
        <Text style={styles.grammarLabel}>GRAMMAR POINT</Text>
        <Text style={styles.grammarValue}>{grammarPoint.toUpperCase()}</Text>

        <View style={styles.divider} />

        <Text style={styles.thaiText}>{thai}</Text>

        <TouchableOpacity style={styles.audioButton}>
          <Ionicons name="volume-high" size={32} color="black" />
        </TouchableOpacity>

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
  grammarLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: '#9E9E9E', // Grey
    marginBottom: 4,
  },
  grammarValue: {
    fontSize: 20,
    fontWeight: '900',
    color: 'black',
    marginBottom: 5,
  },
  audioButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: 'white',
    // Subtler shadow for audio button
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  thaiText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#000', // Changed to black to match new image
    textAlign: 'center',
    marginBottom: 10,
  },
  divider: {
    height: 2,
    backgroundColor: '#E0E0E0', // Light grey line
    width: '100%',
    marginVertical: 15,
  },
  romanizationText: {
    fontSize: 20,
    fontStyle: 'italic',
    color: '#757575', // Medium grey
    textAlign: 'center',
    fontWeight: '600',
  },
});
