import axios from "axios";
import store from "../../src/store"; // Redux store'umuza erişim sağlayan kodu ekleyin
import { BASE_API_URL } from "../enviroment/enviroment";

const api = axios.create({
  baseURL: BASE_API_URL,
});

// İstek gönderilmeden önce interceptor
api.interceptors.request.use(
  (config) => {
    const { auth } = store.getState(); // Redux store'dan auth durumunu alın
    if (auth.token) {
      config.headers.Authorization = `Bearer ${auth.token}`; // Eğer token varsa istek başlığına ekleyin
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Yanıt alındıktan sonra interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      // Hata durumlarını işleme
      if (error.response.status === 401) {
        // Örnek: 401 Yetkilendirme Hatası
        // Oturumun süresi dolduğunda veya yetkilendirme başarısız olduğunda buraya girer
        // Yeniden yönlendirme yapabilir veya kullanıcıya bir hata mesajı gösterebilirsiniz
      } else if (error.response.status === 404) {
        // Örnek: 404 Bulunamadı
        // İstek yapılan kaynak bulunamadığında buraya girer
        // Kullanıcıya uygun bir mesaj gösterebilirsiniz
      } else {
        // Diğer hata durumları
        // Genel hata mesajı gösterebilirsiniz
      }
    } else if (error.request) {
      // İstek yapılmadan hata oluştuğunda
      // Örneğin, sunucuya hiç ulaşılamadığında
      // Kullanıcıya bir hata mesajı gösterebilirsiniz
    } else {
      // İstek yapılmadan önce hata oluştuğunda
      // Axios tarafından oluşturulan bir hata varsa buraya girer
      // Kullanıcıya bir hata mesajı gösterebilirsiniz
    }
    return Promise.reject(error);
  }
);

export default api;
