import React from 'react';
import { registerRootComponent } from 'expo';

import createMockServer from './mockServer';
import App from './App';

createMockServer('development');
registerRootComponent(() => <App />);
