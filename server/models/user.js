var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

mongoose.model('user', UserSchema);
// Validations
UserSchema.path('name').required(true, 'Name cannot be blank');
UserSchema.path('email').required(true, 'Email cannot be blank');
UserSchema.path('password').required(true, 'Password cannot be blank');