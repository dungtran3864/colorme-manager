import React from 'react';
import {Dimensions, RefreshControl} from 'react-native';
import {
    Container,
    Content,
    Button,
    Right,
    Body,
    Icon,
    View,
    ListItem,
    List,
    Text,
    Thumbnail,
} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

var {height, width} = Dimensions.get('window');
import * as alert from '../constants/alert';
import Loading from '../components/common/Loading';
import theme from "../styles";

class ClassComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {

        if (this.props.isLoading && this.props.classData.length <= 0) {
            return (
                <Loading size={width / 8}/>
            )
        } else {
            if (this.props.error || this.props.classData.length <= 0) {
                return (
                    <Container>
                        <View style={styles.container}>
                            <Text
                                style={styles.textError}>{(this.props.error) ? alert.LOAD_DATA_ERROR : alert.NO_CURRENT_CLASS_STUDY}</Text>
                            <Button iconLeft danger small onPress={this.props.onReload}
                                    style={{marginTop: 10, alignSelf: null}}>
                                <MaterialCommunityIcons name='reload' color='white' size={20}/>
                                <Text>Thử lại</Text>
                            </Button>
                        </View>
                    </Container>
                )
            } else {
                return (
                    <List
                        refreshControl={
                            <RefreshControl
                                refreshing={this.props.isLoading}
                                onRefresh={this.props.onReload}
                                titleColor={theme.mainColor}
                                title="Đang tải..."
                                tintColor='#d9534f'
                                colors={['#d9534f']}
                            />
                        }
                        dataArray={this.props.classData}
                        renderRow={
                            (item, sectionID, rowID) => (
                                <ListItem
                                    // onPress={() => this.props.onSelectedItem(item.id, item.lesson[0].order, rowID)}
                                    onPress={() => this.props.onSelectedItem(item, rowID)}
                                    onLongPress={() => {
                                    }}
                                    button
                                >
                                    <Thumbnail small source={{uri: item.avatar_url}}/>
                                    <Body>
                                    <View style={styles.containerClassName}>
                                        <Text>{item.name}</Text>
                                        {item.lesson[0] &&
                                        <View style={{...styles.card, ... {backgroundColor: theme.processColor1}}}>
                                            <Text
                                                style={styles.textCard}>BUỔI {item.lesson[0].order}</Text>
                                        </View>
                                        }
                                        {item.lesson[0] &&
                                        <View style={{...styles.card, ... {backgroundColor: theme.secondColor}}}>
                                            <Text
                                                style={styles.textCard}>{item.lesson[0].number_student_attendance} HỌC
                                                VIÊN</Text>
                                        </View>
                                        }

                                    </View>
                                    <Text note>{item.study_time}</Text>
                                    </Body>
                                    <Right>
                                        <Icon android="md-arrow-forward" ios="ios-arrow-forward"/>
                                    </Right>
                                </ListItem>
                            )
                        }
                    >
                    </List>
                )
            }
        }
    }
}

const styles = ({
    list: {},
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textError: {
        color: '#d9534f',
        textAlign: 'center'
    },
    containerClassName: {
        marginHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    card: {
        paddingHorizontal: 10,
        marginLeft: 5,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: 15,
    },
    textCard: {
        fontSize: 10,
        color: 'white',
        textAlign: 'center'
    }
});

export default ClassComponent;