import React, { createContext, useEffect, useState } from "react";
import Api from "../utility/api";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState({});
  const [userData, setUserData] = useState({});
  const [deleteData, setDeleteData] = useState({});
  const [refresh, setRefresh] = useState({});
  const [tours, setTours] = useState([]);
  const [customerTours, setCustomerTours] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [allBooking, setAllBooking] = useState([])


  const email = userData?.email;

  // to get all user data data
  useEffect(() => {
    async function fetchData() {
      const response = await Api.get("/user");
      setUsers(response?.data);
    }
    fetchData();
  }, []);

  // to get all tour data data
  useEffect(() => {
    async function fetchData() {
      const response = await Api.get("/tour/all");
      setTours(response?.data);
    }
    fetchData();
  }, [deleteData]);

  // to get all customer tour data data
  useEffect(() => {
    async function fetchData() {
      const response = await Api.get("/tour/get-all/customer-tour");
      setCustomerTours(response?.data);
    }
    fetchData();
  }, []);

  // to get all blogs data
  useEffect(() => {
    async function fetchData() {
      const response = await Api.get("/blog/all");
      setBlogs(response?.data);
    }
    fetchData();
  }, [refresh]);

  // to get all tour booking data
  useEffect(() => {
    async function fetchData() {
      const response = await Api.get("/tour-booking/booking");
      setAllBooking(response?.data);
    }
    fetchData();
  }, [refresh]);

  // set user local storage
  useEffect(() => {
    const data = localStorage.getItem("userData");
    if (data) {
      setUserData(JSON.parse(data));
    }
  }, []);

  //this state stored user data  //==> Don't move this one !
  const contextData = {
    users,
    userData,
    setUserData,
    tours,
    customerTours,
    blogs,
    setRefresh,
    setDeleteData,
    email,
    allBooking,
  };

  return (
    <UserContext.Provider value={contextData}>{children}</UserContext.Provider>
  );
};
