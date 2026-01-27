"""
=============================================================================
BACKEND SERVER - Portafolio de Jose Fernando
=============================================================================

Servidor backend simple. El envío de correos se maneja desde el frontend
con EmailJS, por lo que este backend solo sirve como verificación de salud.

=============================================================================
"""

from fastapi import FastAPI, APIRouter
from starlette.middleware.cors import CORSMiddleware
import logging

# =============================================================================
# INICIALIZACIÓN DE FASTAPI
# =============================================================================
app = FastAPI(
    title="Portfolio Backend",
    description="Backend API para el portafolio de Jose Fernando"
)
api_router = APIRouter(prefix="/api")

# =============================================================================
# ENDPOINTS
# =============================================================================

@api_router.get("/")
async def root():
    """Endpoint de verificación - confirma que el servidor está funcionando"""
    return {"message": "Portfolio API funcionando correctamente"}

@api_router.get("/health")
async def health_check():
    """Endpoint de salud para verificaciones de Render/hosting"""
    return {"status": "healthy"}

# Incluir el router en la app principal
app.include_router(api_router)

# Configuración de CORS para permitir requests del frontend
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configuración de logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
