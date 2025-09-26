const TrustedLogo = () => {
    return (
        <div className="text-center py-20 px-50 tracking-wide">
            <p className="text-baseColor font-semibold text-2xl">Trusted by 5,000+ Companies Worldwide</p>
            <div className="flex gap-12 justify-center p-10 items-center" >
                <img src="./google.png" alt="google"/>
                <img src="./netflix.png" alt="netflix" />
                <img src="./airbnb.png" alt="airbnb" />
                <img src="./amazon.png" alt="amazon" />
                <img src="./facebook.png" alt="facebook" />
                <img src="./grab.png" alt="grab" />
            </div>
        </div>
    )
}

export default TrustedLogo