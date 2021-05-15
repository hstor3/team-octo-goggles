const Department = require('./Department');
const Employee = require('./Employee');
const Role = require('./Role');

Role.belongsTo(Employee, {
    through: {
        model: Role,
        unique: false
    },
});

Department.belongsTo(Role, {
    through: {
        model: Department,
        unique: false
    },
});

Employee.belongsTo(Role, {
    through: {
        model: Employee,
        unique: false
    },
});

module.exports = { Department, Employee, Role };