import React from "react";
import PropType from "prop-types";
import { Link } from "react-router-dom";

const UserItem = ({ user: { login, avatar_url } }) => {
  return (
    <div className="card shadow-xl compact side bg-base-100">
      <div className="flex-row items-center space-x-4 card-body">
        <div>
          <div className="avatar">
            <div className="rounded-full shadow h-14 w-14">
              <img src={avatar_url} alt="profile" />
            </div>
          </div>
        </div>
        <div>
            <h2 className="card-title">{login}</h2>
            <Link className="text-base-content text-opacity-40"
            to={`/user/${login}`}> Visit Profile</Link>
        </div>
      </div>
    </div>
  );
};

UserItem.propType = {
  uesr: PropType.object.isRequired,
};

export default UserItem;
