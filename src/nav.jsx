import { NavLink } from "react-router-dom";

// A <nav> that links out to /, /teas, and /about.
export default function Nav() {
    return (
        <nav className="flex gap-10">
            {/* Using NavLink lets us (a) "navigate to" / render different routes without requesting anything from the server */}
            {/*                   and (b) lets us keep track of the app's active route for styling purposes. */}
            <NavLink to="/" className={({ isActive }) => `text-2xl hover:underline ${isActive && 'font-semibold'}`}>
                Home
            </NavLink>
            <div className="flex gap-10">
                <NavLink to="about"
                            className={({ isActive }) => `text-2xl hover:underline ${isActive && 'font-semibold'}`}>
                    About Us
                </NavLink>
                <NavLink to="add"
                            className={({ isActive }) => `text-2xl hover:underline ${isActive && 'font-semibold'}`}>
                    Add New Places To Explore
                </NavLink>
            </div>
        </nav>
    )
}