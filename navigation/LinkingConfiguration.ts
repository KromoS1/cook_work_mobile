import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          account:{
            screens:{
              TabThreeScreen: 'account',
            },
          },
          resume:{
            screens:{
              TabThreeScreen: 'resume',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};

export default linking;
