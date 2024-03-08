import React, { useEffect, useState } from "react";
import IdentityCard from "./IdentityCard";
import Navi from "../../../components/navbar/Navi";
import MyProfileButton from "./MyProfileButton";
import AboutMe from "./AboutMe";
import { useSelector } from "react-redux";
import axios from "axios";
import UserProfileResponse from "./UserProfileResponse";
import UserSkills from "./UserSkills";
import UserLanguageResponse from "./UserLanguageResponse";
import UserLanguages from "./UserLanguages";
import UserLanguagesBackendResponse from "./UserLanguagesBackendResponse";
import UserCertificateResponse from "./UserCertificateResponse";
import UserCertificates from "./UserCertificates";
import UserSocialMediaAccounts from "./UserSocialMediaAccounts";
import UserSocialMediaAccountResponse from "./SocialMediaAccountResponse";
import TobetoSuccessModelChart from "./TobetoSuccessModelChart";
import UserExam from "./UserExam";
import UserBadges from "./UserBadges";
import CalendarHeatmapComponent from "./CalendarHeatmapComponent";
import UserAssignmentsAndDatesResponse from "./UserAssignmentsAndDatesResponse";
import UserExperienceResponse from "./UserExperienceResponse";
import UserEducationResponse from "./UserEducationResponse";
import UserExperienceAndEducation from "./UserExperienceAndEducation";
import StudenSkillIdAndStudentSkillNameResponse from "./StudenSkillIdAndStudentSkillNameResponse ";
import { BASE_API_URL } from "../../../enviroment/enviroment";

const MyProfile = () => {
  const user = useSelector((state: any) => state.auth.user);
  const [userData, setUserData] = useState<UserProfileResponse>({
    userId: "",
    firstName: "",
    lastName: "",
    email: "",
    imagePath: null,
    birthDate: null,
    phoneNumber: null,
    description: null,
  });

  const [userSkills, setUserSkills] = useState<
    StudenSkillIdAndStudentSkillNameResponse[]
  >([]);
  const [userLanguages, setUserLanguages] = useState<UserLanguageResponse[]>(
    []
  );
  const [userCertificates, setUserCertificates] = useState<
    UserCertificateResponse[]
  >([]);
  const [userSocialMediaAccounts, setUserSocialMediaAccounts] = useState<
    UserSocialMediaAccountResponse[]
  >([]);
  const [examResults, setExamResults] = useState<UserExamResponse[]>([]);
  const [userBadges, setUserBadges] = useState<UserBadgesResponse[]>([]);
  const [assignments, setAssignments] = useState<
    UserAssignmentsAndDatesResponse[]
  | null>([]);
  const [experienceData, setExperienceData] = useState<
    UserExperienceResponse[]
  >([]);
  const [educationData, setEducationData] = useState<UserEducationResponse[]>(
    []
  );

  useEffect(() => {
    if (user) {
      axios
        .get(
          `${BASE_API_URL}Users/GetAllUserInformationById?id=${user.id}`
        )
        .then((response) => {
          setUserData(response.data);
          console.log(response.data)
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });

      axios
        .get<StudenSkillIdAndStudentSkillNameResponse[]>(
          `${BASE_API_URL}StudentSkills/GetStudentSkillsByUserIdAsync?userId=${user.id}`
        )
        .then((response) => {

          setUserSkills(response.data);

          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error fetching user skills:", error);
        });

      axios
        .get<UserLanguagesBackendResponse>(
          `${BASE_API_URL}UserLanguages/GetUserLanguageAndLevelByUserId?userId=${user.id}`
        )
        .then((response) => {
          setUserLanguages(response.data.items);
        })
        .catch((error) => {
          console.error("Error fetching user languages:", error);
        });

      axios
        .get<UserCertificateResponse[]>(
          `${BASE_API_URL}Certificates/GetUsersAllCertificates?userId=${user.id}`
        ) // Sertifikaları çekiyoruz
        .then((response) => {
          setUserCertificates(response.data);
        })
        .catch((error) => {
          console.error("Error fetching user certificates:", error);
        });

      axios
        .get<UserSocialMediaAccountResponse[]>(
          `${BASE_API_URL}SocialMediaAccounts/GetUsersAllSocialMediaAccount?userId=${user.id}`
        )
        .then((response) => {
          setUserSocialMediaAccounts(response.data);
        })
        .catch((error) => {
          console.error("Error fetching social media accounts:", error);
        });

      axios
        .get<UserExamResponse[]>(
          `${BASE_API_URL}ExamOfUsers/GetUsersExamResultInfo?userId=${user.id}`
        )
        .then((response) => {
          setExamResults(response.data);
        })
        .catch((error) => {
          console.error("Error fetching exam results:", error);
        });

      axios
        .get<UserBadgesResponse[]>(
          `${BASE_API_URL}StudentCourses/GetBadgesForCompletedCourses?userId=${user.id}`
        )
        .then((response) => {
          setUserBadges(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error fetching badge images:", error);
        });

      axios
        .get<UserAssignmentsAndDatesResponse[]>(
          `${BASE_API_URL}StudentAssignments/GetStudentAssignmentAndDateByUserId?userId=${user.id}`
        )
        .then((response) => {
          setAssignments(response.data);
        })
        .catch((error) => {
          console.error("Error fetching assignment data:", error);
        });

      axios
        .get(
          `${BASE_API_URL}Users/GetUserExperienceAndEducationByUserId?userId=${user.id}`
        )
        .then((response) => {
          setExperienceData(
            response.data.items[0].userExperienceResponses || []
          );
          setEducationData(
            response.data.items[0].userEducationInformationResponses || []
          );
        })
        .catch((error) => {
          console.error("Error fetching experience and education data:", error);
        });
    }
  }, [user]);

  console.log(userData);

  return (
    <div>
      <Navi />
      <div className="container" style={{ minHeight: "100vh" }}>
        <div className="row " style={{ marginTop: "1.5em" }}>
          <div className="col-md-12 d-flex justify-content-end">
            <MyProfileButton />
          </div>{" "}
        </div>
        <div className="row">
          <div className="col-md-4 col-12">
            <div className="row">
              <IdentityCard userData={userData} />
              <AboutMe description={userData.description} />
              <UserSkills skills={userSkills} />
              <UserLanguages userLanguages={userLanguages} />
              <UserCertificates certificates={userCertificates} />
              <UserSocialMediaAccounts
                socialMediaAccounts={userSocialMediaAccounts}
              />
            </div>
          </div>
          <div className="col-md-8 col-12">
            <div className="row">
              <TobetoSuccessModelChart />
              <UserExam examResults={examResults} />
              <UserBadges userBadges={userBadges} />
              <CalendarHeatmapComponent assignmentData={assignments} />
              <UserExperienceAndEducation
                experienceData={experienceData}
                educationData={educationData}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
