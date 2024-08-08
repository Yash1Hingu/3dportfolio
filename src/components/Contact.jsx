import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../util/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChanage = (e) => { }

  const handelSubmit = (e) => { }


  return (
    <div className="cl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h2 className={`${styles.sectionHeadText}`}>Contact.</h2>

        <form
          ref={formRef}
          onSubmit={handelSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label
            className="flex flex-col"
          >
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              placeholder="What's your name?"
              value={form.name}
              onChange={handleChanage}
              className="bg-tertiary py-4 px-6 rounded-lg placeholder:text-secondary text-white outline-none border-none font-medium"
            />
          </label>
          <label
            className="flex flex-col"
            >
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              placeholder="What's your email?"
              value={form.email}
              onChange={handleChanage}
              className="bg-tertiary py-4 px-6 rounded-lg placeholder:text-secondary text-white outline-none border-none font-medium"
            />
          </label>
          <label
            className="flex flex-col"
            >
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="email"
              placeholder="What do you want to say?"
              value={form.message}
              onChange={handleChanage}
              className="bg-tertiary py-4 px-6 rounded-lg placeholder:text-secondary text-white outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 w-fit shadow-md shadow-primary text-white font-bold rounded-lg"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")