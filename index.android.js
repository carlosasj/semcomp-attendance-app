import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Alert,
  Button,
  View,
  WebView
} from 'react-native';

const inject_js = `
document.addEventListener("message", function(event) {
  var scope = angular.element(document.querySelector("body > main > div > div.ng-scope")).scope();
  scope.code = event.data;
  scope.$digest();
  scope.register();
}, false);
`;

export default class attendance extends Component {
  constructor( props ) {
    super( props );
    this.wvsemcomp = null;
  }
  render() {

    return (
      <View style={styles.flex1}>
        <View style={[styles.center, styles.flex1]}>
          <Text style={styles.welcome}>
            [barcode scanner]
          </Text>
          <Button
            onPress={() => this.wvsemcomp.postMessage('9167910')}
            title="Inserir NUSP"
          />
        </View>
        <View style={[styles.flex4]}>
          <WebView
            source={{uri: 'https://semcomp.icmc.usp.br/20/administracao/presenca/'}}
            ref={( wvsemcomp ) => this.wvsemcomp = wvsemcomp}
            injectedJavaScript={inject_js}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  flex2: {
    flex: 2,
  },
  flex3: {
    flex: 3,
  },
  flex4: {
    flex: 4,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  bgblue: {
    backgroundColor: '#5588FF'
  },
  bgred: {
    backgroundColor: '#FF5555'
  }
});

AppRegistry.registerComponent('attendance', () => attendance);
