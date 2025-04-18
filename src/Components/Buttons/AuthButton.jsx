import React from "react";

function AuthButton({ label }) {
  return (
    <button className="w-full px-[30px] py-[12px] bg-[#3498db] text-white text-[1.1rem] border-none rounded-full cursor-pointer transition-colors duration-300 hover:bg-[#2980b9]">
      {label}
    </button>
  );
}

export default AuthButton;
