import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, FlatList, Button} from 'react-native';
import NikeProducts from './data/NikeProducts';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

const nike = NikeProducts;

const ShoeList = () => {
  const navigation = useNavigation();
  const [selectedShoe, setSelectedShoe] = useState(null);

  const handleShoePress = (itemName) => {
    console.log('Clicked shoe:', itemName);
    setSelectedShoe(itemName);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleShoePress(item.name)}>
      <View style={styles.shoeContainer}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{item.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderSelectedShoeDetails = () => {
    if (selectedShoe) {
      const selectedShoeData = nike.find((shoe) => shoe.name === selectedShoe);
      return (
          <View style={styles.selectedShoeImageContainer}>
          <Image source={selectedShoeData.image} style={styles.selectedShoeImage} />
          <Text style={styles.selectedShoeName}>{selectedShoeData.name}</Text>
          <Text style={styles.selectedShoeType}>{selectedShoeData.type}</Text>
          <Text style={styles.selectedShoeDescription}>{selectedShoeData.description}</Text>
          <Text style={styles.selectedShoePrice}>{`Ár: ${selectedShoeData.price} Ft`}</Text>
        </View>
      );
    }
    return null;
  };

  const Back = () => {
    setSelectedShoe(null);
  };


  if (selectedShoe){
    return(
      <ScrollView>
      <View style={styles.container}>
      {renderSelectedShoeDetails()}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.backButton} onPress={Back}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
    )
  } else{
    return (
      <View style={styles.container}>
        <FlatList
          data={nike}
          keyExtractor={(item) => item._id}
          renderItem={renderItem}
          style={styles.list}
        />
      </View>
    );
  }

 
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5CCA0',
  },
  list: {
    flex: 1,
  },
  shoeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#994D1C',
    padding: 16,
    borderRadius: 25,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 125,
    height: 125,
    marginRight: 16,
    shadowColor: 'black',
    shadowOffset: { width: 3, height: 7 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  selectedShoeContainer: {
    marginTop: '5%',
    padding: 16,
    backgroundColor: '#6B240C',
    borderRadius: 10,
  },
  selectedShoeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  selectedShoeContainer: {
    marginTop: '5%',
    padding: 16,
    backgroundColor: '#6B240C',
    borderRadius: 10,
    alignItems: 'center',
  },
  selectedShoeImage: {
    width: '100%',
    height: 300,
    marginRight: 16,
    marginBottom: 10,
    shadowColor: 'black',
    shadowOffset: { width: 3, height: 7 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    transform: [{ rotate: '-10deg' }],
  },
  selectedShoeName: {
    marginTop: 25,

    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 8,
    textAlign: 'center',
  },
  selectedShoeDescription: {
    fontSize: 16,
    color: 'black',
    marginBottom: 8,
    marginTop: 15,
    marginBottom: 15,
  },
  selectedShoePrice: {
    fontSize: 18,
    paddingBottom: 25,
    paddingTop: 25,
    fontWeight: 'bold',
    color: 'green',
    textAlign: 'right',
  },
  selectedShoeType: {
    textAlign: 'center',
    fontStyle: 'oblique',
    paddingBottom: 12,
  },
  buttonContainer: {
    paddingTop: 10,
    flex: 1,
    bottom: 16,
    width: '100%',
    alignItems: 'center',
  },
  backButton: {
    backgroundColor: '#6B240C',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10, 
  },
  backButtonText: {
    color: 'white', 
    fontSize: 16,
    fontWeight: 'bold',
  },

});

export default ShoeList;
