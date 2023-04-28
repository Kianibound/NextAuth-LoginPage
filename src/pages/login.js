import Head from "next/head";
import Layout from "@/layout/layout";
import Link from "next/link";
import styles from "../styles/Form.module.css";
import Image from "next/image";
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
const login = () => {
  return (
    <Layout>
      <Head>
        <title>Login Page</title>
      </Head>

      <section className="w-3/4 mx-auto flex flex-col gap-5">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">Explore</h1>
          <p className="w-3/4 mx-auto text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            officia?
          </p>
        </div>

        {/* form */}
        <form className="flex flex-col gap-3">
          <div className={styles.input_group}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={styles.input_text}
            />
            <span className="icon flex items-center px-4">
              <HiAtSymbol size={20} />
            </span>
          </div>
          <div className={styles.input_group}>
            <input
              type="password"
              name="password"
              placeholder="password"
              className={styles.input_text}
            />
            <span className="icon flex items-center px-4">
              <HiFingerPrint size={20} />
            </span>
          </div>

          {/* login buttons */}
          <div className={styles.button}>
            <button type="submit">Login</button>
          </div>
          <div className={styles.button}>
            <button type="submit">Sign In with Google </button>
            <Image src={"/assets/google.svg"} width="20" height={20}></Image>
          </div>
          <div className={styles.button}>
            <button type="submit">Sign In with Github </button>
            <Image src={"/assets/github.svg"} width={25} height={25}></Image>
          </div>
        </form>

        {/* bottom */}
        <p className="text-center text-gray-400 ">
          don't have an account yet?{" "}
          <Link href={"/register"} className="text-blue-700">
            Sign Up
          </Link>
        </p>
      </section>
    </Layout>
  );
};

export default login;
