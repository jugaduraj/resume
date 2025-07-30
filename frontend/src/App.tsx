import React from 'react';
import AssetForm from './components/AssetForm';
import AssetList from './components/AssetList';

const App: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>IT Asset Management</h1>
      <AssetForm />
      <hr />
      <AssetList />
    </div>
  );
};

export default App;
