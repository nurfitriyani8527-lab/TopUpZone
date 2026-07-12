export const BackgroundGlow = () => {
    return(
        <>
        {/* Glow kiri atas */}
        <div
            className="
            absolute
            -top-40
            -left-32
            w-[500px]
            h-[500px]
            bg-[#7A1F2B]
            opacity-20
            blur-[180px]
            rounded-full
            pointer-events-none
            "
        />

        {/* Glow kanan */}
        <div
            className="
            absolute
            top-[700px]
            -right-40
            w-[500px]
            h-[500px]
            bg-[#962D3E]
            opacity-15
            blur-[200px]
            rounded-full
            pointer-events-none
            "
        />

        {/* Glow bawah */}
        <div
            className="
            absolute
            bottom-0
            left-1/2
            -translate-x-1/2
            w-[700px]
            h-[400px]
            bg-[#E53950]
            opacity-10
            blur-[220px]
            rounded-full
            pointer-events-none
            "
        />
        </>
    )
}