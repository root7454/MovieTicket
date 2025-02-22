import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Bookshow() {
    const location = useLocation();
    const show = location.state.show;

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Your Ticket Sended Into Your Number");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="ticketform container-float pt-5">
                <div className="container border border-primary rounded detail_box">
                    <div className="row mt-5 fs-5 justify-content-center">
                        <div className="title">
                            <h1>Movie Name: {show.name}</h1>
                        </div>
                        <div className="col-md-4 card m-2">
                            <div className="field">Your Name</div>
                            <input type="text" name="name" id="name" required />
                        </div>
                        <div className="col-md-4 card m-2">
                            <div className="field">Phone No</div>
                            <input type="number" name="phone" id="phone" required />
                        </div>
                        <div className="col-md-4 card m-2">
                            <div className="field">Seat Type</div>
                            <select name="seatType" required>
                                <option value="Balcony">Balcony</option>
                                <option value="Middle">Middle</option>
                                <option value="Lower">Lower</option>
                            </select>
                        </div>
                        <div className="col-md-4 card m-2">
                            <div className="field">Time Period</div>
                            <select name="timePeriod" required>
                                <option value="08:30pm">08:30pm</option>
                                <option value="10:30pm">10:30pm</option>
                                <option value="12:30pm">12:30pm</option>
                            </select>
                        </div>
                        <div className="col-md-4 card m-2">
                            <div className="field">Priority Seat No.</div>
                            <input type="text" name="seatNo" required />
                        </div>
                        <div className="col-md-4 card m-2">
                            <div className="field">Payment Option</div>
                            <select name="paymentOption" required>
                                <option value="Net Banking">Net Banking</option>
                                <option value="UPI">UPI</option>
                                <option value="Debit Card">Debit Card</option>
                                <option value="Credit Card">Credit Card</option>
                            </select>
                        </div>
                        <button type="submit" className="d-block mt-5 bg-primary">
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
}
