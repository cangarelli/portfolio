"use client";
import Link from "next/link";
import React, { ReactNode } from "react";
interface ButtonGlobalProps {
  type: "button" | "submit" | "link" | "out";
  label: string | ReactNode;
  handler?: () => void;
  value?: string;
  off?: boolean;
  icon?: ReactNode;
}

const ButtonGlobal: React.FC<ButtonGlobalProps> = ({
  type,
  label,
  handler,
  value,
  off,
  icon,
}) => {
  const buttonStyle = `px-2 py-1 mx-2 // flex items-center justify-center gap-2 // bg-white text-gray-600 // uppercase // border-2 rounded-lg`;

  return (
    <div className="flex items-center justify-center">
      {type === "link" ? (
        <Link className={buttonStyle} href={value || "/"}>
          {icon && icon}
          {label}
        </Link>
      ) : type === "out" ? (
        value && (
          <a className={buttonStyle} href={value}>
            {icon && icon}
            {label}
          </a>
        )
      ) : (
        ["button", "submit"].includes(type) && (
          <button
            className={buttonStyle}
            type={type}
            {...(handler && { onClick: handler })}
            {...(off && { disabled: true })}
          >
            {icon && icon}
            {label}
          </button>
        )
      )}
    </div>
  );
};

export default ButtonGlobal;
