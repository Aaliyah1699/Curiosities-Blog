import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import User from '../models/UserModel.js';

// Test function: sends a test message to confirm API is working
// Time complexity: O(1)
// Space complexity: O(1)
export const test = (req, res) => {
    res.json({ message: 'API is working!' });
};

// Update User function: updates a user's profile information
// Time complexity: O(1)
// Space complexity: O(1)
export const updateUser = async (req, res, next) => {
    if (req.user.id !== req.params.userId) {
        return next(
            errorHandler(403, 'You are not allowed to update this user')
        );
    }
    if (req.body.password) {
        if (req.body.password.length < 6) {
            return next(
                errorHandler(400, 'Password must be at least 6 characters')
            );
        }
        req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }
    if (req.body.username) {
        if (req.body.username.length < 7 || req.body.username.length > 20) {
            return next(
                errorHandler(
                    400,
                    'Username must be between 7 and 20 characters'
                )
            );
        }
        if (req.body.username.includes(' ')) {
            return next(errorHandler(400, 'Username cannot contain spaces'));
        }
        if (req.body.username !== req.body.username.toLowerCase()) {
            return next(errorHandler(400, 'Username must be lowercase'));
        }
        if (!req.body.username.match(/^[a-zA-Z0-9]+$/)) {
            return next(
                errorHandler(
                    400,
                    'Username can only contain letters and numbers'
                )
            );
        }
    }
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.userId,
            {
                $set: {
                    username: req.body.username,
                    email: req.body.email,
                    profilePicture: req.body.profilePicture,
                    password: req.body.password,
                },
            },
            { new: true }
        );
        const { password, ...rest } = updatedUser._doc;
        res.status(200).json(rest);
    } catch (error) {
        next(error);
    }
};

// Delete User function: deletes a user by ID
// Time complexity: O(1)
// Space complexity: O(1)
export const deleteUser = async (req, res, next) => {
    if (!req.user.isAdmin && req.user.id !== req.params.userId) {
        return next(
            errorHandler(403, 'You are not allowed to delete this user')
        );
    }
    try {
        await User.findByIdAndDelete(req.params.userId);
        res.status(200).json('User has been deleted');
    } catch (error) {
        next(error);
    }
};

// Sign Out function: logs the user out by clearing the access token cookie
// Time complexity: O(1)
// Space complexity: O(1)
export const signOut = (req, res, next) => {
    try {
        res.clearCookie('access_token')
            .status(200)
            .json('User has been signed out');
    } catch (error) {
        next(error);
    }
};

// Get Users function (requires admin privileges): retrieves all users with pagination, sorting, and counting
// Time complexity:
//   - O(log n) - Likely case (relevant indexes)
//   - O(n) - Worst case (no indexes)
// Space complexity: O(n)
export const getUsers = async (req, res, next) => {
    if (!req.user.isAdmin) {
        return next(errorHandler(403, 'You are not allowed to see all users'));
    }
    try {
        const startIndex = parseInt(req.query.startIndex) || 0;
        const limit = parseInt(req.query.limit) || 9;
        const sortDirection = req.query.sort === 'asc' ? 1 : -1;

        const users = await User.find()
            .sort({ createdAt: sortDirection })
            .skip(startIndex)
            .limit(limit);

        const usersWithoutPassword = users.map((user) => {
            const { password, ...rest } = user._doc;
            return rest;
        });

        const totalUsers = await User.countDocuments();

        const now = new Date();

        const oneMonthAgo = new Date(
            now.getFullYear(),
            now.getMonth() - 1,
            now.getDate()
        );
        const lastMonthUsers = await User.countDocuments({
            createdAt: { $gte: oneMonthAgo },
        });

        res.status(200).json({
            users: usersWithoutPassword,
            totalUsers,
            lastMonthUsers,
        });
    } catch (error) {
        next(error);
    }
};

// Get User function: retrieves a user by ID
// Time complexity: O(1)
// Space complexity: O(1)
export const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.userId);
        if (!user) {
            return next(errorHandler(404, 'User not found'));
        }
        const { password, ...rest } = user._doc;
        res.status(200).json(rest);
    } catch (error) {
        next(error);
    }
};
