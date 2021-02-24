import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';

import ScannerScreen from './ScannerScreen' ; 

function App () {
  return (
  <ApplicationProvider {...eva} theme={eva.light}>
    <ScannerScreen/>
  </ApplicationProvider>
);
   }



export default App ; 