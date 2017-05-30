/**
 * Created by phanmduong on 4/25/17.
 */
import React from'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CurrentClassStudyComponent from '../components/CurrentClassStudyComponent';
import * as currentClassStudyActions from '../actions/currentClassStudyActions';
import {Actions} from 'react-native-router-flux';

class CurrentClassStudyContainer extends React.Component {
    constructor(props) {
        super(props);
        this.onSelectedItem = this.onSelectedItem.bind(this);
        this.reloadCurrentClassStudy = this.reloadCurrentClassStudy.bind(this);
    }

    componentWillMount(){
        this.props.currentClassStudyActions
            .loadDataCurrentClassStudy(this.props.token);
    }

    onSelectedItem(classId, lessonOrder, classOrder){
        this.props.currentClassStudyActions.selectedCurrentClassStudy(classId, lessonOrder, classOrder);
        Actions.scanQRCode();

    }

    reloadCurrentClassStudy(){
        this.props.currentClassStudyActions
            .loadDataCurrentClassStudy(this.props.token);
    }

    render() {
        return (
            <CurrentClassStudyComponent
                error = {this.props.error}
                classData = {this.props.classData}
                isLoading = {this.props.isLoading}
                onSelectedItem = {this.onSelectedItem}
                onReload = {this.reloadCurrentClassStudy}
            />
        );
    }
}

function mapStateToProps(state) {
    return {
        isLoading: state.currentClassStudy.isLoading,
        classData: state.currentClassStudy.classData,
        error: state.currentClassStudy.error,
        token: state.login.token,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        currentClassStudyActions: bindActionCreators(currentClassStudyActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentClassStudyContainer);