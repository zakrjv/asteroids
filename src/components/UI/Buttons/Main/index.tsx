import React from 'react';

interface Props {
  children: React.ReactNode;
  onClick: () => void;
  isDisabled: boolean;
}

export default function Main(props: Props) {
  const { children, onClick, isDisabled } = props;

  return (
    <button
      className="inline-flex justify-between self-end py-3 px-4 bg-accent-main text-white font-bold rounded-full disabled:bg-gray-500 disabled:text-zinc-400"
      type="button"
      onClick={onClick}
      disabled={isDisabled}
    >
      <span>{children}</span>
    </button>
  );
}
