import { useState } from "react";
import { links } from "./Mylinks";
import { Link } from "react-router-dom";

const NavLinks = () => {
    const [heading, setHeading] = useState("");
    const [subHeading, setSubHeading] = useState("");
    return (
        <>
            {links?.map((link, index) => (
                <div key={index}>
                    <div className="px-3 text-left md:cursor-pointer group">
                        <h2
                            className="py-7 flex justify-between items-center md:pr-0 pr-5 group"
                            onClick={() => {
                                heading !== link.name ? setHeading(link.name) : setHeading("");
                                setSubHeading("");
                            }}
                        >
                            {link.name}
                            <span className="text-xl md:hidden inline">
                                {/* {heading === link.name ? <img src={chevronup} className=' h-5 w-5' /> : <img src={chevrondown} className=' h-5 w-5' />} */}
                                <ion-icon name={heading === link.name ? "chevron-up" : "chevron-down"}></ion-icon>
                            </span>
                            <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                                {/* <img src={chevrondown} className=' h-5 w-5' /> */}
                                <ion-icon name="chevron-down"></ion-icon>
                            </span>
                        </h2>
                        {link.submenu && (
                            <div>
                                <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                                    <div className="py-3">
                                        <div
                                            className="w-4 h-4 left-3 absolute 
                    mt-1 bg-white rotate-45"
                                        ></div>
                                    </div>
                                    <div className="bg-white p-5 grid xl:grid-cols-3 md:grid-cols-2 gap-2 xl:gap-5">
                                        {link?.sublinks?.map((mysublinks, index) => (
                                            <div key={index}>
                                                <h2 className="text-lg font-semibold">
                                                    {mysublinks.Head}
                                                </h2>
                                                {mysublinks?.sublink?.map((slink, index) => (
                                                    <li key={index} className="text-sm text-gray-600 my-2.5">
                                                        <Link
                                                            to={slink.link}
                                                            className="hover:text-primary"
                                                        >
                                                            {slink.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* Mobile menus */}
                    <div
                        className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
                    >
                        {/* sublinks */}
                        {link?.sublinks?.map((slinks, index) => (
                            <div key={index}>
                                <div>
                                    <h2
                                        onClick={() =>
                                            subHeading !== slinks.Head
                                                ? setSubHeading(slinks.Head)
                                                : setSubHeading("")
                                        }
                                        className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center"
                                    >
                                        {slinks.Head}

                                        <span className="text-xl md:mt-1 md:ml-2 inline">
                                            {/* {subHeading === slinks.Head ? <img src={chevronup} className=' h-5 w-5' /> : <img src={chevrondown} className=' h-5 w-5' />} */}
                                            <ion-icon name={subHeading === slinks.Head ? "chevron-up" : "chevron-down"}></ion-icon>
                                        </span>
                                    </h2>
                                    <div
                                        className={`${subHeading === slinks.Head ? "md:hidden" : "hidden"
                                            }`}
                                    >
                                        {slinks?.sublink?.map((slink, index) => (
                                            <li key={index} className="py-3 pl-14">
                                                <Link to={slink.link}>{slink.name}</Link>
                                            </li>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
};

export default NavLinks;