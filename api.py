from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware #Import the CORS middleware

import requests

app = FastAPI()

# Add the CORS middleware to your application
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows requests from your HTML file
    allow_credentials=True,
    allow_methods=["*"],  # Allows all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],  # Allows all headers
)

@app.get("/")
def read_root():
    return {"message": "hello world"}

@app.get("/simple/{amount}/{rate}/{time}")
def calc(amount: float, rate:float, time: float):
    return amount*(rate/100)*time

@app.get("/compound/{amount}/{rate}/{time}")
def calc(amount: float, rate:float, time: float):
    return amount*(Math.pow((1+(rate/100)),time))- amount


