import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  LayoutAnimation,
  ImageBackground,
  TextInput,
  UIManager,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const background = require('./ui3_b1.png');
const color = '#826bdf';

const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;
const and = Platform.OS === 'android';

if (and) UIManager.setLayoutAnimationEnabledExperimental(true);

class UI3 extends React.Component {
  state = { page: ''};

  componentDidUpdate() {
    LayoutAnimation.spring();
  }

  gettingStartedOnPress = () => {
    this.setState({ page: 'login'});
  }

  signUpOnPress = () => {
    this.setState({ page: 'signup'});
  }

  welcome() {
    return (
      <View>

        <ImageBackground 
          source={background}
          style={welcomePage.image}
        />

        <View style={welcomePage.topContainer}>
          <Text style={welcomePage.mainArticle}>
            Blogworx
          </Text>
          <View style={welcomePage.line} />
          <Text style={welcomePage.additionArticle}>
            Express yourself
          </Text>
        </View>

        <View style={welcomePage.bottomContainer}>
          <TouchableOpacity 
            style={welcomePage.button}
            onPress={this.gettingStartedOnPress}>
            <Text style={welcomePage.buttonText}>
              Getting Started
            </Text>
          </TouchableOpacity>
        </View>
        <View style={footer.main} >
          <Icon 
            name='circle'
            size= {16} />
          <Icon 
            name='circle-o'
            size= {16}
            style= {footer.icon} />
          <Icon 
            name='circle-o'
            size= {16}
            style= {footer.icon} />
        </View>
      </View>
    );
  }

  login() {
    return (
      <View>
        <ImageBackground 
          source={background}
          style={loginPage.image} />

        <View style={loginPage.topContainer}>
          <Text style={loginPage.mainArticle}>
            Blogworx
          </Text>
          <View style={loginPage.topLine} />
          <Text style={loginPage.additionArticle}>
            Express yourself
          </Text>
        </View>

        <View style={loginPage.bottomContainer}>
          <Text style={loginPage.inputUsername}>
            Username
          </Text>

          <TextInput 
            style={loginPage.usernameInputs}
            placeholder= 'Enter Username'
            autoCapitalize= {"none"} />
          
          <Text style={loginPage.inputPass}>
            Password
          </Text>

          <TextInput 
            style={loginPage.passInputs}
            placeholder= 'Enter Password'
            secureTextEntry= {true} />

          <TouchableOpacity>
            <Text style={loginPage.forgotText}>
              Forgot Password
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={loginPage.button}>
            <Text style={loginPage.buttonText}>
              Login
            </Text>
          </TouchableOpacity>

          <View style={loginPage.line}/>
          <Icon
              name="circle-thin"
              size={40}
              color="#d4d4d4"
              style={loginPage.orCircle}/>
          <Text style={loginPage.orText}>
            OR
          </Text>

          <TouchableOpacity onPress={this.signUpOnPress}>
            <Text style={loginPage.signupText}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
        <View style={footer.main} >
          <Icon 
            name='circle-o'
            size= {16} />
          <Icon 
            name='circle'
            size= {16}
            style= {footer.icon} />
          <Icon 
            name='circle-o'
            size= {16}
            style= {footer.icon} />
        </View>
      </View>
    );
  }

  signUp() {
    return (
      <View>
        <ImageBackground 
          source={background} 
          style={signupPage.image} />

        <View style={signupPage.topContainer}>
          <Text style={signupPage.mainArticle}>
            Blogworx
          </Text>
          <View style={signupPage.topLine} />
          <Text style={signupPage.additionArticle}>
            Express yourself
          </Text>
        </View>

        <View style={signupPage.bottomContainer}>
          <Text style={signupPage.signupText}>
            Sign Up
          </Text>
          <View style={signupPage.midLine}/>

          <Text style={signupPage.inputEmail}>
            Email ID
          </Text>
          <TextInput 
            style={signupPage.emailInputs}
            placeholder= 'Enter Your Mail ID' />

          <TouchableOpacity style={signupPage.button} >
            <Text style={signupPage.buttonText} >
              Sign Up
            </Text>
          </TouchableOpacity>

          <View style={signupPage.bottomLine}/>
          <Icon
              name="circle-thin"
              size={40}
              color="#d4d4d4"
              style={signupPage.orCircle}/>
          <Text style={signupPage.orText} >
            OR
          </Text>

          <View style={signupPage.socialMediaIcons} >
            <TouchableOpacity style={signupPage.googleIcon}>
              <Icon 
                name="google"
                size={40}
                color="#C63D2D"
                style={signupPage.googleIconImage}/>
            </TouchableOpacity>
            <TouchableOpacity style={signupPage.linkedinIcon}>
              <Icon 
                name="linkedin"
                size={40}
                color="#4875B4"
                style={signupPage.linkedinIconImage}/>
            </TouchableOpacity>
            <TouchableOpacity style={signupPage.twitterIcon}>
              <Icon 
                name="twitter"
                size={40}
                color="#38A1F3"
                style={signupPage.twitterIconImage}/>
            </TouchableOpacity>
          </View>
        </View>
        <View style={footer.main} >
          <Icon 
            name='circle-o'
            size= {16} />
          <Icon 
            name='circle-o'
            size= {16}
            style= {footer.icon} />
          <Icon 
            name='circle'
            size= {16}
            style= {footer.icon} />
        </View>
      </View>
    );
    
  }

  render() {

    return (
      <View>
  
        {this.state.page === '' && this.welcome() }
        {this.state.page === 'login' && this.login()}
        {this.state.page === 'signup' && this.signUp()}

      </View>
    );
  }
};

const welcomePage = StyleSheet.create({
  topContainer: {
    width: W,
    height: H * 0.3,
    alignItems: 'center',
    marginTop: W * 0.3,
  },

  bottomContainer: {
    width: W,
    height: H * 0.3,
    alignItems: 'center',
    marginTop: W * 0.3,
    //borderColor: 'black',
    //borderWidth: 1
  },

  image: {
    flex: 1,
    width: W,
    height: H
  },

  mainArticle: {
    marginTop: H * 0.1,
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
  },

  line: {
    width: W * 0.12,
    height: H * 0.02,
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    marginTop: H * 0.02,
    borderRadius: 10
  },

  additionArticle: {
    marginTop: H * 0.03,
    color: 'white',
    fontSize: 12
  },

  button: {
    width: W * 0.65,
    height: H * 0.08,
    paddingTop: 5,
    paddingBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color,
    marginTop: H * 0.14,
    borderRadius: 5
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  }
});

const loginPage = StyleSheet.create({ 
  topContainer: {
    width: W,
    height: H * 0.3,
    alignItems: 'center',
    marginTop: W * 0.001,
    //borderColor: 'black',
    //borderWidth: 2
  },

  bottomContainer: {
    width: W,
    height: H * 0.609,
    alignItems: 'center',
    marginTop: W * 0.05,
    //borderColor: 'black',
    //borderWidth: 2
  },

  image: {
    flex: 1,
    width: W,
    height: H * 0.4
  },

  mainArticle: {
    marginTop: H * 0.05,
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
  },

  topLine: {
    width: W * 0.12,
    height: H * 0.02,
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    marginTop: H * 0.01,
    borderRadius: 10
  },

  additionArticle: {
    marginTop: H * 0.025,
    color: 'white',
    fontSize: 12
  },

  usernameInputs: {
    marginTop: H * 0.03,
    borderWidth: 3,
    width: W * 0.65,
    height: H * 0.08,
    paddingLeft: W * 0.03,
    borderColor: color
  },

  passInputs: {
    marginTop: H * 0.05,
    borderWidth: 3,
    width: W * 0.65,
    height: H * 0.08,
    paddingLeft: W * 0.03,
    borderColor: color
  },

  inputUsername: {
    position: 'absolute',
    marginTop: H * 0.02,
    width: W * 0.19,
    height: H * 0.025,
    backgroundColor: 'white',
    color: color,
    zIndex: 1,
    paddingLeft: W * 0.015,
    left: W * 0.20
  },

  inputPass: {
    position: 'absolute',
    marginTop: H * 0.15,
    width: W * 0.19,
    height: H * 0.025,
    backgroundColor: 'white',
    color: color,
    zIndex: 1,
    paddingLeft: W * 0.015,
    left: W * 0.20
  },

  forgotText: {
    color: color,
    marginTop: H * 0.025,
    marginLeft: W * 0.37,
    fontSize: 15
  },

  button: {
    width: W * 0.65,
    height: H * 0.08,
    paddingTop: 5,
    paddingBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color,
    marginTop: H * 0.03,
    borderRadius: 5
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  },

  line: {
    width: W * 0.35,
    height: H * 0.07,
    borderBottomColor: '#d4d4d4',
    borderBottomWidth: 2
  },

  orCircle: {
    position: 'absolute',
    marginTop: H * 0.443,
    backgroundColor: 'white'
  },

  orText: {
    position: 'absolute',
    marginTop: H * 0.457,
    width: W * 0.05,
    height: H * 0.025,
    backgroundColor: 'white',
    color: '#d4d4d4',
    zIndex: 1,
    paddingLeft: W * 0.0025,
  },

  signupText: {
    color: color,
    marginTop: H * 0.05,
    fontSize: 17
  }
});

const signupPage = StyleSheet.create({
  topContainer: {
    width: W,
    height: H * 0.3,
    alignItems: 'center',
    marginTop: W * 0.001,
    //borderColor: 'black',
    //borderWidth: 1
  },

  bottomContainer: {
    width: W,
    height: H * 0.609,
    alignItems: 'center',
    marginTop: W * 0.05,
    //borderColor: 'black',
    //borderWidth: 1
  },

  image: {
    flex: 1,
    width: W,
    height: H * 0.4
  },

  mainArticle: {
    marginTop: H * 0.05,
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
  },

  topLine: {
    width: W * 0.12,
    height: H * 0.02,
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    marginTop: H * 0.01,
    borderRadius: 10
  },

  additionArticle: {
    marginTop: H * 0.025,
    color: 'white',
    fontSize: 12
  },

  signupText: {
    fontSize: 22,
    marginTop: H * 0.015,
    opacity: 0.25,
    fontWeight: 'bold'
  },

  midLine: {
    width: W * 0.099,
    height: H * 0.03,
    borderBottomColor: '#d4d4d4',
    borderBottomWidth: 2
  },

  emailInputs: {
    marginTop: H * 0.05,
    borderWidth: 3,
    width: W * 0.65,
    height: H * 0.08,
    paddingLeft: W * 0.03,
    borderColor: color
  },

  inputEmail: {
    position: 'absolute',
    marginTop: H * 0.121,
    width: W * 0.159,
    height: H * 0.025,
    backgroundColor: 'white',
    color: color,
    zIndex: 1,
    paddingLeft: W * 0.017,
    left: W * 0.20,
    fontWeight: 'bold',
    fontSize: 13
  },

  button: {
    width: W * 0.65,
    height: H * 0.08,
    paddingTop: 5,
    paddingBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color,
    marginTop: H * 0.05,
    borderRadius: 5
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },

  bottomLine: {
    width: W * 0.35,
    height: H * 0.07,
    borderBottomColor: '#d4d4d4',
    borderBottomWidth: 2
  },

  orCircle: {
    position: 'absolute',
    marginTop: H * 0.385,
    backgroundColor: 'white'

  },

  orText: {
    position: 'absolute',
    marginTop: H * 0.4,
    width: W * 0.05,
    height: H * 0.025,
    backgroundColor: 'white',
    color: '#d4d4d4',
    zIndex: 1,
    paddingLeft: W * 0.0025,
  },

  socialMediaIcons: {
    //borderColor: 'black',
    //borderWidth: 1,
    width: W * 0.65,
    height: H * 0.1,
    marginTop: H * 0.05,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  googleIcon: {
    borderColor: '#d4d4d4',
    borderWidth: 1,
    width: W * 0.15,
    height: H * 0.07,
    marginTop: H * 0.012,
    alignItems: 'center'
  },

  googleIconImage: {
    width: W * 0.09,
    height: H * 0.05,
    alignSelf: 'center',
    top: H * 0.008
  },

  linkedinIcon: {
    borderColor: '#d4d4d4',
    borderWidth: 1,
    width: W * 0.15,
    height: H * 0.07,
    marginTop: H * 0.012 ,
    //left: W * 0.09,
  },

  linkedinIconImage: {
    width: W * 0.09,
    height: H * 0.05,
    alignSelf: 'center',
    top: H * 0.008
  },

  twitterIcon: {
    borderColor: '#d4d4d4',
    borderWidth: 1,
    width: W * 0.15,
    height: H * 0.07,
    marginTop: H * 0.012 ,
    //left: W * 0.193,
  },

  twitterIconImage: {
    width: W * 0.09,
    height: H * 0.05,
    alignSelf: 'center',
    top: H * 0.008
  }
  
});

const footer = StyleSheet.create({
  main: {
    width: W,
    height: H * 0.062,
    //borderColor: 'black',
    //borderWidth: 1,
    justifyContent: 'center',
    flexDirection: 'row'
  },

  icon: {
    paddingLeft: 5
  }

});

export default UI3;
