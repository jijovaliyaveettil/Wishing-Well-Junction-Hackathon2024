from fastapi import APIRouter, Depends, HTTPException, Query
from typing import Annotated, List
from sqlmodel import Session, select
import database
import models
import schemas

# Create a router for user-related routes
router = APIRouter()

# Endpoint to create a new user
@router.post('/user', response_model=schemas.UserRead)
def create_user(user: schemas.UserCreate, session: database.SessionDep) -> schemas.UserRead:
    # Convert the Pydantic model to a SQLModel instance
    db_user = models.User.model_validate(user)
    # Add the user to the session and commit the transaction
    session.add(db_user)
    session.commit()
    # Refresh the user instance with the new data from the database
    session.refresh(db_user)
    return db_user

# Endpoint to fetch a list of users with pagination
@router.get("/users/", response_model=List[schemas.UserRead])
def fetch_users(
    session: database.SessionDep,
    offset: int = 0,
    limit: Annotated[int, Query(le=100)] = 100,
) -> List[schemas.UserRead]:
    # Query the database for users with the specified offset and limit
    users = session.exec(select(models.User).offset(offset).limit(limit)).all()
    return users

# Endpoint to fetch a single user by ID
@router.get("/users/{user_id}", response_model=schemas.UserRead)
def fetch_user(user_id: int, session: database.SessionDep) -> schemas.UserRead:
    # Get the user from the database by ID
    user = session.get(models.User, user_id)
    # Raise an HTTP 404 error if the user is not found
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user