import { BaseService } from "../../../../../core/services/baseServices";
import { BASE_API_URL } from "../../../../../enviroment/enviroment";
import { AddUsersRequest } from "../../../../../models/requests/Users/addUsersRequest"; // İlgili import yollarını düzenleyin
import { GetAllUsersResponse } from "../../../../../models/responses/Users/getAllUsersResponse"; // İlgili import yollarını düzenleyin
import { UpdateUsersRequest } from "../../../../../models/requests/Users/updateUsersRequest"; // İlgili import yollarını düzenleyin
import { AddUsersResponse} from "../../../../../models/responses/Users/addUsersResponse"; // İlgili import yollarını düzenleyin
import { UpdateUsersResponse } from "../../../../../models/responses/Users/updateUsersResponse"; 

class PersonalInformationService extends BaseService<
  GetAllUsersResponse, // GetByIdType için GetUsersDetailResponse kullanıyorum, eğer farklı bir tip varsa onu kullanın
  AddUsersRequest,
  AddUsersResponse,
  UpdateUsersRequest,
  UpdateUsersResponse
> {
  constructor() {
    super();
    this.apiUrl = "Users/Add";
  }

  // PersonalInformationService'ye özgü diğer metotları buraya ekleyebilirsiniz

  // Örnek: Belirli bir filtreye göre kullanıcıları getir
  getByFilter() {
    // Burada implementasyon yapabilirsiniz
  }

  // İhtiyacınıza göre ek CRUD operasyonları ekleyebilirsiniz
}

export default new PersonalInformationService();
