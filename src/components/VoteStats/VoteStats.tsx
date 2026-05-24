import type { Votes } from "../../types/votes";
import styles from "./VoteStats.module.css";

interface VoteStatsProps {
  votes: Votes;
  totalVotes: number;
  positiveRate: number;
}

export default function VoteStats({
  votes,
  totalVotes,
  positiveRate,
}: VoteStatsProps) {
  const stats = [
    { label: "Good", value: votes.good },
    { label: "Neutral", value: votes.neutral },
    { label: "Bad", value: votes.bad },
    { label: "Total", value: totalVotes },
    { label: "Positive", value: `${positiveRate}%` },
  ];

  return (
    <div className={styles.container}>
      {stats.map(({ label, value }) => (
        <p key={label} className={styles.stat}>
          {label}: <strong>{value}</strong>
        </p>
      ))}
    </div>
  );
}
