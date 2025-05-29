/**
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ParallaxScrollView} from './ParallaxScrollView';

function App(): React.JSX.Element {
  const renderContent = () => {
    return (
      <View style={styles.content}>
        {Array.from({length: 50}).map((_, index) => (
          <View key={index} style={styles.item}>
            <Text style={styles.itemText}>Élément #{index + 1}</Text>
          </View>
        ))}
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <ParallaxScrollView
        mainHeader="Mon Titre Parallax"
        navHeader="Nav header"
        renderContent={renderContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 20,
  },
  item: {
    backgroundColor: '#f0f0f0',
    marginBottom: 10,
    padding: 15,
    borderRadius: 8,
  },
  itemText: {
    fontSize: 16,
  },
});

export default App;
