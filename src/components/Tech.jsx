import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoComponent";
import { technologies } from "../constants";

import { finger } from "../assets";

const BaseTech = () => {
  return (
    <>
      <div className="flex flex-row justify-center">
        <img src={finger} className="h-16" />
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
}

const Tech = SectionWrapper(BaseTech, "tech");
export default Tech;