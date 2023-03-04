import React from 'react';
import {Field, getFormValues, reduxForm} from "redux-form";
import {WrappedFieldProps} from "redux-form/lib/Field";
import ToggleButton from "../../common/ui/ToggleButton";
import {Form} from "react-bootstrap";
import {useSelector} from "react-redux";
import RadioButtonGroup from "../../common/ui/RadioButtonGroup";
import {salaryTypeOptionsList} from "./salaryTypeOptions";
import {salaryFormState, SalaryType} from "../../types/salary";

const SalaryForm = () => {
    const formValues: any = useSelector((state: salaryFormState) => getFormValues('salaryForm')(state))

    const salaryInterval = formValues?.salaryType ===
    SalaryType.DAY_PAY ? 'день' : formValues?.salaryType === SalaryType.HOUR_PAY && 'час'

    return (
            <>
                <Form>
                    <RadioButtonGroup
                            groupName='salaryType'
                            groupLabel='Сумма'
                            options={salaryTypeOptionsList}
                            defaultCheckedValue={SalaryType.MONTH_PAY}
                    />
                    {formValues?.salaryType !== SalaryType.MIN_WAGE && (
                            <div className='input-wrapper vstack gap-3'>
                                <Field
                                        name='withoutNDFL'
                                        component={(props: WrappedFieldProps) => (
                                                <ToggleButton
                                                        defaultChecked={formValues?.withoutNDFL}
                                                        toggleDisableLabel={'Указать с НДФЛ'}
                                                        toggleActiveLabel={'Без НДФЛ'}
                                                        {...props}
                                                />
                                        )}
                                />
                                <div className='hstack'>
                                    <Field
                                            name="salaryValue"
                                            component="input"
                                            type="number"
                                            placeholder="Введите сумму"
                                            className='main-input'
                                            style={{maxWidth: '170px'}}
                                    />
                                    <span className='ms-2 fw-semibold'>₽ {salaryInterval && `в ${salaryInterval}`}</span>
                                </div>

                            </div>
                    )}
                </Form>

            </>
    );
};

export default reduxForm({
    form: 'salaryForm',
    initialValues: {
        salaryType: 'paymentMonth',
        withoutNDFL: true
    },
})(SalaryForm);
