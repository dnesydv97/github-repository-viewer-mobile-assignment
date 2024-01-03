import React from 'react';
import {View} from 'react-native';
import {Typography} from '..';
import {colors} from '../../utils/theme';
const Empty = () => {
  return (
    <View
      style={{
        flex: 1,
        marginTop: 120,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Typography title="Data not found" size={'lg'} color={colors.danger} />
    </View>
  );
};

export default Empty;
