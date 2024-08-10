"use client";

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/_button-old";
import { contactInfo } from "@/entities/contact";

function ContactPage() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="py-6"
    >
      <div className="container">
        <div className="flex flex-col gap-[30px] xl:flex-row">
          {/* form */}
          <div className="order-2 xl:order-none xl:w-[54%]">
            <form className="flex flex-col gap-6 rounded-xl bg-[#27272c] p-10">
              <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
              <p className="text-white/60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                tempore architecto consequuntur ea labore, perferendi.
              </p>

              {/* input */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Input
                  type="text"
                  id="first-name"
                  name="first-name"
                  placeholder="First name"
                />
                <Input
                  type="text"
                  id="last-name"
                  name="last-name"
                  placeholder="Last name"
                />
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email address"
                />
                <Input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Phone number"
                />
              </div>
              {/* select */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="cst">UI/UX Design</SelectItem>
                    <SelectItem value="mst">Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* textarea */}
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here"
              />
              <Button className="max-w-40">Send message</Button>
            </form>
          </div>

          {/* info */}
          <div className="order-1 mb-8 flex flex-1 items-center xl:order-none xl:mb-0 xl:justify-end">
            <ul className="flex flex-col gap-10">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-center gap-6">
                  <div className="flex h-[52px] w-[52px] items-center justify-center rounded-md bg-[#27272c] text-accent xl:h-[72px] xl:w-[72px]">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default ContactPage;
