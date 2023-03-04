import React, {FunctionComponent} from 'react';
import {Form} from "react-bootstrap";
import {WrappedFieldProps} from "redux-form/lib/Field";
import clsx from "clsx";
import {Field} from "redux-form";


interface IToggleButton extends WrappedFieldProps {
    toggleDisableLabel: string,
    toggleActiveLabel: string,
    defaultChecked: boolean
}

const ToggleButton: FunctionComponent<IToggleButton> = ({
                                                            toggleActiveLabel,
                                                            toggleDisableLabel,
                                                            input,
                                                            defaultChecked
                                                        }) => {
    const renderToggle = () => {
        return (
                <Form.Switch
                        {...input}
                        defaultChecked={defaultChecked} checked={input.value}
                        onMouseDown={() => input.onChange(!input.value)}
                />
        )
    }

    return (
            <div className='hstack gap-1'>
                <label className={clsx('small fw-semibold me-2 text-secondary', !input.value && 'text-black')}>
                    {toggleDisableLabel}
                </label>
                <Field name={input.name} component={renderToggle}/>
                <label className={clsx('small fw-semibold text-secondary', input.value && 'text-black')}>
                    {toggleActiveLabel}
                </label>
            </div>
    );
};

export default ToggleButton;
