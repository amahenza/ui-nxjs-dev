import Link from "next/link";

import Layout from "../components/Layout";

const Index = () => (
  <Layout>
    <Link href="/home">
      <h2>
        Let's get to know about <a> InPoin</a>
      </h2>
    </Link>
  </Layout>
);

export default Index;
