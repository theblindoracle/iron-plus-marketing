import Link from "next/link";

export default function Navbar() {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link href="/" className="btn btn-ghost normal-case text-xl">
                    Iron Plus
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><Link href="/terms-and-conditions">Terms</Link></li>
                    <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                </ul>
            </div>
        </div>
    )
}