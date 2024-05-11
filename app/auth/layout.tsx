import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-full flex-col items-center justify-center bg-gradient-to-tl from-cyan-400 via-blue-500 to-blue-800">
      {children}
    </div>
  );
};

export default AuthLayout;
