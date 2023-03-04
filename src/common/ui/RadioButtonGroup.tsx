import React, {FunctionComponent} from 'react';
import {Form} from "react-bootstrap";
import {Field} from "redux-form";
import SalaryTypePopover from "../../components/salary/SalaryTypePopover";
import {salaryTypeOption} from "../../types/salary";


interface IRadioButtonGroup {
    options: salaryTypeOption[],
    groupName: string,
    groupLabel: string,
    defaultCheckedValue: string
}

const RadioButtonGroup: FunctionComponent<IRadioButtonGroup> = ({
                                                                    options,
                                                                    groupName,
                                                                    groupLabel,
                                                                    defaultCheckedValue
                                                                }) => {

    return (
            <>
                <Form.Label className={'text-secondary small'}>{groupLabel}</Form.Label>
                <div className={'p-2 pt-0 vstack gap-1 radio-button-wrapper'}>
                    {options.map((option) => (
                            <div className='hstack'>
                                <Field
                                        name={groupName}
                                        component="input"
                                        type="radio"
                                        value={option.value}
                                        defaultChecked={option.value === defaultCheckedValue}
                                />
                                <label className={'ms-2 fw-semibold hstack'}>
                                    <span className='me-2'>{option.label}</span>
                                    {option.additionalInfo &&
                                            <SalaryTypePopover salaryTypeInfo={option.additionalInfo}/>
                                    }
                                </label>
                            </div>
                    ))}
                </div>
            </>

    );
};

export default RadioButtonGroup;
