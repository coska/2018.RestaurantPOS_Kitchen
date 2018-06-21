import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList
} from 'react-native';
import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    items: [{
      orderNo: 1
    },{
      orderNo: 2
    },{
      orderNo: 3
    },{
      orderNo: 3
    }]
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row', backgroundColor: 'skyblue'}}>
          <View style={{flex: 1}}>
            <Text style={{fontSize: 30}}>LOGO</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
            <Text>NAVI</Text>
            <Text>TIME</Text>
          </View>
          <View style={{flex: 2, flexDirection: 'row', justifyContent: 'space-around'}}>
            <View>
              <Text>ORDER</Text>
            </View>
            <View>
              <Text>DONE</Text>
            </View>
            <View>
              <Text>VOID</Text>
            </View>
            <View>
              <Text>TOTAL</Text>
            </View>
          </View>
        </View>
        <ScrollView style={styles.container}>
          <FlatList
            initialNumToRender={6}
            data={this.state.items}
            numColumns={3}
            renderItem={({ item }) => {
              return (
                <View style={{ flex: 1 }}>
                  <View style={{ margin: 5, borderColor: '#ddd', backgroundColor: '#fff' }}>
                    <Text>Order#: {item.orderNo}</Text>
                  </View>
                </View>
              );
            }}
            keyExtractor={(item, index) => index}
            ListFooterComponent={() => {
              return (
                this.state.isFetchingMore === true ?
                  <Spinner color='green'/> : null
              );
            }}
          />
        </ScrollView>
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
