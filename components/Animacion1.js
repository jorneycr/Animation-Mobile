import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, Animated} from 'react-native';

const Animacion1 = () => {
  const [animacion] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animacion, {
      toValue: 1, // al valor al que llega
      duration: 5000, // cantidad de tiempo en llegar
      useNativeDriver: true, // Add This line
    }).start(); // iniciar la animación
  }, []);

  return (
    <Animated.View
      style={{
        opacity: animacion,
      }}>
      <Text style={styles.texto}>Animacion 1</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  texto: {
    fontSize: 30,
    textAlign: 'center',
  },
});

export default Animacion1;
