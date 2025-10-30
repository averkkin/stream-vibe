import './Header.scss'
import Logo from '@/components/Logo'
import Button from '@/components/Button'
import classNames from "classnames";
import BurgerButton from "@/components/BurgerButton";

const Header = (props) => {
    const { url } = props;

    const menuItems = [
        {
            label: 'Home',
            href: '/'
        },
        {
            label: 'Movies & Shows',
            href: '/movies'
        },
        {
            label: 'Support',
            href: '/support'
        },
        {
            label: 'Subscriptions',
            href: '/subscriptions'
        },
    ]

    return (
        <header className="header">
            <div className="header__inner container">

                <Logo className="header__logo" loading="eager" />

                <dialog className="header__overlay-menu-dialog">
                    <nav className="header__menu">
                        <ul className="header__menu-list">
                            {menuItems.map(({label, href}, index) => (
                                <li key={index} className="header__menu-item" >
                                    <a
                                        className={classNames('header__menu-link', {
                                            'is-active': href === url,
                                        })}
                                        href={href}>
                                        { label }
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="header__actions">
                        <Button
                            className="header__button"
                            label="Search"
                            isLabelHidden
                            iconName="search"
                            mode='transparent'
                        />
                        <Button
                            href="/"
                            label="Notification"
                            isLabelHidden
                            iconName="notify"
                            mode='transparent'
                        />
                    </div>
                </dialog>

                <BurgerButton className='header__burger-button' title="Menu Open" />
            </div>
        </header>
    )
}

export default Header
