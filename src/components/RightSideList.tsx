import { MdLaptopChromebook } from "react-icons/md";
import { BsCameraVideo } from "react-icons/bs";
import { TbCertificate } from "react-icons/tb";

const people = [
  {
    name: "Access on Mobile and Laptop",
    icon: <MdLaptopChromebook className="h-6 w-6 text-white" />,
  },
  {
    name: "40.5 Hours on-demand video",
    icon: <BsCameraVideo className="h-6 w-6 text-white" />,
  },
  {
    name: "Certification of Completion",
    icon: <TbCertificate className="h-6 w-6 text-white" />,
  },
];

export default function RightSide() {
  return (
    <ul role="list" className="rounded-xl bg-white pl-2">
      {people.map((person, i) => (
        <li key={i} className="flex py-4">
          <span className="flex-shrink-0 rounded-full bg-blue-500 p-2">
            {person.icon}
          </span>
          <div className="ml-3 flex items-center justify-center">
            <p className="font-medium text-black">{person.name}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
