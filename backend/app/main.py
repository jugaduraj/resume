from fastapi import FastAPI, Depends
from . import models, schemas, crud
from .database import engine, Base, get_db
from sqlalchemy.orm import Session

Base.metadata.create_all(bind=engine)

app = FastAPI()

@app.post("/assets/", response_model=schemas.Asset)
def create_asset(asset: schemas.AssetCreate, db: Session = Depends(get_db)):
    return crud.create_asset(db, asset)

@app.get("/assets/", response_model=list[schemas.Asset])
def read_assets(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return crud.get_assets(db, skip, limit)

@app.get("/assets/{asset_id}", response_model=schemas.Asset)
def read_asset(asset_id: int, db: Session = Depends(get_db)):
    return crud.get_asset(db, asset_id)

@app.delete("/assets/{asset_id}")
def delete_asset(asset_id: int, db: Session = Depends(get_db)):
    return crud.delete_asset(db, asset_id)
