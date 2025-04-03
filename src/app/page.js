"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { supabase } from "./lib/supabase";
export default function Home() {
  const [studentList,setStudentList]= useState([]);
  useEffect(()=>{
    loadStudentList();
  },[]);

  async function loadStudentList(){
      const { data , error } = await supabase.
      from("student")
      .select();
      if(error){
        alert(JSON.stringify(error));
      }
      setStudentList(data);
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {studentList.map((stud, index) => (
        <div key={index} className="bg-white shadow-md rounded-md p-4 w-80 mb-2">
          <h2 className="text-red-600 text-lg font-bold">{stud.name}</h2>
          <p className="text-gray-600">Email: {stud.email}</p>
          <p className="text-gray-600">Phone: {stud.phone}</p>
        </div>
      
  ))}
  </div>
  )
}

