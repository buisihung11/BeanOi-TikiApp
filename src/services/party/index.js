import myx from "../../helper/myx";
import { BASE_URL, VIRTUAL_STORE_TYPE } from "../../utils/config";

export const createParty = async () => {
  const value = {
    destination_location_id: 23,
    payment: 1,
    vouchers: [],
    products_list: [],
    supplier_notes: [],
  };
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJjYzUyMDY5Yy1jMWI3LTQ0NmEtOTA0NS1lOWZmZjBlYWU0MTUiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQW5oIFR14bqlbiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiNjQ2NzIiLCJleHAiOjE2NTE4OTMzNDUsImlzcyI6InRoaXMgaXMgaXNzdWVyIGZodCIsImF1ZCI6InRoaXMgaXMgaXNzdWVyIGZodCJ9.Fw7Je-0DN54wlixYHKupwb5Mjqef_zPvm6eLvK6Zuss";
  const res = await myx.request({
    url: `${BASE_URL}/orders/party`,
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    data: value,
    method: "POST",
  });
  return res;
};

export const joinParty = async () => {
  const value = {
    destination_location_id: 23,
    payment: 1,
    vouchers: [],
    products_list: [],
    supplier_notes: [],
  };
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJjYzUyMDY5Yy1jMWI3LTQ0NmEtOTA0NS1lOWZmZjBlYWU0MTUiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQW5oIFR14bqlbiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiNjQ2NzIiLCJleHAiOjE2NTE4OTMzNDUsImlzcyI6InRoaXMgaXMgaXNzdWVyIGZodCIsImF1ZCI6InRoaXMgaXMgaXNzdWVyIGZodCJ9.Fw7Je-0DN54wlixYHKupwb5Mjqef_zPvm6eLvK6Zuss";
  const res = await myx.request({
    url: `${BASE_URL}/orders/join-party`,
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    data: value,
    method: "POST",
  });
  return res;
};

const apiParty = {
  createParty,
  joinParty,
};

export default apiParty;
