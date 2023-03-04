import {SalaryType, salaryTypeList} from "../../types/salary";

export const calculateSalary = (salary: number, salaryType: salaryTypeList, withoutNDFL: boolean) => {

    const netSalary = () => {
        const avgDayInMonth = 29
        const avgWorkHours = 168
        
        if (salaryType === SalaryType.DAY_PAY) {
            return salary * avgDayInMonth
        } else if (salaryType === SalaryType.HOUR_PAY) {
            return salary * avgWorkHours
        } else {
            return salary
        }
    }

    const grossSalary = () => {
        return withoutNDFL ? netSalary() : netSalary() - calculatedTax()
    }

    const calculatedTax = () => {
        const taxPercent = 13
        return Math.round(netSalary() / 100 * taxPercent)
    }


    const salaryWithTax = () => {
        return Number(grossSalary()) + Number(calculatedTax())
    }


    return {calculatedTax, grossSalary, salaryWithTax}
}
