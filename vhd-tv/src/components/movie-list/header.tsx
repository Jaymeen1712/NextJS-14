import React from "react";

interface MovieListHeaderProps {
  title: string;
  headerRight?: React.ReactNode;
}

const MovieListHeader = ({ title, headerRight }: MovieListHeaderProps) => {
  return (
    <div>
      <div className="flex space-x-8 items-center">
        <h1 className="text-white font-bold text-2xl mr-4">{title}</h1>
        <div>{headerRight}</div>
      </div>
    </div>
  );
};

export default MovieListHeader;
