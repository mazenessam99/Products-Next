import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
      <h1 className="text-2xl font-bold text-center text-purple-700 mb-6">
        Login
      </h1>
      <form className="space-y-4">
        <label className="text-purple-600">Enter your Email</label>
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 p-3 rounded-lg text-black focus:ring-2 focus:ring-purple-600 outline-none"
        />
        <label className="text-purple-600">Enter your Password</label>
        <input
          type="password"
          placeholder="Password"
          className="w-full border border-gray-300 p-3 rounded-lg text-black focus:ring-2 focus:ring-purple-600 outline-none"
        />
        <button
          type="submit"
          className="w-full bg-purple-700 text-white py-3 rounded-lg cursor-pointer hover:bg-purple-600 transition"
        >
          Sign In
        </button>
        <p className="text-center text-gray-600 mt-4">
                    Dont't have an account?{" "}
                    <Link
                        href="/register"
                        className="text-purple-700 font-semibold hover:underline"
                    >
                        Sign Up
                    </Link>
                </p>
      </form>
    </div>
  );
}
