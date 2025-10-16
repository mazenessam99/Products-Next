import "../globals.css";

export const metadata = {
  title: "Authentication",
  description: "Login ",
};

export default function AuthLayout({ children }) {
  return (
    <section className=" flex items-center justify-center min-h-screen">
      {children}
    </section>
  );
}
