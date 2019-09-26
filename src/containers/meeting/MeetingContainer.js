/**
 * Created by phanmduong on 9/29/18.
 */
import React from 'react';
import {connect} from 'react-redux';
import MeetingStore from './MeetingStore';
import {observer} from 'mobx-react';
import MeetingComponent from './MeetingComponent';
import {Image, TouchableOpacity, View} from 'react-native';

@observer
class MeetingContainer extends React.Component {
  constructor(props) {
    super(props);
    this.store = new MeetingStore(props.token);
  }

  static navigationOptions = ({navigation}) => ({
    title: 'Họp',
    headerRight: (
      <View style={{flexDirection: 'row', right: 20}}>
        <TouchableOpacity onPress={() => navigation.navigate('HistoryMeeting')}>
          <Image
            source={require('../../../assets/img/icons8-sand-clock-90.png')}
            style={{width: 20, height: 20, right: 20}}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('StoreMeeting')}>
          <Image
            source={require('../../../assets/img/icons8-plus-96.png')}
            style={{width: 20, height: 20}}
          />
        </TouchableOpacity>
      </View>
    ),
  });

  componentDidMount() {
    this.store.loadList();
  }

  render() {
    return (
      <MeetingComponent store={this.store} {...this.props} mainScreen={false} />
    );
  }
}

function mapStateToProps(state) {
  return {
    token: state.login.token,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MeetingContainer);
