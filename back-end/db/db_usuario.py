from sqlalchemy.orm.session import Session 
from fastapi import HTTPException, status
from db.modelos import DbUsuario
from schemas.usuario import Usuario
from uteis.codificacao import Codificacao
def criar_usuario(db:Session, request:Usuario):
  novo_usuario=DbUsuario(
    nome=request.nome,
    email=request.email,
    cpf=request.senha,
    data_nasc=request.data_nasc,
    senha=Codificacao.codificar(request.senha)
  )
  db.add(novo_usuario)
  db.commit()
  db.refresh(novo_usuario)
  return novo_usuario
  
def get_usuario(db:Session, id_usuario: int):
  return db.query(DbUsuario).filter(DbUsuario.id == id_usuario).first()

def verifica_usuario(db:Session, email:str):
  usuario = db.query(DbUsuario).filter(DbUsuario.email == email).first()

  if not usuario:
    raise HTTPException(status=status.HTTP_404_NOT_FOUND,
                      detail=f'Não existe usuario com este email {email}')

  return usuario


def atualiza_usuario(db:Session, id_usuario:int, dados:Usuario):
  usuario = db.query(DbUsuario).filter(DbUsuario.id == id_usuario).first()

  usuario_novo = vars(dados).items()

  for chave, valor in usuario_novo:
    if str(chave) == 'senha' and valor != '':
      valor = Codificacao.codificar(valor)
    elif str(chave) == 'senha' and valor != '':
      raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                          detail=f'Campo senha não definido')
    setattr(usuario, chave, valor)

  db.add(usuario)
  db.commit()
  db.refresh(usuario)

  return usuario
