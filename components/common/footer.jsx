import ALink from '~/components/features/custom-link';

export default function Footer () {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-middle">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="widget widget-newsletter">
                                <div className="newsletter-info">
                                    <h4 className="widget-title">Get special offers and savings</h4>
                                    <p>Get all the latest information on Events, Sales and Offers.</p>
                                </div>

                                <form action="#" className="input-wrapper input-wrapper-inline input-wrapper-round">
                                    <input type="email" className="form-control" name="email" id="email" placeholder="Enter Your E-mail Address..." required />
                                    <button className="btn btn-primary" type="submit">Sign up</button>
                                </form>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="widget">
                                        <h4 className="widget-title">Custome Service</h4>

                                        <ul className="widget-body">
                                            <li>
                                                <ALink href="#">Payment Methods</ALink>
                                            </li>
                                            <li>
                                                <ALink href="/pages/contact-us">Money-back Guarantee!</ALink>
                                            </li>
                                            <li>
                                                <ALink href="#">Returns</ALink>
                                            </li>
                                            <li>
                                                <ALink href="#">Shipping</ALink>
                                            </li>
                                            <li>
                                                <ALink href="#">Terms and Conditions</ALink>
                                            </li>
                                            <li>
                                                <ALink href="/pages/account">Help</ALink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="widget widget-about">
                                        <h4 className="widget-title">About Us</h4>
                                        <ul className="widget-body">
                                            <li>
                                                <ALink href="/pages/about-us">About Us</ALink>
                                            </li>
                                            <li>
                                                <ALink href="#">Order History</ALink>
                                            </li>
                                            <li>
                                                <ALink href="#">Returns</ALink>
                                            </li>
                                            <li>
                                                <ALink href="#">Custom Service</ALink>
                                            </li>
                                            <li>
                                                <ALink href="#">Terms &amp; Condition</ALink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 order-lg-first">
                            <div className="widget widget-contact">
                                <h4 className="widget-title">Contact Info</h4>
                                <ul className="widget-body">
                                    <li>
                                        <label>Phone:</label>
                                        <ALink href="tel:#">Toll Free (123) 456-7890</ALink>
                                    </li>
                                    <li>
                                        <label>Email:</label>
                                        <ALink href="mailto:mail@riode.com">mail@riode.com</ALink>
                                    </li>
                                    <li>
                                        <label>Address:</label>
                                        <ALink href="#">123 Street Name, City, England</ALink>
                                    </li>
                                    <li>
                                        <label>WORKING DAYS / HOURS:</label>
                                        <ALink href="#">Mon - Sun / 9:00 AM - 8:00 PM</ALink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom d-block text-center">
                    <p className="copyright">Riode eCommerce &copy; 2021. All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}