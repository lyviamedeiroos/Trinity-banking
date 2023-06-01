import uvicorn  
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware 
from starlette.responses import RedirectResponse

from db import modelos
from db.database import engine
from rotas import usuario
from autenticacao import login
from rotas import conta
#intialize web app / pi
app = FastAPI()
app.include_router(usuario.router)
app.include_router(login.router)
app.include_router(conta.router)
# Allows cors for everyone **Ignore**
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
    allow_credentials=True,
)

modelos.Base.metadata.create_all(engine)


# Redirects base url to docs goto /redoc for fancy documentation
@app.get("/")
def main():
    return RedirectResponse(url="/docs")


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)  #chamada do uvicorn
