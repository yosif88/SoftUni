class Company {
    constructor() {
        this.departments = {};

    }
    addEmployee(name, salary, position, department) {
        if (!name || !position || !department || !salary || salary < 0) {
            throw new Error('Invalid input!')
        } else {
            if (!this.departments.hasOwnProperty(department)) {
                this.departments[department] = []
            }
            this.departments[department].push({ name, salary, position });
            return `New employee is hired. Name: ${name}. Position: ${position}`
        }


    }

    bestDepartment() {
        let avgSalary = {};

        Object.keys(this.departments).forEach(key => {
            let avgSum = this.departments[key].
                reduce((a, b) => a + b.salary, 0) / this.departments[key].length;
            avgSalary[key] = avgSum;
        })

        let sorted = Object.entries(avgSalary).sort((a, b) => b[1] - a[1]);
        let result = `Best Department is: ${sorted[0][0]}\nAverage salary: ${(sorted[0][1]).toFixed(2)}`;

        this.departments[sorted[0][0]].
            sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name)).
            forEach(el => {
                result += `\n${el.name} ${el.salary} ${el.position}`
            })
        return result.trim();
    }
}


let c = new Company();

c.addEmployee("Stanimir", 2000, "engineer", "Construction");

c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");

c.addEmployee("Slavi", 500, "dyer", "Construction");

c.addEmployee("Stan", 2000, "architect", "Construction");

c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");

c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");

c.addEmployee("Gosho", 1350, "HR", "Human resources");

console.log(c.bestDepartment()); 