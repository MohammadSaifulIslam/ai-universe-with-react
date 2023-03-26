import React from 'react';
import Button from './assets/components/Button/Button';
import Card from './assets/components/Card/Card';
import Header from './assets/components/Header/Header';

const App = () => {
  return (
    <div className='px-10'>
      <Header></Header>
      <Button>Sort By Date</Button>
      <Card></Card>
    </div>
  );
};

export default App;