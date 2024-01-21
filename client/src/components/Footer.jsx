import React from "react";
import { Link } from "react-router-dom";
// import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
import styles from "../style";
const Footer = () => {
  return (
    <section
      className={`app__footer ${styles.flexCenter} flex-col ${styles.paddingY}`}
    >
      <div
        className={`app__footer-content ${styles.flexCenter} w-full mb-8 md:flex-row flex-col`}
      >
        <div
          className={`app__footer-content_logo flex-1 flex flex-col justify-start mr-10`}
        >
          <Link to="/">
            <h1 className="text-slate-800 font-bold text-3xl uppercase ">
              BNAS
            </h1>
          </Link>
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            A new way to make the Happiness, reliable and secure.
          </p>
        </div>
        <div
          className={`flex-[1.5] flex justify-between flex-row flex-wrap md:mt-0 mt-10`}
        >
          {footerLinks.map((footerLink, index) => (
            <div
              key={index + 1}
              className="flex flex-col sm:my-0 my-4 min-w-[150px]"
            >
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                {footerLink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerLink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-poppins font-normal text-[16px]  leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                      index === footerLink.links.length - 1 ? "mb-0" : "mb-4"
                    }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div
        className={`app__footer-copyright flex md:flex-row flex-col justify-between w-full items-center border-t-[1px] pt-6 border-t-[#3F3E45] `}
      >
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px]  text-dimWhite">
          Copyright 2021 BNAS. All Rights Reserved by team BNAS.
        </p>
        <div className={`app__footer-socialMedia flex flex-row md:mt-0 mt-6`}>
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={`${social.id}`}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index === socialMedia.length - 1 ? "mr-0" : "mr-6"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
