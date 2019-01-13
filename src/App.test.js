import React from 'react';
import ReactDOM from 'react-dom';
import TarotApp from './TarotApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TarotApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
