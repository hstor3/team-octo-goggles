const router = require('express').Router();
const Employee = require('../../models/Employee');

router.put('/:id', async (req, res) => {
    const updatedEmployee = await Employee.update(
        {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            role_id: req.body.role_id,
            manager_id: req.body.manager_id,
        },
        {
            where: {
                id: req.params.id,
            },
        }
    );
    res.json(updatedEmployee);
})