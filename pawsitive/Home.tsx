import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TouchableOpacity, 
  ScrollView, 
  SafeAreaView 
} from 'react-native';

export default function Home() {
  // Simple state to track the numeric stepper value for pets
  const [petCount, setPetCount] = useState(1);

  // Stepper handlers
  const handleIncrement = () => setPetCount(prev => prev + 1);
  const handleDecrement = () => setPetCount(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        
        {/* Navigation Bar */}
        <View style={styles.navBar}>
          <Text style={styles.navLink}>Home</Text>
          <Text style={styles.navLink}>About Us</Text>
          <Text style={styles.navLink}>Courses</Text>
          <Text style={styles.navLink}>Fees</Text>
          <Text style={styles.navLink}>Contact</Text>
        </View>

        {/* Brand Header */}
        <View style={styles.header}>
          <Image 
            source={{ uri: 'https://via.placeholder.com/100' }} // Replace with local logo asset
            style={styles.logo} 
          />
          <Text style={styles.brandTitle}>PAWSITIVE PET ACADEMY</Text>
          <Text style={styles.tagline}>"BUILDING BETTER BONDS BETWEEN PETS AND PEOPLE"</Text>
        </View>

        {/* Hero Section */}
        <View style={styles.heroSection}>
          <Image 
            source={{ uri: 'https://via.placeholder.com/300x200' }} // Replace with hero image asset
            style={styles.heroImage} 
          />
          <Text style={styles.heroHeadline}>Helping pets learn and grow</Text>
        </View>

        {/* Interactive Numeric Stepper Component */}
        <View style={styles.stepperContainer}>
          <Text style={styles.stepperLabel}>Number of Pets:</Text>
          <View style={styles.stepperControls}>
            <TouchableOpacity style={styles.stepperButton} onPress={handleDecrement}>
              <Text style={styles.stepperButtonText}>−</Text>
            </TouchableOpacity>
            
            <View style={styles.stepperValueContainer}>
              <Text style={styles.stepperValueText}>{petCount}</Text>
            </View>

            <TouchableOpacity style={[styles.stepperButton, styles.incrementButton]} onPress={handleIncrement}>
              <Text style={styles.stepperButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Call to Action Button */}
        <TouchableOpacity style={styles.ctaButton}>
          <Text style={styles.ctaButtonText}>Learn More</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

// Brand Stylesheet adhering to Pawsitive Pet Academy color system
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FBF3DF', // Cream background color
  },
  container: {
    padding: 20,
    alignItems: 'center',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  navLink: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#5C3317', // Warm Brown
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  brandTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5C3317',
    textAlign: 'center',
  },
  tagline: {
    fontSize: 10,
    fontStyle: 'italic',
    color: '#5C3317',
    textAlign: 'center',
    marginTop: 4,
  },
  heroSection: {
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  heroImage: {
    width: '100%',
    height: 200,
    borderRadius: 20,
  },
  heroHeadline: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#5C3317',
    marginTop: 12,
  },
  stepperContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 12,
    marginBottom: 20,
  },
  stepperLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#5C3317',
  },
  stepperControls: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    overflow: 'hidden',
  },
  stepperButton: {
    backgroundColor: '#E5E5E5',
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  incrementButton: {
    backgroundColor: '#ECC038', // Accent Yellow
  },
  stepperButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#5C3317',
  },
  stepperValueContainer: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  stepperValueText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#5C3317',
  },
  ctaButton: {
    backgroundColor: '#D35C48', // Terracotta Red
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#5C3317',
    width: '100%',
    alignItems: 'center',
  },
  ctaButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});