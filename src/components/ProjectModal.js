import React from "react";
import Tags from "./Tags";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ProjectModal = ({ toggleModal, hideModal, title, desc, tags, images }) => {
    const tagList = [];
    for (let tag in tags) {
        tagList.push(tag);
    }

    const imageList = [];
    for (let image in images) {
        imageList.push(image);
    }

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
      };

    return (
        <div class={toggleModal}>
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">{title}</h5>
                        <button
                            type="button"
                            className="close-button"
                            onClick={hideModal}
                        >
                            <i class="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                    <div class="modal-body">
                        <Slider {...settings}>
                            {imageList.map((image) => {
                                return (
                                    <div className="slider-card">
                                        <img
                                            src={images[image].src}
                                            alt="..."
                                            className="card-img-top"
                                        />
                                        <p className="text-center mb-0 pt-2">{images[image].caption}</p>
                                    </div>
                                );
                            })}
                        </Slider>
                        <p className="modal-text pt-5">{desc}</p>
                        <div className="d-flex justify-content-center align-items-center gap-2 flex-wrap">
                            {tagList.map((tag) => {
                                return <Tags tag={tags[tag]} />;
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
