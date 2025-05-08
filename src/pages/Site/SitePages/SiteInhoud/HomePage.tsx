

export function HomePage() {
    return (
        <>
            <div className="mt-15">

                <div className="w-full">
                    
                    <img
                        src="./banner-light.png"
                        alt="Banner for light mode"
                        className="w-full h-auto block dark:hidden"
                    />

                    
                    <img
                        src="./banner-dark.png"
                        alt="Banner for dark mode"
                        className="w-full h-auto hidden dark:block"
                    />
                </div>
                
                
                
                
            </div>
        </>
    )
}