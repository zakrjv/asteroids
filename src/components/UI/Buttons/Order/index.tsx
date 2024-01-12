import React from 'react';

export default function Order({ children }: { children: React.ReactNode }) {
  return (
    <button className="mr-2.5 px-3 py-1 font-bold uppercase text-xs text-accent-main bg-accent-main-15 rounded-full hover:bg-accent-main hover:text-white">
      {children}
    </button>
  );
}
