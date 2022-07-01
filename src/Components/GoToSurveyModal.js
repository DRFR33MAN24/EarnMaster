import React, { useContext, useState, useEffect } from 'react';
import { View, Image, Dimensions } from 'react-native';
import {
    Text,
    Button,
    Modal,
    Card,

} from '@ui-kitten/components';

export const GoToSurveyModal = ({ data, closeModal }) => {


    return (
        <View >
            <Modal visible={true} style={{ height: '95%', width: '95%' }}>
                <Card disabled={true} style={{ borderRadius: 10 }} >
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            source={data.imageUri}
                            style={{
                                resizeMode: 'stretch',

                                width: '100%',
                                height: 300,

                            }}
                        />

                        <Button onPress={() => closeModal(false)}>
                            DISMISS
                        </Button>
                    </View>
                </Card>
            </Modal>
        </View>
    )
}