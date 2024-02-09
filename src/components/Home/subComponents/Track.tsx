// Dependencies
import { Button, Input } from "@nextui-org/react";

const Track = () => {
  return (
    <div
      className="px-[1rem] sm:px-[5rem] py-[5rem] min-h-[25rem] bg-no-repeat bg-cover bg-center flex items-center justify-center sm:justify-start"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.6) 20%,rgba(0,0,0,0.6)),url(https://images.unsplash.com/photo-1585713181935-d5f622cc2415?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <div className="max-w-[23rem] md:max-w-[30rem] flex flex-col gap-[1rem] text-white">
        <h1 className="text-[2rem] leading-[2rem] font-bold text-center sm:text-left">Track Your Shipment</h1>
        <p className="text-justify text-sm">
          Iste reprehenderit maiores facilis saepe cumque molestias. Labore iusto excepturi, laborum aliquid pariatur
          veritatis autem, mollitia sint nesciunt hic error porro. Deserunt officia unde repellat beatae ipsum sed.
          Aperiam tempora consectetur voluptas magnam maxime asperiores quas similique repudiandae, veritatis reiciendis
          harum fuga atque.
        </p>
        <div className="flex justify-center items-center">
          <Input type="number" placeholder="Enter Your Tracking Number" radius="none" />
          <Button color="primary" radius="none" className="max-w-[10rem] h-[3.5rem]">
            Track
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Track;
