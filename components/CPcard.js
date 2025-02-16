
const CPcard = ({role, name, designation, phone, mail, address}) => {

  return (
    <div>
      <a
        href="#"
        className="block max-w-md py-10 px-10 sm:px-20 bg-[#161e24] border border-[#273138] rounded-2xl shadow-sm sm:mx-0 mx-6"
      >
        <h5 className="mb-4 text-xl font-semibold tracking-tight text-white dark:text-white">
          {role}
        </h5>
        <p className="font-normal text-[#bbc8cf] dark:text-gray-400 mb-4">
          <span className="flex gap-5 items-center"><img src="person.png" className="w-5 h-5"/>{name}</span>
        </p>
        <p className="font-normal text-[#bbc8cf] dark:text-gray-400 mb-4">
          <span className="flex gap-5 items-center"><img src="briefcase.png" className="w-5 h-5"/>{designation}</span>
        </p>
        <p className="font-normal text-[#bbc8cf] dark:text-gray-400 mb-4">
          <span className="flex gap-5 items-center"><img src="phone.png" className="w-5 h-5"/>{phone}</span>
        </p>
        <p className="font-normal text-[#bbc8cf] dark:text-gray-400 mb-4">
          <span className="flex gap-5 items-center"><img src="mail.png" className="w-5 h-5"/>{mail}</span>
        </p>
        <p className="font-normal text-[#bbc8cf] dark:text-gray-400">
          <span className="flex gap-5 items-center"><img src="location.png" className="w-5 h-5"/>{address}</span>
        </p>
      </a>
    </div>
  );
};

export default CPcard;
