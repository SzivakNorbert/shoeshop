import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ShoeBrandsScreen = () => {

  const navigation = useNavigation();     

  const shoeBrands = ['Nike', 'Adidas', 'Converse', 'Jordan', 'NewBalance'];
  const iconMap = {
       Home: require('./assets/icons/home.png'),
       Adidas: require('./assets/icons/adidas.png'),
       Converse: require('./assets/icons/converse.png'),
       Jordan: require('./assets/icons/jordan.png'),
       NewBalance: require('./assets/icons/newbalance.png'),
       Nike: require('./assets/icons/nike.png'),
     };

  const handleBrandPress = (brand) => {
    console.log(`Selected brand: ${brand}`);
    navigation.navigate(`${brand}`);
  };

  return (
       <ScrollView contentContainerStyle={styles.container}>
       <View>
      <View style={styles.column}>
        {shoeBrands.slice(0, Math.ceil(shoeBrands.length)).map((brand, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleBrandPress(brand)}
            style={styles.item}
          >
              <View style={styles.imageContainer}>
              <Image source={iconMap[brand]} style={styles.image} />
              </View>
              <Text style={styles.itemText}>{brand}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {

    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F5CCA0'
  },
  column: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5CCA0'
  },
  item: {
    width: 300,
    height: 300,
    backgroundColor: '#994D1C',
    marginVertical: 8,
    borderRadius: 100,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  imageContainer: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
     },
     image: {
       width: 120,
       height: 120,
     },
  itemText: {
    fontSize: 19,
    fontWeight: 'bold',
    paddingBottom: 15,
  },
});

export default ShoeBrandsScreen;
