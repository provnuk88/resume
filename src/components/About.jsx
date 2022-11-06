import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl  text-cyan-300">
        Soft skils: Умею работать в команде, слушать и слышать комментарии колег. Обьективно воспрнимаю адекватную критику. Высокий уровень коммуникативных способностей.
        Умею кратко и понятно излагать свои мысли. Внимательный к мелочам, ведь они рождают совершенство, а совершенство уже не мелочь.
        </p>
        <br />
        <p className="text-xl  text-lime-400 ">
        Hard skills: JavaScript/HTML/CSS/
        React/TypeScript/Bootstrap/Redux/
        Git/ ООП/SOLID/MobX/Axios
        </p>
      </div>
    </div>
  );
};

export default About;
