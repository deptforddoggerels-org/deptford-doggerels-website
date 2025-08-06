import Image from "next/image"

export default function AboutPage() {
    return (
        <main className="px-12 py-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">


                <div className="text-base leading-relaxed">
                    <h2 className="text-4xl  mb-2 font-pirata">Who we are?</h2>
                    <p className="text-lg">
                        Put simply, we're creating a space we want to be a part of in the community we love. We want to find local people with the same inkling.
                    </p>
                    <p className="text-lg">
                        There’s not enough poetry nights in deptford, ‘til now.

                    </p>
                    <p className="text-red-600 text-lg">
                        woof
                    </p>

                    <p className="text-lg">
                        Find us at: <a
                            href="https://maps.app.goo.gl/pZEqYdEcNN5xwkeB8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-black"
                        >
                            Aaja Basement, Comet Pl, London SE8 4EP
                        </a>
                    </p>
                </div>

                <Image
                    src="/DoggerelsPoster.webp"
                    alt="Description"
                    width={400}
                    height={400}
                    className="rounded-lg object-cover"
                />
            </div>

        </main>
    )
}