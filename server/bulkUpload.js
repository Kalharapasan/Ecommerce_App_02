import mongoose from "mongoose";
import "dotenv/config"
import { v2 as cloudinary } from "cloudinary";
import Product from "./models/Product.js";
import path from "path";
import { dirname } from 'path';
import { fileURLToPath } from 'url';