import React from "react";

const Playerboard = ({ players }) => {
    const leaderboardData = [
        { rank: 3, name: 'Sebastian', score: 1124, change: 'up' },
        { rank: 4, name: 'Jason', score: 875, change: 'down' },
        { rank: 5, name: 'Natalie', score: 774, change: 'up' },
        { rank: 6, name: 'Serenity', score: 723, change: 'up' },
        { rank: 7, name: 'Hannah', score: 559, change: 'down' },
      ];
  return (
<div className=" flex flex-col md:flex md:flex-row">
  <div className="flex items-end space-x-2 mt-10 basis-1/2 px-4 md:px-20 py-24">
    {/* Second place */}
    <div className=" w-44 h-52 bg-[#3B5987] rounded-t-3xl flex flex-col justify-end items-center pb-2 relative">
      <div className="absolute -top-8 w-24 h-24 rounded-full overflow-hidden border-4 border-[#999999]">
        {/* Avatar */}
        <img
          src={`${process.env.PUBLIC_URL}/Images/Ellipse 5.png`}
          alt="Jackson"
          className="object-cover w-full h-full"
        />
      </div>
      <p className="text-white mt-16 text-lg">Jackson</p>
      <p className="text-white text-lg font-bold">1847</p>
    </div>

    {/* First place */}
    <div className="w-44 h-60 bg-[#3B5987] rounded-t-3xl flex flex-col justify-end items-center pb-2 relative">
      <div className="absolute -top-28 w-16 h-16">
        {/* Crown */}
        <svg
          width="77"
          height="61"
          viewBox="0 0 77 61"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M68.426 26.0289C67.8074 25.5494 67.0562 25.241 66.2579 25.139C65.4597 25.0369 64.6467 25.1452 63.9116 25.4516L50.2333 31.0994L42.2858 17.7956C41.9059 17.1745 41.3556 16.658 40.6908 16.2987C40.026 15.9393 39.2705 15.75 38.5013 15.75C37.7321 15.75 36.9766 15.9393 36.3118 16.2987C35.647 16.658 35.0966 17.1745 34.7168 17.7956L26.7693 31.0994L13.091 25.4516C12.3544 25.1456 11.5403 25.0372 10.7408 25.1384C9.94124 25.2397 9.18816 25.5466 8.56665 26.0244C7.94514 26.5023 7.48 27.1321 7.2238 27.8426C6.96759 28.5532 6.93056 29.3161 7.11687 30.0451L13.9831 57.2299C14.1143 57.7562 14.3593 58.2522 14.7032 58.688C15.047 59.1238 15.4826 59.4902 15.9834 59.7651C16.6615 60.142 17.4368 60.3415 18.2271 60.3424C18.6113 60.3418 18.9935 60.2911 19.3625 60.1918C31.8779 56.9788 45.0976 56.9788 57.6131 60.1918C58.7558 60.4708 59.9711 60.3173 60.9921 59.7651C61.496 59.4937 61.9339 59.1284 62.2782 58.692C62.6225 58.2557 62.8657 57.7578 62.9925 57.2299L69.8857 30.0451C70.0699 29.3159 70.0308 28.5533 69.7729 27.8436C69.5149 27.1339 69.0484 26.5053 68.426 26.0289Z"
            fill="#FFAA00"
          />
          <circle cx="38.5" cy="9" r="9" fill="#FFAA00" />
          <circle cx="38.5" cy="40.5" r="6.75" fill="#BE9502" />
          <circle cx="71.125" cy="23.625" r="5.625" fill="#FFAA00" />
          <circle cx="5.875" cy="23.625" r="5.625" fill="#FFAA00" />
          <circle cx="21.625" cy="43.875" r="3.375" fill="#BE9502" />
          <circle cx="55.375" cy="43.875" r="3.375" fill="#BE9502" />
        </svg>
      </div>
      <div className="absolute -top-10 w-28 h-28 rounded-full overflow-hidden border-4 border-[#FFAA00]">
        {/* Avatar */}
        <img
          src={`${process.env.PUBLIC_URL}/Images/Ellipse 4.png`}
          alt="Eiden"
          className="object-cover w-full h-full"
        />
      </div>
      <p className="text-white text-lg">Eiden</p>
      <p className="text-white text-lg font-bold">2430</p>
    </div>

    {/* Third place */}
    <div className="w-44 h-48 bg-[#3B5987] rounded-t-3xl flex flex-col justify-end items-center pb-2 relative">
      <div className="absolute -top-8 w-24 h-24 rounded-full overflow-hidden border-4 border-[#BA4615]">
        {/* Avatar */}
        <img
          src={`${process.env.PUBLIC_URL}/Images/Ellipse 6.png`}
          alt="Emma Aria"
          className="object-cover w-full h-full"
        />
      </div >
      <div className="">
        <p className="text-white mt-16 text-lg">Emma Aria</p>
        <p className="text-white text-lg font-bold">1674</p>  
      </div>

    </div>
  </div>

  <div className="flex justify-end p-0 md:p-16 md:px-20 basis-1/2">
    <div className="bg-[#3B5987] p-8 w-full md:w-3/4 rounded-3xl shadow-md">
      <ul className="list-none p-0">
        {leaderboardData.map((item, index) => (
          <li
            key={item.rank}
            className={`flex items-center justify-between py-4 ${
              index === leaderboardData.length - 1 ? "" : "border-b border-white"
            }`}
          >
            <div className="flex items-center">
              <span className="bg-[#3B5987] text-white rounded-full border-2 px-3 py-2 font-bold mr-4">
                #{item.rank}
              </span>
              <span className="text-white text-lg font-medium">{item.name}</span>
            </div>
            <div className="flex items-center">
              <span className="text-white text-lg font-medium">{item.score}</span>
              <span
                className={`ml-2 text-sm font-medium ${
                  item.change === "up" ? "text-green-500" : "text-red-500"
                }`}
              >
                {item.change === "up" ? "▲" : "▼"}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>

  
    
  );
};

export default Playerboard;
