import Layout from "../components/layout/Layout";
import StackedBarChart from "./../components/chart/StackedBarChart";

function Bill() {
    return (
        <>
            <Layout
                headTitle="Payments"
                pageTitle="Payments"
                pageTitleSub={"Welcome Intez Payments page"}
                pageClass={"dashboard"}
                parent={"Home"}
                child={"Payments"}
            >
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div
                            id="user-activity"
                            className="card"
                            data-aos="fade-up"
                        >
                            <div className="card-header">
                                <h4 className="card-title">Expenses</h4>
                            </div>

                            <div className="card-body">
                                <div className="tab-content" id="myTabContent">
                                    <StackedBarChart />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Unpaid Bills</h4>
                            </div>
                            <div className="card-body">
                                <div className="unpaid-content">
                                    <ul>
                                        <li>
                                            <p className="mb-0">Service</p>
                                            <h5 className="mb-0">Payoneer</h5>
                                        </li>
                                        <li>
                                            <p className="mb-0">Issued</p>
                                            <h5 className="mb-0">
                                                March 17, 2021
                                            </h5>
                                        </li>
                                        <li>
                                            <p className="mb-0">Payment Due</p>
                                            <h5 className="mb-0">17 Days</h5>
                                        </li>
                                        <li>
                                            <p className="mb-0">Paid</p>
                                            <h5 className="mb-0">0.00</h5>
                                        </li>
                                        <li>
                                            <p className="mb-0">
                                                Amount to pay
                                            </p>
                                            <h5 className="mb-0">$ 532.69</h5>
                                        </li>
                                        <li>
                                            <p className="mb-0">
                                                Payment Method
                                            </p>
                                            <h5 className="mb-0">Paypal</h5>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Payments</h4>
                            </div>
                            <div className="card-body">
                                <div className="payments-content">
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                value=""
                                                                id="flexCheckDefault"
                                                            />
                                                        </div>
                                                    </th>
                                                    <th>Service</th>
                                                    <th>Amount</th>
                                                    <th>Date</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                value=""
                                                                id="flexCheckDefault"
                                                            />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <img
                                                            src="/images/social/facebook.png"
                                                            alt=""
                                                            width="22"
                                                            className="me-3 img-fluid"
                                                        />
                                                        Facebook Ads
                                                    </td>
                                                    <td>$412</td>
                                                    <td>March 21, 2021</td>
                                                    <td>
                                                        <span className="badge px-3 py-2 bg-success">
                                                            Paid
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                value=""
                                                                id="flexCheckDefault"
                                                            />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <img
                                                            src="/images/social/youtube.png"
                                                            alt=""
                                                            width="22"
                                                            className="me-3 img-fluid"
                                                        />
                                                        Youtube Premium
                                                    </td>
                                                    <td>$175</td>
                                                    <td>December 26, 2021</td>
                                                    <td>
                                                        <span className="badge px-3 py-2 bg-danger">
                                                            Cancel
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                value=""
                                                                id="flexCheckDefault"
                                                            />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <img
                                                            src="/images/social/dropbox.png"
                                                            alt=""
                                                            width="22"
                                                            className="me-3 img-fluid"
                                                        />
                                                        Dropbox
                                                    </td>
                                                    <td>$521</td>
                                                    <td>February 16, 2021</td>
                                                    <td>
                                                        <span className="badge px-3 py-2 bg-success">
                                                            Paid
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                value=""
                                                                id="flexCheckDefault"
                                                            />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <img
                                                            src="/images/social/google-plus.png"
                                                            alt=""
                                                            width="22"
                                                            className="me-3 img-fluid"
                                                        />
                                                        Google Plus
                                                    </td>
                                                    <td>$125</td>
                                                    <td>June 17, 2021</td>
                                                    <td>
                                                        <span className="badge px-3 py-2 bg-warning">
                                                            Due
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                value=""
                                                                id="flexCheckDefault"
                                                            />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <img
                                                            src="/images/social/spotify.png"
                                                            alt=""
                                                            width="22"
                                                            className="me-3 img-fluid"
                                                        />
                                                        Spotify
                                                    </td>
                                                    <td>$521</td>
                                                    <td>August 01, 2021</td>
                                                    <td>
                                                        <span className="badge px-3 py-2 bg-success">
                                                            Paid
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                value=""
                                                                id="flexCheckDefault"
                                                            />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <img
                                                            src="/images/social/skype.png"
                                                            alt=""
                                                            width="25"
                                                            className="me-3 img-fluid"
                                                        />
                                                        Skype
                                                    </td>
                                                    <td>$234</td>
                                                    <td>January 19, 2021</td>
                                                    <td>
                                                        <span className="badge px-3 py-2 bg-warning">
                                                            Due
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
export default Bill;
