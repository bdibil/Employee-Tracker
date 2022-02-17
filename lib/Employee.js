// Define and export the Employee class

class Employee {
    constructor(id, first_name, last_name, role_id, role_title, salary, manager_id, manager_name) {
        this.id = id
        this.first_name =first_name
        this.last_name = last_name
        this.role_id = role_id
        this.role_title = role_title
        this.salary = salary
        this.manager_id = manager_id
        this.manager_name = manager_name
    }

    getName(){
        return this.name
    }

    getId(){
        return this.id
    }

    getEmail(){
        return this.email
    }

    getRole(){
        const e = "Employee"
        return e
    }
}

module.exports = Employee