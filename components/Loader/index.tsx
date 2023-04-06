import Image from 'next/image';

type LoaderProps = {
  size?: number;
};
const Loader = ({ size = 20 }: LoaderProps) => {
  return (
    <div className="flex items-center justify-center">
      <div className="animate-spin mr-3" style={{ width: size, height: size }}>
        <Image
          src="/icons/spinner.svg"
          alt="Loading"
          width={size}
          height={size}
        />
      </div>
      Processing...
    </div>
  );
};

export default Loader;
