import Link from 'next/link'

const Navigation = () => {
    return (
        <ul className="nav">
            <li className="nav-item">
                <Link href="/">
                <a className="nav-link active" aria-current="page" href="#">
                    Home
                </a>
                </Link>
            </li>
            <li className="nav-item">
                <Link href="about">
                <a className="nav-link" href="#">
                    About
                </a>
                </Link>
            </li>
            <li className="nav-item">
                <Link href="services">
                <a className="nav-link" href="#">
                    Services
                </a>
                </Link>
            </li>
        </ul>
    )
}

export default Navigation;