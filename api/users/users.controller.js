const userService = require('../services/user.service');
const mailService = require("../services/mail.service");
const paymentService = require("../services/payment.service");

exports.login = (req, res, next) => {
    userService.authenticate(req.body)
        .then(user => user ? res.json(user) : res.status(401).json({ message: 'Email or password is incorrect' }))
        .catch(err => next(err));
};

exports.create = (req, res, next) => {
    userService.create(req.body)
        .then(user => {
            if(user) {
              if (user.userType === 'client') {
                let newClientProf = {
                    userId: user._id,
                    subscription: [],
                    paidKits: [],
                    createdAt: new Date(),
                    updatedAt: new Date()
                };
                userService.createClientProfile(newClientProf);
              }
              res.json(user)
            } else {
              res.status(409).json({ message: 'User already Exists' })
            }
        })
        .catch(err => next(err));
};

exports.getAll = (req, res, next) => {
    userService.getAll()
        .then(users => { res.json(users); })
        .catch(err => next(err));
};

exports.getOne = (req, res, next) => {
    userService.getOne(req.params.id)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
};

exports.update = (req, res, next) => {
    userService.update(req.params.id, req.body)
        .then((user)=> res.json(user))
        .catch(err => next(err));
};

exports.delete = (req, res, next) => {
    userService.delete(req.params.id)
        .then(()=> res.json({}))
        .catch(err => next(err));
};
exports.deleteAll = (req, res, next) => {
    userService.deleteAll()
        .then(()=> res.json({}))
        .catch(err => next(err));
};

exports.sendCode = (req, res, next) => {
  mailService.sendCode(req.body)
      .then(e =>res.json({}))
      .catch(err => {res.sendStatus(401); console.log(err)});
  };

exports.mobilePayment = (req, res, next) =>{
    paymentService.mobilePay(req.body)
    .then((response)=> response.code === 200 ? res.status(200).json(response) : res.status(500).json("There was a problem posting payment"))
    .catch(err=> next(err))
}

exports.confirmMobilePayment = (req, res, next) => {
    paymentService.mobilePaymentConfirm(req.body.transactionId)
    .then((response)=> response.code === 200 ? res.status(200).json(response) : res.status(500).json("There was a problem confirming payment"))
    .catch(err=> next(err))
}
