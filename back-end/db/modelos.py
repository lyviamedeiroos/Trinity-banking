from sqlalchemy import Column,ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from .database import Base 

class DbUsuario(Base):
  __tablename__='usuario'
  id=Column(Integer, primary_key=True, index=True)
  nome=Column(String)
  email=Column(String)
  senha=Column(String)
  cpf=Column(String)
  cidade=Column(String)
  estado=Column(String)
  data_nasc=Column(String)

  contas = relationship('DbConta', back_populates='usuario')
class DbConta(Base):
  __tablename__='conta'
  id=Column(Integer, primary_key=True, index=True)
  saldo=Column(String)
  id_usuario = Column(Integer, ForeignKey('usuario.id'))
  usuario = relationship('DbUsuario', back_populates='contas')
  
  