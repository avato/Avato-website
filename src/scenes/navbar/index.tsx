import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className={`fixed top-0 z-30 right-0 w-24 h-24`}>
      <div className={`w-full h-full flex justify-center items-center`}>
        <Bars3Icon className="h-6 w-6 text-slate-900 cursor-pointer" />
      </div>
    </nav>
  )
}

export default Navbar