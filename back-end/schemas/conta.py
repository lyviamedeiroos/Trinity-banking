from pydantic import BaseModel


class Conta(BaseModel):
    saldo: str
    id_usuario: int


class ContaExibe(BaseModel):
    saldo: str
    id: int

    class Config():
        orm_mode = True


#class Config():
#orm_mode = True
