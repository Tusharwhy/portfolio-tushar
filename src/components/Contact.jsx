import React from "react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
// import emailjs from "@emailjs/browser";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaMedium } from "react-icons/fa6";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

//template_bx1zlpy

//service_kyxz793

//swIG7ERJ9-O-fyOb7

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   emailjs
  //     .send(
  //       "service_kyxz793",
  //       "template_bx1zlpy",
  //       {
  //         from_name: form.name,
  //         to_name: "Tushar",
  //         from_email: form.email,
  //         to_email: "tusharrajora29@gmail.com",
  //         message: form.message,
  //       },

  //       "swIG7ERJ9-O-fyOb7"
  //     )
  //     .then(
  //       () => {
  //         setLoading(false);
  //         alert("Thank you. I will get back to you as soon as possible.");

  //         setForm({
  //           name: "",
  //           email: "",
  //           message: "",
  //         });
  //       },
  //       (error) => {
  //         setLoading(false);
  //         console.log(error);
  //         alert("something went wrong");
  //       }
  //     );
  // };
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75]  p-8 rounde-2xl"
      >
        {/* <p className={styles.sectionSubText}>Get in touch</p> */}
        {/* <h3 className={styles.sectionHeadText}>Contact.</h3> */}
        <h1 className={`${styles.sectionHeadText} text-white`}>
          Hi, I'm <span className="text-[#915eff]">Tushar</span>
        </h1>
        <div className="flex gap-5 items-center">
          <a
            href="https://github.com/Tusharwhy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/tushar-thegreat/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a href="https://medium.com/@tusharrajora29">
            <FaMedium />
          </a>
          <a
            href="https://twitter.com/tushaarthegreat"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter />
          </a>

          <a href="mailto:tusharrajora29@gmail.com">
            <BiLogoGmail />
          </a>
        </div>

        <form
          ref={formRef}
          style={{ visibility: "hidden" }}
          // onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white 
          rouned-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white 
          rouned-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white 
          rouned-lg outlined-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
        {/* <div style={{ height: "400px" }}></div> */}
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "home");
