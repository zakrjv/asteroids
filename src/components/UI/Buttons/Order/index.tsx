import React from 'react';

interface Props {
  children: React.ReactNode;
  onClick: () => void;
}

export default function Order(props: Props) {
  const { children, onClick } = props;
  return (
    <button
      className="mr-2.5 px-3 py-1 font-bold uppercase text-xs text-accent-main bg-accent-main-15 rounded-full hover:bg-accent-main hover:text-white"
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
