from sqlmodel import SQLModel, Session, create_engine
from contextlib import contextmanager
from fastapi import Depends
from typing import Annotated

# Database URL for SQLite
DATABASE_URL = "sqlite:///./test.db"

# Create a database engine
engine = create_engine(DATABASE_URL, echo=True)

# Function to create database and tables if they don't exist
def create_db_and_tables():
    SQLModel.metadata.create_all(engine)

# Context manager to get a database session
@contextmanager
def get_session():
    with Session(engine) as session:
        yield session

# Dependency to get a database session
SessionDep = Annotated[Session, Depends(get_session)]