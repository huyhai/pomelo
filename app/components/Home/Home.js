import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Text, FlatList, Image, Button, SafeAreaView, ActivityIndicator } from 'react-native';
import { fetchFakeData, fetchFakeDataSuccess } from '../../services/general/generalActions'
import commonStyles from '../../common/style';
import styles from './style';

export class Home extends React.Component {

    static propTypes = {
        fetchFakeData: PropTypes.func.isRequired,
        fetchingData: PropTypes.bool
    };

    static defaultProps = {
        fetchingData: false
    };

    componentDidMount() {
        const { fetchFakeData } = this.props;
        fetchFakeData()
    }

    render() {
        const { listTransactions, fetchingData } = this.props;
        return(
            <SafeAreaView style={commonStyles.flex1}>
                <FlatList
                    style={commonStyles.flex1}
                    data={listTransactions}
                    renderItem={this.renderItem}
                    keyExtractor={this.keyExtractor}
                    removeClippedSubviews={true}
                    ItemSeparatorComponent={this.renderSeparator}
                />
                <Button
                    title="Update to REFUNDED"
                    onPress={this.clickUpdate}
                />
                { fetchingData && (
                    <View style={styles.loading}>
                        <ActivityIndicator size="large" />
                    </View>
                )}
            </SafeAreaView>
        );
    }

    keyExtractor = item => item.id;

    clickUpdate = () => {
        const { listTransactions, fetchFakeDataSuccess: updateDataWithNewStatus } = this.props;
        const data = listTransactions.map((item, index) => {
            item.state = 'REFUNDED';
            return item;
        });
        updateDataWithNewStatus(data)
    };

    renderItem = ({ item, index }) => {
        const { providerDisplayName, state, qr, amount, currency, id } = item;
        const { url } = qr;
        return (
            <View key={id} style={styles.itemParent}>
                <View style={styles.itemParentRow}>
                    <Image
                        style={styles.imgStyle}
                        source={{uri: url}}
                        resizeMode={"cover"}
                    />
                    <View style={{flex:1, padding: 10}}>
                        <Text>{`ID: ${id}`}</Text>
                        <Text>{`DisplayName: ${providerDisplayName}`}</Text>
                        <Text>{`Amount: ${amount}`}</Text>
                        <Text>{`Currency: ${currency}`}</Text>
                        <Text style={styles.statusText}>{`Status: ${state}`}</Text>
                    </View>

                </View>
            </View>

        )
    };

    renderSeparator = () => {
        return (
            <View style={styles.separatorLine}/>
        );
    };
}


export const mapStateToProps = state => {
    const { general } = state;
    return {
        listTransactions: general.listTransactions,
        fetchingData: general.fetchingData,
    }
};

export const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            fetchFakeData,
            fetchFakeDataSuccess
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
