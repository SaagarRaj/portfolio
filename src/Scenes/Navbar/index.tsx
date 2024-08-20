import AnchorLink from "react-anchor-link-smooth-scroll"
import Button from "@mui/material/Button"
import MenuIcon from '@mui/icons-material/Menu';
import { MenuOpen } from "@mui/icons-material";
import { useState } from "react";
import { Menu, MenuItem } from "@mui/material";

type Props = {}

export const Navbar = (props: Props) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const NavItemsStyleClass = " p-2 border-b-2 border-transparent transition-all duration-300 hover:border-custom-yellow cursor-pointer"
    return (
        <nav className="fixed w-full z-20 backdrop-blur-2xl shadow">
            <div className=" hidden md:flex w-[65%] mx-auto items-center justify-evenly text-[0.9rem] font-light text-gray-400 ">
                <AnchorLink href="#aboutMe" offset={20} className={NavItemsStyleClass}> <span className="text-custom-yellow font-robotoMono ">01. </span>About </AnchorLink>
                <AnchorLink href="#experience" offset={20} className={NavItemsStyleClass}> <span className="text-custom-yellow font-robotoMono ">02. </span>Experience </AnchorLink>
                <AnchorLink href="#project" offset={20} className={NavItemsStyleClass}> <span className="text-custom-yellow font-robotoMono ">03. </span>Project </AnchorLink>
                <AnchorLink href="#contact" offset={20} className={NavItemsStyleClass}> <span className="text-custom-yellow font-robotoMono ">04. </span> Contact </AnchorLink>
                <p className={`${NavItemsStyleClass}`}> <a href={process.env.NEXT_PUBLIC_RESUME_LINK} target="_blank" rel="noopener noreferrer">Resume</a></p>
            </div>

            <div className="flex md:hidden items-center justify-end  w-[95%]">
                <Button className="hover:bg-custom-offWhite" id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}>

                    {open ? <MenuOpen className="text-3xl  text-black" /> : <MenuIcon className="text-3xl text-gray-400 hover:text-black" />}

                </Button>

                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }} >

                    <MenuItem className="text-gray-400 hover:text-black" onClick={handleClose}>
                        <AnchorLink href="#aboutMe" offset={30} className={NavItemsStyleClass}> <span className="text-custom-yellow font-robotoMono ">01.</span>About </AnchorLink>
                    </MenuItem>
                    <MenuItem className="text-gray-400 hover:text-black" onClick={handleClose}>
                        <AnchorLink href="#experience" offset={30} className={NavItemsStyleClass}> <span className="text-custom-yellow font-robotoMono ">02.</span>Experience </AnchorLink>
                    </MenuItem>
                    <MenuItem className="text-gray-400 hover:text-black" onClick={handleClose}>
                        <AnchorLink href="#project" offset={30} className={NavItemsStyleClass}> <span className="text-custom-yellow font-robotoMono ">03.</span>Project </AnchorLink>
                    </MenuItem>
                    <MenuItem className="text-gray-400 hover:text-black" onClick={handleClose}>
                        <AnchorLink href="#contact" offset={30} className={NavItemsStyleClass}> <span className="text-custom-yellow font-robotoMono ">04.</span> Contact </AnchorLink>
                    </MenuItem>
                </Menu>

            </div>
        </nav >
    )
}