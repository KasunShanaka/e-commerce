import React from 'react';
import style from './HomePage.module.scss';
import Page from '../../shared/Page/Page';
import classnames from 'classnames';
import Button from '../../shared/Button/Button';

const HomePage = () => {
    return (
        <Page>
            <div className={classnames(style.container, "bg-red-600 h-screen")}>

                {/* navbar */}
                <nav className="navbar flex items-center justify-between pt-8 pl-4 pr-28">
                    <div className="logo">
                        <img className="h-12 filter invert" src="https://www.freepnglogos.com/uploads/adidas-logo-png-hd-17.png" alt="" />
                    </div>
                    <div className="pages flex">
                        <div className={classnames(style.pageBtn, "homepage px-4")}>
                            Home
                        </div>
                        <div className={classnames(style.pageBtn, "categoriesPage px-4")}>
                            Categories
                        </div>
                        <div className={classnames(style.pageBtn, "trendingPage px-4")}>
                            Trending
                        </div>
                    </div>
                    <div className="info flex items-center">
                        <div className={classnames(style.pageBtn, "contact px-4")}>
                            contact
                        </div>
                        <div className={classnames(style.loginBtn, "px-10 py-2.5 border rounded-2xl")}>
                            Login
                        </div>
                    </div>
                </nav>

                {/* page content */}
                <div className={classnames(style.contents, ' h-5/6 grid grid-cols-3 pt-40')}>
                    <div className={classnames(style.left, 'col-span-2 w-2/3')}>
                        <div className={classnames(style.header, '')}>
                            The center of women trending clothes in <br /> the world
                        </div>
                        <div className={classnames(style.subHeader,'')}>
                            Updated, latest and competitive prices
                        </div>
                        <Button
                            buttonName= "Get the app"
                            size = "2"
                        >
                            
                        </Button>
                        <div className={classnames(style.leftRightBtns,'')}>
                        <div className={classnames(style.leftBtn,' bg-red-300 inline-block py-3 px-6 m-2 rounded-xl')}>
                            <i className="feather-arrow-left"></i>
                        </div>
                        <div className={classnames(style.rightBtn,' bg-red-400 inline-block py-3 px-6 m-2 rounded-xl')}>
                            --
                        </div>
                    </div>
                    </div>
                    <div className={classnames(style.right, '')}>
                        Choose color
                    </div>
                </div>
            </div>
        </Page>
    )
}

export default HomePage
