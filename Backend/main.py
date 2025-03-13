from fastapi import FastAPI
import schemas
from database import create_db_and_tables


app = FastAPI()

@app.on_event("startup")
def on_startup():
    create_db_and_tables()

@app.get('/')
def index():
    return "Hey"

@app.get('/users')
def fetch_users():
    return ""

@app.post('/user')
def create_user(user: schemas.UserModel):
    return {"" :f'Welcome user {user.name}'}