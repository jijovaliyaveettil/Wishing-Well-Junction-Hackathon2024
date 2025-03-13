from pydantic import BaseModel
from typing import Optional


class UserModel(BaseModel):
    name: str
    email: str
    password: str
    notes:Optional[str]