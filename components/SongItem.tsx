"use client";

import { Song } from "@/types";

interface SongItemProps {
  data: Song;
  onClick: () => void;
}
const SongItem: React.FC<SongItemProps> = ({ data, onClick }) => {
  return <div>song item</div>;
};

export default SongItem;
