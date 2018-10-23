import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native';
export default class App extends React.Component {
  
  constructor(props){
    super(props);
    
    this.state = {
      meta: '2000ml',
      consumido: 0,
      status: 'Ruim',
      percentage: '0%'
    }

    this.addWater = this.addWater.bind(this);
    this.update = this.update.bind(this);
    this.reset = this.reset.bind(this);

  }

  addWater(){
    const state = this.state;
    state.consumido += 200;
    this.update(state);
  };

  doPercentage(state){
    let value = state.percentage;
  }

  update(state){
    
    switch (state.consumido) {
      case 200:
        state.status = 'Ruim';
        state.percentage = '10%';
        this.setState(state);
        break;

      case 400:
        state.status = 'Ruim';
        state.percentage = '20%';
        this.setState(state);
        break;
      case 600:
        state.status = 'Razoável';
        state.percentage = '30%';
        this.setState(state);
        break;
      case 800:
        state.status = 'Razoável';
        state.percentage = '40%';
        this.setState(state);
        break;
      case 1000:
        state.status = 'Bom';
        state.percentage = '50%';
        this.setState(state);
        break;
      case 1200:
        state.status = 'Bom';
        state.percentage = '60%';
        this.setState(state);
        break;
      case 1400:
        state.status = 'Bom';
        state.percentage = '70%';
        this.setState(state);
        break;
      case 1600:
        state.status = 'Ótimo';
        state.percentage = '80%';
        this.setState(state);
        break;
      case 1800:
        state.status = 'Ótimo';
        state.percentage = '90%';
        this.setState(state);
        break;
      case 2000:
        state.status = 'Concluído!';
        state.percentage = '100%';
        this.setState(state);
        break;
    
      default:
        break;
    }

      
    // if(state.consumido < 600){
    //   if(state.consumido == 200){
    //     state.percentage =  '10%'
    //   }
    //   state.status = 'Ruim';
    //   this.setState(state);
    // } else if (state.consumido >= 600 && state.consumido < 1200){
    //   state.status = 'Razoável';
    //   this.setState(state);
    // } else if(state.consumido >= 1200 && state.consumido < 1800){
    //   state.status = 'Bom';
    //   this.setState(state);
    // } else {
    //   state.status = "Ótimo!"
    //   this.setState(state);
    // }

  }

  reset(){

    stateReset = {
      meta: '2000ml',
      consumido: 0,
      status: 'Ruim',
      percentage: 0
    }

    let state = this.state;
    state = stateReset;
    this.setState(state);

  }

  render() {
    return (
      <View style={styles.body}>
        <ImageBackground source={require('./images/waterbg.png')} style={styles.bgImage}>

          <View style={styles.flexArea}>

              <View style={styles.area}>
                <Text style={styles.areaTitle}>Meta</Text>
                <Text style={styles.dataArea}>{this.state.meta}</Text>
              </View>

              <View style={styles.area}>
                <Text style={styles.areaTitle}> Consumido</Text>
                <Text style={styles.dataArea}>{this.state.consumido}</Text>
              </View>

              <View style={styles.area}>
                <Text style={styles.areaTitle}>Status</Text>
                <Text style={styles.dataArea}>{this.state.status}</Text>
              </View>

          </View>

          <View style={styles.flexFooter}>
              <Text style={styles.percentageValue}>{this.state.percentage}</Text>
              <View style={styles.flexBtn}>
                <Button title='Beber 200ml'  onPress={this.addWater}></Button>
                <Button title='Zerar' onPress={this.reset}></Button>
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
    marginTop: 2,
    color: '#2b4274',
    fontWeight: 'bold'
  },
  flexFooter: {
    flex: 1,
    alignItems: 'center',
  },
  percentageValue: {
    fontSize: 60,
    color: '#FFFFFF'
  },
  flexBtn: {
    flex: 1,
  }

})