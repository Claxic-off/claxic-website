import { Link } from 'react-router-dom';

export default function ServiceCard({ title, description, points = [], number = '01', className = '', style = {} }) {
  return (
    <>
      <style>{`
        .pixel-service-card {
          position: relative;
          display: flex;
          flex-direction: column;
          min-height: 100%;
          padding: 1rem 1.1rem 1rem;
          background: #fffdfb;
          border: 3px solid #F3DBD0;
          box-shadow: 4px 4px 0 0 rgba(23, 23, 23, 0.04);
          border-radius: 0;
          transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
          overflow: hidden;
        }

        .pixel-service-card::before,
        .pixel-service-card::after {
          content: "";
          position: absolute;
          width: 8px;
          height: 8px;
          background: #FF2B12;
          box-shadow: 0 0 0 2px rgba(255, 43, 18, 0.12);
        }

        .pixel-service-card::before {
          left: 10px;
          top: 10px;
        }

        .pixel-service-card::after {
          right: 10px;
          bottom: 10px;
        }

        .pixel-service-card:hover {
          transform: translateY(-4px);
          border-color: #FF2B12;
          box-shadow: 6px 6px 0 0 rgba(23, 23, 23, 0.08);
        }

        .pixel-card-header {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          margin-bottom: 0.9rem;
        }

        .pixel-card-number {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 56px;
          min-height: 42px;
          padding: 0.2rem 0.5rem;
          border: 3px solid #FF2B12;
          background: #fff;
          color: #171717;
          font-size: 1.1rem;
          line-height: 1;
          font-weight: 800;
          box-shadow: 3px 3px 0 0 rgba(23, 23, 23, 0.08);
        }

        .pixel-card-title {
          margin: 0;
          color: #171717;
          font-size: clamp(1.12rem, 1.4vw, 1.6rem);
          line-height: 1.3;
          letter-spacing: 0.02em;
          text-transform: none;
        }

        .pixel-card-description {
          margin: 0.8rem 0 0;
          color: #58677a;
          font-size: 0.7rem;
          line-height: 1.7;
          letter-spacing: 0.02em;
        }

        .pixel-card-divider {
          margin-top: 1rem;
          margin-bottom: 0.9rem;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, rgba(255,43,18,0.85), rgba(255,43,18,0.18));
        }

        .pixel-card-list {
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .pixel-card-list li {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          color: #171717;
          font-size: 0.66rem;
          line-height: 1.6;
          letter-spacing: 0.02em;
        }

        .pixel-card-list li::before {
          content: "";
          display: inline-block;
          width: 8px;
          height: 8px;
          background: #FF2B12;
          border: 2px solid #171717;
          box-shadow: 2px 2px 0 0 rgba(23, 23, 23, 0.12);
          flex-shrink: 0;
        }

        .pixel-card-footer {
          display: flex;
          justify-content: flex-start;
          margin-top: auto;
          padding-top: 0.9rem;
        }

        .pixel-card-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 36px;
          padding: 0.55rem 0.85rem;
          background: #FFF1ED;
          border: 3px solid #FF2B12;
          color: #171717;
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease, color 0.2s ease;
        }

        .pixel-card-link:hover,
        .pixel-card-link:focus-visible {
          background: #FF2B12;
          border-color: #171717;
          color: #fff;
          transform: translateY(-1px);
          outline: none;
        }

        @media (max-width: 767px) {
          .pixel-card-number {
            min-width: 48px;
            min-height: 36px;
            font-size: 0.85rem;
          }
        }
      `}</style>

      <article
        className={`pixel-service-card ${className}`.trim()}
        style={style}
        data-reveal
      >
        <div className="pixel-card-header">
          <span className="pixel-card-number">{number}</span>
        </div>

        <h3 className="pixel-card-title">{title}</h3>
        <p className="pixel-card-description">{description}</p>

        <div className="pixel-card-divider" aria-hidden="true" />

        <ul className="pixel-card-list">
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <div className="pixel-card-footer">
          <Link to="/contact" aria-label={`Learn more about ${title}`} className="pixel-card-link">
            Learn More
          </Link>
        </div>
      </article>
    </>
  );
}
