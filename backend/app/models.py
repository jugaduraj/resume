from sqlalchemy import Column, String, Integer, Date, Text
from .database import Base

class Asset(Base):
    __tablename__ = "assets"

    id = Column(Integer, primary_key=True, index=True)
    asset_tag = Column(String, unique=True, nullable=False)
    host_name = Column(String)
    asset_type = Column(String)
    make = Column(String)
    model = Column(String)
    serial_no = Column(String)
    processor = Column(String)
    os = Column(String)
    os_version = Column(String)
    ram = Column(String)
    hdd_ssd = Column(String)
    location = Column(String)
    status = Column(String)
    remark = Column(Text)
    warranty_status = Column(String)
    warranty_expiration_date = Column(Date)
