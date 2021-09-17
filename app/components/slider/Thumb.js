import React, { memo } from 'react';
import { View, StyleSheet } from 'react-native';

const THUMB_RADIUS = 6;

const Thumb = () => {
    return (
        <View style={styles.root} />
    );
};

const styles = StyleSheet.create({
    root: {
        width: THUMB_RADIUS * 2,
        height: THUMB_RADIUS * 2,
        borderRadius: THUMB_RADIUS,
        borderWidth: 2,
        borderColor: '#5B74FB',
        backgroundColor: '#5B74FB',
    },
});

export default memo(Thumb);