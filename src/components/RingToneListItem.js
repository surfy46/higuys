import React, { Component, PropTypes } from 'react';
import { TouchableHighlight, View, Text } from 'react-native';
import { connect } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../constant/Colors';
import Styles from '../constant/Styles';
import {
    choosingRingTone,
} from '../actions';

const propTypes = {
    item: PropTypes.object.isRequired
};

class RingToneListItem extends Component {

    renderIcon() {
        const { tmpRingTone, item } = this.props;
        const { listItemIconContainer } = Styles;
        if (tmpRingTone.id === item.id) {
            return (
                <View style={listItemIconContainer}>
                    <Ionicons
                        name="ios-checkmark-outline"
                        size={32}
                        color={Colors.itemCheckedColor} />
                </View>
            );
        }
        return <View style={listItemIconContainer} />
    }

    render() {
        const { item } = this.props;
        const { listItem, listItemText } = Styles;
        return (
            <TouchableHighlight
                underlayColor={Colors.listItemUnderlayColor}
                onPress={() => this.props.choosingRingTone({ item })}>
                <View style={listItem}>
                    {this.renderIcon()}
                    <Text style={listItemText}>{item.name}</Text>
                </View>
            </TouchableHighlight>
        );
    }
}

RingToneListItem.propTypes = propTypes;

const mapStateToProps = (state) => {
    const { tmpRingTone } = state.timer;
    return { tmpRingTone };
};

export default connect(mapStateToProps, {
    choosingRingTone,
})(RingToneListItem);
