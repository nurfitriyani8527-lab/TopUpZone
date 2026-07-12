export const ContactBackground = () => {
    return (
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

            {/* Glow kanan atas */}
            <div
                className="
                absolute
                top-20
                -right-40
                w-[420px]
                h-[420px]
                bg-[#962D3E]
                opacity-15
                blur-[180px]
                rounded-full
                pointer-events-none
                "
            />

            {/* Glow tengah */}
            <div
                className="
                absolute
                top-1/2
                left-1/2
                -translate-x-1/2
                -translate-y-1/2
                w-[700px]
                h-[500px]
                bg-[#E53950]
                opacity-[0.05]
                blur-[220px]
                rounded-full
                pointer-events-none
                "
            />

            {/* Glow kanan bawah */}
            <div
                className="
                absolute
                bottom-0
                right-0
                w-[450px]
                h-[450px]
                bg-[#7A1F2B]
                opacity-15
                blur-[170px]
                rounded-full
                pointer-events-none
                "
            />

            {/* Dot 1 */}
            <div
                className="
                absolute
                top-32
                left-24
                w-3
                h-3
                rounded-full
                bg-[#E53950]
                opacity-30
                "
            />

            {/* Dot 2 */}
            <div
                className="
                absolute
                top-[500px]
                right-40
                w-2
                h-2
                rounded-full
                bg-white
                opacity-20
                "
            />

            {/* Dot 3 */}
            <div
                className="
                absolute
                bottom-40
                left-1/3
                w-4
                h-4
                rounded-full
                bg-[#962D3E]
                opacity-25
                "
            />

            {/* Dot 4 */}
            <div
                className="
                absolute
                bottom-20
                right-1/4
                w-3
                h-3
                rounded-full
                bg-[#E53950]
                opacity-20
                "
            />
        </>
    );
};