import React from "react";
import { tabLabels } from "./Const";
import { NavLink } from "react-router-dom";
import "./Tabs.css";
import { RxCross2 } from "react-icons/rx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import Nav from "../Nav/Nav";

const Tabs = ({ activeTabName, onClickTab }) => {
  const { CANCEL_AT_ANY_TIME, WATCH_ANYWHERE, PICK_YOUR_PRICE } = tabLabels;
  //   console.log("activeTabName", activeTabName);
  //   console.log("  kfd  ", CANCEL_AT_ANY_TIME);

  const renderTabTitle = (tabTitle, isActive, icon, id) => (
    // console.log(tabTitle)
    <div
      onClick={() => onClickTab(tabTitle)}
      id={id}
      className={`tab-item ${isActive && "tab-border"}`}
    >
      <i className={icon}></i>
      <p>{tabTitle}</p>
    </div>
  );
  return (
    <>
      <section className="tabs">
        <div className="container">
          {renderTabTitle(
            CANCEL_AT_ANY_TIME,
            activeTabName === CANCEL_AT_ANY_TIME,
            "fas fa-door-open fa-3x",
            "tab-1"
          )}
          {renderTabTitle(
            WATCH_ANYWHERE,
            activeTabName === WATCH_ANYWHERE,
            "fas fa-tablet-alt fa-3x",
            "tab-2"
          )}
          {renderTabTitle(
            PICK_YOUR_PRICE,
            activeTabName === PICK_YOUR_PRICE,
            "fas fa-tags fa-3x",
            "tab-3"
          )}
        </div>
      </section>
      {activeTabName === CANCEL_AT_ANY_TIME && (
        <section className="tab-content">
          <div className="container">
            <div
              id="tab-1-content"
              className={`tab-content-item ${
                activeTabName === CANCEL_AT_ANY_TIME && "show"
              }`}
            >
              <div className="tab-1-content-inner">
                <div className="">
                  <p className="text-lg">
                    If you decide NetFlix isn't for you - no proble. No
                    commitment. Cancel online anytime
                  </p>
                  <NavLink to="/netflix-show" className="btn btn-lg">
                    Watch Free For 30 days
                  </NavLink>
                </div>
                <img
                  src="https://i.ibb.co/J2xDJV7/tab-content-1.png"
                  alt=""
                ></img>
              </div>
            </div>
          </div>
        </section>
      )}
      {activeTabName === WATCH_ANYWHERE && (
        <section className="tab-content">
          <div className="container">
            <div
              id="tab-2-content"
              className={`tab-content-item ${
                activeTabName === WATCH_ANYWHERE && "show"
              }`}
            >
              <div className="tab-2-content-top">
                <p className="text-lg">
                  Watch TV shows and movies anytime, anywhere - personnalized
                  for you.
                </p>
                <NavLink to="/netflix-show" className="btn btn-lg">
                  Watch Free For 30 days
                </NavLink>
              </div>
              <div className="tab-2-content-bottom">
                <div>
                  <img src="https://i.ibb.co/DpdN7Gn/tab-content-2-1.png" />
                  <p className="text-md">Watch on your TV</p>
                  <p className="text-dark">
                    Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
                    players and more
                  </p>
                </div>
                <div>
                  <img src="https://i.ibb.co/R3r1SPX/tab-content-2-2.png" />
                  <p className="text-md">
                    Watch instantly or download for later
                  </p>
                  <p className="text-dark">
                    Available on phone and tablet, wherever you go.
                  </p>
                </div>

                <div>
                  <img src="https://i.ibb.co/gDhnwWn/tab-content-2-3.png" />
                  <p className="text-md"> Use your computer </p>
                  <p className="text-dark">Watch right on NetFlix.com.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {activeTabName === PICK_YOUR_PRICE && (
        <section className="tab-container">
          <div className="container">
            <div
              id="tab-2-content"
              className={`tab-content-item ${
                activeTabName === WATCH_ANYWHERE && "show"
              }`}
            ></div>
            <div className="text-center mt-10">
              <p className="text-lg text-white">
                Choose one plan and watch everything on netflix
              </p>
              <NavLink to="/netflix-show" className="btn btn-lg">
                Watch Free For 30 Days
              </NavLink>
            </div>
            <table className="table text-white">
              <thead>
                <tr>
                  <th>
                    <th>Basic</th>
                    <th>Standard</th>
                    <th>Premium</th>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Monthly price after free month ends on 06/19/2024</td>
                  <td>$6.99</td>
                  <td>$11.99</td>
                  <td>$13.99</td>
                </tr>
                <tr>
                  <td>HD Available</td>
                  <td className="text-center">
                  <i className="fa-solid fa-xmark" />
                  </td>
                  <td>
                  <FontAwesomeIcon icon="fa-solid fa-xmark" />
                  </td>
                  <td>
                  <FontAwesomeIcon icon="fa-solid fa-check" />
                  </td>
                </tr>
                <tr>
                  <td>Ultra HD Available</td>
                  <td>
                    <i className="fas fa-times"></i>
                  </td>
                  <td>
                    <i className="fas fa-times"></i>
                  </td>
                  <td>
                    <i className="fas fa-check"></i>
                  </td>
                </tr>
                <tr>
                  <td>Screen you can watch on at the same time</td>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>Watch you can watch on at the same time</td>
                  <td>
                    <i className="fas fa-check"></i>
                  </td>
                  <td>
                    <i className="fas fa-check"></i>
                  </td>
                  <td>
                    <i className="fas fa-check"></i>
                  </td>
                </tr>
                <tr>
                  <td>Unlimited Movie and TV shows</td>
                  <td>
                    <i className="fas fa-check"></i>
                  </td>
                  <td>
                    <i className="fas fa-check"></i>
                  </td>
                  <td>
                    <i className="fas fa-check"></i>
                  </td>
                </tr>
                <tr>
                  <td>Cancel anytime</td>
                  <td>
                    <i className="fas fa-check"></i>
                  </td>
                  <td>
                    <i className="fas fa-check"></i>
                  </td>
                  <td>
                    <i className="fas fa-check"></i>
                  </td>
                </tr>
                <tr>
                  <td>First months free</td>
                  <td>
                    <i className="fas fa-check"></i>
                  </td>
                  <td>
                    <i className="fas fa-check"></i>
                  </td>
                  <td>
                    <i className="fas fa-check"></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      )}
    </>
  );
};

export default Tabs;
