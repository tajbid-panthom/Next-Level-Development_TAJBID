import AddUserModal from "@/components/module/task/AddUserModal";
import UserCard from "@/components/module/task/UserCard";
import { selectUsers } from "@/redux/features/task/userSlice";
import { useAppSelector } from "@/redux/hook";

const User = () => {
  const users = useAppSelector(selectUsers);
  return (
    <div className="mx-auto max-w-7xl px-5 mt-20 sm:px-6 lg:px-8">
      <div className="flex justify-end items-center gap-5">
        <h1>User</h1>
        <div className="mr-auto">
          <AddUserModal />
        </div>
      </div>
      <div className="space-y-5 mt-5">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default User;
