import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Repos from "./Repo";


export default class Table extends Component {
  render() {
    // console.log(this.props.reposInfo.id);

    const {reposInfo , delrepo} =this.props;



    return (
  
      
      <div className="mt-3">

       <table className='table'>

       <thead>
   <tr>
     <th scope="col">Number </th>
     <th scope="col">Title</th>
     <th scope="col">Repos Status</th>
     <th scope="col">is Private</th>
     <th scope="col">check</th>
     <th scope="col">Language</th>
     <th scope="col">Delete</th>
   </tr>
 </thead>
      
       <tbody>
      
      
      
       {reposInfo.map( (repo , index) => {
         return( <Repos 
         key={repo.id}
         id={index+1}
         title={repo.title}
          status={repo.status}
          isPrivate = {repo.isPrivate}
          language={repo.language}
          delrepo={delrepo} 
          />
         )
         
       } 
       )}
       
      </tbody>
       </table>
     </div>

    );
  }
}
