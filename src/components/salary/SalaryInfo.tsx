import React, {FunctionComponent} from 'react';
import {Alert} from "react-bootstrap";
import {addSpaceToNumber} from "../../common/utils/addSpaceToNumber";
import {calculateSalary} from "./calculateSalary";
import {salaryTypeList} from "../../types/salary";

interface ISalaryInfo {
    salary: number,
    withoutNDFL: boolean
    salaryType: salaryTypeList
}

const SalaryInfo: FunctionComponent<ISalaryInfo> = ({salary, withoutNDFL, salaryType}) => {
    const {salaryWithTax, grossSalary, calculatedTax} = calculateSalary(salary, salaryType, withoutNDFL)

    return (
            <Alert variant="warning" className='salaryInfo'>
                <div className='vstack gap-1 p-2 text-black'>
                    <div>
                        <span className='fw-semibold'>
                            {addSpaceToNumber(grossSalary())} ₽
                        </span> сотрудник будет получать на руки
                    </div>
                    <div>
                        <span className='fw-semibold'>{addSpaceToNumber(calculatedTax())} ₽</span> НДФЛ, 13% от оклада
                    </div>
                    <div>
                        <span className='fw-semibold'>{addSpaceToNumber(salaryWithTax())} ₽</span> за сотрудника в
                        месяц
                    </div>
                </div>
            </Alert>
    );
};

export default SalaryInfo;
