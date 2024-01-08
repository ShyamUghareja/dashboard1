import React from "react";
import Logo from "../../../public/logo.svg";
import Image from "next/image";
import "../style/dashboard.css";

function profile() {
  return (
    <>
      <div className="">
        <div className="w-100 white_background d-inline-grid py-3 px-3" style={{display: "flex"}}>
          <div>
            <div>
              <a className="h_5 text-decoration-none nav_menu_color">Welcome</a>
            </div>
            <div>
              <a className="h_4 text-decoration-none text_black border_bottom pb-2">
                Necmettin Murat TENİL
              </a>
            </div>
            <div className="mt-3 d-flex gap-2">
              <i class="ri-medal-fill text_green"></i>
              <a className="h_6 text_green text-decoration-none">Superadmin</a>
            </div>
          </div>

          <div>
            <div>
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Default</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default profile;
