// https://hygraph.com/blog/nextjs-dynamic-routing

import axios from "axios";
import { useRouter } from "next/router";

const Blog = ( { teches }: any ) => {

  const router = useRouter();
  const { id } = router.query;

  const tech = teches.data[1];
  console.log(tech)

  return (
    <main>
      <div className="border-solid border dark:border-gray-200 border-gray-800 p-2">
        <h1>{tech.attributes.Name}</h1>
        <p className="overflow-hidden">{tech.attributes.Description}</p>
      </div>
      {id}
    </main>
  )
}

Blog.getInitialProps = async ( ctx: any ) => {

  try {
    const res = await axios.get( `http://127.0.0.1:1337/api/teches` );
    const teches = res.data;
    // console.log("getinitialprops---------------------")
    // console.log( teches.data )
    // console.log("------------------------")
    return { teches };
  } catch ( error ) {
    return { error };
  }
};
export default Blog