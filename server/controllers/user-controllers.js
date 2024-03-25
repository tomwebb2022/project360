import { UserModel } from "../models/models.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const admin_username = process.env.ADMIN_USERNAME;
const admin_password = process.env.ADMIN_PASSWORD;
const secretKey = process.env.JWT_SECRET;

export async function addUserController(req, res) {
  const newUser = req.body;
  try {
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

export async function loginUser(req, res) {
  try {
    const { username, password } = req.body;

    console.log(username, password);

    const isPasswordValid = await bcrypt.compare(password, admin_password);
    if (isPasswordValid) {
      // Generate a JWT token
      const token = jwt.sign({ username: admin_username }, secretKey);
      return res.status(200).json({ token });
    } else {
      return res.status(401).json({ error: "Invalid pasword" });
    }
  }
  catch (error) {
    res.status(500).json({ error: "An error occurred while logging in" });
  }

//     if (username === admin_username) {
//       const isPasswordValid = await bcrypt.compare(password, admin_password);
//       if (isPasswordValid) {
//         // Generate a JWT token
//         const token = jwt.sign({ username: admin_username }, secretKey);
//         return res.status(200).json({ token });
//       } else {
//         return res.status(401).json({ error: "Invalid password" });
//       }
//     } else {
//       return res.status(401).json({ error: "Invalid username" });
//     }
//   } catch (error) {
//     res.status(500).json({ error: "An error occurred while logging in" });
//   }
};

// Authentication middleware
export function authenticateUser(req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];

    // Verify the token
    const decodedToken = jwt.verify(token, secretKey);

    // Attach the username to the request object
    req.username = decodedToken.username;

    next();
  } catch (error) {
    console.error("Error authenticating user:", error);
    res.status(401).json({ error: "Unauthorized" });
  }
}

// Authorization middleware
export const authoriseUser = (requiredRole) => async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.userId);

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


export function dashboardLogic(req, res, next) {
    console.log("dashboard logic");
    next();
}