export function employeeInfoToString(employee) {
    let full_name = generateFullName(employee.first_name, employee.middle_name, employee.last_name);

    return `${full_name}
     Department: ${employee.department} | Salary:${employee.salary}`;
}

function generateFullName(first_name, middle_name, last_name) {
    return `${first_name}${middle_name != null ? " " + middle_name + " " : " " }${last_name}`
}