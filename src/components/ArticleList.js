import Article from "./Article";

function ArticleList({posts}){
  const post = posts.map(name =>{
return <Article 
key={name.id}
 title={name.title}
  date={name.date} 
   preview={name.preview} 
   minutes={name.minutes}
   />
  })

  return(
    <>
    <main >
    
         {post}
        
    </main>
    </>
  )
}
export default ArticleList