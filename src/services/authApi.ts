import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../redux/store";
import { showMessage } from "react-native-flash-message";
import {
  LoginRequest,
  RegisterRequest,
  ResenOtpReq,
  VerifyOtpReq,
} from "../utils";
import { setUserProfileData } from "../redux";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://52.22.241.165:10054/api/",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithAuth = async (args: any, api: any, extraOptions: any) => {
  const result: any = await baseQuery(args, api, extraOptions);
  console.log('resultresult', result);

  // ✅ If token is invalid (401 Unauthorized)
  if (!result?.data?.succeeded && result?.data?.ResponseCode === 401) {
    showMessage({
      message: "Session Expired",
      description: "Your session has expired. Please log in again.",
      type: "danger",
      position: "top",
    });

    // ✅ Dispatch logout action (clears token from Redux)
    // api.dispatch(logoutUser());

    // ✅ Navigate to login screen (if using React Navigation)
    // NavigationService.navigate("Login");
  }


  return result;
};

// ✅ Use the new `baseQueryWithAuth` in `authApi`
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQueryWithAuth,
  endpoints: (builder) => ({
    login: builder.mutation<any, LoginRequest>({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
    }),
    register: builder.mutation<any, RegisterRequest>({
      query: (userData) => ({
        url: "/register",
        method: "POST",
        body: userData,
      }),
    }),
    resendOtp: builder.mutation<any, ResenOtpReq>({
      query: (userData) => ({
        url: "/resendotp",
        method: "POST",
        body: userData,
      }),
    }),
    verifyOtp: builder.mutation<any, { otpData: VerifyOtpReq; token: string }>({
      query: ({ otpData, token }) => ({
        url: "/verifyotp",
        method: "POST",
        body: otpData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    sendOtp: builder.mutation<any, ResenOtpReq>({
      query: (userData) => ({
        url: "/sendotp",
        method: "POST",
        body: userData,
      }),
    }),
    resetPassword: builder.mutation<any,{ data: any; token: string }>({
      query: ({data,token}) => ({
        url: "/resetpassword",
        method: "POST",
        body: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
    }),
    getUserProfile: builder.query<any, void>({
      query: () => ({
        url: "/getprofile",
        method: 'GET'
      })
    }),
    getTermAndCond: builder.query<any, void>({
      query: () => ({
        url: "/gettermsconditions",
        method: 'GET'
      })
    })
  })
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useResendOtpMutation,
  useVerifyOtpMutation,
  useSendOtpMutation,
  useResetPasswordMutation,
  useLogoutMutation,
  useGetUserProfileQuery,
  useGetTermAndCondQuery,
} = authApi;
