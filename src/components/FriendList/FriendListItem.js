
export default function FriendListItem({id, isOnline,avatar,name}) {
    
   
               return( 
                   < li className="item" key={id} >
                       <span class="status">{isOnline}</span>
                    <img class="avatar" src={avatar} alt="User avatar" width="48" />
                       <p class="name">{name}</p>
                     </li > 
                )
          
        
    }

// < li className="item" key={id} ></li >



{/* <li class="item">
  <span class="status"></span>
  <img class="avatar" src="" alt="User avatar" width="48" />
  <p class="name"></p>
</li> */}