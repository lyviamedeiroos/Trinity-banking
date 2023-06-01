from pydantic import BaseModel

class Usuario(BaseModel):
  nome:str
  email:str
  senha:str
  cpf:str
  cidade:str
  estado:str
  data_nasc:str

class UsuarioExibe(BaseModel):
  nome:str
  email:str
  cpf:str
  cidade:str
  estado:str
  data_nasc:str
  class Config():
    orm_mode=True

class UsuarioLogado(BaseModel):
  id:int
  nome:str





