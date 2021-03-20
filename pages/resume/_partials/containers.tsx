import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faBuilding } from "@fortawesome/free-solid-svg-icons";

export const ListContainer: React.FunctionComponent = ({ children }) => <div className="w-full mx-2 my-1 sm:flex-1" >
  { children }
</div>;

type ExperienceProps = {
  company: string,
  position?: string,
  startDate: string,
  endDate?: string,
};
export const Experience: React.FunctionComponent<ExperienceProps> = ({ children, company, position, startDate, endDate }) => 
<div className="w-full sm:min-w-max sm:max-w-xl ring ring-blue-400 rounded-xl p-2 pt-0 pl-0 my-4 sm:mx-2" >
  <div className="text-gray-100 bg-blue-400 rounded-tl-lg rounded-br-xl py-2 px-3 w-max" >
    <p><strong className="mr-3" >{ company }</strong><i>{ startDate } - { endDate || "now" }</i></p>
  </div>

  { 
    position && <div className="flex flex-row items-center ml-2 mt-1" >
      <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
      <p className="font-bold" >{ position }</p>
    </div> 
  }

  <div className="ml-2" >
    { children }
  </div>
</div>;

type ProjectProps = {
  name: string,
  projectSource?: string,
};
export const Project: React.FunctionComponent<ProjectProps> = ({ children, name, projectSource }) => 
<div className="w-full sm:w-max sm:max-w-xl ring ring-blue-400 rounded-xl p-2 pt-0 pl-0 my-4 sm:mx-2" >
  <div className="text-gray-100 bg-blue-400 rounded-tl-lg rounded-br-xl py-2 px-3 w-max" >
    <p><strong className="mr-3" >{ name }</strong></p>
  </div>

  <div className="flex flex-row items-center ml-2 mt-1" >
    <FontAwesomeIcon icon={faBuilding} className="mr-2" />
    <p className="font-bold" >{ projectSource || "personal" }</p>
  </div> 

  <div className="ml-2" >
    { children }
  </div>
</div>;