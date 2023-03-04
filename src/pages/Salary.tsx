import React, {FunctionComponent} from 'react';
import SalaryForm from "../components/salary/SalaryForm";
import SalaryInfo from "../components/salary/SalaryInfo";
import {useSelector} from "react-redux";
import {salaryFormState, SalaryType} from "../types/salary";
import {getFormValues} from "redux-form";


const Salary: FunctionComponent = () => {
    const formValues: any = useSelector((state: salaryFormState) => getFormValues('salaryForm')(state))

    const isSalaryInfoDisplay = formValues?.salaryValue && formValues?.salaryType !== SalaryType.MIN_WAGE

    return (
            <div className='pt-5 px-4'>
                <SalaryForm/>
                {isSalaryInfoDisplay && (
                        <div className='pt-4'>
                            <SalaryInfo
                                    salary={formValues.salaryValue}
                                    withoutNDFL={formValues.withoutNDFL}
                                    salaryType={formValues.salaryType}
                            />
                        </div>
                )}
            </div>
    );
};

export default Salary;
