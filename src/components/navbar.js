'use client'
import React, { useEffect, useState } from "react";
import { IconHome, IconMessage, IconUser, IconDashboard, IconLogin, IconLogout, IconUserPlus } from "@tabler/icons-react";
import { useSession, signIn, signOut } from "next-auth/react";
import Blogs from "@/app/blogs/page";

const Navbar = () => {
  const { data: session } = useSession();
  const [show, setShow] = useState(true);

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const currentScrollTop = window.scrollY || document.documentElement.scrollTop;
      if (currentScrollTop > lastScrollTop) {
        setShow(false); 
      } else {
        setShow(true); 
      }
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-6 w-6 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Privacy Policy",
      link: "/privacypolicy",
      icon: <IconUser className="h-6 w-6 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About Us",
      link: "/aboutus",
      icon: <IconUserPlus className="h-6 w-6 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: <IconMessage className="h-6 w-6 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Blogs",
      link: "/blogs",
      icon: <IconMessage className="h-6 w-6 text-neutral-500 dark:text-white" />,
    }
  ];

  if (session) {
    const dashboardLink = session.user.role === "volunteer" ? "/volunteer/dashboard" : "/hospital/dashboard";
    navItems.push({
      name: "Dashboard",
      link: dashboardLink,
      icon: <IconDashboard className="h-6 w-6 text-neutral-500 dark:text-white" />,
    });

    navItems.push({
      name: "Logout",
      link: "#",
      icon: <IconLogout className="h-6 w-6 text-neutral-500 dark:text-white" />,
      onClick: () => signOut(),
    });
  } else {
    navItems.push(
      {
        name: "Signup",
        link: "/askrolesignup",
        icon: <IconUserPlus className="h-6 w-6 text-neutral-500 dark:text-white" />,
      },
      {
        name: "Signin",
        link: "/volunteer/signin",
        icon: <IconLogin className="h-6 w-6 text-neutral-500 dark:text-white" />,
      }
    );
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 flex justify-around bg-white dark:bg-black shadow-md p-4 transition-transform duration-300 ${show ? 'translate-y-0' : '-translate-y-full'}`}>
      {navItems.map((item) => (
        <a
          key={item.name}
          href={item.link}
          onClick={item.onClick ? (e) => { e.preventDefault(); item.onClick(); } : null}
          className="flex flex-col items-center"
        >
          {item.icon}
          <span className="text-xs mt-1 text-neutral-500 dark:text-white">{item.name}</span>
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
