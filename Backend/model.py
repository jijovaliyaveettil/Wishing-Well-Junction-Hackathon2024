from sqlalchemy import Column,Integer,String
from database import base
import database




base.metadata.create_all(engine)