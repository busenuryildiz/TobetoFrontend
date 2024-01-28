class TokenService {
	getToken(): string | null {
		return localStorage.getItem("token");
	}

	hasToken(): boolean {
		return localStorage.getItem("token") != null;
	}
}

export default new TokenService();