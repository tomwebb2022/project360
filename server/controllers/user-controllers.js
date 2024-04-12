import { UserModel } from "../models/models.js";
import dotenv from 'dotenv';
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
dotenv.config();


const admin_username = process.env.ADMIN_USERNAME;
const admin_password = process.env.ADMIN_PASSWORD;
const secretKey = process.env.JWT_SECRET;
let adminUser;

export async function loginUser(req, res) {
  try {
    const { username, password } = req.body;
    // console.log(username, password);
    adminUser = await UserModel.findOne({ username: username });
    if (!adminUser) {
      return res.status(401).json({ error: "Invalid username" });
    }
    // Check if the password is valid
    let isPasswordValid = await bcrypt.compare(password, adminUser.password);
    console.log("valid password",isPasswordValid);
    if (isPasswordValid) {
      // Generate a JWT token
      const token = jwt.sign({ username: admin_username }, secretKey, { expiresIn: "1h" }); // 1 hour expiration time for jwt token
      return res.status(200).json({ token, message: "Login successful" });
    } else {
      return res.status(401).json({ error: "Invalid password" });
    }
  } catch (error) {
    res.status(500).json({ error: "An error occurred while logging in" });
  }
}

// delete user not currently working but was working once
export async function deleteUser(req, res) {
  const { username } = req.params; 
  // console.log(username);
  try {
    const userData = await UserModel.findOneAndDelete({ username: username });
    console.log(userData);
    if (!userData) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "An error occurred while deleting the user" });
  }
}


export async function addUserController(req, res) {
  const newUser = req.body;
  
  try {
    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(newUser.password, 10); 
  
    // Replace the plain text password with the hashed password
    newUser.password = hashedPassword;
    
    const userData = await UserModel.create(newUser);
    res.status(201).json({ status: "success", data: userData });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}



export async function getAllUsers(req, res) {
  try {
    const userData = await UserModel.find();
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}


// Authenticate user
export function authenticateUser(req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];

    // Verify the token
    const decodedToken = jwt.verify(token, secretKey);
    //extract the username from the decoded token
    const username = decodedToken.username;

    // Authentication successful, send response with status 200 and authenticated: true
    res.status(200).json({ authenticated: true, username: username});
  } catch (error) {
    console.error("Error authenticating user:", error);

    // Authentication failed, send response with status 401 and authenticated: false
    res.status(401).json({ authenticated: false });
  }
}

// Authorization middleware - not being used now - should check if user is admin or not
export const authoriseUser = (requiredRole) => async (req, res, next) => {
  try {
    const user = await UserModel.findOne(req.body.username);

    if (user.role !== requiredRole) {
      return res.status(403).json({ error: "Forbidden" });
    }

    next();
  } catch (error) {
    console.error("Error authorizing user:", error);
    res
      .status(500)
      .json({ error: "An error occurred while authorizing the user" });
  }
};


