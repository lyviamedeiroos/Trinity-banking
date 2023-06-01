from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

SQLALCHEMY_URL= 'sqlite:///./trinity_bank.sqlite'

engine=create_engine(SQLALCHEMY_URL,connect_args={'check_same_thread':False})

Sessao=sessionmaker(bind=engine, autoflush=False, autocommit=False)

Base=declarative_base()

def get_db():
  db=Sessao()
  try:
    yield db
  finally:
    db.close()
