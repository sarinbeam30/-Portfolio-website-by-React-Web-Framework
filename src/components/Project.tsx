import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

/** IMPORT SCSS FILE */
import styles from '../Stylesheet/ProjectStyleSheet.module.scss';

/**  IMPORT LIBRARY */
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Project = (props: {
    ProjectArrayList: Array<{ image: string; label: string; caption: string; index: number }>;
}) => {
    const { ProjectArrayList } = props;

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    const ProjectArrayListLoop: any = () =>
        ProjectArrayList.map((project_array_list: { image: string; label: string; caption: string; index: number }) => (
            <div key={project_array_list.label.toString()} className={styles.image_carousel_layout}>
                <img src={project_array_list.image} className={styles.project_image} />
                <span>{project_array_list.label}</span>
                <span>{project_array_list.caption}</span>
            </div>
        ));

    return (
        <div id="project" className={styles.project_layout}>
            <div className={styles.project_Heading_layout}>
                <span className={styles.project_Heading_1}>PROJECT</span>
                <span className={styles.project_Heading_YEAR_4}>
                    <i>YEAR_4 && YEAR_3</i>
                </span>
            </div>
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={850}
                containerClass="carousel-container"
                removeArrowOnDeviceType={['tablet', 'mobile']}
                // deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-100-px"
            >
                {ProjectArrayList.map(
                    (project_array_list: { image: string; label: string; caption: string; index: number }) => (
                        <div key={project_array_list.label.toString()} className={styles.image_carousel_layout}>
                            <div className={styles.text_group}>
                                <h5>{project_array_list.label}</h5>
                                <span>{project_array_list.caption}</span>
                            </div>
                            <img src={project_array_list.image} className={styles.project_image} />
                        </div>
                    ),
                )}
            </Carousel>
        </div>
    );
};

export default Project;
