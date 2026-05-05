import React, { useEffect } from 'react'
import { useAppContext } from '../../context/AppContext'
import { assets } from '../../assets/data'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { UserButton } from '@clerk/react'

const Sidebar = () => {
  const { navigate, isOwner, user } = useAppContext()

  const navItems = [
    {
      path: "/owner",
      label: "Dashboard",
      icon: assets.dashboard,
    },
    {
      path: "/owner/add-product",
      label: "Add Product",
      icon: assets.squarePlus,
    },
    {
      path: "/owner/list-product",
      label: "List Product",
      icon: assets.list,
    },
  ];

  useEffect(() => {
    if (!isOwner) {
      navigate("/")
    }
  }, [isOwner])

  return (
    <div>
      <div className="mx-auto max-w-[1440px] flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className="max-md:flexCenter flex flex-col justify-between bg-primary sm:m-3 md:min-w-[20%] md:min-h-[97vh] rounded-xl shadow">
          <div>
            {/* Logo */}
            <div className="flex flex-1 p-3 lg:pl-12">
              <Link to={"/"} className="flex items-end">
                <img src={assets.logoImg} alt="logoImg" className="h-11" />
                <span className="bold-24 relative top-1 right-2">
                  ogues
                </span>
              </Link>
            </div>
            <div>
              <UserButton
                appearance={{
                  elements: {
                    userButtonAvatarBox: {
                      width: "42px",
                      height: "42px",
                    },
                  },
                }}
              />
              <div>
                {user?.firstName} {user?.lastName}
              </div>
            </div>
          </div>

          <div>
            {navItems.map((link) => (
              <NavLink
                key={link.label}
                to={link.path}
                end={link.path === "/owner"}
              >
                <img src={link.icon} alt={link.label} className="hidden md:block " width={18} />
                <div>{link.label}</div>
              </NavLink>
            ))}
          </div>

        </div>
        </div>
            <div>
          <UserButton
            appearance={{
              elements: {
                userButtonAvatarBox: {
                  width: "42px",
                  height: "42px",
                },
              },
            }}
          />
          <div>
            {user?.firstName} {user?.lastName}
          </div>

      </div>
    </div>
  )
}
export default Sidebar