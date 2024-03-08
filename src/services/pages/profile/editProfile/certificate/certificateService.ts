import axios from 'axios';
import { AddEducationLifeRequest } from '../../../../../models/requests/EducationLife/addEducationLifeRequest';
import { AddEducationLifeResponse } from '../../../../../models/responses/EducationLife/addEducationLifeResponse';
import { DeleteEducationLifeResponse } from '../../../../../models/responses/EducationLife/deleteEducationLifeResponse';
import { GetAllEducationLifeResponse } from '../../../../../models/responses/EducationLife/getAllEducationLifeResponse';
import { UpdateEducationLifeRequest } from '../../../../../models/requests/EducationLife/updateEducationLifeRequest';
import { UpdateEducationLifeResponse } from '../../../../../models/responses/EducationLife/updatedEducationLifeResponse';
import { UserEducationInformationResponse } from '../../../../../models/responses/Users/userEducationInformationResponse';
import { AddCertificateRequest } from '../../../../../models/requests/Certificate/addCertificateRequest';
import { AddCertificateResponse } from '../../../../../models/responses/Certificate/addCertificateResponse';
import { DeleteCertificateResponse } from '../../../../../models/responses/Certificate/deleteCertificateResponse';
import { GetUserAllCertificateResponse } from '../../../../../models/responses/Certificate/getUserAllCertificateResponse';
import { BASE_API_URL } from '../../../../../enviroment/enviroment';

export const CertificateService = {
  
  // Yeni sertifika ekleme
  addCertificate: async (newCertificate: AddCertificateRequest): Promise<AddCertificateResponse> => {
    try {
        const response = await axios.post(
            `${BASE_API_URL}/Certificates/Add`,
            newCertificate
        );
        return response.data as AddCertificateResponse;
    } catch (error) {
        throw error;
    }
},


  // sertifika silme
  deleteCertificate: async (certificateId: number): Promise<DeleteCertificateResponse> => {
    try {
        const response = await axios.delete(
            `${BASE_API_URL}/Certificates/Delete?id=${certificateId}`
        );
        return response.data as DeleteCertificateResponse;
    } catch (error) {
        throw error;
    }
},

  // Kullanıcının bütün sertifikalarını getirme
  getAllUserCertificate: async (
    userId: string
  ): Promise<GetUserAllCertificateResponse[]> => {
    try {
      const response = await axios.get(
        `${BASE_API_URL}/Certificates/GetUsersAllCertificates?userId=${userId}`
      );
      return response.data as GetUserAllCertificateResponse[];
    } catch (error) {
      throw error;
    }
  },
};
