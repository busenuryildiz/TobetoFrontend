import React, { useState } from 'react';

const MyProfileButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleEditProfile = () => {
        window.location.href = "/profilim/profilimi-duzenle/kisisel-bilgilerim";
    };

    return (
        <div className="d-flex">
            <span className="cv-edit-icon" onClick={handleEditProfile}></span>
            <div className="dropdown">
                <button
                    type="button"
                    id="dropdown-basic"
                    aria-expanded="false"
                    className="cv-share-icon dropdown-toggle btn btn-primary"
                    style={{ backgroundColor: "transparent", border: "none" }}
                    onClick={toggleMenu}
                />
                {isOpen && (
                    <div
                        x-placement="bottom-end"
                        aria-labelledby="dropdown-basic"
                        className="dropdown-menu show"
                        style={{
                            padding: "10px",
                            width: "20vw",
                            borderWidth: "1px",
                            borderColor: "rgb(153, 51, 255)",
                            backgroundColor: "rgb(255, 255, 255)",
                            position: "absolute",
                            inset: "0px 0px auto auto",
                            transform: "translate(0px, 31px)"
                        }}
                        data-popper-reference-hidden="false"
                        data-popper-escaped="false"
                        data-popper-placement="bottom-end"
                    >
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <p style={{ color: "rgb(130, 130, 130)", fontWeight: 500 }}>Profilimi Paylaş</p>
                            <div
                                style={{
                                    position: "relative",
                                    display: "inline-block",
                                    textAlign: "left",
                                    opacity: 1,
                                    direction: "ltr",
                                    borderRadius: "14px",
                                    transition: "opacity 0.25s ease 0s",
                                    touchAction: "none",
                                    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                                    userSelect: "none"
                                }}
                            >
                                <div
                                    className="react-switch-bg"
                                    style={{
                                        height: "28px",
                                        width: "56px",
                                        margin: "0px",
                                        position: "relative",
                                        background: "rgb(153, 51, 255)",
                                        borderRadius: "14px",
                                        cursor: "pointer",
                                        transition: "background 0.25s ease 0s"
                                    }}
                                >
                                    <div
                                        style={{
                                            height: "28px",
                                            width: "30px",
                                            position: "relative",
                                            opacity: 1,
                                            pointerEvents: "none",
                                            transition: "opacity 0.25s ease 0s"
                                        }}
                                    >
                                        <svg height="100%" width="100%" viewBox="-2 -5 17 21" style={{ position: "absolute", top: "0px" }}>
                                            <path d="M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0" fill="#fff" fillRule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <div
                                        style={{
                                            height: "28px",
                                            width: "30px",
                                            position: "absolute",
                                            opacity: 0,
                                            right: "0px",
                                            top: "0px",
                                            pointerEvents: "none",
                                            transition: "opacity 0.25s ease 0s"
                                        }}
                                    >
                                        <svg viewBox="-2 -5 14 20" height="100%" width="100%" style={{ position: "absolute", top: "0px" }}>
                                            <path d="M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12" fill="#fff" fillRule="evenodd"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div
                                    className="react-switch-handle"
                                    style={{
                                        height: "26px",
                                        width: "26px",
                                        background: "rgb(255, 255, 255)",
                                        display: "inline-block",
                                        cursor: "pointer",
                                        borderRadius: "50%",
                                        position: "absolute",
                                        transform: "translateX(29px)",
                                        top: "1px",
                                        outline: "0px",
                                        border: "0px",
                                        transition: "background-color 0.25s ease 0s, transform 0.25s ease 0s, box-shadow 0.15s ease 0s"
                                    }}
                                ></div>
                                <input type="checkbox" role="switch" aria-checked="true" style={{ border: "0px", clip: "rect(0px, 0px, 0px, 0px)", height: "1px", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", width: "1px" }}></input>
                            </div>
                        </div>
                        <div className="col-12 my-2 mt-0">
                            <label className="input-label-text">Profil Linki</label>
                            <div className="section-header tobeto-input">
                                <input readOnly className="form-control" type="text" value="https://tobeto.com/profiller/33381e49-ea5f-4192-bb6b-b8c0476ff335"></input>
                                <i className="me-2 ms-3 fa fa-clone cursor-pointer" aria-hidden="true" style={{ fontSize: "25px" }}></i>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default MyProfileButton;
