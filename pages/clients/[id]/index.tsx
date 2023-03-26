import { useRouter } from "next/router";

const ClientsProjectPage = () => {
  const router = useRouter();

  console.log(router.query);

  const loadProjectHandler = () => {
    // load data
    router.push("/client/max/projecta");
    // push에는 Link의 href와 똑같이 객체 형태로도 전달 가능
  };

  return (
    <div>
      <h1>The Projects of a Given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
};

export default ClientsProjectPage;
