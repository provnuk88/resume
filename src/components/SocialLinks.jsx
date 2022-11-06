import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import resume from "../assets/resume.pdf"

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
      LinkedIn <FaLinkedin className="pl-1.5 " size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/dmitriy-perminov-b62257231/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
       GitHub <FaGithub className="pl-1.5"size={30} />
        </>
      ),
      href: "https://github.com/provnuk88",
    },
    {
      id: 3,
      child: (
        <>
       Mail <HiOutlineMail className="pl-1.5" size={30} />
        </>
      ),
      href: "proovnuk1997@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
        Resume <BsFillPersonLinesFill className="pl-1.5" size={30} />
        </>
      ),
      href:resume,
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="lg:flex flex-col background-color: transparent ">
      <ul className="pl-1">
        {links.map(({ id, child, href,style, download }) => (
          <li
            key={id}
            className={
              "flex w-15 h-14 px-4 h-8 background-color: transparent  "
            }
          >
            <a
              href={href}
              className="flex justify-left items-center  w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
