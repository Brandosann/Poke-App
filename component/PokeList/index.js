import React from 'react';
import {View, FlatList, Dimensions} from 'react-native';
import PokeMenu from "../PokeMenu";

import styles from './styles';
import poke from './poke';

const PokeList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={poke}
        renderItem={({item}) => <PokeMenu poke={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
      />
    </View>
  );
};

export default PokeList;
