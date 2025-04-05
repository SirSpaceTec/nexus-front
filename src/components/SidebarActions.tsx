// components/SidebarActions.tsx
import CommentButton from "./CommentButton";
import CrystalReactions from "./CrystalReactions";
import RepostButton from "./RepostButton";
import ShareButton from "./ShareButton";
// import CommentButton from "./CommentButton";
// import RepostButton from "./RepostButton";
// import ShareButton from "./ShareButton";

export default function SidebarActions() {
  return (
    <div className="absolute right-4 bottom-24 flex flex-col items-center gap-5 pointer-events-auto">
      <CrystalReactions />
      <CommentButton />
      <RepostButton />
      <ShareButton />
    </div>
  );
}


