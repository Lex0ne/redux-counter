import React from 'react';
import ReactDom from 'react-dom';
import { Counter } from './src/index';

export function initApp(node) {
    ReactDom.render(<Counter />, node);
    return null;
}
