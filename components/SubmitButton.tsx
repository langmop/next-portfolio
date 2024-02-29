import React from "react";
import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

const submitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      type="submit"
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <div className="gap-2 flex">
          Send
          <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 text-xs  opacity-70 transition-all relative top-[6px]" />
        </div>
      )}
    </button>
  );
};

export default submitButton;
