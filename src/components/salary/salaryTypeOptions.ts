import {SalaryType, salaryTypeOption} from "../../types/salary";

export const salaryTypeOptionsList: salaryTypeOption[] = [
    {label: 'Оклад за месяц', value: SalaryType.MONTH_PAY},
    {
        label: 'МРОТ',
        value: SalaryType.MIN_WAGE,
        additionalInfo: 'МРОТ-минимальный размер оплаты труда. Разный для разных регионов'
    },
    {label: 'Оплата за день', value: SalaryType.DAY_PAY},
    {label: 'Оплата за час', value: SalaryType.HOUR_PAY}
]
