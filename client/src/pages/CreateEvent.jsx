import Profile from "../components/Profile";
import pfp from "../assets/images/Profile Picture.png"

const CreateEvent = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-lightGray bg-opacity-10 relative h-96 rounded-t-xl w-full">
        <div className="right-0">
          <button className="flex gap-2 items-center p-2 rounded-full bg-white bg-opacity-10 "><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M1.06616 16.3151C1.07546 15.9381 1.08011 15.7497 1.12568 15.5726C1.16608 15.4156 1.23007 15.2658 1.31544 15.1282C1.41171 14.973 1.54444 14.8396 1.8099 14.573L14.8626 1.46297C15.3862 0.937079 16.204 0.848957 16.8267 1.25131C17.565 1.7283 18.1957 2.3551 18.6785 3.09146L18.7123 3.14307C18.7368 3.18037 18.749 3.19902 18.7594 3.21582C19.1427 3.83327 19.0616 4.63294 18.5622 5.16005C18.5486 5.17439 18.5329 5.19018 18.5014 5.22177L5.52811 18.2521C5.25274 18.5287 5.11505 18.6669 4.95435 18.7658C4.81188 18.8534 4.65654 18.9178 4.49406 18.9568C4.31079 19.0008 4.11608 19.0005 3.72665 18.9999L1 18.9955L1.06616 16.3151Z" stroke="#71706C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
            <h1 className="text-lightGray text-md font-primary">Change Background</h1></button>
        </div>
      </div>
      <div className="mx-10">
        {/* Profile Picture */}
        <img src={pfp} className="h-fit  absolute top-72 border-6 border-BaseWhite w-40" alt="Your default profile picture" />
        {/* User Address */}
        <div className="text"></div>
        <div>
        </div>
        <Profile />
      </div>


    </div>
  )
}

export default CreateEvent;
