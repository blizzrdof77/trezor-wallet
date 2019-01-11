/* @flow */
import React from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import colors from 'config/colors';
import Notification from 'components/Notification';
import * as TrezorConnectActions from 'actions/TrezorConnectActions';

import type { State, Dispatch } from 'flowtype';

type OwnProps = {||};

type StateProps = {|
    acquiring: boolean,
|};

type DispatchProps = {|
    acquireDevice: typeof TrezorConnectActions.acquire,
|};

type Props = {| ...OwnProps, ...StateProps, ...DispatchProps |};

const Wrapper = styled.div`
    display: flex;
    background: ${colors.WHITE};
    flex-direction: column;
    flex: 1;
`;

const Acquire = (props: Props) => (
    <Wrapper>
        <Notification
            title="Device is used in other window"
            message="Do you want to use your device in this window?"
            type="info"
            cancelable={false}
            isActionInProgress={props.acquiring}
            actions={
                [
                    {
                        label: 'Acquire device',
                        callback: () => {
                            props.acquireDevice();
                        },
                    },
                ]
            }
        />
    </Wrapper>
);

export default connect<Props, OwnProps, StateProps, DispatchProps, State, Dispatch>(
    (state: State): StateProps => ({
        acquiring: state.connect.acquiringDevice,
    }),
    (dispatch: Dispatch): DispatchProps => ({
        acquireDevice: bindActionCreators(TrezorConnectActions.acquire, dispatch),
    }),
)(Acquire);
