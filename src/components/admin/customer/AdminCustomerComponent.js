"use client";
import { ButtonComponent } from "@/components/shared/ButtonComponent";
import { CheckboxComponent } from "@/components/shared/CheckboxComponent";
import { InputComponent } from "@/components/shared/InputComponent";
import { SelectComponent } from "@/components/shared/SelectComponent";
import { IconChevronDown } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const AdminCustomerComponent = ({
  distributors,
  passport,
  passport_verify,
  packages,
  id,
  token,
  proxy,
  diploma,
  criminal_record,
  proxy_verify,
  diploma_verify,
  criminal_record_verify,
  session_date,
  company_setup_date,
  session_end_date,
  name = "",
  img = "",
  surname = "",
  address,
  debt,
  payment,
  company_name = "",
  email = "",
  password = "",
  phoneCode = "",
  phone = "",
  note,
  distributorId = 0,
  packageId,
  getCustomers,
}) => {
  const [changableName, setChangableName] = useState(name);
  const [changableSurname, setChangableSurname] = useState(surname);
  const [changableEmail, setChangableEmail] = useState(email);
  const [changableCompanyName, setChangableCompanyName] =
    useState(company_name);
  const [changableAddress, setChangableAddress] = useState(address);
  const [changableDebt, setChangableDebt] = useState(debt);
  const [changablePayment, setChangablePayment] = useState(payment);
  const [changablePassword, setChangablePassword] = useState(password);
  const [changablePhoneCode, setChangablePhoneCode] = useState(phoneCode);
  const [changablePassport, setChangablePassport] = useState(passport);
  const [changableProxy, setChangableProxy] = useState(proxy);
  const [changableDiploma, setChangableDiploma] = useState(diploma);
  const [changableCriminalRecord, setChangableCriminalRecord] =
    useState(criminal_record);
  const [changableSessionDate, setChangableSessionDate] =
    useState(session_date);
  const [changableSessionEndDate, setChangableSessionEndDate] =
    useState(session_end_date);
  const [changableCompanySetupDate, setChangableCompanySetupDate] =
    useState(company_setup_date);
  const [changableProxyVerify, setChangableProxyVerify] =
    useState(proxy_verify);
  const [changableDiplomaVerify, setChangableDiplomaVerify] =
    useState(diploma_verify);
  const [changablePassportVerify, setChangablePassportVerify] =
    useState(passport_verify);
  const [changableCriminalRecordVerify, setChangableCriminalRecordVerify] =
    useState(criminal_record_verify);
  const [changablePhone, setChangablePhone] = useState(phone);
  const [changableDistributorId, setChangableDistributorId] = useState(
    distributorId == null ? 0 : distributorId,
  );
  const [changablePackageId, setChangablePackageId] = useState(packageId);
  const [changableImg, setChangableImg] = useState(img);
  const [changableNote, setChangableNote] = useState(note);

  const [changableProxyFile, setChangableProxyFile] = useState(null);
  const [changablePassportFile, setChangablePassportFile] = useState(null);
  const [changableDiplomaFile, setChangableDiplomaFile] = useState(null);
  const [changableCriminalRecordFile, setChangableCriminalRecordFile] =
    useState(null);

  useEffect(() => {
    setChangableName(name);
    setChangableSurname(surname);
    setChangableEmail(email);
    setChangableCompanyName(company_name);
    setChangableDebt(debt);
    setChangableAddress(address);
    setChangablePayment(payment);
    setChangablePassword(password);
    setChangablePhoneCode(phoneCode);
    setChangablePassport(passport);
    setChangableProxy(proxy);
    setChangableCriminalRecord(criminal_record);
    setChangableDiploma(diploma);
    setChangablePassportVerify(passport_verify);
    setChangableDiplomaVerify(diploma_verify);
    setChangableProxyVerify(proxy_verify);
    setChangableCriminalRecordVerify(criminal_record_verify);
    setChangableImg(img);
    setChangablePackageId(packageId);
    setChangableDistributorId(distributorId);
    setChangableNote(note);
  }, [
    name,
    note,
    surname,
    email,
    company_name,
    debt,
    address,
    payment,
    password,
    phoneCode,
    passport,
    proxy,
    criminal_record,
    diploma,
    passport_verify,
    diploma_verify,
    proxy_verify,
    criminal_record_verify,
    img,
    packageId,
    distributorId,
  ]);

  distributors = distributors.map((x) => ({
    value: x.id,
    label: x.name,
  }));

  distributors.push({
    value: 0,
    label: "None",
  });

  packages = packages.map((x) => ({
    value: x.id,
    label: x.title,
  }));

  packages.push({
    value: 0,
    label: "None",
  });

  const [isOpen, setIsOpen] = useState(false);

  const sqlDateToJsDate = (date) => {
    let convertedDate = date;

    if (date && date.length > 16) {
      convertedDate = date.slice(0, 16);
    }
    return convertedDate;
  };

  const jsDateToSqlDate = (date) => {
    if (date.length == 16) {
      let convertedDate = date + ":00";

      console.log(convertedDate);

      return convertedDate;
    }
  };

  const updateSessionDate = (date) => {
    setChangableSessionDate(jsDateToSqlDate(date));
  };

  const getSessionDate = () => {
    return sqlDateToJsDate(changableSessionDate);
  };

  const updateSessionEndDate = (date) => {
    setChangableSessionEndDate(jsDateToSqlDate(date));
  };

  const getSessionEndDate = () => {
    return sqlDateToJsDate(changableSessionEndDate);
  };

  const updateCompanySetupDate = (date) => {
    setChangableSessionDate(jsDateToSqlDate(date));
  };

  const getCompanySetupDate = () => {
    return sqlDateToJsDate(changableCompanySetupDate);
  };

  const deleteCustomer = async () => {
    const res = await fetch(`${process.env.API_URL}/customer/delete/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();

    if (data.status == 200) {
      toast.success(data.message);
      window.location.reload();
    } else {
      console.log(data);
    }
  };

  const updateCustomer = async () => {
    let res;
    if (password == "") {
      res = await fetch(`${process.env.API_URL}/customer/update/${id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: changableName,
          surname: changableSurname,
          email: changableEmail,
          phone_code: changablePhoneCode,
          phone: changablePhone,
          password: changablePassword,
          company_name: changableCompanyName,
          address: changableAddress,
          payment: changablePayment,
          debt: changableDebt,
          distributorId:
            changableDistributorId == 0 ? null : changableDistributorId,
          packageId: changablePackageId,
          session_date: changableSessionDate,
          session_end_date: changableSessionEndDate,
          company_setup_date: changableCompanySetupDate,
          proxy_verify: changableProxyVerify,
          passport_verify: changablePassportVerify,
          diploma_verify: changableDiplomaVerify,
          criminal_record_verify: changableCriminalRecordVerify,
          note: changableNote,
        }),
      });
    } else {
      res = await fetch(`${process.env.API_URL}/customer/update/${id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: changableName,
          surname: changableSurname,
          email: changableEmail,
          password: changablePassword,
          packageId: changablePackageId,
          phone_code: changablePhoneCode,
          phone: changablePhone,
          company_name: changableCompanyName,
          address: changableAddress,
          payment: changablePayment,
          debt: changableDebt,
          distributorId:
            changableDistributorId == 0 ? null : changableDistributorId,
          session_date: changableSessionDate,
          session_end_date: changableSessionEndDate,
          company_setup_date: changableCompanySetupDate,
          proxy_verify: changableProxyVerify,
          passport_verify: changablePassportVerify,
          diploma_verify: changableDiplomaVerify,
          criminal_record_verify: changableCriminalRecordVerify,
          note: changableNote,
        }),
      });
    }

    if (changableProxyFile) {
      const proxyRes = await fetch(
        `${process.env.API_URL}/customer/add/proxy/${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "image/jpeg",
            Authorization: `Bearer ${token}`,
          },
          body: changableProxyFile,
        },
      );

      const proxyResData = await proxyRes.json();

      if (proxyResData.status == 200) {
        toast.success(proxyResData.message);
      } else {
        toast.error("An error happened");
      }
    }

    if (changableDiplomaFile) {
      const diplomaRes = await fetch(
        `${process.env.API_URL}/customer/add/diploma/${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "image/jpeg",
            Authorization: `Bearer ${token}`,
          },
          body: changableDiplomaFile,
        },
      );

      const diplomaResData = await diplomaRes.json();

      if (diplomaResData.status == 200) {
        toast.success(diplomaResData.message);
      } else {
        toast.error("An error happened");
      }
    }

    if (changablePassportFile) {
      const diplomaRes = await fetch(
        `${process.env.API_URL}/customer/add/passport/${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "image/jpeg",
            Authorization: `Bearer ${token}`,
          },
          body: changablePassportFile,
        },
      );

      const diplomaResData = await diplomaRes.json();

      if (diplomaResData.status == 200) {
        toast.success(diplomaResData.message);
      } else {
        toast.error("An error happened");
      }
    }

    if (changableCriminalRecordFile) {
      const criminalRecordRes = await fetch(
        `${process.env.API_URL}/customer/add/criminal-record/${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "image/jpeg",
            Authorization: `Bearer ${token}`,
          },
          body: changableCriminalRecordFile,
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

    if (data.status == 200) {
      toast.success(data.message);
      getCustomers().catch((err) => console.error(err));
    } else {
      console.log(data);
    }
  };

  return (
    <div className="w-full p-3 flex flex-col overflow-hidden border rounded-xl mt-5">
      <div
        className="flex justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          {changableImg == "" || !changableImg ? (
            <Image
              width={32}
              height={32}
              src={
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
              }
              className="rounded-full ml-5 md:ml-0"
            />
          ) : (
            <Image
              width={32}
              height={32}
              src={changableImg}
              className="rounded-full ml-5 md:ml-0"
            />
          )}

          <p className="ml-2">{changableName + " " + changableSurname}</p>
        </div>
        <IconChevronDown size={32} color="gray" />
      </div>
      <div
        className={`flex flex-col justify-between overflow-hidden mt-5 ${
          !isOpen && "max-h-0 mt-0"
        }`}
      >
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-[49%]">
            <SelectComponent
              onChange={setChangablePackageId}
              value={changablePackageId}
              labelText="Package"
              placeholderText="Package"
              options={packages}
            />
          </div>
          <div className="w-full md:w-[49%]">
            <SelectComponent
              onChange={setChangableDistributorId}
              value={changableDistributorId}
              labelText="Distributor"
              placeholderText="Distributor"
              options={distributors}
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-between items-center mt-5">
          <div className="w-full md:w-[49%]">
            <InputComponent
              onChange={setChangableName}
              value={changableName}
              labelText="Name"
              placeholderText="Name"
            />
          </div>
          <div className="w-full md:w-[49%]">
            <InputComponent
              onChange={setChangableSurname}
              value={changableSurname}
              labelText="Surname"
              placeholderText="Surname"
              className="mt-5 md:mt-0"
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-between items-center mt-5">
          <div className="w-full md:w-[49%]">
            <InputComponent
              onChange={setChangableEmail}
              value={changableEmail}
              labelText="Email"
              inputType="email"
              placeholderText="Email"
            />
          </div>
          <div className="w-full md:w-[49%]">
            <InputComponent
              onChange={setChangablePassword}
              value={changablePassword}
              labelText="Password"
              placeholderText="Password"
              className="mt-5 md:mt-0"
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-between items-center mt-5">
          <div className="w-full md:w-[49%]">
            <InputComponent
              onChange={setChangablePhoneCode}
              value={changablePhoneCode}
              labelText="Phone Code"
              placeholderText="Phone Code"
            />
          </div>
          <div className="w-full md:w-[49%]">
            <InputComponent
              onChange={setChangablePhone}
              value={changablePhone}
              labelText="Phone"
              placeholderText="Phone"
              className="mt-5 md:mt-0"
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-between items-center mt-5">
          <div className="w-full md:w-[49%]">
            <InputComponent
              onChange={setChangableCompanyName}
              value={changableCompanyName}
              labelText="Company Name"
              placeholderText="Company Name"
            />
          </div>
          <div className="w-full md:w-[49%]">
            <InputComponent
              onChange={setChangableAddress}
              value={changableAddress}
              labelText="Address"
              placeholderText="Address"
              className="mt-5 md:mt-0"
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-between items-center mt-5">
          <div className="w-full md:w-[49%]">
            <InputComponent
              onChange={setChangableDebt}
              value={changableDebt}
              labelText="Debt"
              inputType="number"
              placeholderText="Debt"
            />
          </div>
          <div className="w-full md:w-[49%]">
            <InputComponent
              onChange={setChangablePayment}
              value={changablePayment}
              labelText="Payment"
              placeholderText="Payment"
              inputType="number"
              className="mt-5 md:mt-0"
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-between items-center mt-5">
          <div className="w-full md:w-[49%]">
            <InputComponent
              onChange={updateSessionDate}
              value={getSessionDate()}
              labelText="Session Date"
              inputType="datetime-local"
              placeholderText="Session Date"
              max="2099-06-30T16:30"
            />
          </div>
          <div className="w-full md:w-[49%]">
            <InputComponent
              onChange={updateSessionEndDate}
              value={getSessionEndDate()}
              labelText="Session End Date"
              inputType="datetime-local"
              placeholderText="Session End Date"
              max="2099-06-30T16:30"
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-between items-center mt-5">
          <div className="w-full md:w-[49%]">
            <InputComponent
              onChange={updateCompanySetupDate}
              value={getCompanySetupDate()}
              labelText="Company Setup Date"
              inputType="datetime-local"
              placeholderText="Company Setup Date"
              max="2099-06-30T16:30"
            />
          </div>
          <div className="w-full flex justify-between items-center md:w-[49%]">
            <input
              type="file"
              name="image"
              onChange={(e) => setChangableProxyFile(e.target.files[0])}
            />
            <CheckboxComponent
              onChange={setChangableProxyVerify}
              value={changableProxyVerify}
              labelText="Proxy"
            />
            {changableProxy ? (
              <Link
                className="text-xs w-1/2 text-blue-500"
                href={`/${changableProxy}`}
                target="_blank"
              >
                (View)
              </Link>
            ) : (
              <p className="text-xs w-1/2 text-blue-500">(Not Uploaded)</p>
            )}
          </div>
        </div>
        <div className="flex flex-wrap justify-between items-center mt-5">
          <div className="w-full flex justify-between items-center md:w-[49%]">
            <input
              type="file"
              name="image"
              onChange={(e) => setChangableDiplomaFile(e.target.files[0])}
            />
            <CheckboxComponent
              onChange={setChangableDiplomaVerify}
              value={changableDiplomaVerify}
              labelText="Diploma"
            />
            {changableDiploma ? (
              <Link
                className="text-xs w-1/2 text-blue-500"
                href={`/${changableDiploma}`}
                target="_blank"
              >
                (View)
              </Link>
            ) : (
              <p className="text-xs w-1/2 text-blue-500">(Not Uploaded)</p>
            )}
          </div>
          <div className="w-full flex justify-between items-center md:w-[49%]">
            <input
              type="file"
              name="image"
              onChange={(e) =>
                setChangableCriminalRecordFile(e.target.files[0])
              }
            />

            <CheckboxComponent
              onChange={setChangableCriminalRecordVerify}
              value={changableCriminalRecordVerify}
              labelText="Criminal Record"
            />
            {changableCriminalRecord ? (
              <Link
                className="text-xs w-1/2 text-blue-500"
                href={`/${changableCriminalRecord}`}
                target="_blank"
              >
                (View)
              </Link>
            ) : (
              <p className="text-xs w-1/2 text-blue-500">(Not Uploaded)</p>
            )}
          </div>
        </div>
        <div className="flex flex-wrap justify-between items-center mt-5">
          <div className="w-full flex justify-between items-center md:w-[49%]">
            <input
              type="file"
              name="image"
              onChange={(e) => setChangablePassportFile(e.target.files[0])}
            />

            <CheckboxComponent
              onChange={setChangablePassportVerify}
              value={changablePassportVerify}
              labelText="Passport"
            />
            {changablePassport ? (
              <Link
                className="text-xs w-1/2 text-blue-500"
                href={`/${changablePassport}`}
                target="_blank"
              >
                (View)
              </Link>
            ) : (
              <p className="text-xs w-1/2 text-blue-500">(Not Uploaded)</p>
            )}
          </div>
        </div>
        <div className="flex flex-wrap justify-between items-center mt-5">
          <div className="w-full mt-2 md:mt-0 flex flex-col">
            <p className="text-xs font-light text-black">Customer Notes</p>
            <textarea
              placeholder="Customer Note"
              cols={5}
              rows={5}
              className="border rounded-xl text-xs font-light p-3"
              onChange={(e) => setChangableNote(e.target.value)}
              value={changableNote}
            >
              {changableNote}
            </textarea>
          </div>
        </div>
        <div className="flex flex-wrap justify-between items-center mt-5">
          <div className="w-full md:w-[49%]">
            <ButtonComponent
              onClick={deleteCustomer}
              buttonText="Delete"
              className="bg-red-500"
            />
          </div>
          <div className="w-full mt-2 md:mt-0 md:w-[49%]">
            <ButtonComponent onClick={updateCustomer} buttonText="Update" />
          </div>
        </div>
      </div>
    </div>
  );
};
