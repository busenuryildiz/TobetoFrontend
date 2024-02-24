import React, { useState } from 'react';
import { Pagination } from 'react-bootstrap';

export interface Course {
    id: number;
    name: string;
    imagePath: string;
    instructorName: string;
    duration: number;
    courseLevelName: string;
    softwareLanguageName: string;
    category: string;
    categoryName: string;
    price: number;
    totalLikes: number;
    courseType: string;
    courseSubjectName: string;
    status: string;
}

interface CoursesProps {
    courses: Course[];
}

const Courses: React.FC<CoursesProps> = ({ courses }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [coursesPerPage] = useState(12);
    const indexOfLastCourse = currentPage * coursesPerPage;
    const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;

    const filteredCourses = courses.filter(course => course.courseType === "Catalog");
    const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
    const totalPages = Math.ceil(courses.length / coursesPerPage);
    return (
        <div className="col-lg-9 col-md-8 col-12">
            <div className="row gy-6 gx-3">
                {currentCourses.map(course => {
                    const hours = Math.floor(course.duration / 60);
                    const minutes = course.duration % 60;
                    const formattedDuration = hours > 0 ? `${hours} sa ${minutes} dk` : `${minutes} dk`;

                    return (
                        <div key={course.id} className="col-lg-4 col-md-6 col-12 educard-mobile" style={{ position: 'relative', cursor: 'pointer', marginTop: '1.5rem' }}>
                            <div className="education-box-new fade-in">
                                <img className="edubox-img" src={course.imagePath} alt={course.name} />
                                <div className="content">
                                    <div>
                                        <div className="property">
                                            <div>
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/1200/svg"><path d="M13.3334 14V12.6667C13.3334 11.9594 13.0525 11.2811 12.5524 10.781C12.0523 10.281 11.374 10 10.6667 10H5.33341C4.62617 10 3.94789 10.281 3.4478 10.781C2.9477 11.2811 2.66675 11.9594 2.66675 12.6667V14" stroke="#fff" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.99992 7.33333C9.47268 7.33333 10.6666 6.13943 10.6666 4.66667C10.6666 3.19391 9.47268 2 7.99992 2C6.52716 2 5.33325 3.19391 5.33325 4.66667C5.33325 6.13943 6.52716 7.33333 7.99992 7.33333Z" stroke="#fff" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                                <span className="pro">{course.instructorName}</span>
                                            </div>
                                            <div>
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/1200/svg">
                                                    <g clipPath="url(#clip0_24_412)">
                                                        <path d="M7.99992 14.6667C11.6818 14.6667 14.6666 11.6819 14.6666 8C14.6666 4.3181 11.6818 1.33333 7.99992 1.33333C4.31802 1.33333 1.33325 4.3181 1.33325 8C1.33325 11.6819 4.31802 14.6667 7.99992 14.6667Z" stroke="#fff" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        <path d="M8 4V8L10.6667 9.33333" stroke="#fff" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_24_412">
                                                            <rect width="16" height="16" fill="white"></rect>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <span className="pro">{formattedDuration}</span>
                                            </div>
                                        </div>
                                        <div className="name">{course.name}</div>
                                    </div>
                                </div>
                                <div className="prog-cont">
                                    <div className="entry-btn"></div>
                                </div>
                            </div>
                        </div>
                    );

                })}
                <Pagination className="justify-content-center mt-4">
                    <div className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                        <button className="page-link" tabIndex={0} role="link" aria-disabled={currentPage === 1} aria-label="Previous page" onClick={() => paginate(currentPage - 1)}></button>
                    </div>
                    {Array.from(Array(totalPages).keys()).map(number => (
                        <div key={number + 1} className={`page-item ${currentPage === number + 1 ? 'active' : ''}`}>
                            <button className="page-link" tabIndex={0} aria-label={`Page ${number + 1}`} onClick={() => paginate(number + 1)}>
                                {number + 1}
                            </button>
                        </div>
                    ))}
                    <div className={`page-item ${currentPage === totalPages || currentCourses.length < coursesPerPage ? 'disabled' : ''}`}>
                        <button className="page-link" tabIndex={0} role="link" aria-disabled={currentPage === totalPages || currentCourses.length < coursesPerPage} aria-label="Next page" onClick={() => paginate(currentPage + 1)}></button>
                    </div>
                </Pagination>
            </div>
        </div>
    );
};

export default Courses;
