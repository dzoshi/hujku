import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
function TransactionHistory() {
    const [open, setOpen] = useState("p1");
    return (
        <>
            <div className="invoice-content" style={{ height: "295px" }}>
                <PerfectScrollbar>
                    <ul>
                        <li
                            className={`${
                                open === "p1"
                                    ? "d-flex justify-content-between active"
                                    : "d-flex justify-content-between"
                            }`}
                            onMouseOver={() => setOpen("p1")}
                        >
                            <div className="d-flex align-items-center">
                                <div className="invoice-user-img me-3">
                                    <img
                                        src="/images/avatar/1.jpg"
                                        alt=""
                                        width="50"
                                    />
                                </div>
                                <div className="invoice-info">
                                    <h5 className="mb-0">Terry P. Camacho</h5>
                                    <p>5 january 2021 at 10.15 pm</p>
                                </div>
                            </div>
                            <div className="text-end">
                                <h5 className="mb-2">+450.00</h5>
                                <span className=" text-white bg-success">Paid</span>
                            </div>
                        </li>
                        <li
                            className={`${
                                open === "p2"
                                    ? "d-flex justify-content-between active"
                                    : "d-flex justify-content-between"
                            }`}
                            onMouseOver={() => setOpen("p2")}
                        >
                            <div className="d-flex align-items-center">
                                <div className="invoice-user-img me-3">
                                    <img
                                        src="/images/avatar/2.jpg"
                                        alt=""
                                        width="50"
                                    />
                                </div>
                                <div className="invoice-info">
                                    <h5 className="mb-0">John L. Foster</h5>
                                    <p>5 january 2021 at 10.15 pm</p>
                                </div>
                            </div>
                            <div className="text-end">
                                <h5 className="mb-2">+450.00</h5>
                                <span className=" text-white bg-warning">Due</span>
                            </div>
                        </li>
                        <li
                            className={`${
                                open === "p3"
                                    ? "d-flex justify-content-between active"
                                    : "d-flex justify-content-between"
                            }`}
                            onMouseOver={() => setOpen("p3")}
                        >
                            <div className="d-flex align-items-center">
                                <div className="invoice-user-img me-3">
                                    <img
                                        src="/images/avatar/3.jpg"
                                        alt=""
                                        width="50"
                                    />
                                </div>
                                <div className="invoice-info">
                                    <h5 className="mb-0">John C. Adams</h5>
                                    <p>5 january 2021 at 10.15 pm</p>
                                </div>
                            </div>
                            <div className="text-end">
                                <h5 className="mb-2">+450.00</h5>
                                <span className=" text-white bg-danger">
                                    Cancel
                                </span>
                            </div>
                        </li>
                        <li
                            className={`${
                                open === "p4"
                                    ? "d-flex justify-content-between active"
                                    : "d-flex justify-content-between"
                            }`}
                            onMouseOver={() => setOpen("p4")}
                        >
                            <div className="d-flex align-items-center">
                                <div className="invoice-user-img me-3">
                                    <img
                                        src="/images/avatar/4.jpg"
                                        alt=""
                                        width="50"
                                    />
                                </div>
                                <div className="invoice-info">
                                    <h5 className="mb-0">Weston P. Thomas</h5>
                                    <p>5 january 2021 at 10.15 pm</p>
                                </div>
                            </div>
                            <div className="text-end">
                                <h5 className="mb-2">+450.00</h5>
                                <span className=" text-white bg-success">Paid</span>
                            </div>
                        </li>
                    </ul>
                </PerfectScrollbar>
            </div>
        </>
    );
}
export default TransactionHistory;
