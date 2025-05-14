from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow frontend requests from Vercel
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Welcome to Commodify API"}

@app.get("/api/verify")
def verify_company(name: str, country: str):
    # Placeholder response
    return {
        "company": name,
        "country": country,
        "status": "Verified",
        "whois": {
            "registrar": "Example Registrar",
            "creation_date": "2012-05-01"
        },
        "scam_alert": "No known scam alerts"
    }
