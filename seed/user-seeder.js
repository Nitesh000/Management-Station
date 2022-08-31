var User= require('../models/user');
var bcrypt=require('bcrypt-nodejs');
var mongoose= require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('localhost:27017/HRMS');

var users=[

    new User({
        type: 'project_manager',
        email: 'pm@pm.com',
        password: bcrypt.hashSync('pm1234', bcrypt.genSaltSync(5), null),
        name: 'Project manager',
        dateOfBirth: new Date('1990-05-26'),
        contactNumber: '08766547367',
    }),
    new User({

        type: 'accounts_manager',
        email: 'am@am.com',
        password: bcrypt.hashSync('am1234', bcrypt.genSaltSync(5), null),
        name: 'Accounts Manager',
        dateOfBirth: new Date('1990-05-26'),
        contactNumber: '09774687656',
    }),
    new User({
        type: 'employee',
        email: 'jimi@gmail.com',
        password: bcrypt.hashSync('jimi123', bcrypt.genSaltSync(5), null),
        name: 'Jimi Jhonsan Bhuyan',
        dateOfBirth: new Date('1990-05-26'),
        contactNumber: '09784685767',
    }),
    new User({
        type: 'employee',
        email: 'bablu@gmail.com',
        password: bcrypt.hashSync('bablu123', bcrypt.genSaltSync(5), null),
        name: 'Biswa Pranjya Behura',
        dateOfBirth: new Date('1990-05-26'),
        contactNumber: '09784638577',
    }),
    new User({

        type: 'admin',
        email: 'admin@admin.com',
        password: bcrypt.hashSync('admin123', bcrypt.genSaltSync(5), null),
        name: 'admin',
        dateOfBirth: new Date('1990-05-26'),
        contactNumber: '09784838576',
    }),
    new User({
        type: 'employee',
        email: 'nitesh@gmail.com',
        password: bcrypt.hashSync('nitesh123', bcrypt.genSaltSync(5), null),
        name: 'Nitesh Kumar Tudu',
        dateOfBirth: new Date('2001-05-14'),
        contactNumber: '08249736413',
    }),
    new User({
        type: 'employee',
        email: 'kanhu@gmail.com',
        password: bcrypt.hashSync('kanhu123', bcrypt.genSaltSync(5), null),
        name: 'Kanhucharan Madkami',
        dateOfBirth: new Date('1998-03-26'),
        contactNumber: '09784664552',
    }),
    new User({
        type: 'employee',
        email: 'laxmi@gmail.com',
        password: bcrypt.hashSync('laxmi123', bcrypt.genSaltSync(5), null),
        name: 'Laxmi Priya Das',
        dateOfBirth: new Date('1999-10-03'),
        contactNumber: '09436385757',
    }),
    new User({
        type: 'employee',
        email: 'premika@gmail.com',
        password: bcrypt.hashSync('premika123', bcrypt.genSaltSync(5), null),
        name: 'Premika Anugulia',
        dateOfBirth: new Date('1995-01-23'),
        contactNumber: '09784765757',
    }),
    new User({
        type: 'employee',
        email: 'rajashree@gmail.com',
        password: bcrypt.hashSync('rajashree123', bcrypt.genSaltSync(5), null),
        name: 'Rajashree Behera',
        dateOfBirth: new Date('1996-08-06'),
        contactNumber: '09784638577',
    }),
    new User({
        type: 'employee',
        email: 'sidharth@gmail.com',
        password: bcrypt.hashSync('sidharth123', bcrypt.genSaltSync(5), null),
        name: 'Sidharth Sarkar',
        dateOfBirth: new Date('1998-11-04'),
        contactNumber: '09784638645',
    }),
    new User({
        type: 'employee',
        email: 'chandra@gmail.com',
        password: bcrypt.hashSync('chandra123', bcrypt.genSaltSync(5), null),
        name: 'Chandra Kanta Majhi',
        dateOfBirth: new Date('1994-07-21'),
        contactNumber: '09776685757',
    })
];
//save function is asynchronous
//so we need to ceck all itmes are saved before we disconnect to db
done=0;
for (i=0;i<users.length;i++){
    users[i].save(function(err,result){
        done++;
        if(done==users.length){
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}