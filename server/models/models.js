import mongoose, { model } from 'mongoose';

const { Schema } = mongoose;

const emailSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 8,
        validate: {
            validator: async function(value) {
                // Check if the email address is already in use
                const existingEmail = await this.constructor.findOne({ email: value });
                return !existingEmail; // Return false if the email already exists
            },
            message: "Email address must be unique" // Custom error message
        }
    }
});

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        minlength: 2,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    role: {
        type: String,
        enum: ['user', 'admin'], // two different roles either user or admin
        default: 'admin', //default is set to admin
    },
});

// Method to compare passwords --- Bcrypt has not been installed yet --- so function will not work
// userSchema.methods.comparePassword = async function(adminPassword) {
//     return bcrypt.compare(adminPassword, this.password);
//   };

userSchema.methods.comparePassword = () => {
    return true
}

export const EmailModel = model('emails', emailSchema);
export const UserModel = model('users', userSchema);

