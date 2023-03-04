import { useState } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: any
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [showModal, setShowModal] = useState(isOpen);

  const handleClose = () => {
    setShowModal(false);
    onClose();
  };

  if (!showModal) return null;

  return ReactDOM.createPortal(
    <>
      <div className="fixed z-50 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen">
          <div
            className="fixed inset-0 bg-black opacity-60"
            onClick={handleClose}
          ></div>
          <div className="bg-white p-6 rounded-lg z-10">
            {children}
            <button
              className="bg-gray-300 hover:bg-gray-400 rounded-md py-2 px-4 mt-4"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("modal-root") as HTMLElement
  );
};

export default Modal;
