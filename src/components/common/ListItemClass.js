import React from'react';
import {Dimensions, Platform, TouchableNativeFeedback, TouchableOpacity, Animated, Switch} from 'react-native';
import {
    View,
    Text,
    Thumbnail,
} from 'native-base';
import theme from '../../styles';

var {height, width} = Dimensions.get('window');

var maxWidthProcess = width / 2;
class ListItemClass extends React.Component {
    constructor(props, context) {
        super(props, context);
    }


    content() {
        var {nameClass, studyTime, avatar, totalPaid, totalRegisters, paidTarget, registerTarget, status} = this.props;
        var tmpTotalPaid, tmpTotalRegister;
        tmpTotalPaid = (totalPaid < paidTarget) ? totalPaid : paidTarget;
        tmpTotalRegister = (totalRegisters < registerTarget) ? totalRegisters : registerTarget;
        return (
            <View style={styles.container}>
                <Thumbnail small source={{uri: avatar}}/>
                <View style={styles.content}>
                    <View style={styles.containerTitle}>
                        <Text style={styles.title}>{nameClass.toUpperCase()}</Text>
                        <Switch
                            value={Boolean(status)}

                        />

                    </View>
                    <Text style={styles.subTitle}>{studyTime}</Text>
                    <View style={styles.containerContentProcess}>
                        <View style={styles.processAndText}>
                            <View style={{
                                ...styles.process, ...styles.containerProcess, ...{
                                    backgroundColor: '#26a69a30',
                                }
                            }}>
                                <Animated.View
                                    style={[styles.process, styles.bar,
                                        {
                                            width: maxWidthProcess * tmpTotalPaid / paidTarget,
                                            backgroundColor: '#26a69a'
                                        }]}
                                />
                            </View>
                            <Text style={styles.textProcess}>{totalPaid}/{paidTarget}</Text>
                        </View>
                        <View style={styles.processAndText}>
                            <View style={{
                                ...styles.process, ...styles.containerProcess, ...{
                                    backgroundColor: '#2196F330'
                                }
                            }}>
                                <Animated.View
                                    style={[styles.process, styles.bar,
                                        {
                                            width: maxWidthProcess * tmpTotalRegister / registerTarget,
                                            backgroundColor: '#2196F3'
                                        }]}
                                />
                            </View>
                            <Text style={styles.textProcess}>{totalRegisters}/{registerTarget}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    render() {
        if (Platform.OS === 'ios') {
            return (
                <View>
                    <TouchableOpacity >
                        {this.content()}
                    </TouchableOpacity>
                    <View style={styles.line}/>
                </View>
            );
        } else {
            return (
                <View>
                    <TouchableNativeFeedback >
                        {this.content()}
                    </TouchableNativeFeedback>
                    <View style={styles.line}/>
                </View>
            );
        }

    }
}

const styles = ({

    container: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        paddingTop: 20
    },
    content: {
        flex: 1,
        marginLeft: 20,
        paddingBottom: 20,
    },
    containerTitle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        color: '#555555',
        fontWeight: '900',
        fontSize: (Platform.isPad) ? 18 : 13
    },
    subTitle: {
        color: '#7d7d7d',
        fontSize: 12
    },
    icon: {
        fontSize: 20,
        color: theme.colorTitle,
    },
    line: {
        height: 1,
        backgroundColor: theme.borderColor,
        marginRight: 20,
        marginLeft: 75
    },
    containerContentProcess: {},
    containerProcess: {
        marginVertical: 5,
        backgroundColor: theme.secondColorOpacity,
        width: maxWidthProcess
    },
    bar: {},
    process: {
        borderRadius: 5,
        height: 5,
        backgroundColor: theme.secondColor
    },
    processAndText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textProcess: {
        color: theme.colorTitle,
        fontSize: 12
    }
});

export default ListItemClass;