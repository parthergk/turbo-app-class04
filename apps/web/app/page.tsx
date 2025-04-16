import { prismaClient } from "@repo/db/client";
export default async function Home() {
    const user = await prismaClient.user.findFirst();
  
  return (
    <div>
      Branch Main
      Hello Gaurav: 
      {user?.name}
    </div>
  );
}
