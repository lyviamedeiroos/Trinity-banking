from fastapi import APIRouter, Depends
from sqlalchemy.orm.session import Session

from db import db_conta
from db.database import get_db
from autenticacao.oAuth2 import pega_usuario_atual
from schemas.usuario import UsuarioLogado
from schemas.conta import Conta, ContaExibe

router = APIRouter(prefix='/conta', tags=['conta'])


#@router post ''
@router.post('/', response_model=ContaExibe)
def cria_conta(request: Conta,
               db: Session = Depends(get_db),
               usuario_atual: UsuarioLogado = Depends(pega_usuario_atual)):
    return db_conta.criar_conta(db, request, usuario_atual.id)

