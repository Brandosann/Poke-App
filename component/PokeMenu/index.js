import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import StyledButton from "../StyledButton";
import styles from './styles';

const PokeMenu = (props) => {

  const { name, image } = props.poke;

  return (
    <View style={styles.PokeContainer}>
      <ImageBackground
        source={image}
        style={styles.image}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <StyledButton
          type="primary"
          content={"Order Bowl"}
          onPress={() => {
            console.warn("Order Placed");
          }}
        />

        <StyledButton
          type="secondary"
          content={"Ingredients"}
          onPress={() => {
            console.warn("Ingredients opened");
          }}
        />
      </View>

    </View>
  );
};

export default PokeMenu;
