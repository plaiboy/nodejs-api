const Employee = require('../models/Employee');

const index = (req, res, next) =>{
    Employee.Find()
    .then(response =>{
        res.jsson({
            response
        })
    })
    .catch(error =>{
        res.json({
            message: 'An error Occured!'
        })
    })
}


const show = (req, res, next) =>{
    let employeeID = req.body.employeeID
    Employee.findById(employeeID)
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error =>{
        res.json({
            message:'An error occured!'
        })
    })
}


const store = (req, res, next) =>{
    let employee = new Employee({
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        age: req.body.age,
    })
    employee.save()
    .then(response =>{
        res.json({
            message: 'EmployeeAdde Successfully'
        })
    })
    .catch(error =>{
        res.json({
            message: 'An error occured!'
        })
    })
}

// update an employee
const update = (req, res, next) =>{
    let employeeID = req.body.employeeID

    let updateData = {
        name: req.body.name,
        designation: req.body.designation,
        email: req .body.email,
        phone: req.body.phone,
        age: req.body.age,
    }
    Employee.findByIdAndUpdate(employeeID, {$set: updateData})
    .then(() => {
        res.json({
            message: 'Employee updated Successfully!'
        })
    })
    .catch(error => {
        res.json({
            messsage: 'An error occurred!'
        })
    })
}


// delte employyee
const destroy = (req, res, next) =>{
    let employeeID = req.body.employeeID
    Employee.findByIdAndRemove(employeeID)
    .then(() => {
        res.json({
            mesasage: 'Employee deleted successfully!'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured!'
        })
    })
}


module.export = {
    index, show,  store, update, destroy
}