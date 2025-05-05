"use client";
import { useState, useEffect } from "react";

const GetData = async () => {
  const [education, setEducation] = useState([]);
  const [skill, setSkill] = useState([]);
  const [project, setProject] = useState([]);

  useEffect(() => {
    const url = window.location.origin;

    const fetchData = async () => {
      try {
        const res1 = await fetch(`${url}/api/education`);
        const educationData = await res1.json();
        setEducation(educationData);

        const res2 = await fetch(`${url}/api/skill`);
        const skillData = await res2.json();
        setSkill(skillData);

        const res3 = await fetch(`${url}/api/project`);
        const projectData = await res3.json();
        setProject(projectData);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return { education, skill, project };
}

export default GetData;