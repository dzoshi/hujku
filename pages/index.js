import { connect } from "react-redux";
import DoughnutChart from "../components/chart/DoughnutChart";
import BarChart from "../components/chart/LineChart";
import Layout from "../components/layout/Layout";
import BalanceDetails from "./../components/elements/BalanceDetails";
import GoalsBudget from "./../components/elements/GoalsBudget";
import TransactionHistory from "./../components/elements/TransactionHistory";

function Home({ lineData, doughnutData }) {
    return (
        <>
            <Layout
                headTitle="Dashboard"
                pageTitle="Dashboard"
                pageTitleSub={"Welcome Intez Dashboard"}
                pageClass={"dashboard"}
                parent={"Home"}
                child={"Dashboard"}
            >
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Stats</h4>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                        <div className="stat-widget d-flex align-items-center">
                                            <div className="widget-icon me-3 bg-primary">
                                                <span>
                                                    <i className="ri-wallet-line"></i>
                                                </span>
                                            </div>
                                            <div className="widget-content">
                                                <h3>432568</h3>
                                                <p>Last Balance</p>
                                            </div>

                                            {/* <p className="text-success mb-0">
                                +168.001%{" "}
                                <span>
                                    <i className="bi bi-arrow-up"></i>
                                </span>
                            </p> */}
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                        <div className="stat-widget d-flex align-items-center">
                                            <div className="widget-icon me-3 bg-secondary">
                                                <span>
                                                <i className="ri-wallet-2-line"></i>
                                                </span>
                                            </div>
                                            <div className="widget-content">
                                                <h3>245860</h3>
                                                <p>Hold Balance</p>
                                                {/* <p className="text-success mb-0">
                                    +168.001%{" "}
                                    <span>
                                        <i className="bi bi-arrow-up"></i>
                                    </span>
                                </p> */}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                        <div className="stat-widget d-flex align-items-center">
                                            <div className="widget-icon me-3 bg-success">
                                                <span>
                                                <i className="ri-wallet-3-line"></i>
                                                </span>
                                            </div>
                                            <div className="widget-content">
                                                <h3>25.35</h3>
                                                <p>Current Rate</p>
                                                {/* <p className="text-danger mb-0">
                                    -15.034%{" "}
                                    <span>
                                        <i className="bi bi-arrow-down"></i>
                                    </span>
                                </p> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                        <div className="stat-widget d-flex align-items-center">
                                            <div className="widget-icon me-3 bg-danger">
                                                <span>
                                                <i className="ri-wallet-3-line"></i>
                                                </span>
                                            </div>
                                            <div className="widget-content">
                                                <h3>22.56</h3>
                                                <p>Bounce Rate</p>
                                                {/* <p className="text-danger mb-0">
                                    -15.034%{" "}
                                    <span>
                                        <i className="bi bi-arrow-down"></i>
                                    </span>
                                </p> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6">
                        <div id="user-activity" className="card" data-aos="fade-up">
                            <div className="card-header">
                                <h4 className="card-title">{lineData.name}</h4>
                            </div>

                            <div className="card-body">
                                <BarChart lineData={lineData} />
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Unpaid Bills</h4>
                            </div>
                            <div className="card-body">
                                <div className="unpaid-content">
                                    <ul>
                                        <li>
                                            <p className="mb-0">Service</p>
                                            <h5 className="mb-0">Youtube Chanel</h5>
                                        </li>
                                        <li>
                                            <p className="mb-0">Issued</p>
                                            <h5 className="mb-0">March 17, 2021</h5>
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
                                            <p className="mb-0">Amount to pay</p>
                                            <h5 className="mb-0">$ 532.69</h5>
                                        </li>
                                        <li>
                                            <p className="mb-0">Payment Method</p>
                                            <h5 className="mb-0">Paypal</h5>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-xxl-4 col-lg-6">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12">
                                <div className="credit-card visa">
                                    <div className="type-brand">
                                        <h4>Debit Card</h4>
                                        <img src="/images/cc/visa.png" alt="" />
                                    </div>
                                    <div className="cc-number">
                                        <h6>1234</h6>
                                        <h6>5678</h6>
                                        <h6>7890</h6>
                                        <h6>9875</h6>
                                    </div>
                                    <div className="cc-holder-exp">
                                        <h5>Saiful Islam</h5>
                                        <div className="exp">
                                            <span>EXP:</span>
                                            <strong>12/21</strong>
                                        </div>
                                    </div>

                                    {/* <div className="cc-info">
                                        <div className="row justify-content-between align-items-center">
                                            <div className="col-5">
                                                <div className="d-flex">
                                                    <p className="me-3">Status</p>
                                                    <p>
                                                        <strong>Active</strong>
                                                    </p>
                                                </div>
                                                <div className="d-flex">
                                                    <p className="me-3">Currency</p>
                                                    <p>
                                                        <strong>USD</strong>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-xl-7">
                                                <div className="d-flex justify-content-between">
                                                    <div className="ms-3">
                                                        <p>Credit Limit</p>
                                                        <p>
                                                            <strong>
                                                                2000 USD
                                                            </strong>
                                                        </p>
                                                    </div>
                                                    <div id="circle1"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-xl-12 col-lg-12">
                                <div className="credit-card payoneer">
                                    <div className="type-brand">
                                        <h4>Debit Card</h4>
                                        <img
                                            src="/images/cc/payoneer.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="cc-number">
                                        <h6>1234</h6>
                                        <h6>5678</h6>
                                        <h6>7890</h6>
                                        <h6>9875</h6>
                                    </div>
                                    <div className="cc-holder-exp">
                                        <h5>Saiful Islam</h5>
                                        <div className="exp">
                                            <span>EXP:</span>
                                            <strong>12/21</strong>
                                        </div>
                                    </div>
                                    {/* <div className="cc-info">
                                        <div className="row">
                                            <div className="col-5">
                                                <div className="d-flex">
                                                    <p className="me-3">Status</p>
                                                    <p>
                                                        <strong>Active</strong>
                                                    </p>
                                                </div>
                                                <div className="d-flex">
                                                    <p className="me-3">Currency</p>
                                                    <p>
                                                        <strong>USD</strong>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-xl-7">
                                                <div className="d-flex justify-content-between">
                                                    <div className="ms-3">
                                                        <p>Credit Limit</p>
                                                        <p>
                                                            <strong>
                                                                1500/2000 USD
                                                            </strong>
                                                        </p>
                                                    </div>
                                                    <div id="circle3"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" col-xxl-4 col-xl-4 col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Balance Details</h4>
                            </div>
                            <div className="card-body">
                                <BalanceDetails />
                            </div>
                        </div>
                    </div>

                    <div className=" col-xxl-4 col-xl-4 col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Statistics</h4>
                            </div>
                            <div className="card-body">
                                <DoughnutChart doughnutData={doughnutData} />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Transaction History</h4>
                                <a href="#">See more</a>
                            </div>
                            <div className="card-body">
                                <TransactionHistory />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Goals Budget</h4>
                            </div>
                            <div className="card-body">
                                <GoalsBudget />
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}

const mapStateToProps = (state) => ({
    lineData: state.LineChart.expenses,
    doughnutData: state.DoughnutChart.statistics,
});
export default connect(mapStateToProps, {})(Home);
