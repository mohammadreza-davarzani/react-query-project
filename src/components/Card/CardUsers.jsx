import React from "react";
import Button from "../Button/Button";
import DeleteUser from "../User/DeleteUser/DeleteUser";
import EditUser from "../User/EditUser/EditUser";

const Card = ({ data, onClick  , setShow,getId  }) => {
  const {  id , name, lastName, img } = data;
  
  return (
    <div className=" flex-col bg-slate-50 drop-shadow-xl rounded-md w-72 flex mx-auto my-5 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110">
      <div className="flex  justify-between ">
        <div className="flex ml-5 mt-5 justify-between w-16 h-16 rounded-full shadow-lg ">
          <img src={img} className="rounded-full" alt={name + lastName} />
        </div>
        <div className="flex flex-row items-center mt-2 mr-2">
          <EditUser  id={id} getId={getId} setShow={setShow} styles="cursor-pointer  items-center"/>
          <DeleteUser id={id} getId={getId} setShow={setShow}   styles="cursor-pointer  items-center" />
        </div>
      </div>
      <div className="mt-5 mx-auto flex flex-col items-center justify-center">
        <header className=" justify-center ">
          <h2 className="mb-2">
            <span className="text-violet-500">Name:</span> {name}
          </h2>
          <p className=" mb-2">
            <span className="text-violet-500">Last name:</span> {lastName}
          </p>
        </header>
        <footer className="my-2 justify-center">
          <Button
            onClick={() => onClick(id)}
            styles="w-28 p-2 text-white  rounded-md  bg-violet-600  shadow-xl h-auto"
            text="User Detail"
          />
        </footer>
      </div>
    </div>
  );
};

export default Card;
