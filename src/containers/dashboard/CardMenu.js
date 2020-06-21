import React from 'react';
import {Dimensions, Image, Text, TouchableOpacity, View} from 'react-native';
var {height, width} = Dimensions.get('window');

export default class CardMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <TouchableOpacity onPress={this.props.onPress}>
          <View style={[styles.cardContainer, this.props.extraPadding]}>
            <Image source={this.props.icon} style={styles.icon} />
            <Text numberOfLines={2} style={styles.featureTitle}>
              {this.props.title}
            </Text>
          </View>
        </TouchableOpacity>
    );
  }
}

const styles = {
  cardContainer: {
    alignItems: 'center',
    width: (width - 20) / 3
  },
  featureTitle: {
    color: 'white',
    marginVertical: 5,
    textAlign: 'center'
  },
  icon: {
    width: 52,
    height: 52
  }
};
