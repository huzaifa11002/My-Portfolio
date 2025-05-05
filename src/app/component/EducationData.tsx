'use client';
import { useEffect, useState } from 'react'
import "../custom.css";

interface Education {
    edu: string;
    status: string;
  }

const EducationData = () => {
        const [edu, setEdu] = useState<Education[]>([]);
              useEffect(() => {
                const url = window.location.origin;
                const fetchData = async () => {
                  try {    
                    const res = await fetch(`${url}/api/education`);
                    const eduData = await res.json();
                    setEdu(eduData);
                  } catch (error) {
                    console.error("Error fetching data:", error);
                  }
                };
            
                fetchData();
              }, []);
            
            if (edu.length === 0) {
                return <div className="text-white text-center bouncing-loader">
                <div></div>
                <div></div>
                <div></div>
            </div>;
                }
            
            if(!edu) {
                return <div className="text-white text-center">No Data Found</div>;
            }
  return (
    <ul className="flex flex-col gap-3 list-disc list-inside marker:text-main">
                {edu.map((item, index) => (
                  <div
                    className="flex justify-between items-center"
                    key={index}
                  >
                    <li className="text-white uppercase font-bold text-sm xs:text-base">
                      {item.edu}
                    </li>
                    <span className="text-main font-bold text-center uppercase text-sm xs:text-base">
                      {item.status}
                    </span>
                  </div>
                ))}
              </ul>
  )
}

export default EducationData