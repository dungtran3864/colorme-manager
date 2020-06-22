import React from 'react';
import {Dimensions, Platform, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Spinkit from 'react-native-spinkit';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// import * as loginActions from '../actions/loginActions';
import AsyncStorage from '@react-native-community/async-storage';
import * as loginActions from '../actions/loginActions';
import {isEmptyInput} from '../helper';
var {height, width} = Dimensions.get('window');
import theme from '../styles';
import ScalableImage from "react-native-scalable-image";

class AuthLoadingContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (isEmptyInput(this.props.token)) {
      this._bootstrapAsync();
    } else {
      this._whenLoginSuccess();
    }
  }

  _whenLoginSuccess = () => {
    const params = this.props.navigation.state.params;
    console.log(params);
    if (params && params.routeName) {
      const {routeName, ...routeParams} = params;
      this.props.navigation.navigate({routeName, params: routeParams});
      return;
    }
    this.props.navigation.navigate('Main');
  };

  _logout = () => {
    this.props.navigation.navigate('Login');
  };

  _bootstrapAsync = async () => {
    const username = await AsyncStorage.getItem('@ColorME:username');
    const password = await AsyncStorage.getItem('@ColorME:password');
    if (username && password) {
      this.props.loginActions.loginUser(
        {username, password},
        this._whenLoginSuccess,
        this._logout,
      );
    } else {
      this._logout();
    }
  };

  render() {
    return (
      <LinearGradient
        colors={[theme.mainColor, theme.mainColor]}
        style={styles.containerColorME}>
        <View style={styles.contentColorME}>
          <ScalableImage source={require('../../assets/img/IEGLoginLogo.png')} width={width * 0.5}/>
        </View>
        <Spinkit isVisible color="white" type="ThreeBounce" size={40} />
      </LinearGradient>
    );
  }
}

const styles = {
  containerColorME: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentColorME: {
    alignItems: 'flex-end',
    marginBottom: width / 2,
  },
  textColor: {
    color: 'white',
    fontSize: 35,
    fontWeight: Platform.OS === 'ios' ? '900' : 'normal',
    fontFamily: Platform.OS === 'ios' ? 'Segoe UI' : 'SegoeUI-Blank',
    backgroundColor: 'transparent',
  },
  textME: {
    color: 'white',
    fontSize: 100,
    fontWeight: Platform.OS === 'ios' ? '900' : 'normal',
    fontFamily: Platform.OS === 'ios' ? 'Segoe UI' : 'SegoeUI-Blank',
    backgroundColor: 'transparent',
    lineHeight: 100,
  },
};

function mapDispatchToProps(dispatch) {
  return {
    loginActions: bindActionCreators(loginActions, dispatch),
  };
}
function mapStateToProps(state) {
  return {
    login: state.login.login,
    error: state.login.error,
    isLoading: state.login.isLoading,
    user: state.login.user,
    token: state.login.token,
    isGetDataLocalSuccessful: state.login.isGetDataLocalSuccessful,
    isAutoLogin: state.autoLogin.isAutoLogin,
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthLoadingContainer);
