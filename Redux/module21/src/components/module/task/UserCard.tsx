import { Button } from "@/components/ui/button";
import { deleteUser } from "@/redux/features/task/userSlice";
import { useAppDispatch } from "@/redux/hook";
import type { IUser } from "@/types";
interface IProps {
  user: IUser;
}
const UserCard = ({ user }: IProps) => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <div className="border px-5 py-3 rounded-md">
        <div className="flex justify-between items-center">
          <h1>{user?.name}</h1>
          <Button
            variant="link"
            className="text-red-500"
            onClick={() => dispatch(deleteUser(user.id))}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
