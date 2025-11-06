import Layout from "../components/layout/Layout";

function CreateInvoice() {
    return (
        <>
            <Layout
               headTitle="Create Invoice"
               pageTitle="Create Invoice"
               pageTitleSub={"Welcome Intez Create Invoice page"}
               pageClass={"dashboard"}
               parent={"Home"}
               child={"Create Invoice"}
            >
                <div className="row">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">Create Invoice </h4>
                            <div className="btn-group">
                                <a href="#" className="btn btn-primary">Save</a>
                                <a href="#" className="btn btn-outline-primary">Send</a>
                            </div>
                        </div>
                        <div className="card-body">
                            <form className="invoice-form">
                                <form>
                                    <div className="row justify-content-between">
                                        <div className="col-xl-3">
                                            <div className="mb-3">
                                                <label className="form-label">Invoice Name</label>
                                                <input type="email" className="form-control" placeholder="Jonaed Bogdadi"/>
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Bill To</label>
                                                <input type="email" className="form-control"
                                                    placeholder="Jonaed@bogdad.com "/>
                                            </div>
                                        </div>
                                        <div className="col-xl-3">
                                            <div className="mb-3">
                                                <label className="form-label">Date</label>
                                                <input type="email" className="form-control" placeholder="21/03/2021"/>
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Due Date</label>
                                                <input type="email" className="form-control" placeholder="28/04/2021"/>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />

                                    <div className="row">
                                        <div className="mb-3 col-xl-6">
                                            <label className="form-label">Items</label>
                                            <input type="email" className="form-control" placeholder="Wireframe" />
                                        </div>
                                        <div className=" mb-3 col-xl-3">
                                            <label className="form-label">Quantity</label>
                                            <input type="email" className="form-control" placeholder="360"/>
                                        </div>
                                        <div className="mb-3 col-xl-2">
                                            <label className="form-label">Price</label>
                                            <input type="email" className="form-control" placeholder="82"/>
                                        </div>
                                        <div className="col-1">
                                            <span><i className="ri-close-fill"></i></span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="mb-3 col-xl-6">
                                            <input type="email" className="form-control" placeholder="High-Fidelity"/>
                                        </div>
                                        <div className="mb-3 col-xl-3">
                                            <input type="email" className="form-control" placeholder="220"/>
                                        </div>
                                        <div className="mb-3 col-xl-2">
                                            <input type="email" className="form-control" placeholder="67"/>
                                        </div>
                                        <div className="col-1">
                                            <span><i className="ri-close-fill"></i></span>
                                        </div>
                                    </div>

                                    <div className="add-reset d-flex justify-content-between">
                                        <button className="btn btn-outline-primary"><span><i
                                                    className="bi bi-plus"></i></span>Reset</button>
                                        <button className="btn btn-primary"><span><i className="bi bi-plus"></i></span>Add
                                            Item</button>
                                    </div>
                                </form>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
                
            </Layout>
        </>
    );
}
export default CreateInvoice;
