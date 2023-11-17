"use client";
import { CustomerHomePageComponent } from "@/components/customer/home/CustomerHomePageComponent";
import { EmployeeHomePageComponent } from "@/components/employee/home/EmployeeHomePageComponent";
import { ModeratorHomePageComponent } from "@/components/moderator/home/ModeratorHomePageComponent";
import { getCookie } from "cookies-next";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const CustomerHomeContainer = () => {
  const [user, setUser] = useState(null);
  const [type, setType] = useState(null);
  const [token, setToken] = useState(getCookie("token"));

  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [email, setEmail] = useState();
  const [phoneCode, setPhoneCode] = useState();
  const [phone, setPhone] = useState();
  const [companyName, setCompanyName] = useState();
  const [address, setAddress] = useState();
  const [debt, setDebt] = useState();
  const [payment, setPayment] = useState();
  const [passport, setPassport] = useState();
  const [proxy, setProxy] = useState();
  const [diploma, setDiploma] = useState();
  const [criminalRecord, setCriminalRecord] = useState();
  const [passportImg, setPassportImg] = useState(null);
  const [proxyImg, setProxyImg] = useState(null);
  const [diplomaImg, setDiplomaImg] = useState(null);
  const [criminalRecordImg, setCriminalRecordImg] = useState(null);
  const [passportVerify, setPassportVerify] = useState();
  const [proxyVerify, setProxyVerify] = useState();
  const [diplomaVerify, setDiplomaVerify] = useState();
  const [criminalRecordVerify, setCriminalRecordVerify] = useState();
  const [sessionDate, setSessionDate] = useState();
  const [sessionEndDate, setSessionEndDate] = useState();
  const [companySetupDate, setCompanySetupDate] = useState();
  const [img, setImg] = useState();

  useEffect(() => {
    const newUser = getCookie("user");

    const realUser = JSON.parse(newUser).user;

    setUser(realUser);
    setType(JSON.parse(newUser).type);

    setName(realUser.name);
    setSurname(realUser.surname);
    setEmail(realUser.email);
    setPhoneCode(realUser.phone_code);
    setPhone(realUser.phone);
    setCompanyName(realUser.company_name);
    setAddress(realUser.address);
    setDebt(realUser.debt);
    setPayment(realUser.payment);
    setProxy(realUser.proxy);
    setPassport(realUser.passport);
    setDiploma(realUser.diploma);
    setCriminalRecord(realUser.criminal_record);
    setPassportVerify(realUser.passport_verify);
    setProxyVerify(realUser.proxy_verify);
    setDiplomaVerify(realUser.diploma_verify);
    setCriminalRecordVerify(realUser.criminal_record_verify);
    setSessionDate(realUser.sesion_date);
    setSessionEndDate(realUser.session_end_date);
    setCompanySetupDate(realUser.company_setup_date);
  }, []);

  const saveChanges = async () => {
    const res = await fetch(`${process.env.API_URL}/customer/update-me`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
        surname,
        email,
        phoneCode,
        phone,
        company_name: companyName,
        address,
        debt,
        payment,
        proxy,
        diploma,
        criminal_record: criminalRecord,
        proxy_verify: proxyVerify,
        diploma_verify: diplomaVerify,
        criminal_record_verify: criminalRecordVerify,
        session_date: sessionDate,
        session_end_date: sessionEndDate,
        company_setup_date: companySetupDate,
      }),
    });

    if (proxyImg) {
      const proxyRes = await fetch(
        `${process.env.API_URL}/customer/add/proxy`,
        {
          method: "POST",
          headers: {
            "Content-Type": "image/jpeg",
            Authorization: `Bearer ${token}`,
          },
          body: proxyImg,
        },
      );

      const proxyResData = await proxyRes.json();

      if (proxyResData.status == 200) {
        toast.success(proxyResData.message);
      } else {
        toast.error("An error happened");
      }
    }

    if (diplomaImg) {
      const diplomaRes = await fetch(
        `${process.env.API_URL}/customer/add/diploma`,
        {
          method: "POST",
          headers: {
            "Content-Type": "image/jpeg",
            Authorization: `Bearer ${token}`,
          },
          body: diplomaImg,
        },
      );

      const diplomaResData = await diplomaRes.json();

      if (diplomaResData.status == 200) {
        toast.success(diplomaResData.message);
      } else {
        toast.error("An error happened");
      }
    }

    if (passportImg) {
      const diplomaRes = await fetch(
        `${process.env.API_URL}/customer/add/passport`,
        {
          method: "POST",
          headers: {
            "Content-Type": "image/jpeg",
            Authorization: `Bearer ${token}`,
          },
          body: passportImg,
        },
      );

      const diplomaResData = await diplomaRes.json();

      if (diplomaResData.status == 200) {
        toast.success(diplomaResData.message);
      } else {
        toast.error("An error happened");
      }
    }

    if (criminalRecordImg) {
      const criminalRecordRes = await fetch(
        `${process.env.API_URL}/customer/add/criminal-record`,
        {
          method: "POST",
          headers: {
            "Content-Type": "image/jpeg",
            Authorization: `Bearer ${token}`,
          },
          body: criminalRecordImg,
        },
      );

      const criminalRecordResData = await criminalRecordRes.json();

      if (criminalRecordResData.status == 200) {
        toast.success(criminalRecordResData.message);
      } else {
        toast.error("An error happened");
      }
    }

    const data = await res.json();
  };

  if (user) {
    return (
      <CustomerHomePageComponent
        user={user}
        type={type}
        name={name}
        setName={setName}
        surname={surname}
        setSurname={setSurname}
        email={email}
        setEmail={setEmail}
        phone={phone}
        setPhone={setPhone}
        phoneCode={phoneCode}
        setPhoneCode={setPhoneCode}
        setImg={setImg}
        img={img}
        setCompanyName={setCompanyName}
        companyName={companyName}
        setAddress={setAddress}
        address={address}
        setDebt={setDebt}
        debt={debt}
        setPayment={setPayment}
        payment={payment}
        setProxy={setProxy}
        proxy={proxy}
        setDiploma={setDiploma}
        diploma={diploma}
        setCriminalRecord={setCriminalRecord}
        criminalRecord={criminalRecord}
        setProxyVerify={setProxyVerify}
        proxyVerify={proxyVerify}
        setDiplomaVerify={setDiplomaVerify}
        diplomaVerify={diplomaVerify}
        setCriminalRecordVerify={setCriminalRecordVerify}
        criminalRecordVerify={criminalRecordVerify}
        setSessionDate={setSessionDate}
        sessionDate={sessionDate}
        setSessionEndDate={setSessionEndDate}
        sessionEndDate={sessionEndDate}
        setCompanySetupDate={setCompanySetupDate}
        companySetupDate={companySetupDate}
        setProxyImg={setProxyImg}
        setDiplomaImg={setDiplomaImg}
        setPassportImg={setPassportImg}
        setCriminalRecordImg={setCriminalRecordImg}
        save={saveChanges}
        passport={passport}
        passportVerify={passportVerify}
      />
    );
  }
};
