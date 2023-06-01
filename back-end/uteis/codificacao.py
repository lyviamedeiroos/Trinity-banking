from passlib.context import CryptContext

contexto = CryptContext(schemes=['bcrypt'])


class Codificacao():

  def codificar(senha:str):
    return contexto.hash(senha)
  def verificar(senha_codificada, senha_recebida):
    return contexto.verify(senha_recebida, senha_codificada)