from fastapi import APIRouter, Depends, HTTPException, Query
from typing import Annotated, List
from sqlmodel import Session, select
import database
import models
import schemas

router = APIRouter()

@router.post('/user', response_model=schemas.UserRead)
def create_user(user: schemas.UserCreate, session: database.SessionDep) -> schemas.UserRead:
    db_user = models.User.from_orm(user)
    session.add(db_user)
    session.commit()
    session.refresh(db_user)
    return db_user

@router.get("/users/", response_model=List[schemas.UserRead])
def fetch_users(
    session: database.SessionDep,
    offset: int = 0,
    limit: Annotated[int, Query(le=100)] = 100,
) -> List[schemas.UserRead]:
    users = session.exec(select(models.User).offset(offset).limit(limit)).all()
    return users

@router.get("/users/{user_id}", response_model=schemas.UserRead)
def fetch_user(user_id: int, session: database.SessionDep) -> schemas.UserRead:
    user = session.get(models.User, user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user