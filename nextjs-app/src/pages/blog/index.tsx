import axios from "axios";
import Link from "next/link";

const Blog = ( { teches }: any ) => {


  return (
    <main
      style={{ "backgroundImage": "url('/frog-redeye.jpg')" }}
      className="flex flex-col md:flex-col items-center bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 rounded-xl overflow-hidden w-full shadow-lg"
    >
      <h1>ブログ</h1>
      {/* <h1>CD成功した？ローカルでbuildしてプッシュしただけだけどの変更から反映までできてるかな</h1> */}
      <div
        className="flex-1 p-4 lg:p-6"
      >
        {/* <Link href={`blog/1`}>to /blog/1</Link> */}
        <ul className="grid grid-rows-4 grid-cols-1 gap-4 md:grid-rows-2 md:grid-cols-2">
          {teches.data.map( ( tech: any ) => (
            <Link
              href={{
                pathname: `/blog/${ tech.id }`,
                query: {
                  tag: "teches",
                  id: tech.id,
                }
              }}
              className="rounded-2xl bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 p-4 flex flex-col relative undefined"
              key={tech.id}
            >
              <li className="border-solid border dark:border-gray-200 border-gray-800 p-4" >
                <h2>{tech.attributes.Name}</h2>
                <p className="overflow-hidden">{tech.attributes.Description}</p>
              </li>
            </Link>
          ) )}
        </ul>
      </div>

    </main>
  )
}

Blog.getInitialProps = async ( ctx: any ) => {

  try {
    const res = await axios.get( 'http://127.0.0.1:1337/api/teches' );
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