import {
  Platform,
  StyleSheet,
} from 'react-native'


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
})

/******************************************************/
/* Kitchen Nav                                        */

const KIT_DEBUG = 0;

const KitNavButtonSty = (backgroundColor='white') => ({
  backgroundColor: backgroundColor,
  borderRadius: 0,
  borderWidth: KIT_DEBUG || 0,
  /**margin-bottom: 10, **/
  margin: 1,
  width:125,
})

const KitNavPrevNextSty = () => ({
  borderWidth: 1,
  margin: 1,
  width:80,
  borderColor: '#FFF',
})

const KitNavPrevNextTextSty = () => ({
  alignSelf: 'center',
  color: '#FFF',
  fontWeight: '500',
  fontSize: 13,
  padding: 1,
  borderWidth: KIT_DEBUG || 0,
  margin: 5,
})


const KitNavTextSty = () => ({
  alignSelf: 'center',
  color: '#000',
  fontWeight: '500',
  fontSize: 13,
  padding: 1,
  borderWidth: KIT_DEBUG || 0,
  margin: 5,
})

const KitNavClockSty = () => ({
  color: '#FFF',
  fontSize: 13,
  alignItems: 'center',
  alignSelf: 'center',
  fontWeight: '500',
  marginRight: 10,
})

const KitNavLogoSty = () => ({
  fontSize: 20,
  color: '#FFF',
  flex:1,
  alignItems: 'center',
  flexDirection: 'row-reverse',
  fontWeight: '500',
  borderWidth: KIT_DEBUG || 0,
  margin:0,
})

/* End of  Kitchen Nav                                */
/******************************************************/

const OrderButton = backgroundColor => ({
  width: 100,
  backgroundColor: backgroundColor || 'blue',
  borderRadius: 5,
  marginBottom: 5,
})

const OrderButtonText = color => ({
  alignSelf: 'center',
  color: color || '#fff',
  fontWeight: '600',
  padding: 10,
})

const getColor = (status) => {
  switch (status) {
    case 'new':
      return {
        backgroundColor: 'rgb(255,255,255)',
        buttonBackgroundColor: 'rgb(34,202,228)',
        headerColor: 'grey',
      }
    case 'done':
      return {
        backgroundColor: 'rgb(233,251,255)',
        buttonBackgroundColor: 'teal',
        headerColor: 'rgb(34,202,228)',
      }
    default:
      return {
        backgroundColor: 'rgb(251,240,255)',
        buttonBackgroundColor: 'red',
        headerColor: 'red',
      }
  }
}

export default styles
export {

  KitNavButtonSty,
  KitNavTextSty,
  KitNavPrevNextSty,
  KitNavPrevNextTextSty,
  KitNavClockSty,
  KitNavLogoSty,

  OrderButton,
  OrderButtonText,
  getColor,
}

