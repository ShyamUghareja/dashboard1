import React from "react";
import Logo from "../../../public/logo.svg";
import Image from "next/image";
import "../style/dashboard.css";

function sidebar() {
  return (
    <>
      <div className="">
        <div className="w-100 white_background d-inline-grid">
          <div className="main_logo mt-4">
            <Image src={Logo} alt="LOGO" />
            <h6 className="main_logo">PANEL</h6>
          </div>
          <div>
            <div
              className="d-flex mx-2 py-2
            px-4 gap-3 mt-3 selected_color rounded align-items-center"
            >
              <i class="ri-home-4-fill text_white "></i>
              <a className="d-contents mb-0 text_white h_6 text-decoration-none">
                Home
              </a>
            </div>
            <div
              className="d-flex ms-2 py-2
            px-4 gap-3 mt-2 rounded align-items-center"
            >
              <i className="ri-user-3-line nav_menu_color"></i>
              <a className="d-contents nav_menu_color mb-0 h_6 text-decoration-none">
                User
              </a>
            </div>
          </div>
          <div className="mt-4 ms-2">
            <a className="h_6 text-decoration-none text_black fw-500">UNIVERSITY</a>
            <div
              className="d-flex ms-2 py-2
            px-4 gap-3 mt-2 rounded align-items-center"
            >
              <i class="ri-graduation-cap-line nav_menu_color"></i>
              <a className="d-contents nav_menu_color mb-0 h_6 text-decoration-none">
              Universities
              </a>
            </div>
            
            <div
              className="d-flex ms-2 py-2
            px-4 gap-3 mt-2 rounded align-items-center"
            >
              <i class="ri-shopping-bag-line nav_menu_color"></i>
              <a className="d-contents nav_menu_color mb-0 h_6 text-decoration-none">
              Marketplace
              </a>
            </div>
            
            <div
              className="d-flex ms-2 py-2
            px-4 gap-3 mt-2 rounded align-items-center"
            >
              <i class="ri-award-line nav_menu_color"></i>
              <a className="d-contents nav_menu_color mb-0 h_6 text-decoration-none">
              Program
              </a>
            </div>
            
            <div
              className="d-flex ms-2 py-2
            px-4 gap-3 mt-2 rounded align-items-center"
            >
              <i class="ri-search-line nav_menu_color"></i>
              <a className="d-contents nav_menu_color mb-0 h_6 text-decoration-none">
              Search
              </a>
            </div>

          </div>
          <div className="mt-4 ms-2">
            <a className="h_6 text-decoration-none text_black fw-500">APPLICATION</a>
            <div
              className="d-flex ms-2 py-2
            px-4 gap-3 mt-2 rounded align-items-center"
            >
              <i class="ri-file-list-3-line nav_menu_color"></i>
              <a className="d-contents nav_menu_color mb-0 h_6 text-decoration-none">
              Applications
              </a>
            </div>

          </div>
          <div className="mt-4 ms-2">
            <a className="h_6 text-decoration-none text_black fw-500">PARTNERS</a>
            <div
              className="d-flex ms-2 py-2
            px-4 gap-3 mt-2 rounded align-items-center"
            >
              <i class="ri-git-branch-line nav_menu_color"></i>
              <a className="d-contents nav_menu_color mb-0 h_6 text-decoration-none">
              Branch
              </a>
            </div>
            
            <div
              className="d-flex ms-2 py-2
            px-4 gap-3 mt-2 rounded align-items-center"
            >
              <i class="ri-shake-hands-line nav_menu_color"></i>
              <a className="d-contents nav_menu_color mb-0 h_6 text-decoration-none">
              Agencies
              </a>
            </div>
            
            <div
              className="d-flex ms-2 py-2
            px-4 gap-3 mt-2 rounded align-items-center"
            >
              <i class="ri-organization-chart nav_menu_color"></i>
              <a className="d-contents nav_menu_color mb-0 h_6 text-decoration-none">
              Sub Agencies
              </a>
            </div>

          </div>
          <div className="mt-4 ms-2">
            <a className="h_6 text-decoration-none text_black fw-500">LEAD MANEGEMENT</a>
            <div
              className="d-flex ms-2 py-2
            px-4 gap-3 mt-2 rounded align-items-center"
            >
              <i class="ri-user-follow-line nav_menu_color"></i>
              <a className="d-contents nav_menu_color mb-0 h_6 text-decoration-none">
              Candidates
              </a>
            </div>

          </div>
          <div className="mt-4 ms-2">
            <a className="h_6 text-decoration-none text_black fw-500">FINANCE</a>
            <div
              className="d-flex ms-2 py-2
            px-4 gap-3 mt-2 rounded align-items-center"
            >
              <i class="ri-percent-line nav_menu_color"></i>
              <a className="d-contents nav_menu_color mb-0 h_6 text-decoration-none">
              Commissions
              </a>
            </div>
            
            <div
              className="d-flex ms-2 py-2
            px-4 gap-3 mt-2 rounded align-items-center"
            >
              <i class="ri-swap-line nav_menu_color"></i>
              <a className="d-contents nav_menu_color mb-0 h_6 text-decoration-none">
              Transection
              </a>
            </div>
            
            <div
              className="d-flex ms-2 py-2
            px-4 gap-3 mt-2 rounded align-items-center"
            >
              <i class="ri-coins-line nav_menu_color"></i>
              <a className="d-contents nav_menu_color mb-0 h_6 text-decoration-none">
              Transection Items
              </a>
            </div>
            
            <div
              className="d-flex ms-2 py-2
            px-4 gap-3 mt-2 rounded align-items-center"
            >
              <i class="ri-article-line nav_menu_color"></i>
              <a className="d-contents nav_menu_color mb-0 h_6 text-decoration-none">
              Invoices
              </a>
            </div>

          </div>
          <div className="mt-4 ms-2">
            <a className="h_6 text-decoration-none text_black fw-500">EVENT MANAGEMENT</a>
            <div
              className="d-flex ms-2 py-2
            px-4 gap-3 mt-2 rounded align-items-center"
            >
              <i class="ri-percent-line nav_menu_color"></i>
              <a className="d-contents nav_menu_color mb-0 h_6 text-decoration-none">
              Event
              </a>
            </div>
            
            <div
              className="d-flex ms-2 py-2
            px-4 gap-3 mt-2 rounded align-items-center"
            >
              <i class="ri-swap-line nav_menu_color"></i>
              <a className="d-contents nav_menu_color mb-0 h_6 text-decoration-none">
              Participant
              </a>
            </div>
            
            <div
              className="d-flex ms-2 py-2
            px-4 gap-3 mt-2 rounded align-items-center"
            >
              <i class="ri-coins-line nav_menu_color"></i>
              <a className="d-contents nav_menu_color mb-0 h_6 text-decoration-none">
              Visitor Form
              </a>
            </div>

          </div>
          <div className="mt-4 ms-2">
            <a className="h_6 text-decoration-none text_black fw-500">EVENT MANAGEMENT</a>
            <div
              className="d-flex ms-2 py-2
            px-4 gap-3 mt-2 rounded align-items-center"
            >
              <i class="ri-percent-line nav_menu_color"></i>
              <a className="d-contents nav_menu_color mb-0 h_6 text-decoration-none">
              Season
              </a>
            </div>
            
            <div
              className="d-flex ms-2 py-2
            px-4 gap-3 mt-2 rounded align-items-center"
            >
              <i class="ri-percent-line nav_menu_color"></i>
              <a className="d-contents nav_menu_color mb-0 h_6 text-decoration-none">
              Announcement
              </a>
            </div>
            
            <div
              className="d-flex ms-2 py-2
            px-4 gap-3 mt-2 rounded align-items-center"
            >
              <i class="ri-percent-line nav_menu_color"></i>
              <a className="d-contents nav_menu_color mb-0 h_6 text-decoration-none">
              Article
              </a>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default sidebar;
