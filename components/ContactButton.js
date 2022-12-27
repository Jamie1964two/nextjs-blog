import React from "react";
import Link from "next/link";

const ContactButton = () => {
  return (
    <Link href="/Contact">
      <div className="mt-4 p-2 border-2 border-myblue inline-block rounded-lg cursor-pointer hover:bg-gray-100">
        <p className="font-medium text-myblue">Contact us</p>
      </div>
    </Link>
  );
};

export default ContactButton;
