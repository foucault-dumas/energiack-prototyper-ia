"use client";

import { ESM } from "@/lib/content";
import { useContent } from "@/lib/i18n";

/**
 * The 100% local setup, drawn for a black slide: the model server (brain), the coding agent
 * (hands) and the drive, all inside one computer. Brand colours sit on black, never on each other.
 */
export function LocalDiagram() {
  const { LOCAL } = useContent();
  const d = LOCAL.diagram;
  const box = (x: number, y: number, w: number, h: number, fill: string) => (
    <rect x={x} y={y} width={w} height={h} fill={fill} />
  );
  return (
    <svg
      viewBox="0 0 1200 560"
      className="block h-full max-h-full w-full"
      style={{ fontFamily: "'Die Grotesk B', Arial, Helvetica, sans-serif" }}
      role="img"
      aria-label={`${d.frame} : ${d.brainTools} ↔ ${d.handsTools} ↔ ${d.disk}`}
    >
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill={ESM.clair} />
        </marker>
      </defs>

      {/* the computer */}
      <rect x="8" y="8" width="1184" height="544" fill="none" stroke={ESM.clair} strokeWidth="2" strokeDasharray="10 8" />
      <text x="36" y="56" fill={ESM.clair} fontSize="26" fontWeight="500">
        {d.frame}
      </text>

      {/* 1 · brain */}
      {box(30, 90, 360, 190, ESM.vert)}
      <text x="56" y="132" fill={ESM.noir} fontSize="22">{d.brain}</text>
      <text x="56" y="188" fill={ESM.noir} fontSize="32" fontWeight="500">{d.brainTools}</text>
      <text x="56" y="232" fill={ESM.noir} fontSize="19">{d.brainSub}</text>

      {/* 2 · hands */}
      {box(810, 90, 360, 190, ESM.lavande)}
      <text x="836" y="132" fill={ESM.noir} fontSize="22">{d.hands}</text>
      <text x="836" y="188" fill={ESM.noir} fontSize="32" fontWeight="500">{d.handsTools}</text>
      <text x="836" y="232" fill={ESM.noir} fontSize="19">{d.handsSub}</text>

      {/* hands → brain, brain → hands */}
      <line x1="805" y1="150" x2="398" y2="150" stroke={ESM.clair} strokeWidth="3" markerEnd="url(#arrow)" />
      <text x="600" y="134" fill={ESM.clair} fontSize="19" textAnchor="middle">① {d.a1}</text>
      <line x1="395" y1="225" x2="802" y2="225" stroke={ESM.clair} strokeWidth="3" markerEnd="url(#arrow)" />
      <text x="600" y="258" fill={ESM.clair} fontSize="19" textAnchor="middle">② {d.a2}</text>

      {/* 3 · drive */}
      {box(810, 360, 360, 170, ESM.clair)}
      <text x="836" y="402" fill={ESM.noir} fontSize="22" fontWeight="500">{d.disk}</text>
      <text x="836" y="452" fill={ESM.noir} fontSize="19">📁 {d.file1}</text>
      <text x="836" y="492" fill={ESM.noir} fontSize="19">📊 {d.file2}</text>

      {/* hands ↔ drive */}
      <line x1="990" y1="288" x2="990" y2="352" stroke={ESM.clair} strokeWidth="3" markerStart="url(#arrow)" markerEnd="url(#arrow)" />
      <text x="972" y="327" fill={ESM.clair} fontSize="19" textAnchor="end">③ {d.a3}</text>

      {/* nothing goes out */}
      <rect x="30" y="380" width="360" height="110" fill="none" stroke={ESM.clair} strokeWidth="2" strokeDasharray="4 6" />
      <line x1="60" y1="410" x2="90" y2="460" stroke={ESM.orange} strokeWidth="5" />
      <line x1="90" y1="410" x2="60" y2="460" stroke={ESM.orange} strokeWidth="5" />
      <text x="110" y="443" fill={ESM.clair} fontSize="22" fontWeight="500">{d.internet}</text>
    </svg>
  );
}
