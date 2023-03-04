import React, {FunctionComponent, useState} from 'react';
import {Button, OverlayTrigger, Popover} from "react-bootstrap";
import {InfoIcon} from "../../assets/icons/InfoIcon";
import {CloseIcon} from "../../assets/icons/CloseIcon";

interface ISalaryTypePopover {
    salaryTypeInfo: string
}

const SalaryTypePopover: FunctionComponent<ISalaryTypePopover> = ({salaryTypeInfo}) => {
    const [show, setShow] = useState<boolean>(false)
    const [isClicked, setIsClicked] = useState<boolean>(false)

    return (
            <OverlayTrigger
                    key={'bottom'}
                    placement={'right'}
                    show={show}
                    overlay={
                        <Popover id={`popover-positioned-bottom`} className='main-popover'>
                            <Popover.Body>
                                {salaryTypeInfo}
                            </Popover.Body>
                        </Popover>
                    }
            >
                <Button style={{background: 'unset', border: 'unset', padding: '0'}}
                        onMouseEnter={() => {
                            !isClicked && setShow(true)
                        }}
                        onMouseLeave={() => {
                            !isClicked && setShow(false)
                        }}
                >
                    {!isClicked ? (
                            <span onClick={() => {
                                setShow(true)
                                setIsClicked(true)
                            }}><InfoIcon/></span>
                    ) : (
                            <span onClick={() => {
                                setShow(false)
                                setIsClicked(false)
                            }}><CloseIcon/></span>
                    )}
                </Button>
            </OverlayTrigger>
    );
};

export default SalaryTypePopover;
