import { UserModel } from "../models/models.js";
import dotenv from 'dotenv';
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
dotenv.config();


const admin_username = process.env.ADMIN_USERNAME;
const admin_password = process.env.ADMIN_PASSWORD;
const secretKey = process.env.JWT_SECRET;

export async function loginUser(req, res) {
  try {
    const { username, password } = req.body;

    const adminUser = await UserModel.findOne({ username: username });
    if (!adminUser) {
      return res.status(401).json({ error: "Invalid username" });
    }

    // let isPasswordValid = await bcrypt.compare(password, adminUser.password);
    let isPasswordValid = password === adminUser.password;
    // console.log(adminUser.password, password, isPasswordValid)
   
    // console.log(secretKey, adminUser.username, isPasswordValid)
    if (isPasswordValid) {
      // Generate a JWT token
      const token = jwt.sign({ username: adminUser.username}, secretKey);
      return res.status(200).json({ token });
    } else {
      return res.status(401).json({ error: "Invalid password" });
    }
  } catch (error) {
    res.status(500).json({ error: "An error occurred while logging in" });
  }
}


export async function deleteUser(req, res) {
  const { username } = req.params;
  try {
    const userData = await UserModel.findOneAndDelete({ username: username });
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
    const hashedPassword = await bcrypt.hash(newUser.password, 10); // You can adjust the salt rounds as needed
  
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

// console.log(req)
// export async function loginUser(req, res, admin_password) {
//   try {
//     const { username, password } = req.body;

//     console.log(username, password);

//     const isPasswordValid = await bcrypt.compare(password, admin_password);
//     if (isPasswordValid) {
//       // Generate a JWT token
//       const token = jwt.sign({ username: admin_username }, secretKey);
//       return res.status(200).json({ token });
//     } else {
//       return res.status(401).json({ error: "Invalid password" });
//     }
//   } catch (error) {
//     res.status(500).json({ error: "An error occurred while logging in" });
//     console.log(res.data);
//   }
// }

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
// };

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


