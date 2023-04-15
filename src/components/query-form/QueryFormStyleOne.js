import React from 'react';
import bg from "../../assets/bg/3.jpg"

const QueryFormStyleOne = () => {
    return (
        <>
            <div className="bg-property pt-110 pb-110" data-overlay="theme-1" data-opacity="7" style={{ backgroundImage: `url(${bg})` }}>
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-xl-4 col-lg-4 col-md-12">
                            <div className="section-title quote-title mb-40">
                                <h2>Make An Inquiry</h2>
                                <p>Our team at Advanto will be ready to answer any questions or even showcase FarmLogic to you.</p>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-12">
                            <div className="quote-area-form ml-110 mr-110">
                                <h3>Inquiry</h3>
                                <form action="/">
                                    <div className="row">
                                        <div className="col-xl-6">
                                            <input type="text" placeholder="First Name" />
                                        </div>
                                        <div className="col-xl-6">
                                            <input type="text" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <input type="text" placeholder="Phone" />
                                            <textarea placeholder="Write Message here ..."></textarea>
                                            <button className="l-btn">Send Your inquiry</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default QueryFormStyleOne;