// https://hygraph.com/blog/nextjs-dynamic-routing

import axios from "axios";
import { useRouter } from "next/router";


const Blog = ( { data }: any ) => {

  const router = useRouter();
  // console.log( router )
  const { id, tag } = router.query;
  // console.log( `${ id } + ${ tag }` )
  console.log(typeof(data.data[0].id))
  
  const tech = data.data.find( (obj:any) => obj.id == id)
  console.log( "---tech------------------------" );
  console.info( tech );
  console.log( "---tech------------------------" );

  
  return (
    <main>
      <div className="border-solid border dark:border-gray-200 border-gray-800 p-2">
        <h1>{tech.attributes.Name}</h1>
        <p className="overflow-hidden">{tech.attributes.Description}</p>
      </div>
    </main>
  )
};

Blog.getInitialProps = async ( ctx:any ) => {

  try {
    const res = await axios.get( `http://127.0.0.1:1337/api/teches` );
    const data = res.data;
    return { data };
  } catch ( error ) {
    return { error };
  }
};
export default Blog