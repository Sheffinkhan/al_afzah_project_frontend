const Toast = ({ type = "success", message, onClose }) => {
  const styles = {
    success: "bg-green-600/90 border-green-500",
    error: "bg-red-600/90 border-red-500",
    warning: "bg-yellow-600/90 border-yellow-500",
  };

  return (
    <div
      className={`fixed top-6 right-6 z-50 px-6 py-4 rounded-xl border text-white shadow-2xl animate-slide-in ${styles[type]}`}
    >
      <div className="flex items-center gap-4">
        <p className="text-sm font-medium">{message}</p>
        <button
          onClick={onClose}
          className="text-white/80 hover:text-white text-lg"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default Toast;
