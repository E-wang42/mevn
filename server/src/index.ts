import express from "express";
import cors from "cors";
import http from "http";

const app = express();

app.use(cors({
credentials: true,
}))