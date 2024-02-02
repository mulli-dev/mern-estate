import { useSelector } from "react-redux";

export default function Profile() {
  const { currentUser, loading } = useSelector((state) => state.user);
  return (
    <div className="max-w-lg p-3 mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>;
      <form className="flex flex-col gap-3">
        <img
          //onClick={() => fileRef.current.click()}
          src={currentUser.avatar}
          alt="profile"
          className="self-center object-cover w-24 h-24 mt-2 rounded-full cursor-pointer"
        />
        <input
          type="text"
          placeholder="username"
          defaultValue={currentUser.username}
          id="username"
          className="p-3 border rounded-lg"
          //onChange={handleChange}
        />
        <input
          type="email"
          placeholder="email"
          id="email"
          defaultValue={currentUser.email}
          className="p-3 border rounded-lg"
          //onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          // onChange={handleChange}
          id="password"
          className="p-3 border rounded-lg"
        />
        <button
          disabled={loading}
          className="p-3 text-white uppercase rounded-lg bg-slate-700 hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Loading..." : "Update"}
        </button>
      </form>
      <div className="flex justify-between mt-5 ">
        <span className="text-red-700 cursor-pointer"> Delete account</span>
        <span className="text-red-700 cursor-pointer"> Sign Out</span>
      </div>
    </div>
  );
}
