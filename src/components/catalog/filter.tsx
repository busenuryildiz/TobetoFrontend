import { Course } from './courses';

export const handlePriceFilterChange = (selectedPrice: string, courses: Course[], onFilterChange: (filteredCourses: Course[]) => void) => {
    if (selectedPrice === "Tüm Eğitimler") {
        onFilterChange(courses);
        return;
    }

    const filteredCourses = courses.filter(course => {
        if (selectedPrice === "Ücretli Eğitimler") {
            return course.price > 0;
        } else if (selectedPrice === "Ücretsiz Eğitimler") {
            return course.price === 0;
        }
        return false;
    });
    onFilterChange(filteredCourses);
};

export const handleEducationFilterChange = (selectedEducation: string, courses: Course[], onFilterChange: (filteredCourses: Course[]) => void) => {
    if (selectedEducation === "Tüm Eğitimler") {
        onFilterChange(courses);
        return;
    }

    const filteredCourses = courses.filter(course => {
        return course.categoryName === selectedEducation;
    });
    onFilterChange(filteredCourses);
};

export const handleCourseLevelFilterChange = (selectedCourseLevel: string, courses: Course[], onFilterChange: (filteredCourses: Course[]) => void) => {
    if (selectedCourseLevel === "Tüm Seviyeler") {
        onFilterChange(courses);
        return;
    }

    const filteredCourses = courses.filter(course => {
        return course.courseLevelName === selectedCourseLevel;
    });
    onFilterChange(filteredCourses);
};

export const handleSubjectFilterChange = (selectedSubject: string, courses: Course[], onFilterChange: (filteredCourses: Course[]) => void) => {
    if (selectedSubject === "Tüm Konular") {
        onFilterChange(courses);
        return;
    }

    const filteredCourses = courses.filter(course => {
        return course.courseSubjectName === selectedSubject;
    });
    onFilterChange(filteredCourses);
};
export const handleLanguageFilterChange = (selectedLanguage: string, courses: Course[], onFilterChange: (filteredCourses: Course[]) => void) => {
    if (selectedLanguage === "Tüm Diller") {
        onFilterChange(courses);
        return;
    }

    const filteredCourses = courses.filter(course => {
        return course.softwareLanguageName === selectedLanguage;
    });
    onFilterChange(filteredCourses);
};

export const handleInstructorFilterChange = (selectedInstructor: string, courses: Course[], onFilterChange: (filteredCourses: Course[]) => void) => {
    if (selectedInstructor === "Tüm Eğitmenler") {
        onFilterChange(courses);
        return;
    }

    const filteredCourses = courses.filter(course => {
        return course.instructorName === selectedInstructor;
    });
    onFilterChange(filteredCourses);
};
export const handleStatusFilterChange = (selectedStatus: string, courses: Course[], onFilterChange: (filteredCourses: Course[]) => void) => {
    if (selectedStatus === "Tüm Eğitimler") {
        onFilterChange(courses);
        return;
    }

    const filteredCourses = courses.filter(course => {
        return course.status === selectedStatus;
    });
    onFilterChange(filteredCourses);
};