import React from 'react';
import style from './HomePage.module.scss';
import Page from '../../shared/Page/Page';
import classnames from 'classnames';
import Button from '../../shared/Button/Button';

//images
import GirlImage from '../../img/girlImage.png';

const HomePage = () => {
    return (
        <Page>
            <div className={classnames(style.container, "")}>

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
                        <div className={classnames(style.pageBtn, "contact px-8")}>
                            contact
                        </div>
                        <div className={classnames(style.loginBtn, "px-10 py-2.5 border rounded-2xl")}>
                            Login
                        </div>
                    </div>
                </nav>

                {/* page content */}
                <div className={classnames(style.contents, ' grid grid-cols-3 pt-32')}>
                    <div className={classnames(style.left, 'col-span-2 w-2/3')}>
                        <div className={classnames(style.header, '')}>
                            The center of women trending clothes in <br /> the world
                        </div>
                        <div className={classnames(style.subHeader, 'py-4')}>
                            Updated, latest and competitive prices
                        </div>
                        <div className={classnames(style.getTheAppBtn, ' py-16 ')}>
                            <Button
                                buttonName="Get the app"
                                size={2}
                            >
                            </Button>
                        </div>
                        <div className={classnames(style.leftRightBtn, '')}>
                            <div className={classnames(style.leftBtn, ' inline-block py-3 px-6 m-2 rounded-xl shadow-sm')}>
                                <i className="feather-arrow-left"></i>
                            </div>
                            <div className={classnames(style.rightBtn, ' inline-block py-3 px-6 m-2 rounded-xl shadow-sm')}>
                                <i className="feather-arrow-right"></i>
                            </div>
                        </div>
                    </div>
                    <div className={classnames(style.right, '')}>
                        <div className={classnames(style.chooseColorTxt, ' font-bold')}>
                            Choose Color
                        </div>
                        <div className={classnames(style.pickColors, 'my-8')}>
                            <div className={classnames(style.round, 'bg-red-200 h-6 w-6 rounded-full inline-block mx-1')}>
                            </div>
                            <div className={classnames(style.round, 'bg-red-400 h-6 w-6 rounded-full inline-block mx-1')}>
                            </div>
                            <div className={classnames(style.round, 'bg-yellow-600 h-6 w-6 rounded-full inline-block mx-1')}>
                            </div>
                            <div className={classnames(style.round, 'bg-red-500 h-6 w-6 rounded-full inline-block mx-1')}>
                            </div>
                        </div>
                        <div className="items-center flex pb-40">
                            <div className={classnames(style.addToCartBtn,' inline-block')}>
                                <Button
                                size={1}
                                buttonName="Add to cart"
                                >
                            
                                </Button>
                            </div>
                            <div className={classnames(style.favBtn,'h-9 w-9 inline-block bg-white p-2 rounded-xl mx-3')}>
                                <img src="https://cdn-icons.flaticon.com/png/128/210/premium/210545.png?token=exp=1638695635~hmac=db1d796ee3cfcd5ea27e44c8b796f29a" alt="" />
                            </div>
                        </div>
                        <div className={classnames(style.moreItems,'')}>
                            <div className={classnames(style.moreItemsTxt,' font-bold my-8')}>
                                Moe the list
                            </div>
                                <div className={classnames(style.cards,' whitespace-nowrap overflow-auto')}>
                                    <div className={classnames(style.card,'rounded-2xl overflow-hidden inline-block mx-4')}>
                                        <img className=" h-44 w-32 object-cover" src="https://i.pinimg.com/originals/2b/73/51/2b735137c0c616fdeafe1c0d69e17e0b.jpg" alt="" />
                                    </div>
                                    <div className={classnames(style.card,'h-44 w-32 rounded-2xl overflow-hidden inline-block mx-4')}>
                                        <img className=" h-44 w-32 object-cover" src="https://cdn.shopify.com/s/files/1/2232/2239/products/5B_5bebb9d0-c5a3-488b-8e81-55c147819636_580x@2x.jpg?v=1635747585" alt="" />
                                    </div>
                                    <div className={classnames(style.card,'h-44 w-32 rounded-2xl overflow-hidden inline-block mx-4')}>
                                        <img className=" h-44 w-32 object-cover" src="https://sc01.alicdn.com/kf/Hb63147377c7148609739862c547204e4I/200549682/Hb63147377c7148609739862c547204e4I.jpg_.webp" alt="" />
                                    </div>
                                </div>
                        </div>
                        <div className={classnames(style.girlImage,'')}>
                            <img className="h-full min-w-full" src={GirlImage} alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </Page>
    )
}

export default HomePage
