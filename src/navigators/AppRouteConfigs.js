/**
 * Created by phanmduong on 6/7/17.
 */
import * as React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import theme from '../styles';
import LoginContainer from '../containers/LoginContainer';
import ClassContainer from '../containers/ClassContainer';
// import QRCodeContainer from '../containers/QRCodeContainer';
// import AttendanceStudentContainer from '../containers/AttendanceStudentContainer';
import CurrentClassStudyContainer from '../containers/CurrentClassStudyContainer';
import CollectMoneyContainer from '../containers/CollectMoneyContainer';
import StudentRegisterClassContainer from '../containers/StudentRegisterClassContainer';
import MoneyTransferContainer from '../containers/MoneyTransferContainer';
import ShiftRegisterContainer from '../containers/ShiftRegisterContainer';
import AnalyticsContainer from '../containers/AnalyticsContainer';
import ListStudentClassContainer from '../containers/ListStudentClassContainer';
import ListStudentPaidContainer from '../containers/ListStudentPaidContainer';
import ListStudentZeroContainer from '../containers/ListStudentZeroContainer';
import RegisterListContainer from '../containers/RegisterListContainer';
import SidebarContainer from '../containers/SidebarContainer';
import TabIcon from '../components/common/TabIcon';
import MenuButton from '../components/common/MenuButton';
import CheckInContainer from '../containers/CheckInContainer';
import ListStudentAttendanceContainer from '../containers/ListStudentAttendanceContainer';
import HistoryAttendanceShiftContainer from '../containers/historyAttendanceShift/HistoryAttendanceShiftContainer';
import HistoryAttendanceTeachingContainer from '../containers/historyAttendanceTeaching/HistoryAttendanceTeachingContainer';
import QRCodeContainer from '../containers/QRCodeContainer';
import AttendanceStudentContainer from '../containers/AttendanceStudentContainer';
import AccurateStudentContainer from '../containers/accurateStudent/AccurateStudentContainer';
import TabBar from '../components/common/TabBar';
import DashboardContainer from '../containers/DashboardContainer';
import MeetingContainer from '../containers/meeting/MeetingContainer';
import MeetingDetailContainer from '../containers/meetingDetail/MeetingDetailContainer';
import HistoryContainer from '../containers/HistoryContainer';
import HistoryAttendanceWorkShiftContainer from '../containers/historyAttendanceShift/HistoryAttendanceWorkShiftContainer';
import StoreMeetingContainer from '../containers/storeMeeting/StoreMeetingContainer';
import {createStackNavigator} from 'react-navigation-stack';
import AuthLoadingContainer from '../containers/AuthLoadingContainer';
import WorkShiftRegisterContainer from '../containers/WorkShiftRegisterContainer';
import EditStoreMeetingContainer from '../containers/storeMeeting/EditStoreMeetingContainer';
import HistoryMeetingContainer from '../containers/meeting/HistoryMeetingContainer';
import HistoryMeetingDetailsContainer from '../containers/meetingDetail/HistoryMeetingDetailsContainer';
import TeachingRatingContainer from '../containers/TeachingRatingContainer';
import DetailShiftsContainer from '../containers/DetailShiftsContainer';
import ListDetailShiftsRegisteredContainer from '../containers/ListDetailShiftsRegisteredContainer';

const navigationOptionsDefault = {
  defaultNavigationOptions: {
    headerStyle: {
      borderBottomWidth: 0,
    },
  },
};

const TabAttendance = createStackNavigator(
  {
    CurrentClassStudy: {
      screen: CurrentClassStudyContainer,
    },
    ListStudentAttendance: {
      screen: ListStudentAttendanceContainer,
    },
    QRCode: {
      screen: QRCodeContainer,
    },
    AttendanceStudent: {
      screen: AttendanceStudentContainer,
    },
  },
  navigationOptionsDefault,
);

const TabShiftRegister = createStackNavigator(
  {
    ShiftRegister: {
      screen: ShiftRegisterContainer,
    },
  },
  navigationOptionsDefault,
);

const TabDashboard = createStackNavigator(
  {
    Dashboard: {
      screen: DashboardContainer,
    },
    Analytics: {
      screen: AnalyticsContainer,
    },
    Class: {
      screen: ClassContainer,
    },
    ListStudentClass: {
      screen: ListStudentClassContainer,
    },
    ListStudentPaid: {
      screen: ListStudentPaidContainer,
    },
    ListStudentZero: {
      screen: ListStudentZeroContainer,
    },
    RegisterList: {
      screen: RegisterListContainer,
    },
    CheckIn: {
      screen: CheckInContainer,
    },
    CheckOut: {
      screen: CheckInContainer,
    },
    HistoryAllAttendance: {
      screen: HistoryContainer,
    },
    HistoryAttendanceShift: {
      screen: HistoryAttendanceShiftContainer,
    },
    HistoryAttendanceWorkShift: {
      screen: HistoryAttendanceWorkShiftContainer,
    },
    HistoryAttendanceTeaching: {
      screen: HistoryAttendanceTeachingContainer,
    },
    AccurateStudent: {
      screen: AccurateStudentContainer,
    },
    Meeting: {
      screen: MeetingContainer,
    },
    MeetingDetail: {
      screen: MeetingDetailContainer,
    },
    StoreMeeting: {
      screen: StoreMeetingContainer,
    },
    WorkShiftRegister: {
      screen: WorkShiftRegisterContainer,
    },
    EditStoreMeeting: {
      screen: EditStoreMeetingContainer,
    },
    HistoryMeeting: {
      screen: HistoryMeetingContainer,
    },
    HistoryMeetingDetails: {
      screen: HistoryMeetingDetailsContainer,
    },
    TeachingRating: {
      screen: TeachingRatingContainer,
    },
    ListDetailShiftsRegistered: {
      screen: ListDetailShiftsRegisteredContainer,
    },
    DetailShifts: {
      screen: DetailShiftsContainer,
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        borderBottomWidth: 0,
      },
    },
  },
);

const TabCollectMoney = createStackNavigator(
  {
    CollectMoney: {
      screen: CollectMoneyContainer,
    },
    StudentRegisterClass: {
      screen: StudentRegisterClassContainer,
    },
  },
  navigationOptionsDefault,
);

const TabMoneyTransfer = createStackNavigator(
  {
    MoneyTransfer: {
      screen: MoneyTransferContainer,
    },
  },
  navigationOptionsDefault,
);

const DashboardMain = createBottomTabNavigator(
  {
    TabAttendance: {
      screen: TabAttendance,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: 'Điểm danh',
        tabBarIcon: ({tintColor}) => (
          <TabIcon nameIcon="fontawesome|qrcode" color={tintColor} />
        ),
      }),
    },
    TabShiftRegister: {
      screen: TabShiftRegister,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: 'Lịch trực',
        tabBarIcon: ({tintColor}) => (
          <TabIcon nameIcon="fontawesome|edit" color={tintColor} />
        ),
      }),
    },
    TabDashboard: {
      screen: TabDashboard,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: 'Quản lý',
        tabBarIcon: ({tintColor}) => (
          <TabIcon nameIcon="material|apps" color={tintColor} />
        ),
      }),
    },
    TabCollectMoney: {
      screen: TabCollectMoney,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: 'Nộp tiền',
        tabBarIcon: ({tintColor}) => (
          <TabIcon nameIcon="material|attach-money" color={tintColor} />
        ),
      }),
    },
    TabMoneyTransfer: {
      screen: TabMoneyTransfer,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: 'Chuyển tiền',
        tabBarIcon: ({tintColor}) => (
          <TabIcon nameIcon="entypo|wallet" color={tintColor} />
        ),
      }),
    },
  },
  {
    // tabBarComponent: TabBarTop,
    tabBarComponent: TabBar,
    swipeEnabled: false,
    animationEnabled: true,
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      activeTintColor: 'white',
      inactiveTintColor: '#a8a8a8',
    },
    initialRouteName: 'TabDashboard',
    tabBarPosition: 'bottom',
    backBehavior: 'none',
  },
);
//
// const CheckIn = StackNavigator({
//     CheckIn: {
//         screen: CheckInContainer,
//
//     }
// }, {
//     ...navigationOptionsDefault,
//     ...{
//         initialRouteName: 'CheckIn',
//         initialRouteParams: {
//             title: 'Check in',
//             type: 'checkin'
//         }
//     }
// });
//
// const HistoryAttendanceShift = StackNavigator({
//     HistoryAttendanceShift: {
//         screen: HistoryAttendanceShiftContainer,
//     }
// }, {
//     ...navigationOptionsDefault,
//     ...{
//         initialRouteName: 'HistoryAttendanceShift',
//         initialRouteParams: {
//             title: 'Lịch sử lịch trực',
//             type: 'shift'
//         }
//     }
// });
//
// const HistoryAttendanceWorkShift = StackNavigator({
//     HistoryAttendanceWorkShift: {
//         screen: HistoryAttendanceShiftContainer,
//     }
// }, {
//     ...navigationOptionsDefault,
//     ...{
//         initialRouteName: 'HistoryAttendanceWorkShift',
//         initialRouteParams: {
//             title: 'Lịch sử lịch làm việc',
//             type: 'work_shift'
//         }
//     }
// });
//
// const AccurateStudent = StackNavigator({
//     AccurateStudent: {
//         screen: AccurateStudentContainer,
//     }
// }, {
//     ...navigationOptionsDefault,
//     ...{
//         initialRouteName: 'AccurateStudent',
//         initialRouteParams: {
//             title: 'Xác thực học viên',
//         }
//     }
// });
//
// const HistoryAttendanceTeaching = StackNavigator({
//     HistoryAttendanceTeaching: {
//         screen: HistoryAttendanceTeachingContainer,
//     }
// }, {
//     ...navigationOptionsDefault,
//     ...{
//         initialRouteName: 'HistoryAttendanceTeaching',
//         initialRouteParams: {
//             title: 'Lịch sử lịch giảng dạy',
//         }
//     }
// });
//
// const CheckOut = StackNavigator({
//     CheckOut: {
//         screen: CheckInContainer,
//
//     }
// }, {
//     ...navigationOptionsDefault, ...{
//         initialRouteName: 'CheckOut',
//         initialRouteParams: {
//             title: 'Check out',
//             type: 'checkout'
//         }
//     }
// });
//
//
// const Drawer = DrawerNavigator({
//     TabDashboard: {
//         screen: DashboardMain,
//         navigationOptions: ({navigation}) => ({
//             title: 'Bảng điều khiển',
//         })
//     },
//     MenuCheckIn: {
//         screen: CheckIn,
//         navigationOptions: ({navigation}) => ({
//             title: 'Check in',
//         })
//     },
//     MenuCheckOut: {
//         screen: CheckOut,
//         navigationOptions: ({navigation}) => ({
//             title: 'Check out',
//         })
//     },
//     HistoryAttendanceShift: {
//         screen: HistoryAttendanceShift,
//         navigationOptions: ({navigation}) => ({
//             title: 'Lịch sử điểm danh lịch trực',
//         })
//     },
//     HistoryAttendanceWorkShift: {
//         screen: HistoryAttendanceWorkShift,
//         navigationOptions: ({navigation}) => ({
//             title: 'Lịch sử điểm danh lịch làm việc',
//
//         })
//     },
//     HistoryAttendanceTeaching: {
//         screen: HistoryAttendanceTeaching,
//         navigationOptions: ({navigation}) => ({
//             title: 'Lịch sử điểm danh lịch giảng dạy',
//
//         })
//     },
//     AccurateStudent: {
//         screen: AccurateStudent,
//         navigationOptions: ({navigation}) => ({
//             title: 'Xác thực học viên',
//
//         })
//     },
// }, {
//     drawerPosition: 'right',
//     // backBehavior: 'none',
//     useNativeAnimations: 'false',
//     disableOpenGesture: false,
//     drawerLockMode: 'locked-closed',
//     contentComponent: props => (<SidebarContainer {...props}/>)
// });

const Main = createStackNavigator(
  {
    DashboardMain: {
      screen: DashboardMain,
    },
  },
  {headerMode: 'none'},
);

export const routeConfigs = {
  Login: {
    screen: LoginContainer,
  },
  AuthLoading: {
    screen: AuthLoadingContainer,
  },
  Main: {
    screen: Main,
  },
};

export const navigationOptions = {
  headerMode: 'none',
  initialRouteName: 'AuthLoading',
};
