import students1 from "../../../public/classOne.json";
export default function classNameOne() {
  console.log(students1);
  return (
    <>
      {/* <!-- className two --> */}
      <tr className="bg-white/5">
        <td className="p-5 text-sm md:text-xl" colSpan="4">
          Class One
        </td>
      </tr>
      {students1.map((student) => (
        <>
          <tr className="border-b border-[#7ECEB529]">
            <td className="p-5 text-sm md:text-xl">{student.id}</td>
            <td className="p-5 text-sm md:text-xl">
              <div className="flex space-x-3 items-center">
                <img
                  className="w-8 h-8 rounded-full"
                  src={student.image}
                  width="32"
                  height="32"
                  alt="John Smith"
                />
                <span className="whitespace-nowrap">{student.name}</span>
              </div>
            </td>
            <td className="p-5 text-sm md:text-xl text-center">
              {student.score}
            </td>
            <td className="p-5 text-sm md:text-xl text-center">
              {student.percentage}%
            </td>
          </tr>
        </>
      ))}
      {/* <tr className="border-b border-[#7ECEB529]">
        <td className="p-5 text-sm md:text-xl">1</td>
        <td className="p-5 text-sm md:text-xl">
          <div className="flex space-x-3 items-center">
            <img
              className="w-8 h-8"
              src="./assets/avatar.png"
              width="32"
              height="32"
              alt="John Smith"
            />
            <span className="whitespace-nowrap">John Smith</span>
          </div>
        </td>
        <td className="p-5 text-sm md:text-xl text-center">A+</td>
        <td className="p-5 text-sm md:text-xl text-center">98%</td>
      </tr> */}
    </>
  );
}
