import axios from 'axios';
import { UCurrentUser, ULoginRequest, ULoginResponse } from '../../types/universal.types';

export async function getCurrentUserAPI(): Promise<UCurrentUser> {
  const { data } = await axios.get<UCurrentUser>('/security/profile');
  return data;
}

export async function loginAPI(body: ULoginRequest): Promise<ULoginResponse> {
  const { data } = await axios.post<ULoginResponse>('/security/login', body);
  return data;
}

export async function logoutAPI(): Promise<void> {
  await axios.post<void>('/security/logout');
}

export async function logoutAllAPI(): Promise<void> {
  await axios.post<void>('/security/logout/all');
}
