import React from 'react';
import style from './Button.module.scss';
import classnames from 'classnames';

const Button = (props) => {
    return (
        <div className={style.container}>

            {
                props.size === 1 ?
                <div className={classnames(style.btn, 'inline-block px-5 py-2  rounded-3xl shadow-lg text-sm')}>
                    {props.buttonName}
                </div>:
                <div className={classnames(style.btn, 'inline-block px-5 py-3  rounded-2xl shadow-lg text-sm')}>
                {props.buttonName}
            </div>
            }
        </div >
    )
}

export default Button
