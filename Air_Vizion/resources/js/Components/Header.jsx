import React from "react";
import { Link, usePage } from "@inertiajs/react"; // Import Inertia Link and usePage

const Header = () => {
    const { url } = usePage(); // Get the current Inertia URL

    return (
        <header>
            <nav className="nav">
                <Link href="/" className="site-title">
                    Air Vizion
                </Link>
                <ul>
                    <CustomLink href="/system" currentUrl={url}>
                        System
                    </CustomLink>
                    <CustomLink href="/solution" currentUrl={url}>
                        Solution
                    </CustomLink>
                    <CustomLink href="/sensors" currentUrl={url}>
                        Sensors
                    </CustomLink>
                    <CustomLink href="/implementation" currentUrl={url}>
                        Implementation
                    </CustomLink>
                    <CustomLink href="/contact" currentUrl={url}>
                        Contact
                    </CustomLink>
                    <CustomLink href="/login" currentUrl={url}>
                        Login
                    </CustomLink>
                    <CustomLink href="/register" currentUrl={url}>
                        Register
                    </CustomLink>
                </ul>
            </nav>
        </header>
    );
};

function CustomLink({ href, children, currentUrl }) {
    // Check if the current URL matches the href to apply the "active" class
    const isActive = currentUrl === href;

    return (
        <li className={isActive ? "active" : ""}>
            <Link href={href}>{children}</Link>
        </li>
    );
}

export default Header;
