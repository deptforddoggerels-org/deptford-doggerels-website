import ContactForm from "@/components/ContactForm"
import Image from "next/image"

export default function ContactPage() {
  return (
     <main className="px-12 pt-20 pb-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
    
    
                    <div className="text-base leading-relaxed">
                        <ContactForm />

                    </div>
    
                    <Image
                        src="/DoggerelsSkateboarded.webp"
                        alt="Description"
                        width={400}
                        height={400}
                        className="rounded-full object-cover"
                    />
                </div>
    
            </main>
  )
}