/**
 * Created by phanmduong on 9/29/18.
 */
import React from 'react';
import {
  View,
  Dimensions,
  ScrollView,
  RefreshControl,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Text} from 'native-base';
var {height, width} = Dimensions.get('window');
import CardMenu from '../containers/dashboard/CardMenu';
import CircleTab from '../containers/dashboard/CircleTab';
import MeetingComponent from '../containers/meeting/MeetingComponent';
import theme from '../styles';
import {getStatusBarHeight, isIphoneX} from 'react-native-iphone-x-helper';
import Icon from 'react-native-vector-icons/Ionicons';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import {observer} from 'mobx-react';
import {getShortName} from '../helper';

@observer
class DashboardComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  handleRefresh = () => {
    this.props.store.refreshMeetingDetail();
    this.props.refreshNotifications();
    this.props.refreshTasks();
  };

  getTotalNotCompletedTasks = () => {
    let totalNotCompleted = this.props.taskView.filter(
      task => task.status === 0,
    );
    return totalNotCompleted.length;
  };

  render() {
    const {refreshing} = this.props.store;
    const {isRefreshingNotifications, isLoadingTaskView} = this.props;
    return (
      <ScrollView
        style={
          isIphoneX()
            ? {flex: 1, marginTop: getStatusBarHeight() + 10}
            : {flex: 1, marginTop: 20}
        }
        refreshControl={
          <RefreshControl
            refreshing={
              refreshing || isRefreshingNotifications || isLoadingTaskView
            }
            onRefresh={this.handleRefresh}
          />
        }>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Profile')}>
                <Image
                  source={{uri: this.props.avatar_url}}
                  style={styles.headerAva}
                />
              </TouchableOpacity>
              <Text style={styles.headerTitle}>
                {getShortName(this.props.user.name)}
              </Text>
              {this.props.user.role === 2 ? (
                <Image
                  source={require('../../assets/img/icons8-star-100-filled.png')}
                  style={{
                    width: 18,
                    height: 18,
                    marginLeft: 5,
                  }}
                />
              ) : null}
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Task')}>
                <View style={[styles.headerIconContainer, {marginRight: 10}]}>
                  <MatIcon
                    name={'chrome-reader-mode'}
                    size={20}
                    color={'black'}
                  />
                </View>
                {this.getTotalNotCompletedTasks() > 0 ? (
                  <View style={styles.notificationBadge}>
                    <Text style={styles.notificationNumber}>
                      {this.getTotalNotCompletedTasks()}
                    </Text>
                  </View>
                ) : null}
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Notification')}>
                <View style={styles.headerIconContainer}>
                  <MatIcon name={'notifications'} size={20} color={'black'} />
                </View>
                {this.props.unread > 0 ? (
                  <View style={styles.notificationBadge}>
                    <Text style={styles.notificationNumber}>
                      {this.props.unread}
                    </Text>
                  </View>
                ) : null}
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              this.props.setAutoFocusRegisterListSearch(true);
              this.props.navigation.navigate('RegisterList');
            }}>
            <View style={styles.searchContainer}>
              <Icon
                name={'ios-search'}
                color={'black'}
                size={20}
                style={styles.searchIcon}
              />
              <Text style={styles.searchInput}>Tìm kiếm học viên</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.mainFeatureContainer}>
            <View style={styles.headerMainContainer}>
              <Text style={styles.headerMainText}>Điểm danh</Text>
            </View>
            <View style={styles.mainFeatureLine}>
              <CardMenu extraPadding={{paddingRight: 10}}
                        icon={require('../../assets/img/checkInIcon.png')}
                        title={'Check In'}
                        onPress={() => {
                          this.props.navigation.navigate('CheckIn', {
                            title: 'Check in',
                            type: 'checkin',
                          });
                        }}/>
              <CardMenu icon={require('../../assets/img/checkOutIcon.png')}
                        title={'Check Out'}
                        onPress={() => {
                          this.props.navigation.navigate('CheckOut', {
                            title: 'Check out',
                            type: 'checkout',
                          });
                        }}/>
              <CardMenu extraPadding={{paddingLeft: 10}}
                        icon={require('../../assets/img/historyIcon.png')}
                        title={'Lịch Sử'}
                        onPress={() => {
                          this.props.navigation.navigate('HistoryAllAttendance');
                        }}/>
            </View>
          </View>
          <View style={styles.otherFeatureLine}>
            <CircleTab
              iconImage={require('../../assets/img/icons8-ratings-90.png')}
              title={'Thống kê'}
              onPress={() => {
                this.props.navigation.navigate('Analytics');
              }}
            />
            <CircleTab
              iconImage={require('../../assets/img/icons8-contact-100.png')}
              title={'Xác thực'}
              onPress={() => {
                this.props.navigation.navigate('AccurateStudent');
              }}
            />
            <CircleTab
              iconImage={require('../../assets/img/icons8-idea-96-2.png')}
              title={'Họp'}
              onPress={() => {
                this.props.navigation.navigate('Meeting');
              }}
            />
          </View>
          <View style={styles.otherFeatureLine}>
            <CircleTab
              iconImage={require('../../assets/img/icons8-rating-90.png')}
              title={'Đánh giá'}
              onPress={() => {
                this.props.navigation.navigate('TeachingRating');
              }}
            />
            <CircleTab
              iconImage={require('../../assets/img/icons8-calendar.png')}
              title={'Lịch học bù'}
              onPress={() => {
                this.props.navigation.navigate('MakeupClass');
              }}
            />
            <CircleTab
              iconImage={require('../../assets/img/icons8-writer_male.png')}
              title={'Tạo đăng ký'}
              onPress={() => {
                this.props.navigation.navigate('SaveRegister');
              }}
            />
          </View>
          <View style={styles.otherFeatureLine}>
            <CircleTab
              iconImage={require('../../assets/img/icons8-cheap_2_filled.png')}
              title={'Nộp tiền'}
              onPress={() => {
                this.props.navigation.navigate('CollectMoney');
              }}
            />
            <CircleTab
              iconImage={require('../../assets/img/icons8-wallet_filled.png')}
              title={'Chuyển tiền'}
              onPress={() => {
                this.props.navigation.navigate('MoneyTransfer');
              }}
            />
            <CircleTab
              iconImage={require('../../assets/img/icons8-document.png')}
              title={'Tài liệu'}
              onPress={() => {
                this.props.navigation.navigate('Document');
              }}
            />
          </View>
          <View style={styles.otherFeatureLine}>
            <CircleTab
              iconImage={require('../../assets/img/icons8-teacher.png')}
              title={'Lớp học'}
              onPress={() => {
                this.props.navigation.navigate('Class', {
                  analyticsScreen: false,
                });
              }}
            />
            <CircleTab
              iconImage={require('../../assets/img/icons8-new_window.png')}
              title={'Tạo lớp học'}
              onPress={() => {
                this.props.navigation.navigate('AddClass');
              }}
            />
            <CircleTab
              iconImage={require('../../assets/img/icons8-user_account.png')}
              title={'Leads'}
              onPress={() => {
                this.props.navigation.navigate('Leads');
              }}
            />
          </View>
          <View style={styles.otherFeatureLine}>
            <CircleTab
              iconImage={require('../../assets/img/icons8-add_user_group_man_man.png')}
              title={'Tạo lead'}
              onPress={() => {
                this.props.navigation.navigate('AddLead');
              }}
            />
            <View style={{width: width / 3}} />
            <View style={{width: width / 3}} />
          </View>
          <MeetingComponent
            store={this.props.store}
            {...this.props}
            mainScreen={true}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = {
  container: {
    flex: 1,
  },
  mainFeatureLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    marginHorizontal: theme.mainHorizontal,
  },
  otherFeatureLine: {
    flexDirection: 'row',
    marginTop: 30,
  },
  searchContainer: {
    backgroundColor: '#f6f6f6',
    height: 40,
    borderRadius: 27,
    marginHorizontal: theme.mainHorizontal,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  searchIcon: {
    marginLeft: 14,
  },
  searchInput: {
    fontSize: 16,
    color: '#707070',
    marginLeft: 14,
  },
  headerContainer: {
    marginHorizontal: theme.mainHorizontal,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  headerTitle: {
    color: theme.mainTextColor,
    fontSize: theme.header.fontSize,
    fontWeight: theme.header.fontWeight,
    marginLeft: 10,
  },
  headerAva: theme.mainAvatar,
  notificationBadge: {
    position: 'absolute',
    top: -8,
    left: 20,
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 20,
    backgroundColor: theme.secondColor,
  },
  notificationNumber: {
    fontSize: 9,
    color: 'white',
    fontWeight: '600',
  },
  headerIconContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#F6F6F6',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  mainFeatureContainer: {
    alignItems: 'center',
    backgroundColor: '#0081FF',
    marginHorizontal: 10,
    marginTop: 15,
    borderRadius: 6,
    overflow: 'hidden'
  },
  headerMainContainer: {
    backgroundColor: '#006EE3',
    paddingVertical: 5,
    width: width - 20,
    alignItems: 'center'
  },
  headerMainText: {
    color: 'white',
    fontSize: 16
  },
};

export default DashboardComponent;
