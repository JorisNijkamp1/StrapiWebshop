import React, {useContext, useState} from 'react';
import {Tab, TabList, TabPanel, Tabs} from 'react-tabs';
import Modal from 'react-modal';

import ALink from '~/components/features/custom-link';
import AuthContext from "~/context/AuthContext";

const customStyles = {
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.4)',
        display: 'flex'
    }
};

let index = 0;

Modal.setAppElement("#__next");

function LoginModal() {
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState("");
    const {loginUser } = useContext(AuthContext);

    function closeModal() {
        document.querySelector(".ReactModal__Overlay").classList.add('removed');
        document.querySelector(".login-popup.ReactModal__Content").classList.remove("ReactModal__Content--after-open");
        document.querySelector(".login-popup-overlay.ReactModal__Overlay").classList.remove("ReactModal__Overlay--after-open");
        setTimeout(() => {
            setOpen(false);
        }, 330);
    }

    function openModal(e, loginIndex = 0) {
        e.preventDefault();
        index = loginIndex;
        setOpen(true);
    }

    const handleSubmit = event => {
        event.preventDefault();
        loginUser(email);
    }

    return (
        <>
            <a className="login" href="#" onClick={openModal}><i className="d-icon-user"></i></a>
            {
                open ?
                    <Modal
                        isOpen={open}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Login Modal"
                        className="login-popup"
                        overlayClassName="login-popup-overlay"
                        shouldReturnFocusAfterClose={false}
                        id="login-modal"
                    >
                        <div className="form-box">
                            <div className="tab tab-nav-simple tab-nav-boxed form-tab">
                                <Tabs selectedTabClassName="active" selectedTabPanelClassName="active"
                                      defaultIndex={index}>
                                    <TabList
                                        className="nav nav-tabs nav-fill align-items-center border-no justify-content-center mb-5">
                                        <Tab className="nav-item">
                                            <span className="nav-link border-no lh-1 ls-normal">Sign in</span>
                                        </Tab>
                                        <li className="delimiter">or</li>
                                        <Tab className="nav-item">
                                            <span className="nav-link border-no lh-1 ls-normal">Register</span>
                                        </Tab>
                                    </TabList>
                                    <div className="tab-content">
                                        <TabPanel className="tab-pane">
                                            <form onSubmit={handleSubmit}>
                                                <div className="form-group">
                                                    <label htmlFor="singin-email">Your email address:</label>
                                                    <input
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        type="email"
                                                        className="form-control" id="register-email"
                                                        name="register-email" placeholder="Your Email address *"
                                                        required/>
                                                </div>
                                                <button className="btn btn-dark btn-block btn-rounded"
                                                        type="submit">Login
                                                </button>
                                            </form>
                                            <div className="form-choice text-center">
                                                <label className="ls-m">or Login With</label>
                                                <div className="social-links">
                                                    <ALink href="#"
                                                           className="social-link social-google fab fa-google border-no"/>
                                                    <ALink href="#"
                                                           className="social-link social-facebook fab fa-facebook-f border-no"/>
                                                    <ALink href="#"
                                                           className="social-link social-twitter fab fa-twitter border-no"/>
                                                </div>
                                            </div>
                                        </TabPanel>
                                        <TabPanel className="tab-pane">
                                            <form onSubmit={handleSubmit}>
                                                <div className="form-group">
                                                    <label htmlFor="singin-email">Your email address:</label>
                                                    <input
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        type="email"
                                                        className="form-control" id="register-email"
                                                        name="register-email" placeholder="Your Email address *"
                                                        required/>
                                                </div>
                                                <button className="btn btn-dark btn-block btn-rounded"
                                                        type="submit">Register
                                                </button>
                                            </form>
                                            <div className="form-choice text-center">
                                                <label className="ls-m">or Register With</label>
                                                <div className="social-links">
                                                    <ALink href="#"
                                                           className="social-link social-google fab fa-google border-no"/>
                                                    <ALink href="#"
                                                           className="social-link social-facebook fab fa-facebook-f border-no"/>
                                                    <ALink href="#"
                                                           className="social-link social-twitter fab fa-twitter border-no"/>
                                                </div>
                                            </div>
                                        </TabPanel>
                                    </div>
                                </Tabs>
                            </div>
                        </div>

                        <button title="Close (Esc)" type="button" className="mfp-close" onClick={closeModal}>
                            <span>×</span></button>
                    </Modal> : ''
            }
        </>
    )
}

export default (LoginModal);
