const CustomModal = ({ children, style, visible }) => {
  return (
    <div
    className="Transition-1"
      style={{
        // display: visible ? "flex" : "none",
        right: visible ? 0 : "-100vw",
        opacity: visible ? 1 : 0,
        zIndex: 500,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default CustomModal;
