// frontend/src/components/StarRating.jsx
import React from 'react';

export default function StarRating({ value = 0, outOf = 5 }) {
  const stars = [];
  for (let i = 1; i <= outOf; i++) {
    const full = i <= Math.round(value);
    stars.push(
      <span key={i} aria-hidden="true" style={{color: full ? '#f59e0b' : '#e5e7eb', fontSize: 18}}>
        ★
      </span>
    );
  }
  return <span title={`${value} / ${outOf}`}>{stars}</span>;
}
