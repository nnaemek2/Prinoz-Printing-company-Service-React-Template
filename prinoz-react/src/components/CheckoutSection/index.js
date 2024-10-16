import React from 'react';
import { Link } from 'react-router-dom';

const CheckoutSection = () => {
    return (
        <section className="checkout-section fix section-padding section-bg-2">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <form action="/submit-payment" method="post">
                            <div className="row g-4">
                                {/* Payment Method Selection */}
                                <div className="col-md-5 col-lg-4 col-xl-3">
                                    <div className="checkout-radio">
                                        <p className="primary-text">Select a Payment Method</p>
                                        <div className="checkout-radio-wrapper">
                                            <div className="checkout-radio-single">
                                                <input type="radio" className="form-check-input" id="cCard" name="pay-method" value="Credit/Debit Cards" required />
                                                <label htmlFor="cCard">Credit/Debit Cards</label>
                                            </div>
                                            <div className="checkout-radio-single">
                                                <input type="radio" className="form-check-input" id="paypal" name="pay-method" value="PayPal" required />
                                                <label htmlFor="paypal">PayPal</label>
                                            </div>
                                            <div className="checkout-radio-single">
                                                <input type="radio" className="form-check-input" id="payoneer" name="pay-method" value="Payoneer" required />
                                                <label htmlFor="payoneer">Payoneer</label>
                                            </div>
                                            <div className="checkout-radio-single">
                                                <input type="radio" className="form-check-input" id="visa" name="pay-method" value="Visa" required />
                                                <label htmlFor="visa">Visa</label>
                                            </div>
                                            <div className="checkout-radio-single">
                                                <input type="radio" className="form-check-input" id="mastercard" name="pay-method" value="Mastercard" required />
                                                <label htmlFor="mastercard">Mastercard</label>
                                            </div>
                                            <div className="checkout-radio-single">
                                                <input type="radio" className="form-check-input" id="fastPay" name="pay-method" value="Fastpay" required />
                                                <label htmlFor="fastPay">Fastpay</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Billing Address Section */}
                                <div className="col-md-7 col-lg-8 col-xl-9">
                                    <div className="checkout-single-wrapper">
                                        <div className="checkout-single boxshado-single">
                                            <h4>Billing Address</h4>
                                            <div className="checkout-single-form">
                                                <div className="row g-4">
                                                    <div className="col-lg-6">
                                                        <div className="input-single">
                                                            <input type="text" name="user-first-name" id="userFirstName" required placeholder="First Name" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="input-single">
                                                            <input type="text" name="user-last-name" id="userLastName" required placeholder="Last Name" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="input-single">
                                                            <input type="email" name="user-check-email" id="userCheckEmail" required placeholder="Your Email" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="input-single">
                                                            <select className="country-select" name="user-country" required>
                                                                <option value="usa">USA</option>
                                                                <option value="aus">Australia</option>
                                                                <option value="uk">UK</option>
                                                                <option value="ned">Netherlands</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="input-single">
                                                            <textarea name="user-address" id="userAddress" required placeholder="Address"></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Payment Details Section */}
                                        <div className="checkout-single checkout-single-bg">
                                            <h4>Payment Details</h4>
                                            <div className="checkout-single-form">
                                                <div className="row g-3">
                                                    <div className="col-lg-12">
                                                        <div className="input-single">
                                                            <label htmlFor="userCardNumber">Card Number</label>
                                                            <input type="text" name="user-card-number" id="userCardNumber" required placeholder="0000 0000 0000 0000" pattern="[0-9]{16}" title="Please enter a valid 16-digit card number" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="input-single">
                                                            <label htmlFor="userCardDate">Expiry Date</label>
                                                            <input type="text" id="userCardDate" name="user-card-date" required placeholder="MM/YY" pattern="(0[1-9]|1[0-2])\/[0-9]{2}" title="Please enter a valid expiry date in MM/YY format" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="input-single">
                                                            <label htmlFor="userCvc">CVC / CVV</label>
                                                            <input
                                                                type="text"
                                                                maxLength="3"
                                                                name="user-card-cvc"
                                                                id="userCvc"
                                                                required
                                                                placeholder="3 Digits"
                                                                pattern="\d{3}"
                                                                title="Please enter a valid 3-digit CVC/CVV"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="input-single">
                                                            <label htmlFor="userCardName">Name on Card</label>
                                                            <input type="text" name="user-card-name" id="userCardName" required placeholder="Name on Card" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Save Card Option */}
                                            <div className="input-single input-check payment-save">
                                                <input type="checkbox" className="form-check-input" name="save-for-next" id="saveForNext" />
                                                <label htmlFor="saveForNext">Save for my next payment</label>
                                            </div>

                                            {/* Submit Button */}
                                            <div className="mt-4">
                                                <Link to='/order_received' className="theme-btn">
                                                    <span> Pay Now</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>


    );
};

export default CheckoutSection;