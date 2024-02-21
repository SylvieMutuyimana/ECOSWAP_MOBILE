import dbConnect from "../../../utils/dbConnect";
import User from "../../../models/users";
import bcrypt from "bcryptjs";

dbConnect();

export default async function Signup(req, res) {
    if (req.method === "POST") {
        try {
            if (req.body['email']) {
                const existingEmail = await User.findOne({ email: req.body['email'] }) ;
                const existingPhoneNumber = await User.findOne({ email: req.body['phoneNumb'] }) ;
                if (existingEmail) {
                    return res.status(200).json({ message: 'User with email exists' });
                }if (existingPhoneNumber) {
                    return res.status(200).json({ message: 'User with phone number exists' });
                } else {
                    if (!req.body['password']) {
                        return res.status(500).json({
                            message: "Password is missing"
                        });
                    } else if (!req.body['type']) {
                        return res.status(500).json({
                            message: "Type is missing"
                        });
                    } else {
                        const newUserData = {
                            email: '', password: '',
                            type: '', doneOn: new Date()
                        };
                        newUserData['email'] = req.body['email'];
                        newUserData['type'] = req.body['type'];
                        newUserData['phoneNumb'] = req.body['phoneNumb'];
                        newUserData['firstName'] = req.body['firstName'];
                        newUserData['lastName'] = req.body['lastName'];
                        newUserData['doneOn'] = new Date();
                        if(req.body['type'] === 'buyer'){
                            newUserData['cart'] = req.body['cart']||[];
                            newUserData['wishlist'] = req.body['wishlist']||[];
                        }
                        const hashedPassword = await bcrypt.hash(req.body['password'], 10);
                        if (hashedPassword) {
                            newUserData['password'] = hashedPassword;
                            const newUser = new User(newUserData);
                            await newUser.save();
                            console.log('new: ', newUserData);
                            return res.status(201).json({
                                message: `${newUserData.type} created successfully for ${newUser}`,
                                newUser: newUser
                            });
                        } else {
                            return res.status(500).json({
                                message: "Error hashing the password"
                            });
                        }
                    }
                }
            }
        } catch (error) {
            return res.status(500).json({
                message: 'Error signing up the user',
                error: error.message
            });
        }
    } else {
        return res.status(405).json({ message: "Method not allowed" });
    }
}
