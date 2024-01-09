import React from "react";
import Logo from "../../../public/logo.svg";
import Image from "next/image";
import "../style/dashboard.css";

function profile() {
  return (
    <>
      <div className="">
        <div className="w-100 rounded white_background flex justify-between items-center py-3 ps-3 pe-5" >
          <div>
            <div>
              <a className="h_5 text-decoration-none nav_menu_color">Welcome</a>
            </div>
            <div>
              <a className="h_4 text-decoration-none text_black font-light pb-2">
                Necmettin Murat TENİL
              </a>
              <hr className="border_width my-2" style={{height:"2px", borderWidth:"0", color:"gray", backgroundColor: "gray"}} />
            </div>
            <div className="mt-1 d-flex gap-2 items-center">
              <i class="ri-medal-fill text_green h_3"></i>
              <a className="h_6 text_green text-decoration-none font-semibold">Superadmin</a>
            </div>
          </div>

          <div className="flex items-center"> 
            {/* <div className="border-r-2 me-3 border-#e4e4e4-500">
            <button type="button" class="text-white selected_color font-medium rounded-lg text-sm px-4 py-2.5 me-3 mb-2"><i className="ri-arrow-down-s-line h_4 me-2"></i> Antalya Bilim University</button>
            </div> */}
            <div className="flex gap-3">
            <i class="ri-moon-line h_4"></i>
            <i class="ri-global-line h_4"></i>
            <i class="ri-user-3-line h_4"></i>
            </div>
            <div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default profile;
