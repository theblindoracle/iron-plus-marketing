
import { ReactNode } from "react"
import Footer from "./footer"
import Navbar from "./navbar"

type Props = {
    children: ReactNode
}


const Layout = ({ children }: Props) => {

    return (
        <>
            <Navbar />
            <main className="min-h-full">
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout