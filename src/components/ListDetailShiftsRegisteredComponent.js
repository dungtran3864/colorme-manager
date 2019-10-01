import React from 'react';
import {
  View,
  ScrollView,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
var {height, width} = Dimensions.get('window');

class ListDetailShiftsRegisteredComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  totalHoursReport = () => {
    let hoursMap = {};
    for (let i = 0; i < this.props.dates.length; i++) {
      for (let j = 0; j < this.props.dates[i].shifts.length; j++) {
        for (let k = 0; k < this.props.dates[i].shifts[j].users.length; k++) {
          if (this.props.dates[i].shifts[j].users[k].id in hoursMap) {
            let totalHours =
              hoursMap[this.props.dates[i].shifts[j].users[k].id].totalHours;
            totalHours++;
            hoursMap[this.props.dates[i].shifts[j].users[k].id] = {
              totalHours: totalHours,
              name: this.props.dates[i].shifts[j].users[k].name,
              id: this.props.dates[i].shifts[j].users[k].id,
              avatar_url: this.props.dates[i].shifts[j].users[k].avatar_url,
            };
          } else {
            hoursMap[this.props.dates[i].shifts[j].users[k].id] = {
              totalHours: 1,
              name: this.props.dates[i].shifts[j].users[k].name,
              id: this.props.dates[i].shifts[j].users[k].id,
              avatar_url: this.props.dates[i].shifts[j].users[k].avatar_url,
            };
          }
        }
      }
    }
    return hoursMap;
  };

  renderTotalHoursReport = () => {
    let totalHoursReport = this.totalHoursReport();
    let sortable = [];
    for (let key in totalHoursReport) {
      sortable.push(totalHoursReport[key]);
    }
    sortable.sort(function(a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    return sortable.map(value => (
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate('DetailShifts', {
            week: this.props.weekIndex,
            id: value.id,
            name: value.name,
            avatar_url: value.avatar_url,
            totalHours: value.totalHours,
          })
        }>
        <View style={styles.containerItem}>
          <View style={styles.containerPerson}>
            <Image source={{uri: value.avatar_url}} style={styles.avatar} />
            <View>
              <Text style={{fontWeight: '600'}}>{value.name}</Text>
            </View>
          </View>
          <Image
            source={require('../../assets/img/icons8-more-than-100.png')}
            style={{width: 15, height: 15}}
          />
        </View>
      </TouchableOpacity>
    ));
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.fullView}>
          <View style={styles.headerRow}>
            <View>
              <Text
                style={[styles.headerTitle, {fontWeight: '600', fontSize: 17}]}>
                Nhân viên làm việc tuần {this.props.weekIndex}
              </Text>
            </View>
          </View>
          {this.renderTotalHoursReport()}
        </View>
      </ScrollView>
    );
  }
}

const styles = {
  fullView: {
    flex: 1,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginVertical: 15,
  },
  headerTitle: {
    fontSize: 15,
  },
  containerItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 10,
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  containerPerson: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    height: 25,
    width: 25,
    borderRadius: 18,
    marginRight: 10,
  },
};

export default ListDetailShiftsRegisteredComponent;
