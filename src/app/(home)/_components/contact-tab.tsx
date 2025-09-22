import gmail from "@/app/public/gmail.png";
import whatsapp from "@/app/public/whatsapp.png";
import { CopyIcon, EnvelopeSimpleIcon } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import Card from "./card";
import ContactFooter from "./contact-footer";

export default function ContactTab() {
  return (
    <div className="flex h-full flex-col gap-4">
      <Card className="h-full flex-1 gap-4 px-8">
        <div className="space-y-2">
          <div className="flex flex-row items-center gap-4">
            <EnvelopeSimpleIcon size={32} className="text-muted" />
            <p className="text-2xl">Contact Me</p>
          </div>
          <p className="text-muted">
            I&apos;m always open to new opportunities and collaborations. Feel
            free to reach out through any of my available channels:
          </p>
        </div>
        <div className="flex w-full flex-col justify-start gap-4 md:flex-row">
          <Link
            href={
              "https://mail.google.com/mail/u/0/?fs=1&to=dturiano.r@gmail.com&tf=cm"
            }
            className="bg-muted/10 hover:bg-muted/20 hover:text-accent flex items-center gap-4 rounded-md px-8 py-2"
          >
            <Image src={gmail} alt="gmail logo" height={24} width={24} />
            <p>dturiano.r@gmail.com</p>
          </Link>
          <div className="bg-muted/10 hover:bg-muted/20 flex items-center justify-center gap-4 rounded-md py-2 md:px-8">
            <div className="flex flex-row items-center space-x-2">
              <Image
                src={whatsapp}
                alt="whatsapp logo"
                height={24}
                width={24}
              />
              <p className="font-sans text-sm md:text-base">+63 939 124 8392</p>
            </div>
            <button
              className="hover:bg-muted/20 ml-2 cursor-pointer rounded p-1 transition"
              title={`Copy Mobile / WhatsApp`}
              onClick={() => {
                navigator.clipboard.writeText("+639391248392");
              }}
            >
              <CopyIcon size={24} />
            </button>
          </div>
        </div>
      </Card>
      <ContactFooter />
    </div>
  );
}
