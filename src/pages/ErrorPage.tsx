import { isRouteErrorResponse, useRouteError } from "react-router-dom";

import BulletinBoardImage from "../assets/images/bulletin-board.png";

const ErrorPage: React.FC = () => {
  const error = useRouteError();

  const ErrorMessage = () => {
    if (isRouteErrorResponse(error)) {
      return (
        <div>
          <h1>Oops!</h1>
          <h2>{error.status}</h2>
          <p>{error.statusText}</p>
          {error.data?.message && <p>{error.data.message}</p>}
        </div>
      );
    } else {
      return <div>Oops</div>;
    }
  };

  return (
    <div className="relative w-full h-[calc(100vh-212px)]">
      <div className="absolute -bottom-1 left-0">
        <div className="text-white font-bold absolute top-[150px] left-[175px]">
          <ErrorMessage />
        </div>
        <img
          src={BulletinBoardImage}
          alt="Bulletin Board Image"
          className="w-[565px] h-[516px]"
        />
      </div>
    </div>
  );
};

export default ErrorPage;
