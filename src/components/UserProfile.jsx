import UserName from "./UserName.jsx";
import UserAvatar from "./UserAvatar.jsx";
import UserBio from "./UserBio.jsx";

export default function UserProfile({ name, imageUrl, bio }) {
  return (
    <div className="user-profile">
      <UserAvatar imageUrl={imageUrl} />
      <UserName name={name} />
      <UserBio bio={bio} />
    </div>
  );
}
