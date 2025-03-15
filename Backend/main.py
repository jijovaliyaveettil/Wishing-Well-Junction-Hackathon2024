from fastapi import FastAPI
from routers import user
import database

app = FastAPI()

@app.on_event("startup")
def on_startup():
    database.create_db_and_tables()

app.include_router(user.router)