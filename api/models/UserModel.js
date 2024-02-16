import mongoose from 'mongoose';
import validator from 'validator';

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, 'Please provide name'],
            minLength: 3,
            maxLength: 50,
            unique: true,
        },
        email: {
            type: String,
            required: [true, 'Please provide email'],
            validate: {
                validator: validator.isEmail,
                message: 'Please provide valid email',
            },
            unique: true,
        },
        password: {
            type: String,
            required: [true, 'Please provide password'],
            min: 6,
        },
        profilePicture: {
            type: String,
            default:
                'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
