import Link from "next/link";
import HeaderLanding from "../components/layout/HeaderLanding";
function Demo() {
    return (
        <>
            <HeaderLanding />
            <div className="intro section-padding" id="intro">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-xl-4 col-md-6">
                            <div className="intro-content my-5">
                                <h1>
                                    Intez - Dashboard React App
                                </h1>
                                <p>
                                    Intez is the complete UX & UI dashboard for
                                    online payment. Here included wallet, payment,
                                    invoice, and all user setting pages
                                    including profile, application, activity,
                                    payment method, api, sign in & sign up etc.
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-5 col-md-6 py-md-5">
                            <div className="intro-demo_img">
                                <img
                                    src="/images/demo/intez.jpg"
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="demo section-padding">
                <div className="container">
                    <div className="row py-lg-5 justify-content-center">
                        <div className="col-xl-7">
                            <div className="section-title text-center">
                                <h2>Pages</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link href="/">
                                    <a>
                                        <div className="img-wrap">
                                            <img
                                                src="/images/demo/dashboard.jpg"
                                                alt=""
                                                className="img-fluid"
                                            />
                                        </div>
                                    </a>
                                </Link>
                                <h4>Dashboard</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link href="/balance">
                                    <a>
                                        <div className="img-wrap">
                                            <img
                                                src="/images/demo/wallet.jpg"
                                                alt=""
                                                className="img-fluid"
                                            />
                                        </div>
                                    </a>
                                </Link>
                                <h4>Wallet</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link href="/bill">
                                    <a>
                                        <div className="img-wrap">
                                            <img
                                                src="/images/demo/payment.jpg"
                                                alt=""
                                                className="img-fluid"
                                            />
                                        </div>
                                    </a>
                                </Link>
                                <h4>Payment</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link href="/invoice">
                                    <a>
                                        <div className="img-wrap">
                                            <img
                                                src="/images/demo/invoice.jpg"
                                                alt=""
                                                className="img-fluid"
                                            />
                                        </div>
                                    </a>
                                </Link>
                                <h4>Invoice</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link href="/create-invoice">
                                    <a>
                                        <div className="img-wrap">
                                            <img
                                                src="/images/demo/create-invoice.jpg"
                                                alt=""
                                                className="img-fluid"
                                            />
                                        </div>
                                    </a>
                                </Link>
                                <h4>Create Invoice</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link href="/notification">
                                    <a>
                                        <div className="img-wrap">
                                            <img
                                                src="/images/demo/notification.jpg"
                                                alt=""
                                                className="img-fluid"
                                            />
                                        </div>
                                    </a>
                                </Link>
                                <h4>Notification</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link href="/settings-profile">
                                    <a>
                                        <div className="img-wrap">
                                            <img
                                                src="/images/demo/settings-profile.jpg"
                                                alt=""
                                                className="img-fluid"
                                            />
                                        </div>
                                    </a>
                                </Link>
                                <h4>Profile Settings</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link href="/profile">
                                    <a>
                                        <div className="img-wrap">
                                            <img
                                                src="/images/demo/profile.jpg"
                                                alt=""
                                                className="img-fluid"
                                            />
                                        </div>
                                    </a>
                                </Link>
                                <h4>User Profile</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link href="/settings-application">
                                    <a>
                                        <div className="img-wrap">
                                            <img
                                                src="/images/demo/settings-application.jpg"
                                                alt=""
                                                className="img-fluid"
                                            />
                                        </div>
                                    </a>
                                </Link>
                                <h4>Application</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link href="/settings-security">
                                    <a>
                                        <div className="img-wrap">
                                            <img
                                                src="/images/demo/settings-security.jpg"
                                                alt=""
                                                className="img-fluid"
                                            />
                                        </div>
                                    </a>
                                </Link>
                                <h4>Security</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link href="/settings-activity">
                                    <a>
                                        <div className="img-wrap">
                                            <img
                                                src="/images/demo/settings-activity.jpg"
                                                alt=""
                                                className="img-fluid"
                                            />
                                        </div>
                                    </a>
                                </Link>
                                <h4>Activity</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link href="/settings-payment-method">
                                    <a>
                                        <div className="img-wrap">
                                            <img
                                                src="/images/demo/settings-payment-method.jpg"
                                                alt=""
                                                className="img-fluid"
                                            />
                                        </div>
                                    </a>
                                </Link>
                                <h4>Payment Method</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link href="/settings-api">
                                    <a>
                                        <div className="img-wrap">
                                            <img
                                                src="/images/demo/settings-api.jpg"
                                                alt=""
                                                className="img-fluid"
                                            />
                                        </div>
                                    </a>
                                </Link>
                                <h4>Api</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link href="/signin">
                                    <a>
                                        <div className="img-wrap">
                                            <img
                                                src="/images/demo/signin.jpg"
                                                alt=""
                                                className="img-fluid"
                                            />
                                        </div>
                                    </a>
                                </Link>
                                <h4>Sign in Page</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link href="/signup">
                                    <a>
                                        <div className="img-wrap">
                                            <img
                                                src="/images/demo/signup.jpg"
                                                alt=""
                                                className="img-fluid"
                                            />
                                        </div>
                                    </a>
                                </Link>
                                <h4>Sign up page</h4>
                            </div>
                        </div>

                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link href="/lock">
                                    <a>
                                        <div className="img-wrap">
                                            <img
                                                src="/images/demo/locked.jpg"
                                                alt=""
                                                className="img-fluid"
                                            />
                                        </div>
                                    </a>
                                </Link>
                                <h4>Locked Page</h4>
                            </div>
                        </div>

                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link href="./otp1" target="_blank"><a>
                                    <div className="img-wrap">
                                        <img src="./images/demo/otp-1.jpg" alt="" className="img-fluid" />
                                    </div>
                                </a>
                                </Link>
                                <h4>1 of 2-Step-Verification</h4>
                            </div>
                        </div>

                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link href="./otp2" target="_blank"><a>
                                    <div className="img-wrap">
                                        <img src="./images/demo/otp-2.jpg" alt="" className="img-fluid" />
                                    </div>
                                </a>
                                </Link>
                                <h4>2 of 2-Step-Verification</h4>
                            </div>
                        </div>

                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link href="./verify-email" target="_blank"><a>
                                    <div className="img-wrap">
                                        <img src="./images/demo/email-verification.jpg" alt="" className="img-fluid" />
                                    </div>
                                </a>
                                </Link>
                                <h4>Email Verification</h4>
                            </div>
                        </div>

                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link href="./reset" target="_blank"><a>
                                    <div className="img-wrap">
                                        <img src="./images/demo/reset.jpg" alt="" className="img-fluid" />
                                    </div>
                                </a>
                                </Link>
                                <h4>Reset Page</h4>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
export default Demo;
