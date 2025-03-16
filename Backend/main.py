from fastapi import FastAPI
from routers import user
import database

# Create an instance of the FastAPI application
app = FastAPI()

# Event handler to run on application startup
@app.on_event("startup")
def on_startup():
    # Create database and tables if they don't exist
    database.create_db_and_tables()

# Include the user router to handle user-related routes
app.include_router(user.router)