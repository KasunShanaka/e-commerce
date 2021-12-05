import React from 'react'
import style from './Page.module.scss'

const Page = (props) => {
    return (
        <div className={style.wrapper}>
            <div className={style.background}>
            </div>
            <div className={style.container}>
                <div className={style.leftSpace}>
                </div>
                <div className={style.content}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Page
