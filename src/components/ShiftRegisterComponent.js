import React from'react';
import {StyleSheet, Dimensions, RefreshControl, ScrollView} from 'react-native';
import {
    Container,
    Content,
    Button,
    Header,
    Body,
    Icon,
    View,
    ListItem,
    List,
    Text,
    Thumbnail,
    Picker,
    Item,
} from 'native-base';
import Swiper from 'react-native-swiper';
var {height, width} = Dimensions.get('window');
import Spinkit from 'react-native-spinkit';
import _ from 'lodash';
import theme from '../styles';
import ShiftRegisterWeek from './ShiftRegister/ShiftRegisterWeek';

class ShiftRegisterComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        if (this.props.isLoading) {
            return (
                <Container>
                    <View style={styles.container}>
                        <Spinkit
                            isVisible
                            color={theme.mainColor}
                            type='Wave'
                            size={width / 8}
                        />
                    </View>
                </Container>
            )
        } else {
            return (
                <Container>
                    <View style={{flexDirection: 'row'}}>
                        <Picker
                            style={{width: width / 2, padding: 0, margin: 0}}
                            iosHeader="Chọn khóa học"
                            mode="dialog"
                            defaultLabel={"Chọn khóa"}
                            selectedValue={this.props.selectedGenId}
                            onValueChange={this.props.onSelectGenId}>
                            {this.props.genData.map(function (gen, index) {
                                return (<Item label={"Khóa " + gen.name} value={gen.id} key={index}/>)
                            })}
                        </Picker>
                        <Picker
                            style={{width: width / 2, padding: 0, margin: 0}}
                            iosHeader="Chọn cơ sở"
                            mode="dialog"
                            defaultLabel={"Chọn cơ sở"}
                            selectedValue={this.props.selectedBaseId}
                            onValueChange={this.props.onSelectBaseId}>
                            {this.props.baseData.map(function (base, index) {
                                return (<Item label={base.name} value={base.id} key={index}/>)
                            })}
                        </Picker>
                    </View>
                    <ScrollView
                        refreshControl={
                            <RefreshControl
                                refreshing={this.props.isLoadingShiftRegister}
                                onRefresh={this.props.loadDataShiftRegister}
                                titleColor={theme.mainColor}
                                title="Đang tải..."
                                tintColor='#d9534f'
                                colors={['#d9534f']}
                            />
                        }>
                        {
                            (this.props.shiftRegisterData.weeks) ?
                                (
                                    <Swiper style={styles.wrapper}
                                            showsPagination
                                            buttonWrapperStyle={{
                                                backgroundColor: 'transparent',
                                                flexDirection: 'row',
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                paddingHorizontal: 10,
                                                justifyContent: 'space-between',
                                                alignItems: 'stretch'

                                            }}
                                    >
                                        {
                                            this.props.shiftRegisterData.weeks.map((week, index) => {
                                                return (<ShiftRegisterWeek key={index} weekData={week}/>);
                                            })
                                        }
                                    </Swiper>
                                )
                                :
                                (
                                    <View/>
                                )
                        }
                    </ScrollView>

                </Container>
            );
        }

    }
}

const styles = ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textError: {
        color: '#d9534f'
    },
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
});

export default ShiftRegisterComponent;