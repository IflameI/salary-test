export enum SalaryType {
    MIN_WAGE = 'minimumWage',
    MONTH_PAY = 'paymentMonth',
    DAY_PAY = 'paymentDay',
    HOUR_PAY = 'paymentHour'
}

export type salaryTypeList = SalaryType.MIN_WAGE | SalaryType.HOUR_PAY | SalaryType.MONTH_PAY | SalaryType.DAY_PAY

export type salaryTypeOption = {
    label: string;
    value: salaryTypeList;
    additionalInfo?: string
}


export type salaryFormState = {
    salaryValue: number;
    withoutNDFL: boolean;
    salaryType: salaryTypeList
}
