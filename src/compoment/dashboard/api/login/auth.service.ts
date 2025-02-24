import api from "./api";
import TokenService from "./token.service";
import { LoginModel, Register } from "../../model/LoginModel";
import { NotificationExtension } from "../../_database/extension/NotificationExtension";
import { HanderResponse } from "../../_database/helper/FunctionHelper";
import { isNullOrUndefined } from "../../_database/extension/StringExtension";

const register = (dataRegister: Register): Promise<any> => {
  return api
  .post("/Auth/register", dataRegister)
  .then((response) => {
      if (!isNullOrUndefined(response) && response?.data?.success) {
        NotificationExtension.Success("Bạn đã đăng ký thành công");
        return response.data;
      } else if (response!= null)
        NotificationExtension.Fails("Đăng ký thất bại !");
    })
  .catch((error) => {
      // Xử lý lỗi ở đây
      HanderResponse(error);
    });
};

const login = (dataLogin: LoginModel): Promise<any> => {
  const useMockData = process.env.REACT_APP_USE_MOCK_LOGIN === 'true';

  if (useMockData) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const mockUser = {
          id: 1,
          username: dataLogin.username || "testuser",
          email: "test@example.com",
          fullName: "Test User", // Ví dụ: thêm fullName
          roles: ["user"], // Ví dụ: thêm roles
          jwt: "mock_jwt_token",
        };

        TokenService.setUser(mockUser);
        NotificationExtension.Success("Bạn đã đăng nhập thành công (dữ liệu ảo)");
        resolve({ success: true, data: { data: mockUser} }); // Sửa lại để phù hợp với response thật
      }, 500);
    });
  } else {
    return api
    .post("/Auth/login", dataLogin)
    .then((response) => {
        if (!isNullOrUndefined(response) && response?.data?.success) {
          if (response.data?.data?.jwt) {
            TokenService.setUser(response?.data?.data);
          }
          NotificationExtension.Success("Bạn đã đăng nhập thành công");
          return response.data;
      } else if (response!= null)
        NotificationExtension.Fails("Đăng nhập thất bại !");
      })
    .catch((error) => {
      // Xử lý lỗi ở đây
        HanderResponse(error);
      });
  }
};

const logout = (): void => {
  TokenService.removeUser();
};

const getCurrentUser = (): any => {
  const userString = localStorage.getItem("user");
  return userString? JSON.parse(userString): null;
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;
