import { useState } from 'react';
import { Course } from '../catalog/courses';

interface CourseComponentProps {
    course: Course;
}

const CourseComponent = ({ course }: CourseComponentProps) => {
    const [liked, setLiked] = useState(false);

    const handleLike = async () => {
        if (!liked) {
            await fetch(`/api/courses/${course.id}/like`, {
                method: 'POST',
            });

            setLiked(true);
        }
    };

    return (
        <div key={course.id}>
            <h3>{course.name}</h3>
            <p>Total Likes: {course.totalLikes}</p>
            <button onClick={handleLike} disabled={liked}>
                {liked ? 'Liked' : 'Like'}
            </button>
        </div>
    );
};

export default CourseComponent;