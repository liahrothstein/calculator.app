import React from 'react';
import { Header, RoutesContent } from './components';
import './App.scss';

export const App = () => {

  return (
    <div className="App">
      <Header />
      <RoutesContent />
    </div>
  );
}