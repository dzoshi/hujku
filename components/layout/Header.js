import Link from "next/link";
import { DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";
function Header() {
    return (
        <>
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="header-content">
                                <div className="header-left">
                                    <div className="brand-logo">
                                        <Link href="/">
                                            <a className="mini-logo">
                                                <img
                                                    src="./images/logoi.png"
                                                    alt=""
                                                    width="40"
                                                />
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="search">
                                        <form action="#">
                                            <div className="input-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Search Here"
                                                />
                                                <span className="input-group-text">
                                                    <i className="ri-search-line"></i>
                                                </span>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <div className="header-right">
                                    <div
                                        className="dark-light-toggle"
                                        onclick="themeToggle()"
                                    >
                                        <span className="dark">
                                            <i className="ri-moon-line"></i>
                                        </span>
                                        <span className="light">
                                            <i className="ri-sun-line"></i>
                                        </span>
                                    </div>

                                    <UncontrolledDropdown
                                        tag="div"
                                        className="nav-item dropdown notification"
                                    >
                                        <DropdownToggle
                                            tag="div"
                                            data-toggle="dropdown"
                                        >
                                            <div className="notify-bell icon-menu">
                                                <span>
                                                    <i className="ri-notification-2-line"></i>
                                                </span>
                                            </div>
                                        </DropdownToggle>
                                        <DropdownMenu
                                            right
                                            className="dropdown-menu notification-list"
                                        >
                                            <h4>Recent Notification</h4>
                                            <div className="lists">
                                                <Link href="#">
                                                    <a className="">
                                                        <div className="d-flex align-items-center">
                                                            <span className="me-3 icon success">
                                                                <i className="ri-check-line"></i>
                                                            </span>
                                                            <div>
                                                                <p>
                                                                    Account
                                                                    created
                                                                    successfully
                                                                </p>
                                                                <span>
                                                                    2020-11-04
                                                                    12:00:23
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </Link>
                                                <Link href="#">
                                                    <a className="">
                                                        <div className="d-flex align-items-center">
                                                            <span className="me-3 icon fail">
                                                                <i className="ri-close-line"></i>
                                                            </span>
                                                            <div>
                                                                <p>
                                                                    2FA
                                                                    verification
                                                                    failed
                                                                </p>
                                                                <span>
                                                                    2020-11-04
                                                                    12:00:23
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </Link>
                                                <Link href="#">
                                                    <a className="">
                                                        <div className="d-flex align-items-center">
                                                            <span className="me-3 icon success">
                                                                <i className="ri-check-line"></i>
                                                            </span>
                                                            <div>
                                                                <p>
                                                                    Device
                                                                    confirmation
                                                                    completed
                                                                </p>
                                                                <span>
                                                                    2020-11-04
                                                                    12:00:23
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </Link>
                                                <Link href="#">
                                                    <a className="">
                                                        <div className="d-flex align-items-center">
                                                            <span className="me-3 icon pending">
                                                                <i className="ri-question-mark"></i>
                                                            </span>
                                                            <div>
                                                                <p>
                                                                    Phone
                                                                    verification
                                                                    pending
                                                                </p>
                                                                <span>
                                                                    2020-11-04
                                                                    12:00:23
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </Link>
                                                <Link href="/notification">
                                                    <a>
                                                        More
                                                        <i className="ri-arrow-right-s-line"></i>
                                                    </a>
                                                </Link>
                                            </div>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>

                                    <UncontrolledDropdown
                                        tag="div"
                                        className="dropdown profile_log"
                                    >
                                        <DropdownToggle
                                            tag="div"
                                            data-toggle="dropdown"
                                        >
                                            <div className="user icon-menu active">
                                                <span>
                                                    <i className="ri-user-line"></i>
                                                </span>
                                            </div>
                                        </DropdownToggle>
                                        <DropdownMenu
                                            right
                                            className="dropdown-menu"
                                        >
                                            <div className="user-email">
                                                <div className="user">
                                                    <span className="thumb">
                                                        <img
                                                            src="./images/profile/3.png"
                                                            alt=""
                                                        />
                                                    </span>
                                                    <div className="user-info">
                                                        <h5>Jannatul Maowa</h5>
                                                        <span>
                                                            Intez.inc@gmail.com
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <Link href="/profile">
                                                <a className="dropdown-item">
                                                    <span>
                                                        <i className="ri-user-line"></i>
                                                    </span>
                                                    Profile
                                                </a>
                                            </Link>
                                            <Link href="/balance">
                                                <a className="dropdown-item">
                                                    <span>
                                                        <i className="ri-wallet-line"></i>
                                                    </span>
                                                    Balance
                                                </a>
                                            </Link>
                                            <Link href="/settings-profile">
                                                <a className="dropdown-item">
                                                    <span>
                                                        <i className="ri-settings-3-line"></i>
                                                    </span>
                                                    Settings
                                                </a>
                                            </Link>
                                            <Link href="/settings-activity">
                                                <a className="dropdown-item">
                                                    <span>
                                                        <i className="ri-time-line"></i>
                                                    </span>
                                                    Activity
                                                </a>
                                            </Link>
                                            <Link href="/lock">
                                                <a className="dropdown-item">
                                                    <span>
                                                        <i className="ri-lock-line"></i>
                                                    </span>
                                                    Lock
                                                </a>
                                            </Link>
                                            <Link href="/signin">
                                                <a className="dropdown-item logout">
                                                    <i className="ri-logout-circle-line"></i>
                                                    Logout
                                                </a>
                                            </Link>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Header;
