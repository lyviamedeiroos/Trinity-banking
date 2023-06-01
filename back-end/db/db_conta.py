from sqlalchemy.orm.session import Session
from db.modelos import DbConta
from schemas.conta import Conta

#id_usuario=id_usuario
def criar_conta(db: Session, request: Conta, id_usuario: int):
    nova_conta = DbConta(saldo=request.saldo, id_usuario=id_usuario)
    db.add(nova_conta)
    db.commit()
    db.refresh(nova_conta)

    return nova_conta
