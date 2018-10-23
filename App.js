import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native';
export default class App extends React.Component {
  
  constructor(props){
    super(props);
    
    this.state = {
      meta: '2000ml',
      consumido: 0,
      status: 'Ruim',
    }

    this.addWater = this.addWater.bind(this);

  }

  addWater(){
    const waterValue = 200;
    const state = this.state;
    // state.water = waterValue;
    console.log(state.water);
    // this.setState(state.water) ;
  };

  render() {
    return (
      <View style={styles.body}>
        <ImageBackground source={require('./images/waterbg.png')} style={styles.bgImage}>

          <View style={styles.flexArea}>

              <View style={styles.area}>
                <Text style={styles.areaTitle}>Meta</Text>
                <Text style={styles.dataArea}>2000ml</Text>
              </View>

              <View style={styles.area}>
                <Text style={styles.areaTitle}> Consumido</Text>
                <Text style={styles.dataArea}>500ml</Text>
              </View>

              <View style={styles.area}>
                <Text style={styles.areaTitle}>Status</Text>
                <Text style={styles.dataArea}>Ruim</Text>
              </View>

          </View>

          <View style={styles.flexFooter}>
              <Text style={styles.percentageValue}>25%</Text>
              <View style={styles.flexBtn}>
                <Button title='Beber 200ml' color='white' onPress={this.addWater()}></Button>
              </View>
          </View>
    
        </ImageBackground>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingTop: 20 
  },
  bgImage: {
    flex: 1,
    width: null
  },
  flexArea: {
    flex: 1,
    flexDirection: 'row',
  },
  area: {
    flex: 1,
    alignItems: 'center',
    marginTop: 70,
  },
  areaTitle: {
    color: '#45b2fc'
  },
  dataArea: {
    fontSize: 15,
    color: '#2b4274',
    fontWeight: 'bold'
  },
  flexFooter: {
    flex: 1,
    alignItems: 'center',
  },
  percentageValue: {
    fontSize: 60
  },
  flexBtn: {
    flex: 1,
  }

})