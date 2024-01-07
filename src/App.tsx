import React from 'react';
import { RoutesContent } from './components/routes.content';
import { Header } from './components/header';
import './App.scss';

export const App = () => {

  return (
    <div className="App">
      <Header />
      <RoutesContent />
    </div>
  );
}