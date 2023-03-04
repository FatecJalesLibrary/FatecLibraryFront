const CustomSection = ({
  id,
  children,
  className,
  center,
  bg_color = "var(--background-color0)",
  bg_image = false,
  style = {},
}) => {
  return (
    <section
      id={id}
      className={className ?? ""}
      style={{
        display: "grid",
        minHeight: "100vh",
        backgroundColor: bg_color,
        boxShadow: "0 0 0 0.1rem rgba(105, 59, 159, 0.1)",
        ...style,
        ...(center ? { justifyContent: "center", alignItems: "center" } : ""),
        ...(bg_image
          ? {
              background: `url(${bg_image}) no-repeat`,
              backgroundPosition: "center bottom",
              backgroundSize: `cover`,
            }
          : ""),
      }}
    >
      <div style={{ display: "flex", height: "100%", width: "100vw" }}>
        {children}
      </div>
    </section>
  );
};

export default CustomSection;
