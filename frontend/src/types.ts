export interface Asset {
  id?: number;
  asset_tag: string;
  host_name?: string;
  asset_type?: string;
  make?: string;
  model?: string;
  serial_no?: string;
  processor?: string;
  os?: string;
  os_version?: string;
  ram?: string;
  hdd_ssd?: string;
  location?: string;
  status?: string;
  remark?: string;
  warranty_status?: string;
  warranty_expiration_date?: string;
}
