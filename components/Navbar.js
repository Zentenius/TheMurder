import Link from "next/link"
import Image from "next/image"

function Navbar() {
    return(
      <div className="navbar text-white bg-base-200 sticky top-0 z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <Link href="#homepage">
                <a>Homepage</a>
                </Link>
              </li>
              <li tabIndex={0}>
                <a className="justify-between">
                  Sections
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                </a>
                <ul className="p-2">
                  <li><a>Summary</a></li>
                  <li><a>Our Opnion</a></li>
                  <li><a>Main Characters</a></li>
                  <li><a>Themes in the story</a></li>
                  <li><a>Conflicts in the story</a></li>
                  <li><a>Vocabulary</a></li>
                  <li><a>Location</a></li>
                  <li><a>Games</a></li>
                </ul>
              </li>
              <li><a>Closig and Group members</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-3xl md:text-4xl font-bold">English Gw</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
          <li><a href='#homepage'>Home Page</a></li>
            <li tabIndex={0}>
              <a>
                Sections
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
              </a>
              <ul className="p-2 bg-base-200">
              <li><a>Summary</a></li>
                  <li><a>Our Opnion</a></li>
                  <li><a>Main Characters</a></li>
                  <li><a>Themes in the story</a></li>
                  <li><a>Conflicts in the story</a></li>
                  <li><a>Vocabulary</a></li>
                  <li><a>Location</a></li>
                  <li><a>Games</a></li>
              </ul>
            </li>
            <li> <Link href="#footer">
                <a>Closing and Group members</a>
                </Link>
                </li>
          </ul>
        </div>
        <div className='navbar-end'>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <Image src="https://static.thenounproject.com/png/2048463-200.png" />
              </div>
            </label>
            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
        </div>
      </div>

    )
}