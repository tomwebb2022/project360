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


function formatDate(value) {
    // Convert the date to the desired format
    const dateObj = new Date(value);
    const year = dateObj.getFullYear().toString().slice(-2);
    const month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
    const day = ('0' + dateObj.getDate()).slice(-2);
    return `${day}-${month}-${year}`;
}

const gallerySchema = new Schema({
    videoName: {
        type: String,
        required: true,
        default: 'Untitled',
    },
    date: {
        type: String,  //changed type to string instead of date
        required: true,
        default: formatDate,
    },
    videoUrl: {
        type: String,
        required: true,
    },
    downloadUrl: {
        type: String,
        required: true,
        default: function() {
            return this.videoUrl; // Set downloadUrl default value equal to videoUrl
        }
    },
    author: {
        type: String,
        default: "James"
    }
});



export const EmailModel = model('emails', emailSchema);
export const UserModel = model('users', userSchema);
export const GalleryModel = model('gallery', gallerySchema);

