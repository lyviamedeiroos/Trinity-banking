from fastapi import APIRouter, Depends
from sqlalchemy.orm.session import Session 

from db import db_usuario
from db.database import get_db
from autenticacao.oAuth2 import pega_usuario_atual
from schemas.usuario import Usuario, UsuarioExibe,UsuarioLogado

router = APIRouter(prefix='/usuario', tags=['usuario'])

@router.post('/',response_model=UsuarioExibe)
def cria_usuario(request:Usuario, db:Session=Depends(get_db)):
  return db_usuario.criar_usuario(db,request)

@router.get('/get_usuario/{id_usuario}', response_model=UsuarioExibe)
def get_usuario(usuario_atual:UsuarioLogado=Depends(pega_usuario_atual), db:Session=Depends(get_db)):
  return db_usuario.get_usuario(db,usuario_atual.id)

@router.put('/atualiza', response_model=UsuarioExibe)
def atualiza(request:Usuario, usuario_atual:UsuarioLogado = Depends(pega_usuario_atual), db:Session=Depends(get_db)):
  return db_usuario.atualiza_usuario(db,usuario_atual.id, request)