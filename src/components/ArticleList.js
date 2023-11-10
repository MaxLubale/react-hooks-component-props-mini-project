import React from "react";
import Article from "./Article";
function ArticleList() {
    const posts = [
       { id: 1, },
       { id: 2, },
       { id: 3, }
    ];
   
    return (
       <main>
         {posts.map((post) => (
           <Article key={post.id} post={post} />
         ))}
       </main>
    );
   }

   export default ArticleList;