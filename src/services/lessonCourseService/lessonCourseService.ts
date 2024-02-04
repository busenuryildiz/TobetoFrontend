
import  BaseService  from "../../core/services/baseServices";
import { AddLessonCourseRequest } from "../../models/requests/lessonCourse/addLessonCourseRequest";
import { UpdateLessonCourseRequest } from "../../models/requests/lessonCourse/updateLessonCourseRequest";
import { AddLessonCourseResponse } from "../../models/responses/lessonCourse/addLessonCourseResponse";
import { GetAllLessonCourseResponse } from "../../models/responses/lessonCourse/getAllLessonCourseResponse";
import { GetLessonCourseDetailResponse } from "../../models/responses/lessonCourse/getLessonCourseDetailResponse";
import { UpdateLessonCourseResponse } from "../../models/responses/lessonCourse/updateLessonCourseResponse";


class LessonCourseService extends BaseService <
    GetAllLessonCourseResponse,
    GetLessonCourseDetailResponse,
    AddLessonCourseRequest,
    AddLessonCourseResponse,
    UpdateLessonCourseRequest,
    UpdateLessonCourseResponse
    >{
        constructor() {
            super();
            this.apiUrl = "LessonCourses";
        }

    }

    export default new LessonCourseService();