import React, { useEffect, useRef, useState } from "react";

function BlogSection() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const sectionStyle = {
    padding: "80px 8%",
    background: "#f5f5f5",
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(80px)",
    transition: "all 0.8s ease",
  };

 const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "50px",
  flexWrap: "wrap",
  gap: "10px",
};

 const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "40px",
};

  const cardStyle = (index) => ({
    transform: visible ? "translateY(0)" : "translateY(60px)",
    opacity: visible ? 1 : 0,
    transition: `all 0.6s ease ${index * 0.2}s`,
  });

 const imgStyle = {
  width: "100%",
  height: "auto",
  maxHeight: "260px",
  objectFit: "cover",
  transition: "0.4s",
};

  const metaStyle = {
    marginTop: "15px",
    fontSize: "13px",
    color: "#777",
    letterSpacing: "1px",
  };

  const titleStyle = {
    margin: "15px 0",
    fontSize: "20px",
    fontWeight: "500",
  };

  const descStyle = {
    fontSize: "14px",
    color: "#666",
    lineHeight: "1.6",
  };

  const viewAllStyle = {
    fontSize: "14px",
    letterSpacing: "2px",
    cursor: "pointer",
  };

  return (
    <section ref={sectionRef} style={sectionStyle}>
      <div style={headerStyle}>
        <h2 style={{ fontSize: "32px", letterSpacing: "2px" }}>
          READ BLOG POSTS
        </h2>
        <span style={viewAllStyle}>VIEW ALL</span>
      </div>

      <div style={gridStyle}>
        <div style={cardStyle(0)}>
          <img
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b"
            alt="blog1"
            style={imgStyle}
          />
          <p style={metaStyle}>FASHION / JUL 11, 2022</p>
          <h3 style={titleStyle}>HOW TO LOOK OUTSTANDING IN PASTEL</h3>
          <p style={descStyle}>
            Dignissim lacus, turpis ut suspendisse vel tellus.
            Turpis purus, gravida orci, fringilla...
          </p>
        </div>

        <div style={cardStyle(1)}>
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d"
            alt="blog2"
            style={imgStyle}
          />
          <p style={metaStyle}>FASHION / JUL 11, 2022</p>
          <h3 style={titleStyle}>TOP 10 FASHION TREND FOR SUMMER</h3>
          <p style={descStyle}>
            Turpis purus, gravida orci, fringilla dignissim lacus,
            turpis ut suspendisse vel tellus...
          </p>
        </div>

        <div style={cardStyle(2)}>
          <img
            src="https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb"
            alt="blog3"
            style={imgStyle}
          />
          <p style={metaStyle}>FASHION / JUL 11, 2022</p>
          <h3 style={titleStyle}>CRAZY FASHION WITH UNIQUE MOMENT</h3>
          <p style={descStyle}>
            Turpis purus, gravida orci, fringilla dignissim lacus,
            turpis ut suspendisse vel tellus...
          </p>
        </div>
      </div>
    </section>
  );
}

export default BlogSection;