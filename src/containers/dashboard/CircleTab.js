import React from 'react';
import {Dimensions, Image, Text, TouchableOpacity, View} from 'react-native';
import theme from '../../styles';
const {height, width} = Dimensions.get('window');

export default class CircleTab extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <TouchableOpacity onPress={this.props.onPress}>
          <View style={{alignItems: 'center', width: width / 3}}>
            <View style={styles.circleTab}>
              <Image source={this.props.iconImage} style={styles.iconTab} />
            </View>
            <Text numberOfLines={2} style={styles.otherFeatureTitle}>
              {this.props.title}
            </Text>
          </View>
        </TouchableOpacity>
    );
  }
}

const styles = {
  circleTab: {
    width: 52,
    height: 52,
    borderRadius: 26,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.mainColor
  },
  iconTab: {
    width: 29,
    height: 29,
  },
  otherFeatureTitle: {
    color: 'black',
    marginTop: 15,
    textAlign: 'center',
  },
};
