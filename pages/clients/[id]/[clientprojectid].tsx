import { useRouter } from "next/router";

const SelectedClientsProjectPage = () => {
  const router = useRouter();

  return (
    <div>
      <h1>
        The Projects page for a Specific Project for a Selected Client :{" "}
        {router.query.clientprojectid}
      </h1>
    </div>
  );
};

export default SelectedClientsProjectPage;
