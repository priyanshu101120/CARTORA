import Auth from "./Auth";

const AuthModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white bg-black px-2 rounded"
        >
          ✕
        </button>

        {/* Auth Form */}
        <Auth onClose={onClose} />
      </div>
    </div>
  );
};

export default AuthModal;