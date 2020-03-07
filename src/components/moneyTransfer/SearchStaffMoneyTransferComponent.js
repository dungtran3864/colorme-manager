import React from 'react';
import {Dimensions, Image, RefreshControl, ScrollView} from 'react-native';
import {Button, Text, View, List} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as alert from '../../constants/alert';
import Loading from '../common/Loading';
import Search from '../common/Search';
import ListItemStaffMoneyTransfer from './ListItemStaffMoneyTransfer';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import theme from '../../styles';

var {height, width} = Dimensions.get('window');
let self;

class SearchStaffMoneyTransferComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    self = this;
  }

  renderSearch() {
    const {updateFormAndLoadDataSearch, search} = this.props;
    return (
      <Search
        placeholder="Tìm kiếm (Email, tên, số điện thoại)"
        onChangeText={updateFormAndLoadDataSearch}
        value={search}
        autoFocus={false}
      />
    );
  }

  renderContent() {
    if (this.props.isLoading && this.props.staffList.length <= 0) {
      return <Loading size={width / 8} />;
    } else {
      if (this.props.error || this.props.staffList.length <= 0) {
        return (
          <View style={styles.container}>
            <Text style={styles.textError}>
              {this.props.error
                ? alert.LOAD_DATA_ERROR
                : alert.NO_DATA_STUDENT_LIST}
            </Text>
            <Button
              iconLeft
              danger
              small
              onPress={this.props.loadDataStaffList}
              style={{marginTop: 10, alignSelf: null}}>
              <MaterialCommunityIcons name="reload" color="white" size={20} />
              <Text>Thử lại</Text>
            </Button>
          </View>
        );
      } else {
        return (
          <List
            style={styles.list}
            onEndReached={this.props.loadDataStaffList}
            onEndReachedThreshold={height / 2}
            dataArray={this.props.staffList}
            renderRow={(item, sectionID, rowID) => {
              return (
                <ListItemStaffMoneyTransfer
                  postTransaction={this.props.postTransaction}
                  userId={item.id}
                  name={item.name}
                  avatar={item.avatar_url}
                  email={item.email}
                  phone={item.phone}
                  role={this.props.user.role}
                  money={item.money}
                  isTransaction={
                    item.isTransaction || this.props.user.status == 2
                  }
                />
              );
            }}
            renderFooter={() => {
              if (this.props.isLoading) {
                return (
                  <View style={styles.loading}>
                    <Loading size={width / 12} />
                  </View>
                );
              } else {
                <View />;
              }
            }}
            refreshControl={
              <RefreshControl
                refreshing={this.props.isLoading}
                onRefresh={() => this.props.onRefresh()}
                titleColor={theme.mainColor}
                title="Đang tải..."
                tintColor="#d9534f"
                colors={['#d9534f']}
              />
            }
          />
        );
      }
    }
  }

  render() {
    return (
      <View style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
        {this.renderSearch()}
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  list: {},
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textError: {
    color: '#d9534f',
    textAlign: 'center',
  },
  loading: {
    height: 95,
  },
  headerContainer: {
    marginHorizontal: 16,
    marginTop: 20,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    color: 'black',
    fontSize: 23,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  headerAva: {
    width: 35,
    height: 35,
    borderRadius: 18,
  },
};

export default SearchStaffMoneyTransferComponent;
