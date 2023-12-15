import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
// import Animacion1 from './components/Animacion1';
// import Animacion2 from './components/Animacion2';
// import Animacion3 from './components/Animacion3';
// import Animacion4 from './components/Animacion4';
// import Animacion5 from './components/Animacion5';
import Animacion6 from './components/Animacion6';
// import Animacion7 from './components/Animacion7';

const App = () => {
  return (
    <>
      <View style={styles.contenido}>
        <Animacion6 />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contenido: {
    marginTop: 100,
  },
});

export default App;
