import axios from 'axios';

// Önyüz örneği oluştur
export default axios.create({
  baseURL: 'http://localhost:6280/api', // Temel URL'i belirt
});

