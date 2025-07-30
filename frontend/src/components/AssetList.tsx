import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Asset } from '../types';

const AssetList: React.FC = () => {
  const [assets, setAssets] = useState<Asset[]>([]);

  useEffect(() => {
    axios.get('http://localhost:8000/assets/')
      .then(res => setAssets(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>All Assets</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Asset Tag</th>
            <th>Host Name</th>
            <th>Asset Type</th>
            <th>Status</th>
            <th>Warranty</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((a) => (
            <tr key={a.id}>
              <td>{a.id}</td>
              <td>{a.asset_tag}</td>
              <td>{a.host_name}</td>
              <td>{a.asset_type}</td>
              <td>{a.status}</td>
              <td>{a.warranty_status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssetList;
