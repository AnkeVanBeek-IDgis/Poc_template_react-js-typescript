import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './components/App';

const container = document.getElementById('root');
const root = createRoot(container!) //if you use TypeScript
//@ts-ignore
root.render(<App tab="root" />);