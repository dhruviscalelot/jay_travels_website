import { TaxiSprite } from "./TaxiSprite";

/**
 * Full-width driving lane pinned to the bottom of the hero.
 * The taxi drives left→right with a subtle 3D tilt/bob and headlight glow.
 * Purely CSS-driven — no JS animation loop, no WebGL.
 */
export function HeroTaxiLane() {
  return (
    <div className="taxi-hero-lane" aria-hidden="true">
      {/* moving road stripes */}
      <div className="taxi-hero-road">
        <div className="taxi-hero-stripes" />
      </div>

      {/* headlight cone travels with the taxi */}
      <div className="taxi-hero-driver">
        <div className="taxi-hero-headlight" />
        <div className="taxi-hero-bob">
          <TaxiSprite className="taxi-hero-sprite" />
        </div>
      </div>
    </div>
  );
}
