/**
 * Created by phanmduong on 9/29/18.
 */
import React from 'react';
import {connect} from 'react-redux';
import MeetingDetailStore from "./MeetingDetailStore";
import {observer} from "mobx-react";
import MeetingDetailComponent from "./MeetingDetailComponent";

@observer
class MeetingDetailContainer extends React.Component {
    constructor(props) {
        super(props);
        this.store = new MeetingDetailStore(props.token);
    }

    componentDidMount() {
        this.store.loadList();
    }

    render() {
        return (
            <MeetingDetailComponent store={this.store}/>
        );
    }
}

function mapStateToProps(state) {
    return {
        token: state.login.token,
    };
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(MeetingDetailContainer);