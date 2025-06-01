import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import 'animate.css';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import leoni from "../assets/img/leoni_logo.jpeg";
import atig from "../assets/img/atig_logo.jpeg";
import shopify from "../assets/img/shopify_logo.png";
import medical from "../assets/img/medical_logo.png";

const experiences = [
    {
        title: " Internship",
        company_name: "Atig Recruiting",
        icon: atig,
        iconBg: "#E6DEDD",
        date: "July 2024 - August 2024",
        points: [
            "Development of a calendar management module for a recruitment application.",
            "Technologies used: Spring Boot, Angular.",
            "Participation in user needs analysis.",
        ],
    },
    {
        title: "Final Year Project Internship",
        company_name: "Medical Innovation Technology",
        icon: medical,
        iconBg: "#383E56",
        date: "February 2023 - June 2023",
        points: [
            "Development of a web and mobile assistance application for people with disabilities.",
            "Technologies used: Spring Boot, ReactJs, Android.",
            "Design and implementation of key features.",
            "Collaboration with a multidisciplinary team.",
        ],
    },
    {
        title: "E-Commerce Freelance",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#383E56",
        date: "January 2020 - March 2023",
        points: [
            "Management of e-commerce stores on Shopify.",
            "Graphic design: creation of logos and banners.",
            "Implementation of SEO strategies to improve search rankings.",
            "Full management of online sales cycle.",
        ],
    },
    {
        title: "Internship",
        company_name: "LEONI",
        icon: leoni,
        iconBg: "#E6DEDD",
        date: "January 2022 - February 2022",
        points: [
            "Development of an employee management system in native PHP.",
            "Creation of an e-learning platform with WordPress.",
            "Enhancement of back-end development skills.",
            "Participation in database design.",
        ],
    },
];

const ExperienceCard = ({ experience, index }) => (
    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
            background: "#806353",
            color: "#fff",
            borderRadius: "8px",
            boxShadow: "0 3px 10px rgba(0, 0, 0, 0.2)",
            width: "500px",
            maxWidth: "90%",
        }}
        contentArrowStyle={{ borderRight: "7px solid  #806353" }}
        date={experience.date}
        dateClassName="experience-date"
        iconStyle={{
            background: experience.iconBg,
            width: "50px",
            height: "50px",
            marginLeft: "-5px",
            boxShadow: "0 0 0 4px #1d1836",
        }}
        position={index % 2 === 0 ? "right" : "left"}
        icon={
            <div className="flex justify-center items-center w-full h-full rounded-full overflow-hidden">
                <img
                    src={experience.icon}
                    alt={experience.company_name}
                    className="w-[80%] h-[80%] object-contain rounded-full"
                    style={{ borderRadius: "50%" }}
                />
            </div>
        }
    >
        <div>
            <h3 className="text-white text-[24px] font-bold mb-1">{experience.title}</h3>
            <p className="text-beige text-[16px] font-semibold mb-2" style={{ margin: 0 }}>
                {experience.company_name}
            </p>
        </div>
        <ul className="list-disc ml-5 space-y-1">
            {experience.points.map((point, index) => (
                <li
                    key={`experience-point-${index}`}
                    className="text-white-100 text-[14px] pl-1 tracking-wider"
                >
                    {point}
                </li>
            ))}
        </ul>
    </VerticalTimelineElement>
);

export const Experience = () => {
    return (
        <section className="experience" id="experience">
            <Container>
                <div className="skill-header">
                    <h2>Experiences</h2>
                    <p>
                        Like a pawn on its path to promotion, my journey has been one of steady growth. <br />Each step, challenge, and experience has helped me<br /> level up my skills and mindset.
                    </p>
                </div>
                <Row className="align-items-center">
                    <Col xs={12} md={11} lg={9} className="offset-md-1 offset-lg-2">
                        <TrackVisibility once partialVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeInUp mt-5" : ""}>
                                    <VerticalTimeline lineColor="#806353" className="custom-timeline">
                                        {experiences.map((exp, idx) => (
                                            <ExperienceCard key={idx} experience={exp} index={idx} />
                                        ))}
                                    </VerticalTimeline>
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};