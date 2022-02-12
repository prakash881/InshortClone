import React from "react";
import Header from "./components/Header/Header";
import Maincontainer from "./components/mainContainer/Maincontainer";

import { useEffect ,useState} from 'react';

import NewsFooter from "./components/footer/NewsFooter";

import Loadpage from "./pagination/Loadpage";
import axios from "axios";
import { Container } from "@material-ui/core";

function App() {
 const [news, setnews] = useState([])
 const [loadmore,setloadmore]= useState(20);
const  [category, setcategory]=useState('general')
const [totalResults, settotalResults]=useState()


    async function newsF(){

     const {data} = await axios(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&pageSize=${loadmore}&apiKey=ee33dce4ef1e4cd2ba3af68fd3e5d7c4&totalResults=${totalResults}`)
    
      //  console.log(data.articles)
     setnews(data.articles)
     settotalResults(data.totalResults)
     
       
    }


   
    useEffect(() => {
    
      newsF()
   // eslint-disable-next-line
  }, [category,totalResults, loadmore])
   
  
   console.log(news) 


  return (
   <>
   <div>
   <Header setcategory={setcategory}/>
   
    <div  style={{paddingTop:'60px'}}>
    
    {news && news.map((val,i)=>{

      return ( <Maincontainer key={i} title={val.title} author={val.author} description={val.description}  url={val.url} imgurl={val.urlToImage} publishedAt={val.publishedAt} source={val.source.name} />)


          })}
          </div>
         
          <Container align='center' > <Loadpage setloadmore={setloadmore} loadmore={loadmore} totalResults={totalResults} /></Container>  
</div>

          
         
          <NewsFooter />  
  </>
  );
}

export default App;
