"use client";

import { PostOwner } from "@/components/PostOwner";
import { Comment } from "@/components/Comment";
import { comments } from "@/libs/comments";

export default function HomePage() {
  let allcomment;
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >
        <PostOwner
          name="Theeraphan Phanwattanasin"
          id="650610773"
          img="/profileImages/bossq2.png"
        />
        {
          (allcomment = comments.map((com) => (
            <Comment
              userImagePath={com.userImagePath}
              username={com.username}
              s
              commentText={com.commentText}
              likeNum={com.likeNum}
              replies={com.replies}
              key={com.username}
            />
          )))
        }
      </div>
    </div>
  );
}
