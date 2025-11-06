import Link from "next/link";
import Layout from "../components/layout/Layout";
function Invoice() {
    return (
        <>
            <Layout
                headTitle="Invoice"
                pageTitle="Invoice"
                pageTitleSub={"Welcome Intez Invoice page"}
                pageClass={"dashboard"}
                parent={"Home"}
                child={"Invoice"}
            >
                <div className="row">
                    <div class="col-xl-3 col-sm-6">
                        <div class="stat-widget d-flex align-items-center bg-white">
                            <div class="widget-icon me-3 bg-primary">
                                <span>
                                <i className="ri-file-copy-2-line"></i>
                                </span>
                            </div>
                            <div class="widget-content">
                                <h3>483</h3>
                                <p>Total Invoices</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6">
                        <div class="stat-widget d-flex align-items-center bg-white">
                            <div class="widget-icon me-3 bg-success">
                                <span>
                                <i className="ri-file-list-3-line"></i>
                                </span>
                            </div>
                            <div class="widget-content">
                                <h3>273</h3>
                                <p>Paid Invoices</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6">
                        <div class="stat-widget d-flex align-items-center bg-white">
                            <div class="widget-icon me-3 bg-warning">
                                <span>
                                <i className="ri-file-paper-line"></i>
                                </span>
                            </div>
                            <div class="widget-content">
                                <h3>121</h3>
                                <p>Unpaid Invoices</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6">
                        <div class="stat-widget d-flex align-items-center bg-white">
                            <div class="widget-icon me-3 bg-danger">
                                <span>
                                <i className="ri-file-paper-2-line"></i>
                                </span>
                            </div>
                            <div class="widget-content">
                                <h3>89</h3>
                                <p>Canceled Invoices</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-header flex-row">
                                <h4 className="card-title">Invoice </h4>
                                <Link href="/create-invoice">
                                    <a
                                        className="btn btn-primary"
                                    >
                                        <span>
                                            <i className="bi bi-plus"></i>
                                        </span>
                                    Create Invoice
                                </a>
                                </Link>
                            </div>
                            <div className="card-body">
                                <div className="invoice-table">
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
                                                    <th>Client</th>
                                                    <th>Amount</th>
                                                    <th>Status</th>
                                                    <th>Due</th>
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
                                                            src="/images/avatar/1.jpg"
                                                            alt=""
                                                            width="30"
                                                            className="me-2"
                                                        />
                                                        Weston P. Thomas
                                                    </td>
                                                    <td>$254</td>
                                                    <td>
                                                        <span className="badge px-3 py-2 bg-success">
                                                            Paid
                                                        </span>
                                                    </td>
                                                    <td>February 16, 2021</td>
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
                                                            src="/images/avatar/2.jpg"
                                                            alt=""
                                                            width="30"
                                                            className="me-2"
                                                        />
                                                        William D. Gibson
                                                    </td>
                                                    <td>$254</td>
                                                    <td>
                                                        <span className="badge px-3 py-2 bg-success">
                                                            Paid
                                                        </span>
                                                    </td>
                                                    <td>December 21, 2021</td>
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
                                                            src="/images/avatar/3.jpg"
                                                            alt=""
                                                            width="30"
                                                            className="me-2"
                                                        />
                                                        John C. Adams
                                                    </td>
                                                    <td>$254</td>
                                                    <td>
                                                        <span className="badge px-3 py-2 bg-success">
                                                            Paid
                                                        </span>
                                                    </td>
                                                    <td>March 21, 2021</td>
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
                                                            src="/images/avatar/4.jpg"
                                                            alt=""
                                                            width="30"
                                                            className="me-2"
                                                        />
                                                        John L. Foster
                                                    </td>
                                                    <td>$254</td>
                                                    <td>
                                                        <span className="badge px-3 py-2 bg-warning">
                                                            Due
                                                        </span>
                                                    </td>
                                                    <td>April 29, 2021</td>
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
                                                            src="/images/avatar/5.jpg"
                                                            alt=""
                                                            width="30"
                                                            className="me-2"
                                                        />
                                                        Terry P. Camacho
                                                    </td>
                                                    <td>$254</td>
                                                    <td>
                                                        <span className="badge px-3 py-2 bg-danger">
                                                            Cancel
                                                        </span>
                                                    </td>
                                                    <td>November 26, 2021</td>
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
export default Invoice;
