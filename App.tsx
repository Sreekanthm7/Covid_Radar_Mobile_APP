/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Router} from './src/router';
import {RecoilRoot} from 'recoil';
import AuthContainer from './src/components/AuthContainer';

export default function App(): React.JSX.Element {
  return (
    <RecoilRoot>
      <AuthContainer>
        <Router />
      </AuthContainer>
    </RecoilRoot>
  );
}
