function encodeCompactTimestamp(cmd, t0, t1) {
  // Kompres timestamp menjadi 4 digit terakhir (ms level)
  const t0_mod = t0 % 10000;       // hanya 4 digit terakhir
  const t1_mod = t1 % 10000;

  // Gabungkan sebagai string dengan separator "|"
  return `${cmd}|${t0_mod}|${t1_mod}`;
}

export default encodeCompactTimestamp;