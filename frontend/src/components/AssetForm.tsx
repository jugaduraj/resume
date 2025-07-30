import React, { useState } from 'react';
import axios from 'axios';
import { Asset } from '../types';

const emptyAsset: Asset = {
  asset_tag: '',
  host_name: '',
  asset_type: '',
  make: '',
  model: '',
  serial_no: '',
  processor: '',
  os: '',
  os_version: '',
  ram: '',
  hdd_ssd: '',
  location: '',
  status: '',
  remark: '',
  warranty_status: '',
  warranty_expiration_date: '',
};

const AssetForm: React.FC = () => {
  const [asset, setAsset] = useState<Asset>(emptyAsset);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAsset({ ...asset, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.post('http://localhost:8000/assets/', asset);
    setAsset(emptyAsset);
    alert("Asset added successfully!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Asset</h2>
      <input name="asset_tag" placeholder="Asset Tag" value={asset.asset_tag} onChange={handleChange} required />
      <input name="host_name" placeholder="Host Name" value={asset.host_name} onChange={handleChange} />
      <input name="asset_type" placeholder="Asset Type" value={asset.asset_type} onChange={handleChange} />
      <input name="make" placeholder="Make" value={asset.make} onChange={handleChange} />
      <input name="model" placeholder="Model" value={asset.model} onChange={handleChange} />
      <input name="serial_no" placeholder="Serial No." value={asset.serial_no} onChange={handleChange} />
      <input name="processor" placeholder="Processor" value={asset.processor} onChange={handleChange} />
      <input name="os" placeholder="OS" value={asset.os} onChange={handleChange} />
      <input name="os_version" placeholder="OS Version" value={asset.os_version} onChange={handleChange} />
      <input name="ram" placeholder="RAM" value={asset.ram} onChange={handleChange} />
      <input name="hdd_ssd" placeholder="HDD/SSD" value={asset.hdd_ssd} onChange={handleChange} />
      <input name="location" placeholder="Location" value={asset.location} onChange={handleChange} />
      <input name="status" placeholder="Status" value={asset.status} onChange={handleChange} />
      <input name="remark" placeholder="Remark" value={asset.remark} onChange={handleChange} />
      <input name="warranty_status" placeholder="Warranty Status" value={asset.warranty_status} onChange={handleChange} />
      <input name="warranty_expiration_date" type="date" value={asset.warranty_expiration_date} onChange={handleChange} />
      <button type="submit">Add Asset</button>
    </form>
  );
};

export default AssetForm;
