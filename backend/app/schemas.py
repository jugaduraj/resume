from pydantic import BaseModel
from typing import Optional
from datetime import date

class AssetCreate(BaseModel):
    asset_tag: str
    host_name: Optional[str]
    asset_type: Optional[str]
    make: Optional[str]
    model: Optional[str]
    serial_no: Optional[str]
    processor: Optional[str]
    os: Optional[str]
    os_version: Optional[str]
    ram: Optional[str]
    hdd_ssd: Optional[str]
    location: Optional[str]
    status: Optional[str]
    remark: Optional[str]
    warranty_status: Optional[str]
    warranty_expiration_date: Optional[date]

class Asset(AssetCreate):
    id: int
    class Config:
        orm_mode = True
