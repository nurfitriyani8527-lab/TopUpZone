const AdminBackground = () => {
  return (
    <>
      {/* kiri atas */}
      <div
        className="
        fixed
        -top-44
        -left-44
        w-[450px]
        h-[450px]
        rounded-full
        bg-[#7A1F2B]
        opacity-10
        blur-[180px]
        pointer-events-none
        -z-10
        "
      />

      {/* kanan bawah */}
      <div
        className="
        fixed
        bottom-0
        right-0
        w-[350px]
        h-[350px]
        rounded-full
        bg-[#962D3E]
        opacity-10
        blur-[160px]
        pointer-events-none
        -z-10
        "
      />
    </>
  );
};

export default AdminBackground;