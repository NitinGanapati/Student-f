"use client";

import { useState } from "react";
import { supabase } from "@/app/lib/supabase";
import InputField from "@/app/components/InputField";

export default function CreateStudent() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleCreateStudent = async () => {
        if (!name || !email || !phone) {
            alert("All fields are required");
            return;
        }
        try {
            const { data, error } = await supabase.from("student").insert([
                { name, email, phone }
            ]).select();
    
            if (error) throw error;
    
            alert("Student added successfully: " + JSON.stringify(data));
        } catch (err) {
            alert("Error: " + err.message);
        }
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold text-blue-500">Create Student</h1>
            <div className="w-10 h-10 text-gray-700" />

            <div className="text-black space-y-3">
        <InputField 
                type="text"
                placeholder="Enter Name"
                value={name} 
                onChange={(val) => setName(val)} 
        />
        <InputField 
                type="email"
                placeholder="Enter Email"
                value={email} 
                onChange={(val) => setEmail(val)} 
        />
        <InputField 
                type="text"
                placeholder="Enter Phone number"
                value={phone} 
                onChange={(val) => setPhone(val)} 
        />

            </div>

            <button 
                onClick={handleCreateStudent}
                className="mt-4 flex items-center bg-green-600 text-white text-lg p-3 rounded-lg hover:bg-green-700 transition"
            >
                <div>
                    Add the Student
                </div>
               
            </button>
        </div>  
    );
}
