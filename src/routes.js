/**
 * Created by phanmduong on 4/5/17.
 */
import React from'react';
import {StyleSheet, Navigator} from'react-native';
import {Scene, Router, ActionConst, Actions} from 'react-native-router-flux';
import LoginContainer from './containers/LoginContainer';
import BaseContainer from './containers/BaseContainer';
import CourseContainer from './containers/CourseContainer';
import GenContainer from './containers/GenContainer';
import LessonCourseContainer from './containers/LessonCourseContainer';
import ClassContainer from './containers/ClassContainer';
import QRCodeContainer from './containers/QRCodeContainer';
import AttendanceStudentContainer from './containers/AttendanceStudentContainer';
import CurrentClassStudyContainer from './containers/CurrentClassStudyContainer';
import CollectMoneyContainer from './containers/CollectMoneyContainer';
import MoneyTransferContainer from './containers/MoneyTransferContainer';
import AttendanceContainer from './containers/AttendanceContainer';
import ShiftRegisterContainer from './containers/ShiftRegisterContainer';
import CheckInContainer from './containers/CheckInContainer';
import DashboardContainer from './containers/DashboardContainer';
import TabIcon from './components/common/TabIcon';
import BackButton from './components/common/BackButton';
import MenuButton from './components/common/MenuButton';
import theme from './styles';

class RouterComponent extends React.Component {
    render() {
        return (
            <Router >
                <Scene key="root">
                    <Scene key="login" component={LoginContainer} hideNavBar initial type={ActionConst.RESET}/>
                    <Scene
                        key="main"
                        tabs
                        tabBarStyle={styles.tabBarStyle}
                        tabBarSelectedItemStyle={styles.tabBarSelectedItemStyle}
                        type={ActionConst.RESET}
                        hideNavBar={false}
                    >
                        <Scene
                            key="tabAttendance"
                            nameIcon="fontawesome|qrcode"
                            icon={TabIcon}
                            initial
                            navigationBarStyle={styles.navigationBarStyle}
                            titleStyle={styles.title}
                        >
                            <Scene
                                key="currentClassStudy"
                                component={CurrentClassStudyContainer}
                                title="Điểm danh"
                                renderLeftButton={() => {
                                }}
                                renderRightButton={MenuButton}
                                sceneStyle={styles.sceneStyle}
                                onRight={()=>{console.log('right')}}
                            />
                            <Scene
                                key="scanQRCode"
                                component={QRCodeContainer}
                                title="Điểm danh"
                                renderBackButton={BackButton}
                                renderRightButton={MenuButton}
                                onBack={()=> {
                                    Actions.pop();
                                }}
                                onRight={()=>console.log('right')}
                            />
                            <Scene
                                key="attendanceStudentCode"
                                component={AttendanceStudentContainer}
                                title="Điểm danh"
                                sceneStyle={styles.sceneStyle}
                                renderBackButton={BackButton}
                                renderRightButton={MenuButton}
                                onBack={()=> {
                                    Actions.pop();
                                }}
                            />
                        </Scene>
                        <Scene
                            key="tabShiftRegister"
                            component={ShiftRegisterContainer}
                            title="Lịch trực"
                            nameIcon="fontawesome|edit"
                            icon={TabIcon}
                            navigationBarStyle={styles.navigationBarStyle}
                            titleStyle={styles.title}
                            renderLeftButton={() => {
                            }}
                            renderRightButton={MenuButton}
                        />
                        <Scene
                            key="tabDashboard"
                            component={DashboardContainer}
                            title="Dashboard"
                            nameIcon="material|apps"
                            icon={TabIcon}
                            renderLeftButton={() => {
                            }}
                            navigationBarStyle={styles.navigationBarStyle}
                            titleStyle={styles.title}
                            renderRightButton={MenuButton}
                        />
                        <Scene
                            key="tabCollectMoney"
                            component={CollectMoneyContainer}
                            title="Nộp tiền"
                            nameIcon="material|attach-money"
                            icon={TabIcon}
                            navigationBarStyle={styles.navigationBarStyle}
                            titleStyle={styles.title}
                            renderLeftButton={() => {
                            }}
                            renderRightButton={MenuButton}
                        />
                        <Scene
                            key="tabMoneyTransfer"
                            component={MoneyTransferContainer}
                            title="Chuyển tiền"
                            nameIcon="entypo|wallet"
                            icon={TabIcon}
                            navigationBarStyle={styles.navigationBarStyle}
                            titleStyle={styles.title}
                            renderLeftButton={() => {
                            }}
                            renderRightButton={MenuButton}
                        />
                    </Scene>
                </Scene>
            </Router>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        color: 'white'
    },
    navigationBarStyle: {
        backgroundColor: theme.mainColor
    },
    tabBarStyle: {
        backgroundColor: theme.mainColor
    },
    tabBarSelectedItemStyle: {},
    sceneStyle: {
        paddingTop: Navigator.NavigationBar.Styles.General.TotalNavHeight,
        paddingBottom: 50
    }
});

export default RouterComponent;