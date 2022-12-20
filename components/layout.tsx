
import { ReactNode } from "react"
import Footer from "./footer"
import Navbar from "./navbar"

type Props = {
    children: ReactNode
}


const Layout = ({ children }: Props) => {

    return (
        <div className="min-h-screen h-screen flex flex-col">
            <Navbar />
            <main className="flex-auto">

                {children}
            </main>

            <Footer />
        </div>
    )
}

export default Layout