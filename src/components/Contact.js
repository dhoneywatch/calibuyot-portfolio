import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
    const [alert, setAlert] = useState({ show: false, type: "", message: "" });
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm("service_defrrxq", "template_wjggrgd", form.current, {
                publicKey: "Ggr2rsihg5ZhWcvEH",
            })
            .then(
                () => {
                    form.current.reset();
                    setAlert({
                        show: true,
                        type: "success",
                        message: "Your message has been sent successfully!",
                    });
                    setTimeout(
                        () => setAlert({ show: false, type: "", message: "" }),
                        5000
                    );
                },
                (error) => {
                    setAlert({
                        show: true,
                        type: "failed",
                        message:
                            "There was an error sending your message. Please try again later.",
                    });
                    setTimeout(
                        () => setAlert({ show: false, type: "", message: "" }),
                        5000
                    );
                }
            );
    };

    return (
        <section className="contact-section py-5" id="contact">
            <div className="container py-5">
                {alert.show ? (
                    <div className="container custom-alert">
                        <div
                            class={`alert custom-alert-${alert.type}`}
                            role="alert"
                        >
                            {alert.message}
                        </div>
                    </div>
                ) : null}

                <div className="container d-flex flex-column flex-lg-row justify-content-lg-around align-items-center">
                    <div className="col-12 col-lg-5">
                        <div className="d-flex justify-content-center justify-content-lg-start">
                            <div className="contact-hr mb-4"></div>
                        </div>
                        <h1 className="headings text-center text-lg-start contact-title">
                            Let's <span>work</span> together!
                        </h1>
                        <p className="normal-text text-center text-lg-start contact-desc mb-3">
                            I’d love to hear from you! Whether you have a
                            question, feedback, or just want to say hello, feel
                            free to reach out using any of the methods below.
                            Alternatively, you can use the form on the side to
                            send me a direct message.
                        </p>
                        <div className="d-flex flex-column align-items-center align-items-lg-start gap-2">
                            <div className="d-flex align-items-center gap-3">
                                <i class="bi bi-envelope-fill contact-icon"></i>
                                <h3 className="normal-text mb-0 contact-desc">
                                    dhonematthews.calibuyot@gmail.com
                                </h3>
                            </div>
                            <div className="d-flex align-items-center gap-3">
                                <i class="bi bi-telephone-fill contact-icon"></i>
                                <h3 className="normal-text mb-0 contact-desc">
                                    +63 916-211-7358
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-5 mt-5 mt-lg-0">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="row mb-4">
                                <label className="form-label mb-1">Name</label>
                                <input
                                    type="text"
                                    name="client_name"
                                    className="form-control"
                                    required
                                />
                            </div>
                            <div className="row mb-4">
                                <label className="form-label mb-1">Email</label>
                                <input
                                    type="email"
                                    name="client_email"
                                    className="form-control"
                                    required
                                />
                            </div>
                            <div className="row mb-4">
                                <label className="form-label mb-1">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    className="form-control"
                                    required
                                />
                            </div>
                            <div className="row mb-4">
                                <label className="form-label mb-1">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    className="form-control"
                                />
                            </div>
                            <div className="d-flex justify-content-center pt-3">
                                <button
                                    type="submit"
                                    className="button button-fill-dark"
                                    required
                                >
                                    Submit message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
