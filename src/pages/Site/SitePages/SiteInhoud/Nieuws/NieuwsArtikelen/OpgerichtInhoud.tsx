import { Separator } from "@radix-ui/react-separator"



export function OpgerichtInhoud() {
    return (
        <>
            <div className="mt-15">
                <div className="">

                    <img
                        src={`${import.meta.env.BASE_URL}banner-light.png`}
                        alt="Banner for light mode"
                        className="w-full lg:w-4/5 mx-auto h-auto block dark:hidden border border-gray-300 dark:border-gray-600 rounded-sm"
                    />


                    <img
                        src={`${import.meta.env.BASE_URL}banner-dark.png`}
                        alt="Banner for dark mode"
                        className="w-full lg:w-4/5 mx-auto h-auto hidden dark:block border border-gray-300 dark:border-gray-600 rounded-sm"
                    />
                </div>
                
                <div className="w-full lg:w-4/5 mx-auto ">
                    <h1 className="text-xl text-red-700 font-semibold">Title</h1>
                    <p className="text-muted-foreground">Door: </p></div>
                <div className="w-full lg:w-5/6 border-t border-gray-300 dark:border-gray-700 my-6 mx-auto" />
                <div className="w-full lg:w-4/5 mx-auto">

                    <p>
                        test
                    </p>

                </div>
            </div>
        </>
    )
}